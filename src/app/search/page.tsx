'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { games, Game } from '../../lib/games';
import SearchBar from '../../components/SearchBar';
import Image from 'next/image';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  
  useEffect(() => {
    if (query) {
      const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase()) ||
        game.categories.some(category => 
          category.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSearchResults(filteredGames);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
      
      <div className="mb-8">
        <SearchBar />
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(game => (
            <Link href={`/games/${game.id}`} key={game.id}>
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer hover:scale-[1.02]">
                <div className="aspect-[4/3] bg-gray-700 relative overflow-hidden">
                  <Image 
                    src={game.imageUrl}
                    alt={game.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end px-4 py-3">
                    <div>
                      <h3 className="font-bold text-lg">{game.title}</h3>
                      <p className="text-gray-300 text-sm">{game.categories.join(' • ')}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={i < Math.floor(game.rating) ? 'currentColor' : 'none'} stroke="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs">{game.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-xs text-gray-400">{formatPlayCount(game.playCount)} playing</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-2">No games found</h2>
          <p className="text-gray-400">Try a different search term or browse our <Link href="/games" className="text-amber-500 hover:underline">game collection</Link></p>
        </div>
      )}
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-3">
          {['Puzzle', 'Action', 'Adventure', 'Casual', 'Strategy', 'Shooting', 'Racing'].map(category => (
            <Link href={`/categories/${category}`} key={category}>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-amber-500 hover:text-black transition-colors">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
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

      <main className="pt-24 pb-16 px-4">
        <Suspense fallback={<div className="text-center py-20">Loading search results...</div>}>
          <SearchResultsContent />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 OnlineGames.wiki - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

// Format player count
function formatPlayCount(count: number): string {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + 'k';
  }
  return count.toString();
} 