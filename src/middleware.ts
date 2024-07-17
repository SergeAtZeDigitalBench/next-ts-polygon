import { NextResponse, type NextRequest } from 'next/server'

import { COOKIE_NAME } from '@/constants'

export async function middleware(request: NextRequest) {
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')
  const isAuthenticated = request.cookies.has(COOKIE_NAME)
  const isHomepage = request.nextUrl.pathname === '/'

  if (isDashboard && !isAuthenticated) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  if (isHomepage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
}
