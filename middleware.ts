import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  // Detecta subdomínio
  if (hostname.startsWith('resume')) {
    return NextResponse.rewrite(new URL('/resume', request.url))
  }

  return NextResponse.next()
}
