"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          🌍 DisasterX
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/alerts" className="hover:text-blue-200">Alerts</Link>
          <Link href="/report" className="hover:text-blue-200">Report</Link>
          <Link href="/map" className="hover:text-blue-200">Map</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
        </nav>

        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-4 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/alerts" className="block">Alerts</Link>
          <Link href="/report" className="block">Report</Link>
          <Link href="/map" className="block">Map</Link>
          <Link href="/about" className="block">About</Link>
        </div>
      )}
    </header>
  );
}
