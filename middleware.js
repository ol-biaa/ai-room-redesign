import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware();

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth()

  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting

    return redirectToSignIn()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

// import { withClerkMiddleware } from '@clerk/nextjs/server';

// export default withClerkMiddleware((req, res) => {
//   const { userId } = req.auth;

//   // Your logic for protected routes
//   if (!userId) {
//     return res.redirect('/sign-in');
//   }

//   return res.next();
// });
// export const config = {
//     matcher: [
//       // Skip Next.js internals and all static files, unless found in search params
//       '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//       // Always run for API routes
//       '/(api|trpc)(.*)',
//     ],
//   };
