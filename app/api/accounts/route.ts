import type { NextRequest, NextResponse } from "next/server";
import { IgApiClient, IgCheckpointError } from "instagram-private-api";
import inquirer from "inquirer";
import Bluebird from "bluebird";


// import 



export async function GET(req : NextRequest, res : NextResponse){
       const ig = new IgApiClient();
        let { IG_PASSWORD, IG_USERNAME, IG_PROXY } = process.env;
        let { 'testing' : search, 10 : limit, 10000 : followers } = req.query;

        ig.state.generateDevice(IG_USERNAME!);
        // ig.state.proxyUrl = IG_PROXY;
        Bluebird.try(async () => {
            const auth = await ig.account.login(IG_USERNAME!, IG_PASSWORD!);
            let searchResults = await ig.search.users('testing');

            let withFollowersCount = await Promise.all([... search.slice(0, 5)].map(async (searchResult) => {
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