import { UserButton } from '@clerk/nextjs';
import { useUser } from "@clerk/nextjs";
import Listing from './_components/Listing';
import React from 'react'

function Dashboard() {
  return (
    <div>
      <Listing/>
    </div>
  )
}

export default Dashboard
