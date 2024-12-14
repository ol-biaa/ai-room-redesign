"use client"

import axios from 'axios';
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
    const VerifyUser=async()=>{
      const dataResult = await axios.post('/api/verify-user', {
        user:user
      });

      console.log(dataResult.data)
    }
  return (
    <div>
      {/* keep as a client */}
      {children} 
    </div>
  )
}

export default Provider
