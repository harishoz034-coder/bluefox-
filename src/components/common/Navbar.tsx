'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { RESTAURANT_LINKS } from '@/data/links';
import { Phone, Menu as MenuIcon, X, Calendar, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-charcoal-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Brand Title (Exact Amogha Font & Single Line) */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl sm:text-3xl font-black text-burgundy-700 tracking-tight whitespace-nowrap">
            {RESTAURANT_INFO.brandDisplay}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-charcoal-700">
          <Link href="/#menu" className="hover:text-burgundy-700 transition">
            Our Menu
          </Link>
          <Link href="/#specialities" className="hover:text-burgundy-700 transition">
            Buffet & Specialities
          </Link>
          <Link href="/#about" className="hover:text-burgundy-700 transition">
            About
          </Link>
          <Link href="/#gallery" className="hover:text-burgundy-700 transition">
            Ambience
          </Link>
          <Link href="/#offers" className="hover:text-burgundy-700 transition">
            Offers
          </Link>
          <Link href="/#location" className="hover:text-burgundy-700 transition">
            Location
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-charcoal-300 text-charcoal-800 hover:bg-alabaster-100 font-bold text-xs transition"
          >
            <Phone className="w-3.5 h-3.5 text-burgundy-700" />
            <span>{RESTAURANT_INFO.phoneDisplay}</span>
          </a>

          <a
            href={RESTAURANT_LINKS.zomatoBook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table (25% OFF)</span>
          </a>

          <a
            href={RESTAURANT_LINKS.zomatoOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order on Zomato</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-700 hover:text-burgundy-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-charcoal-200 px-4 py-4 space-y-3">
          <Link
            href="/#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            Our Menu
          </Link>
          <Link
            href="/#specialities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            Buffet & Specialities
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            About Blue Fox
          </Link>
          <Link
            href="/#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            Ambience Gallery
          </Link>
          <Link
            href="/#offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            Dining Offers
          </Link>
          <Link
            href="/#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-charcoal-700 py-1"
          >
            Location & Contact
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-center py-2.5 rounded-full border border-charcoal-300 text-charcoal-800 font-bold text-xs"
            >
              📞 {RESTAURANT_INFO.phoneDisplay}
            </a>
            <a
              href={RESTAURANT_LINKS.zomatoBook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs"
            >
              Book Table (25% OFF)
            </a>
            <a
              href={RESTAURANT_LINKS.zomatoOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs"
            >
              Order on Zomato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
