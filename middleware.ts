// middleware.ts (루트에 위치)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/ko'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/((?!api|_next|favicon.ico).*)'], // 리디렉션할 경로 설정
}