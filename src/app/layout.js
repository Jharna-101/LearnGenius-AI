'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col`}>
        {/* Shared Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                  LearnGenius
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  Home
                </Link>
                <Link 
                  href="/planner/input" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.startsWith('/planner') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  Planner
                </Link>
                <Link 
                  href="/about" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className={`${geistSans.variable} ${geistMono.variable} flex-1`}>
          {children}
        </main>

        {/* Footer Section */}
        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <div className="flex items-center space-x-4">
                <a href="mailto:jharnananjegowda@gmail.com" className="text-sm text-gray-600 hover:text-indigo-600">
                  jharnananjegowda@gmail.com
                </a>
                <a href="https://github.com/Jharna-101/LearnGenius-AI.git" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-indigo-600">
                  GitHub
                </a>
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} LearnGenius
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}