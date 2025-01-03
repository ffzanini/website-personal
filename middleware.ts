import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  if (hostname === 'resume.ffzanini.dev') {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/resume', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/resume'],
}
