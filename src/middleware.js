import { NextResponse } from 'next/server';
async function getUserRoleFromSessionToken(sessionToken) {
  try {
    const response = await fetch('https://hikmet-app.onrender.com/me', {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    const data = await response.json();

    return data.role;
  } catch (error) {
    console.error('Failed to get user role', error);
    return null;
  }
}
export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get('access')?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // const userRole = await getUserRoleFromSessionToken(sessionToken);

  // if (userRole === 'VOLUNTEER') {
  //   return NextResponse.redirect(new URL('/volunteer', request.url));
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: '/',
};
