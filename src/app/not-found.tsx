'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="bg-black border-b border-gray-800 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-amber-500">Online</span>
            <span className="text-white">Games.io</span>
          </Link>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800/50 text-white rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
        <p className="text-xl mb-8">
          The page you were looking for appears to have been moved, deleted or does not exist. You could go back to where you were or head straight to our home page.
        </p>
        <Link 
          href="/" 
          className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
        >
          GO HOME
        </Link>
      </main>

      <footer className="bg-gray-900/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="inline-block mb-4">
                <img src="/logo.png" alt="OnlineGames.io" className="h-10" />
              </Link>
              <p className="text-gray-400 max-w-md">
                Your go-to destination for free online games. Play instantly without downloads.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4">Navigation</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                  <li><Link href="/games" className="hover:text-amber-500 transition-colors">All Games</Link></li>
                  <li><Link href="/categories" className="hover:text-amber-500 transition-colors">Categories</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/games?category=Action" className="hover:text-amber-500 transition-colors">Action</Link></li>
                  <li><Link href="/games?category=Puzzle" className="hover:text-amber-500 transition-colors">Puzzle</Link></li>
                  <li><Link href="/games?category=Racing" className="hover:text-amber-500 transition-colors">Racing</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>© 2024 OnlineGames.io - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 