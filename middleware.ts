import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { securityHeaders, rateLimiter } from '@/lib/security'

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next()

  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    )
  }

  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    if (!rateLimiter.isAllowed(ip, 100, 60000)) { // 100 requests per minute
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  // Rate limiting for appointment booking
  if (request.nextUrl.pathname.includes('appointment')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    if (!rateLimiter.isAllowed(ip, 5, 300000)) { // 5 requests per 5 minutes
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

