'use client';

import React, { useState, useMemo } from 'react';
import { Search, Utensils, Flame, Sparkles, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu';
import { RESTAURANT_LINKS } from '@/data/links';

export default function MenuPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category filter
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Diet filter
      if (dietFilter === 'veg' && !dish.isVeg) return false;
      if (dietFilter === 'non-veg' && dish.isVeg) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = dish.name.toLowerCase().includes(query);
        const matchDesc = dish.description.toLowerCase().includes(query);
        if (!matchName && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-gold-500" />
            <span>Grand Multi-Cuisine Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Explore Blue Fox Offerings
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            From iconic Andhra appetisers and royal curries to our grand multi-cuisine buffet spreads.
          </p>
        </div>

        {/* Search & Diet Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search Apollo Fish, Buffet, Biryani..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-charcoal-200 bg-alabaster-50 focus:bg-white focus:outline-none focus:border-burgundy-600 text-sm text-charcoal-900 transition"
            />
          </div>

          {/* Diet Filter Pills */}
          <div className="inline-flex p-1 rounded-full bg-alabaster-100 border border-charcoal-200 text-xs font-semibold">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-4 py-1.5 rounded-full transition ${
                dietFilter === 'all'
                  ? 'bg-burgundy-700 text-white shadow-sm font-bold'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`px-4 py-1.5 rounded-full transition flex items-center gap-1.5 ${
                dietFilter === 'non-veg'
                  ? 'bg-burgundy-700 text-white shadow-sm font-bold'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-400" /> Non-Veg
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-4 py-1.5 rounded-full transition flex items-center gap-1.5 ${
                dietFilter === 'veg'
                  ? 'bg-emerald-700 text-white shadow-sm font-bold'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Pure Veg
            </button>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-burgundy-700 text-white shadow-md'
                  : 'bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-700 border border-charcoal-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-alabaster-50 rounded-2xl border border-charcoal-200">
            <Utensils className="w-12 h-12 mx-auto text-charcoal-300 mb-3" />
            <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-1">
              No dishes found matching your criteria
            </h3>
            <p className="text-xs text-charcoal-500">
              Try adjusting your search terms or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl p-5 border border-charcoal-200/80 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Dish Top Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                          dish.isVeg ? 'border-emerald-600' : 'border-burgundy-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? 'bg-emerald-600' : 'bg-burgundy-600'
                          }`}
                        />
                      </span>
                      <h4 className="font-serif font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors text-base">
                        {dish.name}
                      </h4>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {dish.isBestseller && (
                      <span className="px-2 py-0.5 rounded bg-burgundy-50 text-burgundy-700 border border-burgundy-200 text-[10px] font-bold uppercase">
                        Bestseller
                      </span>
                    )}
                    {dish.isSpecial && (
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">
                        Chef Special
                      </span>
                    )}
                    {dish.portion && (
                      <span className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-600 text-[10px] font-medium">
                        {dish.portion}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Footer Price & Order Action */}
                <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-burgundy-700">
                      ₹{dish.price}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-xs text-charcoal-400 line-through">
                        ₹{dish.originalPrice}
                      </span>
                    )}
                  </div>

                  <a
                    href={RESTAURANT_LINKS.zomatoOrder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
