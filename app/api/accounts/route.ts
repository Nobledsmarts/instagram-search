// import { useRouter } from "next/navigation";

import type { NextRequest, NextResponse } from "next/server";

// import { NextApiRequest } from "next";

export async function GET(req : NextRequest, res : NextResponse){
    // const {query} = req;

    console.log(req.nextUrl.searchParams.get('limit'));
    const accounts = [
        {
            username : "noble",
        },
        {
            username : "frank",
        },
    ];

    return new Response(JSON.stringify(accounts));
}