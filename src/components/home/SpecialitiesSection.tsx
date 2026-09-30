import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Flame, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menu';
import { RESTAURANT_LINKS } from '@/data/links';

export default function SpecialitiesSection() {
  const specialDishes = MENU_ITEMS.filter((item) => item.isSpecial || item.isBestseller).slice(0, 6);

  return (
    <section id="specialities" className="py-16 sm:py-20 bg-ivory-50/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Chef's Signature Recommendations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Iconic Blue Fox Delicacies & Buffet
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            From our legendary spicy Apollo Fish and rich Butter Chicken to our lavish multi-cuisine executive buffet spread.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-luxury hover:border-burgundy-300 transition-all duration-300 flex flex-col group"
            >
              {/* Dish Image */}
              <div className="relative h-56 w-full overflow-hidden bg-charcoal-100">
                {dish.image ? (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-burgundy-50 text-burgundy-300">
                    <Flame className="w-12 h-12" />
                  </div>
                )}
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {dish.isBestseller && (
                    <span className="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      Bestseller
                    </span>
                  )}
                  {dish.isSpecial && (
                    <span className="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      Must Try
                    </span>
                  )}
                </div>

                {dish.portion && (
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">
                    {dish.portion}
                  </span>
                )}
              </div>

              {/* Dish Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                          dish.isVeg ? 'border-emerald-600' : 'border-burgundy-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? 'bg-emerald-600' : 'bg-burgundy-600'
                          }`}
                        />
                      </span>
                      <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">
                        {dish.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg sm:text-xl font-black text-burgundy-700">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Link
            href="/#menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            Explore Complete Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
