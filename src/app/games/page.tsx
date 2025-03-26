'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { games, getValidGames } from '../../lib/games';
import GameEmbed from '@/components/GameEmbed';
import Image from 'next/image';

// Use valid game data
export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Use valid game data
  const validGames = getValidGames();
  
  // Get all unique game categories
  const allCategories = Array.from(new Set(validGames.flatMap(game => game.categories)));
  
  // Filter games
  const filteredGames = validGames.filter(game => {
    // Search filtering
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filtering
    const matchesCategory = !selectedCategory || game.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  // Handle game click
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
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
    
      {/* Page header */}
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

      {/* Main content */}
      <main className="container mx-auto pt-24 px-4 pb-12">
        <h1 className="text-3xl font-bold mb-8">All Games</h1>
        
        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <select
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {allCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Game list */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredGames.map((game, index) => (
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
        
        {/* No results message */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No matching games found. Try changing your search criteria.</p>
          </div>
        ) : null}
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