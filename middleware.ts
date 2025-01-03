import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  if (hostname === 'resume.ffzanini.dev' && pathname === '/') {
    return NextResponse.redirect(new URL('/resume', request.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
