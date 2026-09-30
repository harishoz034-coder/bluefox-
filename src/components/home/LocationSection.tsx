import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck, Car, Wine, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';
import { RESTAURANT_LINKS } from '@/data/links';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-16 sm:py-20 bg-[#F4ECE1] border-t border-[#D8C5AE] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-100 border border-burgundy-300 text-burgundy-900 text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-burgundy-700" />
            <span>Visit Us in Madhapur</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mb-4">
            Find Blue Fox
          </h2>
          <p className="text-charcoal-800 text-sm sm:text-base font-medium">
            Conveniently situated in Sector 1, Huda Techno Enclave, Madhapur, Hyderabad.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Address & Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-black text-burgundy-800 mb-4">
                Blue Fox Madhapur
              </h3>

              <div className="space-y-4 text-sm text-charcoal-800 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-burgundy-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal-950 font-bold mb-0.5">Address:</strong>
                    <p className="text-charcoal-800 leading-relaxed font-normal">
                      {RESTAURANT_INFO.address}
                    </p>
                    <p className="text-xs text-charcoal-600 mt-1 font-medium">
                      Landmark: {RESTAURANT_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-burgundy-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal-950 font-bold mb-0.5">Dining Hours:</strong>
                    <p className="text-charcoal-800 font-medium">
                      Lunch: 12:00 PM – 3:30 PM
                    </p>
                    <p className="text-charcoal-800 font-medium">
                      Dinner: 7:00 PM – 11:30 PM
                    </p>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      Open 7 Days a Week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-burgundy-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal-950 font-bold mb-0.5">Direct Contact:</strong>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-burgundy-800 hover:text-burgundy-950 font-bold"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-md transition"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-alabaster-100 hover:bg-alabaster-200 text-charcoal-900 border border-charcoal-300 font-bold text-xs transition"
              >
                <Phone className="w-4 h-4 text-burgundy-700" /> Call Restaurant
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-charcoal-200 shadow-md h-80 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=Blue+Fox+Madhapur+Huda+Techno+Enclave+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue Fox Google Maps Location"
            />
          </div>
        </div>

        {/* 3 High-Contrast Info Cards Directly Below the Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-charcoal-950 text-base">
                Free Valet & Parking
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Complimentary valet parking and ample parking space available for both cars and two-wheelers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800">
                <Wine className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-charcoal-950 text-base">
                Full Bar & Beverages
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Full bar license with chilled draught beer starting @ ₹155, fine wines, and signature cocktails.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-charcoal-950 text-base">
                Corporate & Family Halls
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Spacious fine dining halls and semi-private dining enclosures for business lunches and family gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
