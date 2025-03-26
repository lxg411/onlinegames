'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { games, Game } from '../../lib/games';

interface GameData extends Omit<Game, 'url'> {
  gameUrl: string;
}

export default function AdminDashboard() {
  const [gamesList, setGamesList] = useState<GameData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
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

  // Initialize game data in localStorage (if it doesn't exist) and load data
  useEffect(() => {
    if (!localStorage.getItem('games')) {
      // Convert Game[] to GameData[]
      const convertedGames = games.map(game => ({
        ...game,
        gameUrl: game.url,
      }));
      localStorage.setItem('games', JSON.stringify(convertedGames));
    }
    
    // Load data
    setGamesList(loadGamesFromStorage());
    setLoading(false);
  }, []);

  // Handle game deletion
  const handleDeleteGame = (gameId: string) => {
    if (confirm(`Are you sure you want to delete this game? This action cannot be undone.`)) {
      // Delete game from localStorage
      const allGames = loadGamesFromStorage();
      const updatedGames = allGames.filter(game => game.id !== gameId);
      
      // Save to localStorage
      localStorage.setItem('games', JSON.stringify(updatedGames));
      
      // Update state
      setGamesList(updatedGames);
      
      alert('Game successfully deleted!');
    }
  };

  // Filter game list
  const filteredGames = gamesList.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Game Management</h1>
        <p className="mt-1 text-sm text-gray-500">View, add, edit and delete games</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative max-w-xs">
          <label htmlFor="search" className="sr-only">Search games</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              placeholder="Search games"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Link
          href="/admin/games/add"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Game
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <li key={game.id} className="px-6 py-5 flex items-center">
                  <div className="flex-shrink-0 h-16 w-16 relative">
                    <Image
                      src={game.imageUrl}
                      alt={game.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{game.title}</h3>
                        <p className="text-sm text-gray-500 truncate max-w-2xl">{game.description}</p>
                      </div>
                      <div className="flex-shrink-0 flex space-x-2">
                        <Link
                          href={`/games/${game.id}`}
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-amber-700 bg-amber-50 hover:bg-amber-100"
                          target="_blank"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/games/edit/${game.id}`}
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/admin/games/generate/${game.id}`}
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-green-700 bg-green-50 hover:bg-green-100"
                        >
                          Generate Page
                        </Link>
                        <button
                          onClick={() => handleDeleteGame(game.id)}
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 mr-1 h-4 w-4 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {game.rating.toFixed(1)}
                      </div>
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {game.playCount.toLocaleString()} plays
                      </div>
                      <div className="flex items-center">
                        <svg className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {game.categories.join(', ')}
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-6 py-10 text-center">
                <p className="text-gray-500">No matching games found</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
} 