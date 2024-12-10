// import { SignIn } from '@clerk/nextjs';

// export default function SignInPage() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <SignIn fallbackRedirectUrl="/dashboard" />
//     </div>
//   );
// }

import { useUser } from "@clerk/nextjs";

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
