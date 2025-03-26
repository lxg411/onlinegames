import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { games } from '@/lib/games';

// This middleware will intercept all requests
export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    
    // Check if it's a game detail page request
    if (pathname.startsWith('/games/') && pathname.split('/').length === 3) {
      // Extract game ID
      const gameId = pathname.split('/')[2];
      
      // Check if the game ID is valid
      const gameExists = games.some(game => game.id === gameId);
      
      // If the game ID is invalid, redirect to 404 page
      if (!gameExists) {
        return NextResponse.redirect(new URL('/404', request.url));
      }
    }
    
    // For other requests, continue normal processing
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    // 发生错误时仍然允许请求继续
    return NextResponse.next();
  }
}

// Configure which paths the middleware applies to
// 限制为仅处理需要验证的游戏路径
export const config = {
  matcher: ['/games/:path*'],
}; 