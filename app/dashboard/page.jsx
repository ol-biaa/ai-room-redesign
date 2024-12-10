// import { UserButton } from '@clerk/nextjs'
// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
//       Dashboard 

//       <UserButton/>
//     </div>
//   )
// }

// export default Dashboard


import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const { user } = useUser(); // Clerk hook to access user data

  if (!user) {
    return <div>Loading...</div>; // Show loading state if user data isn't available yet
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {user.firstName}!</h1>
      {/* Your dashboard content */}
    </div>
  );
}
