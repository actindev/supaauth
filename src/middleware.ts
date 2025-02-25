import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const protectedRoutes = [
  '/dashboard',
  '/dashboard/*'
]

export async function middleware(request: NextRequest) {
  // Skip middleware for error routes
  if (request.nextUrl.pathname.startsWith('/error')) {
    return NextResponse.next()
  }

  // Check for required environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    // Create a URL for the error page
    const errorUrl = new URL('/error', request.url)
    errorUrl.searchParams.set('type', 'env_missing')
    return NextResponse.redirect(errorUrl)
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  
  const { data: { user } } = await supabase.auth.getUser()

  const isProtectedRoute = protectedRoutes.some(route => {
    if (route.endsWith('*')) {
      return request.nextUrl.pathname.startsWith(route.slice(0, -2))
    }
    return request.nextUrl.pathname === route
  })

  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/signin';
    url.searchParams.set('redirectTo', request.nextUrl.pathname);
    
    // Create a redirect response
    const redirectResponse = NextResponse.redirect(url);
    
    // Copy ALL cookies from supabaseResponse to redirectResponse
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
    });
    
    return redirectResponse;
  }

  // IMPORTANT: You must return the supabaseResponse object as is
  // if not redirecting or creating a new response
  return supabaseResponse
}

export const config = {
  matcher: [
    // Match all paths except static files and error pages
    '/((?!_next/static|_next/image|favicon.ico|error|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}