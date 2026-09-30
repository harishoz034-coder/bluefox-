import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Flame, Wine, Users, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "Decades of Culinary Excellence",
      desc: "A revered household brand in Hyderabad known for consistent quality, rich flavours, and warm hospitality.",
    },
    {
      icon: Flame,
      title: "Extravagant Multi-Cuisine Buffet",
      desc: "Daily lunch & dinner buffets featuring live starter stations, aromatic biryani, and rich dessert counters.",
    },
    {
      icon: Wine,
      title: "Full Bar & Signature Cocktails",
      desc: "Extensive spirits, draught beer pints at ₹155, and handcrafted cocktails in a relaxed dining atmosphere.",
    },
    {
      icon: Users,
      title: "Corporate & Family Friendly",
      desc: "Spacious seating layouts accommodating family gatherings, corporate team lunches, and private parties.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage with Uploaded Ambience Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/blue_fox_panoramic_hall.webp"
                    alt="Blue Fox Panoramic Dining Hall Madhapur"
                    className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/blue_fox_buffet_counter.webp"
                    alt="Blue Fox Grand Buffet Counter"
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/blue_fox_evening_dining.webp"
                    alt="Blue Fox Evening Ambient Dining"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">
                    3.8 ★
                  </span>
                  <p className="text-xs uppercase tracking-widest font-semibold text-alabaster-100">
                    323+ Dining Reviews
                  </p>
                  <p className="text-[11px] text-alabaster-200 mt-2">
                    Madhapur's Trusted Multi-Cuisine Destination
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>The Blue Fox Tradition</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              A Legacy of Fine Dining, Lavish Buffets & Warm Hospitality
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located at <strong>Sector 1, Huda Techno Enclave, Madhapur</strong>, <strong>Blue Fox</strong> is an institution of gourmet multi-cuisine dining. Blending time-honoured North Indian tandoori mastercraft with famous Andhra specialities like Apollo Fish, classic Continental pastas, and our signature executive lunch and dinner buffets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                    <div className="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executive Buffet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Full Bar & Cocktails</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Free Valet Parking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
