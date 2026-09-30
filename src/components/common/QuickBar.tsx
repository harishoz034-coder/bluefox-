import React from 'react';
import { Phone, Navigation, Calendar, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { RESTAURANT_LINKS } from '@/data/links';

export default function QuickBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-charcoal-200 p-2.5 flex items-center gap-2 shadow-2xl">
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1"
      >
        <Phone className="w-3.5 h-3.5 text-burgundy-700" />
        <span>Call</span>
      </a>

      <a
        href={RESTAURANT_LINKS.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1"
      >
        <Navigation className="w-3.5 h-3.5 text-burgundy-700" />
        <span>Map</span>
      </a>

      <a
        href={RESTAURANT_LINKS.zomatoBook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Table</span>
      </a>

      <a
        href={RESTAURANT_LINKS.zomatoOrder}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Order</span>
      </a>
    </div>
  );
}
