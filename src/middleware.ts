import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  
  const cookie = req.cookies.get('accessToken'); 
  if (!cookie) {
    return NextResponse.redirect(new URL('/pages/login', req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/pages/posts/:path*'], 
}
