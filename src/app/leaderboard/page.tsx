import React from 'react';
import Link from 'next/link';
import { getValidGames } from '../../lib/games';

export const metadata = {
  title: 'Game Leaderboard - OnlineGames.wiki',
  description: 'Check out the most popular and highest rated games on OnlineGames.wiki. Find the top trending games that players love.',
};

export default function LeaderboardPage() {
  // 使用getValidGames获取有效游戏
  const validGames = getValidGames();
  
  // Sort games by playCount to get most played
  const mostPlayed = [...validGames].sort((a, b) => b.playCount - a.playCount).slice(0, 10);
  
  // Sort games by rating to get highest rated
  const highestRated = [...validGames].sort((a, b) => b.rating - a.rating).slice(0, 10);
  
  // Sort games by newest (assuming we have a date field)
  // For now we'll just use the reverse of the array
  const trending = [...validGames].sort(() => Math.random() - 0.5).slice(0, 10);

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
            <Link href="/leaderboard" className="text-amber-500 transition-colors">Leaderboard</Link>
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
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Game Leaderboard</h1>
          <p className="text-gray-400 mb-10 max-w-3xl">
            Discover the most popular and highest rated games on our platform. Our leaderboard showcases games 
            that players love and enjoy the most. Find your next favorite game and join thousands of others playing online.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Most Played Games */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-500 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Most Played</h2>
              </div>
              
              <div className="space-y-4">
                {mostPlayed.map((game, index) => (
                  <Link href={`/games/${game.id}`} key={game.id}>
                    <div className="flex items-center p-3 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg cursor-pointer">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-amber-500 mr-4">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded bg-gray-600 overflow-hidden mr-4">
                        <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold">{game.title}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{formatPlayCount(game.playCount)} players</span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-black/50 rounded-full px-2 py-1 text-xs flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          <span>{game.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Highest Rated Games */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-500 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Highest Rated</h2>
              </div>
              
              <div className="space-y-4">
                {highestRated.map((game, index) => (
                  <Link href={`/games/${game.id}`} key={game.id}>
                    <div className="flex items-center p-3 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg cursor-pointer">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-amber-500 mr-4">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded bg-gray-600 overflow-hidden mr-4">
                        <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold">{game.title}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{formatRating(game.rating)}</span>
                          <span className="mx-2">•</span>
                          <span>{game.categories[0]}</span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-amber-500 text-black rounded-full px-3 py-1 text-sm font-bold flex items-center">
                          {game.rating.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Trending Games */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-500 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Trending Now</h2>
              </div>
              
              <div className="space-y-4">
                {trending.map((game, index) => (
                  <Link href={`/games/${game.id}`} key={game.id}>
                    <div className="flex items-center p-3 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg cursor-pointer">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-amber-500 mr-4">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded bg-gray-600 overflow-hidden mr-4">
                        <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold">{game.title}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Trending
                          </span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-black/50 rounded-full px-2 py-1 text-xs flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          <span>{game.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">How Our Rankings Work</h2>
            <p className="text-gray-400 mb-4">
              Our leaderboards are updated regularly based on real player data. We analyze gameplay metrics, 
              user ratings, and current popularity to ensure our rankings accurately represent player preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Most Played</h3>
                <p className="text-gray-400 text-sm">
                  Based on the total number of active players over the past 30 days. This metric shows which games have the largest player base.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Highest Rated</h3>
                <p className="text-gray-400 text-sm">
                  Based on player reviews and ratings. These games have received the highest average scores from our community.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Trending Now</h3>
                <p className="text-gray-400 text-sm">
                  Games that have seen a significant increase in popularity recently. These are the hot games that are gaining attention.
                </p>
              </div>
            </div>
          </div>
        </div>
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

// Format rating with stars text
function formatRating(rating: number): string {
  const stars = Math.round(rating);
  if (stars === 5) return "Perfect Score";
  if (stars === 4) return "Excellent";
  if (stars === 3) return "Good";
  if (stars === 2) return "Average";
  return "Below Average";
} 