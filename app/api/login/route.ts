import type { NextRequest, NextResponse } from "next/server";
import { IgApiClient, IgCheckpointError } from "instagram-private-api";
import inquirer from "inquirer";
import Bluebird from "bluebird";
import { cookies } from "next/headers";


export async function POST(req : NextRequest, res : NextResponse){
    let cookieStore = cookies();
    let ig = new IgApiClient();
    const query = req.nextUrl.searchParams;

    const search = query.get('search');
    const limit = query.get('limit');



    // if(cookieStore.get('ig')){
    //     ig = cookieStore.get('ig');
    // } else {
    //     ig = new IgApiClient();
    //     cookieStore.set('ig', JSON.stringify(ig));
    // }

    
}