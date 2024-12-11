"use client"

import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'

function Provider({children}) {

    //check verified user


    const {user} = useUser();
    useEffect(() => {
        user&&VerifyUser();
    }, [user]);
    
    /**
     * Verify user
     */
    const VerifyUser=()=>{

    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
