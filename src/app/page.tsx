'use client';

import React, { useState, useEffect } from 'react';
import { games, getValidGames } from '../lib/games';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GameEmbed from '@/components/GameEmbed';
import Image from 'next/image';
// Removed dynamic import

// Use client component wrapper
import ClientSearchBar from '../components/ClientSearchBar';

// Use valid game data
export default function Home() {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  
  // Use valid game data
  const validGames = getValidGames();
  
  // Get highest rated games as featured games
  const featuredGames = [...validGames].sort((a, b) => b.rating - a.rating).slice(0, 20);
  
  // Get most played games
  const popularGames = [...validGames].sort((a, b) => b.playCount - a.playCount).slice(0, 10);
  
  // Collect all unique categories
  const allCategories = Array.from(new Set(validGames.flatMap(game => game.categories)));
  
  // Handle game click event
  const handleGameClick = (gameId: string) => {
    setSelectedGame(gameId === selectedGame ? null : gameId);
  };
  
  // Close game
  const closeGame = () => {
    setSelectedGame(null);
  };
  
  // Get current selected game
  const currentGame = selectedGame ? validGames.find(g => g.id === selectedGame) : null;
  
  return (
    <div className={`min-h-screen bg-gradient-to-b from-black to-gray-900 text-white ${selectedGame ? 'overflow-hidden' : ''}`}>
      {/* Floating game iframe */}
      {selectedGame && currentGame && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex justify-between items-center bg-gray-800 p-3">
            <h3 className="text-lg font-bold text-white">{currentGame.title}</h3>
            <button 
              onClick={closeGame}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 relative">
            <GameEmbed 
              gameUrl={currentGame.url}
              title={currentGame.title}
            />
          </div>
        </div>
      )}

      {/* Top navigation bar */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-500">Online<span className="text-white">Games.wiki</span></div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/games" className="hover:text-amber-500 transition-colors">All Games</Link>
            <Link href="/categories" className="hover:text-amber-500 transition-colors">Categories</Link>
            <Link href="/leaderboard" className="hover:text-amber-500 transition-colors">Leaderboard</Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 搜索栏部分 - 紧跟导航栏 */}
      <section className="pt-24 px-4 pb-6">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            <ClientSearchBar />
          </div>
        </div>
      </section>

      {/* Featured games - 移到最上方 */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Popular Games</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Check out these highly rated games that players are loving right now
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredGames.map((game, index) => (
              <Link 
                key={game.id} 
                href={`/games/${game.id}`}
                className="cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg group hover:scale-105 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gray-800 overflow-hidden">
                    <Image 
                      src={game.imageUrl}
                      alt={game.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 4}
                      unoptimized={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <div className="text-amber-400 flex items-center text-sm">
                      <span className="mr-1">★</span>
                      <span>{game.rating.toFixed(1)}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-400">{game.playCount.toLocaleString()} players</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {game.categories.map(category => (
                        <span key={category} className="text-xs px-2 py-1 bg-amber-500/20 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold mt-2 text-center">{game.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/games">
              <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-2 rounded-full transition-colors">
                View All Games
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Most played games - 同样放在上部 */}
      <section className="py-8 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Most Played Games</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Jump into the action with these popular titles that thousands of players are enjoying
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularGames.map((game) => (
              <Link 
                key={game.id} 
                href={`/games/${game.id}`}
                className="rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 relative cursor-pointer"
              >
                <div className="absolute top-2 right-2 z-10">
                  <div className="bg-amber-500 text-black text-xs rounded-full px-2 py-1 font-bold">
                    {formatPlayCount(game.playCount)}
                  </div>
                </div>
                <div className="bg-gray-700 h-40 overflow-hidden">
                  <Image 
                    src={game.imageUrl}
                    alt={game.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized={true}
                  />
                </div>
                <div className="p-3 bg-gray-800">
                  <h3 className="font-bold text-base truncate">{game.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center text-amber-500 text-xs">
                      <span className="mr-1">★</span>
                      <span>{game.rating.toFixed(1)}</span>
                    </div>
                    <div className="text-xs text-gray-400">{game.categories[0]}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero section - 移到游戏展示之后 */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Discover the Best Online Games
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore thousands of free online games, play instantly without downloads, and challenge players worldwide
          </p>
          
          <div>
            <Link href="/games">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Start Exploring
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Game categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Game Categories</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Browse games by category to find your favorite type of gameplay
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allCategories.slice(0, 8).map((category) => (
              <Link href={`/categories/${category}`} key={category}>
                <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-amber-500 hover:text-black transition-colors">
                  <h3 className="font-bold text-lg">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/categories">
              <button className="text-amber-500 hover:text-amber-400 flex items-center mx-auto gap-1">
                View All Categories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Why Choose OnlineGames.wiki</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            We strive to provide the best online gaming experience for everyone
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-500 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Play</h3>
              <p className="text-gray-400">No downloads required. Play all our games directly in your browser, anytime, anywhere.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-500 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-400">All our games are carefully selected and tested to ensure a safe and enjoyable experience.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-500 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
              <p className="text-gray-400">We constantly add new games to our collection, ensuring you'll always find something fresh to play.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Format player count
function formatPlayCount(count: number): string {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  }
  return count.toString();
}
