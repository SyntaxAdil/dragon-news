import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";

export async function proxy(request) {
   const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up");

  const isProtectedPage = pathname.startsWith("/news");

  if (!session && isProtectedPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/news/:path*","/sign-in","/sign-up"]
};
