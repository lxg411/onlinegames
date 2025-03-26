'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
  aspectRatio?: string;
}

export default function GameEmbed({ gameUrl, title, aspectRatio = '56.25%' }: GameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Reset state when URL changes
    setIsLoading(true);
    setHasError(false);
  }, [gameUrl]);

  useEffect(() => {
    // 监听全屏变化事件
    const handleFullScreenChange = () => {
      const isDocFullScreen = 
        document.fullscreenElement || 
        (document as any).webkitFullscreenElement || 
        (document as any).msFullscreenElement;
      
      setIsFullScreen(!!isDocFullScreen);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleFullScreen = () => {
    if (gameContainerRef.current) {
      if (gameContainerRef.current.requestFullscreen) {
        gameContainerRef.current.requestFullscreen();
      } else if ((gameContainerRef.current as any).webkitRequestFullscreen) {
        (gameContainerRef.current as any).webkitRequestFullscreen();
      } else if ((gameContainerRef.current as any).msRequestFullscreen) {
        (gameContainerRef.current as any).msRequestFullscreen();
      }
    }
  };

  // Get current full URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Build the correct URL based on the game provider
  let completeGameUrl = gameUrl;
  
  // For GameDistribution games, add the referrer parameter
  if (gameUrl.includes('gamedistribution.com')) {
    completeGameUrl = `${gameUrl}?gd_sdk_referrer_url=${encodeURIComponent(currentUrl)}`;
  }
  
  // For Famobi games, use the direct URL
  // Famobi games require special handling for iframe embedding
  if (gameUrl.includes('famobi.com')) {
    completeGameUrl = gameUrl;
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800 game-container" ref={gameContainerRef}>
      {/* Full Screen Button - 只在非全屏模式下显示 */}
      {!isFullScreen && (
        <button 
          onClick={handleFullScreen}
          className="absolute top-2 right-2 z-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-1 px-3 rounded-full text-xs font-bold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          MAKE GAME FULL SCREEN
        </button>
      )}

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-300">Loading game...</p>
          </div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <div className="text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Game Loading Failed</h3>
            <p className="text-gray-400 mb-4">Unable to load the game. Please try again later.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-lg"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={completeGameUrl}
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        onLoad={handleLoad}
        onError={handleError}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}

// Add necessary CSS
// 使用style标签动态添加CSS
if (typeof document !== 'undefined') {
  // 检查是否已经存在自定义样式
  const existingStyle = document.getElementById('game-embed-styles');
  
  if (!existingStyle) {
    const styleElement = document.createElement('style');
    styleElement.id = 'game-embed-styles';
    styleElement.innerHTML = `
      .game-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        min-height: 400px;
      }
      
      @media (max-width: 768px) {
        .game-container {
          min-height: 300px;
        }
      }

      /* 全屏模式下的样式 */
      .game-container:fullscreen {
        padding: 0;
        background: black;
      }
      
      .game-container:fullscreen iframe {
        width: 100vw;
        height: 100vh;
      }
      
      /* 给浏览器前缀的全屏样式 */
      .game-container:-webkit-full-screen {
        padding: 0;
        background: black;
      }
      
      .game-container:-webkit-full-screen iframe {
        width: 100vw;
        height: 100vh;
      }
      
      .game-container:-ms-fullscreen {
        padding: 0;
        background: black;
      }
      
      .game-container:-ms-fullscreen iframe {
        width: 100vw;
        height: 100vh;
      }
    `;
    document.head.appendChild(styleElement);
  }
} 