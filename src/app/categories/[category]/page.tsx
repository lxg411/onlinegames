import React from 'react';
import Link from 'next/link';
import { games } from '../../../lib/games';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export function generateStaticParams() {
  // Get all unique categories
  const allCategories = Array.from(new Set(games.flatMap(game => game.categories)));
  return allCategories.map(category => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category;
  return {
    title: `${category} Games - OnlineGames.wiki`,
    description: `Play the best ${category} games online for free. Browse our collection of ${category} games and enjoy instant play without downloads.`
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  
  // Filter games by category
  const filteredGames = games.filter(game => 
    game.categories.includes(category)
  );
  
  // If no games found, return 404
  if (filteredGames.length === 0) {
    notFound();
  }
  
  // Get category description
  const categoryDescriptions: Record<string, string> = {
    'Puzzle': 'Challenge your mind with our collection of puzzle games. From classic jigsaw puzzles to brain-teasing riddles, these games will test your problem-solving skills.',
    'Action': 'Get your adrenaline pumping with fast-paced action games. Test your reflexes and coordination in exciting challenges.',
    'Adventure': 'Embark on epic journeys in our adventure games. Explore new worlds, solve mysteries, and experience thrilling stories.',
    'Racing': 'Feel the speed in our racing games. Compete against opponents, master difficult tracks, and reach the finish line first.',
    'Shooting': 'Test your aim and reflexes in our shooting games. Take down targets, defeat enemies, and complete missions.',
    'Strategy': 'Plan your moves carefully in our strategy games. Manage resources, build your forces, and outsmart your opponents.',
    'Casual': 'Relax and have fun with our casual games. Easy to learn but hard to master, these games are perfect for a quick gaming session.',
    'Classic': 'Enjoy timeless gameplay with our classic games. These beloved titles have stood the test of time.',
    'Arcade': 'Experience the nostalgia of arcade gaming. Simple controls, increasing difficulty, and addictive gameplay await.',
    'Educational': 'Learn while you play with our educational games. Improve your skills and knowledge in an entertaining way.',
    'Building': 'Create and construct in our building games. Let your imagination run wild as you build amazing structures.',
    'Creative': 'Express yourself in our creative games. Design, customize, and make something unique.',
    'Sandbox': 'Explore open worlds with our sandbox games. These games give you the freedom to play however you want.'
  };
  
  const categoryDescription = categoryDescriptions[category] || `Browse our collection of ${category} games and find your next favorite game to play online.`;

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

      {/* Main content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <nav className="flex text-sm mb-4">
              <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-amber-500">{category}</span>
            </nav>
            
            <h1 className="text-4xl font-bold mb-4">{category} Games</h1>
            <p className="text-gray-400 mb-6 max-w-3xl">{categoryDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {Array.from(new Set(games.flatMap(game => game.categories))).map(cat => (
                <Link href={`/categories/${cat}`} key={cat}>
                  <span className={`px-3 py-1 rounded-full text-sm ${cat === category ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                    {cat}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <Link href={`/games/${game.id}`} key={game.id} className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer hover:scale-[1.02]">
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
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{game.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-1">
                        {game.categories.filter(cat => cat !== category).slice(0, 2).map(cat => (
                          <span key={cat} className="bg-gray-700 text-xs px-2 py-0.5 rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{formatPlayCount(game.playCount)} playing</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">About {category} Games</h2>
            <p className="text-gray-400 mb-4">
              {category} games are a popular genre among online gamers. These games offer exciting gameplay and challenges that keep players coming back for more. 
              Whether you&apos;re a casual player or a dedicated gamer, our collection of {category.toLowerCase()} games offers something for everyone.
            </p>
            <p className="text-gray-400">
              All games on OnlineGames.wiki can be played instantly in your browser without downloads or installations. 
              Just click on any game to start playing right away!
            </p>
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