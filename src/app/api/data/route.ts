import { NextResponse } from "next/server"


export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
	if (username) {
		try {
			const res = await fetch(`https://torre.bio/api/bios/${username}`, 
			{headers: {
				'Content-Type': 'application/json',
				}
			})
			const data= await res.json()
			return NextResponse.json({ data });
		}
		catch (err) {
			console.log(err)
			}
		} else {
			return NextResponse.json({ message: 'Username is required' });
		}
		
}
