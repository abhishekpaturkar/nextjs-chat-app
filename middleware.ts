import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isDashboardRoute = createRouteMatcher(["/(.*)"])

export default clerkMiddleware((auth, req) => {
  // Restrict dashboard routes to signed in users
  if (isDashboardRoute(req)) auth().protect()
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
