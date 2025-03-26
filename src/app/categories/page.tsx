import React from 'react';
import Link from 'next/link';
import { getValidGames } from '../../lib/games';

export default function CategoriesPage() {
  // 使用getValidGames获取有效游戏
  const validGames = getValidGames();
  
  // Get all unique categories
  const allCategories = Array.from(new Set(validGames.flatMap(game => game.categories))).sort();
  
  // Group categories with game counts
  const categoryData = allCategories.map(category => {
    const gamesInCategory = validGames.filter(game => game.categories.includes(category));
    return {
      name: category,
      count: gamesInCategory.length,
      imageUrl: gamesInCategory[0]?.imageUrl || '/images/placeholder.jpg'
    };
  });

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
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-2 text-center">Game Categories</h1>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Browse our diverse collection of games by category to find exactly what you're looking for.
              From mind-bending puzzles to action-packed adventures, we have something for everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.map((category) => (
                <Link href={`/categories/${category.name}`} key={category.name}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer hover:scale-[1.02] h-48 relative">
                    <img 
                      src={category.imageUrl} 
                      alt={category.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/30">
                      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                      <p className="text-amber-500">{category.count} {category.count === 1 ? 'Game' : 'Games'}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Action Games</h3>
              <p className="text-gray-400 mb-6">
                Action games focus on challenging players' reflexes, coordination, and reaction time.
                These games typically include combat, racing, and platformer titles where quick responses are essential.
              </p>
              <Link href="/categories/Action">
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full text-sm">
                  Browse Action Games
                </button>
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-xl mb-4">Puzzle Games</h3>
              <p className="text-gray-400 mb-6">
                Puzzle games challenge your problem-solving abilities and logical thinking.
                From classic matching games to complex brain teasers, puzzle games offer a mental workout while providing hours of entertainment.
              </p>
              <Link href="/categories/Puzzle">
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full text-sm">
                  Browse Puzzle Games
                </button>
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-xl mb-4">Strategy Games</h3>
              <p className="text-gray-400 mb-6">
                Strategy games require careful planning, resource management, and tactical thinking.
                These games challenge players to outthink opponents and make decisions that lead to victory.
              </p>
              <Link href="/categories/Strategy">
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full text-sm">
                  Browse Strategy Games
                </button>
              </Link>
            </div>
          </section>
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