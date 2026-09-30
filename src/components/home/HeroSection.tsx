import React from 'react';
import Link from 'next/link';
import { RESTAURANT_LINKS } from '@/data/links';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { ArrowRight, ShoppingBag, MapPin, Sparkles, Utensils, Star, Calendar, Beer } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center justify-center pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image: Authentic Uploaded Ambience Photo */}
      <div className="absolute inset-0 z-0 bg-ivory-100">
        <img
          src="/images/blue_fox_ambience_1.webp"
          alt="Blue Fox Luxury Dining Hall Madhapur"
          className="w-full h-full object-cover brightness-[0.90] contrast-[1.03]"
        />
        {/* Exact Amogha Luxury Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster-100/95 via-alabaster-100/80 to-alabaster-100/60" />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Floating Hero Content Container */}
      <div className="relative z-10 max-w-5xl sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-burgundy-200/80 text-burgundy-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Fine Dining & Grand Buffet • Madhapur</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>Hyderabad</span>
        </div>

        {/* Primary Brand Headline (Exact Amogha Font, Black Weight & Single-Line Alignment) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-burgundy-700 tracking-tight leading-none mb-4 whitespace-nowrap drop-shadow-sm">
          {RESTAURANT_INFO.brandDisplay}
        </h1>

        {/* Subheadline */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-800 font-semibold max-w-2xl mb-3 leading-snug">
          Fine Dining, Grand Buffet, North Indian & Continental Heritage
        </p>

        {/* Brief Supporting Copy */}
        <p className="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal leading-relaxed max-w-2xl mb-7">
          A celebrated Madhapur dining landmark at Huda Techno Enclave for lavish multi-cuisine buffets, signature Apollo Fish, royal dum biryani, live grills, and full bar hospitality.
        </p>

        {/* Action CTAs (Pill Buttons) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-8">
          <Link
            href="/#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            Explore Menu (35+ Dishes) <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={RESTAURANT_LINKS.zomatoBook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" /> Book Table (Flat 25% OFF)
          </a>

          <a
            href={RESTAURANT_LINKS.zomatoOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-50 text-charcoal-800 border border-charcoal-200 font-semibold text-sm shadow-sm transition"
          >
            <ShoppingBag className="w-4 h-4 text-burgundy-600" /> Order Online
          </a>
        </div>

        {/* Hero Information Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>3.8 Dining (323+ Reviews)</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-burgundy-600" />
            <span>Lavish Lunch & Dinner Buffet</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Famous Apollo Fish & Butter Chicken</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Beer className="w-3.5 h-3.5 text-amber-600" />
            <span>Beer @ ₹155 (Pint)</span>
          </span>
        </div>
      </div>
    </section>
  );
}
