'use client';

import React, { useState, useEffect } from 'react';
import { games, Game } from '../../../../../lib/games';

interface GameData extends Omit<Game, 'url'> {
  gameUrl: string;
}

interface GeneratePageProps {
  params: {
    id: string;
  };
}

export default function GeneratePage({ params }: GeneratePageProps) {
  const gameId = params.id;
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageCode, setPageCode] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  // Capitalize first letter
  const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // Load all game data from localStorage
  const loadGamesFromStorage = (): GameData[] => {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      return JSON.parse(storedGames);
    }
    // Convert original Game type to GameData type
    return games.map(game => ({
      ...game,
      gameUrl: game.url,
    })) as GameData[];
  };

  // Load game data
  useEffect(() => {
    setLoading(true);
    
    const allGames = loadGamesFromStorage();
    const game = allGames.find(g => g.id === gameId);
    
    if (game) {
      setGameData(game);
      
      // Generate page code
      const code = generatePageCode(game);
      setPageCode(code);
    }
    
    setLoading(false);
  }, [gameId]);

  // Generate game page code
  const generatePageCode = (game: GameData): string => {
    // Generate page template
    return `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaShare, FaStar } from 'react-icons/fa';

export default function ${capitalizeFirstLetter(game.id).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Game() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center text-amber-500 hover:text-amber-700">
                <FaArrowLeft className="mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center">
              <button className="p-2 text-amber-500 hover:text-amber-700">
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Game title and details */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900 text-center">${game.title}</h1>
              <div className="mt-2 flex justify-center items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={star <= ${game.rating} ? "text-amber-400" : "text-gray-300"} 
                  />
                ))}
                <span className="ml-2 text-gray-600">${game.playCount.toLocaleString()} plays</span>
              </div>
            </div>
          </div>

          {/* Game window */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="p-4">
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="${game.gameUrl}"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Game description and categories */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Game Description</h2>
              <p className="text-gray-700 mb-4">${game.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {${JSON.stringify(game.categories)}.map((category) => (
                  <span key={category} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Game guide */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Game Guide</h2>
              <div className="prose prose-amber max-w-none">
                <p>
                  ${game.title} is a popular online game. Here are some gameplay tips:
                </p>
                <ul>
                  <li>Master the basic controls and get familiar with the game mechanics</li>
                  <li>Start with easy difficulty to understand the game better</li>
                  <li>Practice regularly to improve your skills</li>
                  <li>Try different strategies to find what works best for you</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Similar games */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Similar Games</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Sample similar games - in a real app, these would be dynamically generated */}
                <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                  <div className="h-24 bg-gray-200 rounded-md mb-2"></div>
                  <div className="text-sm font-medium text-center">Similar Game 1</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                  <div className="h-24 bg-gray-200 rounded-md mb-2"></div>
                  <div className="text-sm font-medium text-center">Similar Game 2</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                  <div className="h-24 bg-gray-200 rounded-md mb-2"></div>
                  <div className="text-sm font-medium text-center">Similar Game 3</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                  <div className="h-24 bg-gray-200 rounded-md mb-2"></div>
                  <div className="text-sm font-medium text-center">Similar Game 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 OnlineGames.wiki - All rights reserved</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-amber-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-amber-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}`;
  };

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(pageCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Simulate creating game files
  const handleCreateFiles = () => {
    if (!gameData) return;
    
    // In a real application, this would create actual files
    console.log(`Creating directory: src/app/games/${gameData.id}/`);
    console.log(`Creating file: src/app/games/${gameData.id}/page.tsx`);
    
    setCreateSuccess(true);
    setTimeout(() => setCreateSuccess(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!gameData) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Game Not Found</h3>
          <p className="mt-2 text-sm text-gray-500">
            No game found with ID "${gameId}". Please check if the game ID is correct.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Game Page Generator</h1>
        <p className="mt-1 text-sm text-gray-500">Generate a detailed game page for {gameData.title}</p>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Game Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={gameData.imageUrl}
                  alt={gameData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{gameData.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{gameData.description}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-medium text-gray-500">ID</h4>
                  <p className="text-sm font-medium text-gray-900">{gameData.id}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500">Rating</h4>
                  <p className="text-sm font-medium text-gray-900">{gameData.rating} / 5</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500">Play Count</h4>
                  <p className="text-sm font-medium text-gray-900">{gameData.playCount.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500">Categories</h4>
                  <p className="text-sm font-medium text-gray-900">{gameData.categories.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Generated Page Code</h2>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              {copySuccess ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          
          <div className="overflow-auto max-h-96 bg-gray-800 rounded-lg">
            <pre className="p-4 text-sm text-gray-300 whitespace-pre">{pageCode}</pre>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Create Game Files</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Click the Create button to create game page files in the following location:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>src/app/games/{gameData.id}/</li>
                  <li>src/app/games/{gameData.id}/page.tsx</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <button
                type="button"
                onClick={handleCreateFiles}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:text-sm"
              >
                {createSuccess ? 'Created Successfully!' : 'Create Files'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 