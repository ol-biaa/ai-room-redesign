"use client"

import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
// import { UserDetailContext } from "@/app/_context/UserDetailContext";


function Header() {
    // const{userDetail,setUserDetail} = useContext(userDetailContext);
  return ( 
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {/* since logo is in the public folder, next.js can access it directly */}
        <Image src={"/logo.svg"} width={40} height={40} />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
<Button variant = "ghost" className="rounded-full text-primary ">Buy More Credits</Button>
      <div className="flex gap-7 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full"> 
            <Image src={'/star.png'} width ={20} height={20}/>
            {/* <h2>{userDetail?.credit}</h2> */}
        </div>
        <UserButton/>
      </div>

   </div>
  );
}

export default Header;
