import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl

  console.log('middleware ok')
  if (url.pathname === '/resume' && hostname === 'ffzanini.dev') {
    const subdomainUrl = new URL(request.url)
    subdomainUrl.hostname = 'resume.ffzanini.dev'
    return NextResponse.redirect(subdomainUrl)
  }

  if (hostname.startsWith('resume')) {
    return NextResponse.rewrite(new URL('/resume', request.url))
  }

  return NextResponse.next()
}
