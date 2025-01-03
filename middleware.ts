import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  const isResumeSubdomain = hostname === 'resume.ffzanini.dev'

  if (isResumeSubdomain && pathname === '/') {
    return NextResponse.rewrite(new URL('/resume', request.url))
  }

  if (hostname === 'ffzanini.dev' && pathname === '/resume') {
    return NextResponse.redirect('https://resume.ffzanini.dev')
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/resume', '/'],
}
