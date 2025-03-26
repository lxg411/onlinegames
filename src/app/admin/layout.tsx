'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top navigation bar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-xl font-bold text-amber-600">OnlineGames Admin</div>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/admin/games" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200">
                Game Management
              </Link>
              <Link href="/admin/categories" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200">
                Category Management
              </Link>
              <Link href="/admin/settings" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200">
                System Settings
              </Link>
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/" className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700">
                  Return to Frontend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2024 OnlineGames.wiki Admin System
        </div>
      </footer>
    </div>
  );
} 