"use client"
import { Button } from "@/components/ui/button";
import EmptyState from "./EmptyState";
import { useUser } from "@clerk/nextjs"; // Replace 'react' with your auth provider
import React, { useState } from "react"; // Add useState import
import Link from "next/link";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUsersroomList] = useState([]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Link href={'/dashboard/create-new'}>
        <Button>+ Redesign Room</Button>
        </Link>
      </div>

      {userRoomList?.length == 0 ? <EmptyState /> : <div>{/* Listing */}</div>}
    </div>
  );
}

export default Listing;
