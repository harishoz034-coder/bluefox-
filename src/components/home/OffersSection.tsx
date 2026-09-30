import React from 'react';
import { Tag, Sparkles, Calendar, CreditCard, ShoppingBag, ArrowRight, Gift, Percent } from 'lucide-react';
import { RESTAURANT_LINKS } from '@/data/links';

export default function OffersSection() {
  const offers = [
    {
      badge: "Pre-Book Dining Offer",
      title: "Flat 25% OFF on Dining Bill",
      desc: "Reserve your table on Zomato in advance. Valid for dinner dining from 8:00 PM to 11:30 PM.",
      code: "PREBOOK25",
      linkText: "Book Table (25% OFF)",
      linkUrl: RESTAURANT_LINKS.zomatoBook,
      icon: Calendar,
    },
    {
      badge: "Instant Payment Discount",
      title: "Flat 15% OFF via Zomato Pay",
      desc: "Instant flat 15% discount on bill payments made directly through Zomato dining payment.",
      code: "INSTANT15",
      linkText: "Pay on Zomato",
      linkUrl: RESTAURANT_LINKS.zomato,
      icon: Percent,
    },
    {
      badge: "Bank & Card Offer",
      title: "25% OFF up to ₹5,000 (RBL Bank)",
      desc: "Exclusive savings on dining bills using RBL Bank LUMIÈRE Credit Card and partner bank cards.",
      code: "RBL25",
      linkText: "Check Bank Offers",
      linkUrl: RESTAURANT_LINKS.zomato,
      icon: CreditCard,
    },
    {
      badge: "Exclusive Next Visit",
      title: "FLAT ₹175 OFF + Scratch Card",
      desc: "Receive an instant surprise scratch card reward and flat ₹175 voucher on every dining transaction.",
      code: "REWARD175",
      linkText: "View Rewards",
      linkUrl: RESTAURANT_LINKS.zomato,
      icon: Gift,
    },
  ];

  return (
    <section id="offers" className="py-16 bg-ivory-50/70 px-4 sm:px-6 lg:px-8 border-t border-charcoal-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <Tag className="w-3.5 h-3.5 text-gold-500" />
            <span>Special Deals & Savings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Exclusive Dining & Table Offers
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Take advantage of exclusive discounts when pre-booking your table or ordering online.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm hover:shadow-md hover:border-burgundy-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider">
                      {offer.badge}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-alabaster-100 flex items-center justify-center text-charcoal-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">
                    CODE: {offer.code}
                  </div>

                  <a
                    href={offer.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900"
                  >
                    <span>{offer.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
