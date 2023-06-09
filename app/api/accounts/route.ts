import type { NextRequest, NextResponse } from "next/server";
import { IgApiClient, IgCheckpointError } from "instagram-private-api";
import inquirer from "inquirer";
import Bluebird from "bluebird";
import { cookies } from "next/headers";


export async function GET(req : NextRequest, res : NextResponse){
        let cookieStore = cookies();
        let ig:any;

        if(cookieStore.get('ig')){
            ig = cookieStore.get('ig');
        } else {
            ig = new IgApiClient();
            cookieStore.set('ig', JSON.stringify(ig));
        }
        // const ig = new IgApiClient();
        let { IG_PASSWORD, IG_USERNAME, IG_PROXY } = process.env;
        const query = req.nextUrl.searchParams;
        const search = query.get('search');
        const limit = query.get('limit');
        const followers = query.get('followers');

        ig.state.generateDevice(IG_USERNAME!);
        // ig.state.proxyUrl = IG_PROXY;
        Bluebird.try(async () => {
            const auth = await ig.account.login(IG_USERNAME!, IG_PASSWORD!);
            let searchResults = await ig.search.users('testing');

            let withFollowersCount = await Promise.all([... searchResults.slice(0, 5)].map(async (searchResult) => {
                let accountInfo = await ig.user.info(searchResult.pk);
                return {
                    ...searchResults,
                    follower_count : accountInfo.follower_count
                }
            }));

            let filterFollowersCount = withFollowersCount.filter((account) => {
                return account.follower_count > 10000;
            });

            console.log(filterFollowersCount);
        })
        .catch(IgCheckpointError, async () => {
            console.log(ig.state.checkpoint); // Checkpoint info here
            await ig.challenge.auto(true); // Requesting sms-code or click "It was me" button
            console.log(ig.state.checkpoint); // Challenge info here
            const { code } = await inquirer.prompt([
                {
                    type: "input",
                    name: "code",
                    message: "Enter code",
                },
            ]);
            console.log(await ig.challenge.sendSecurityCode(code));
        })
        .catch((e) => console.log("Could not resolve checkpoint:", e, e.stack));

    // return new Response(JSON.stringify(accounts));
}