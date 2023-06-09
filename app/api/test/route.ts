import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// import { cookies } from "next/dist/client/components/headers";


export async function GET(req : NextRequest, res : NextResponse){
    let  cookieStore = cookies();
    let app;
    
    // console.log(cookies().has('app'));

    if(cookieStore.get('app')){
        app = cookieStore.get('app');
        console.log('has cookie');
    } else {
        app = {
            name : 'noble'
        };
        cookieStore.set('app', JSON.stringify(app));
    }
    
    console.log(app?.name);
    return new Response(JSON.stringify({}));
}