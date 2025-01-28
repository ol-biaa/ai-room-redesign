// "use client"

// import axios from 'axios';
// import { useUser } from '@clerk/nextjs';
// import React, { useEffect } from 'react'

// function Provider({children}) {

//     //check verified user


//     const {user} = useUser();
//     useEffect(() => {
//         user&&VerifyUser();
//     }, [user]);
    
//     /**
//      * Verify user
//      */
//     const VerifyUser=async()=>{
//       const dataResult = await axios.post('/api/verify-user', {
//         user:user
//       });

//       console.log(dataResult.data)
//     }

//     try {
//       let dataResult = await axios.post("/api/verify-user", {
//           user: user,
//       });
//       console.log(dataResult.response.data);
  
//   } catch (error) {
//       console.error(error.response.data);
//   }
//   return (
//     <div>
//       {/* keep as a client */}
//       {children} 
//     </div>
//   )
// }

// export default Provider


// "use client";

// import axios from "axios";
// import { useUser } from "@clerk/nextjs";
// import React, { useEffect } from "react";

// function Provider({ children }) {
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       VerifyUser();
//     }
//   }, [user]);

//   /**
//    * Verify user
//    */
//   const VerifyUser = async () => {
//     try {
//       const dataResult = await axios.post("/api/verify-user", {
//         user: user,
//       });
//       console.log(dataResult.data); // Correct access to the response data
//     } catch (error) {
//       console.error(error.response?.data || error.message); // Handle potential undefined response
//     }
//   };

//   return <div>{children}</div>;
// }

// export default Provider;



"use client";

import axios from "axios";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  /**
   * Verify user
   */
  const VerifyUser = async () => {
    try {
      const dataResult = await axios.post("/api/verify-user", {
        user: user,
      });
      console.log(dataResult.data); // Correct access to response data
    } catch (error) {
      console.error(error.response?.data || error.message); // Handle errors gracefully
    }
  };

  return <div>{children}</div>;
}

export default Provider;
