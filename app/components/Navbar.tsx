'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full border border-white/10 ${scrolled
      ? 'bg-black/60 backdrop-blur-md py-2 w-[90%] md:w-full max-w-5xl shadow-2xl shadow-black/50'
      : 'bg-black/20 backdrop-blur-sm py-2.5 w-[95%] md:w-full max-w-6xl'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl border border-white/10 transform group-hover:scale-110 transition-all duration-300">
                <Image src="/logo.png" alt="BitBucks Logo" width={40} height={40} className="rounded-lg" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Bit<span className="text-gray-400">Bucks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-300 group ${pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transform transition-all duration-300 ${pathname === item.path ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                  }`}></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block relative group">
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium transform group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300">
              Join Us
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
