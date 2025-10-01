import React from 'react';
import { Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="p-2 rounded-md bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200 transition-colors">
            <Sprout className="w-5 h-5" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-stone-900">GreenRoots Co-op</div>
            <div className="text-xs text-stone-500">Urban Farming Together</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#offerings" className="text-stone-700 hover:text-stone-900">Offerings</a>
          <a href="#calendar" className="text-stone-700 hover:text-stone-900">Calendar</a>
          <a href="#instagram" className="text-stone-700 hover:text-stone-900">Instagram</a>
          <a href="#contact" className="text-stone-700 hover:text-stone-900">Contact</a>
        </nav>

        <a
          href="#join"
          className="hidden sm:inline-flex items-center rounded-md bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Join the Co‑op
        </a>
      </div>
    </header>
  );
}
