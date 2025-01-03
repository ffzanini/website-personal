import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  // Verifica se está no subdomínio "resume.ffzanini.dev"
  if (hostname === 'resume.ffzanini.dev' && pathname === '/') {
    // Reescreve a requisição para carregar a rota "/resume"
    return NextResponse.rewrite(new URL('/resume', request.url))
  }

  // Continua normalmente para outras rotas
  return NextResponse.next()
}

// Configuração opcional para definir em quais rotas o middleware será aplicado
export const config = {
  matcher: ['/'], // Aplica o middleware apenas na raiz
}
