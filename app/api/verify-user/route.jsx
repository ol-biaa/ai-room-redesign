import { db } from "@/config/db";
import { Users } from "@/config/schema"; // Import your Users model
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';


export async function POST(req) {
  const { user } = await req.json();

  try {
    // Check if user already exists
    const userInfo = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

    console.log("User:", userInfo);

    //If not will add new user to DB

    if(!userInfo?.length==0){
        const SaveResult= await db.insert(Users)
        .values({
            name:user?.fullName,
            email:user?.primaryEmailAddress.emailAddress,
            imageUrl:user?.imageUrl,
        }).returning({Users})

        return NextResponse.json({'result':SaveResult[0]})
    }

    return NextResponse.json({'result':userInfo[0]})
// if not will add new user to db
  }  catch (e) {
     return NextResponse.json({ error : e });

  }

}

