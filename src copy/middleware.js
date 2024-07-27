import { NextResponse } from "next/server";
async function getUserRoleFromSessionToken(sessionToken) {
  try {
    const response = await fetch(
      "https://giveme-backend-2.onrender.com/user/me",
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      }
    );
    const data = await response.json();

    return data.role;
  } catch (error) {
    console.error("Failed to get user role", error);
    return null;
  }
}
export async function middleware(request) {
  // const { pathname } = request.nextUrl;
  // if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
  //   return NextResponse.next();
  // }
  // const sessionToken = request.cookies.get("access")?.value;
  // if (!sessionToken) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // const userRole = await getUserRoleFromSessionToken(sessionToken);
  // if (userRole === 'volunteer') {
  //   return NextResponse.redirect(new URL('/volunteer', request.url));
  // } else {
  //   return NextResponse.redirect(new URL('/user', request.url));
  // }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
