import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { IgApiClient, IgCheckpointError } from "instagram-private-api";
import inquirer from "inquirer";
import Bluebird from "bluebird";
import { cookies } from "next/headers";


export async function POST(req : NextRequest){
    let cookieStore = cookies();
    let ig = new IgApiClient();
    let credentials = await req.json();
    const login = credentials.login;
    const password = credentials.password;

    return NextResponse.json({ password, login });
    // if(cookieStore.get('ig')){
    //     ig = cookieStore.get('ig');
    // } else {
    //     ig = new IgApiClient();
    //     cookieStore.set('ig', JSON.stringify(ig));
    // }

    
}