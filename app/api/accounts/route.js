export async function GET(request){
    // console.log(request);
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