import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import QuickInfoBar from '@/components/home/QuickInfoBar';
import SpecialitiesSection from '@/components/home/SpecialitiesSection';
import MenuPreview from '@/components/home/MenuPreview';
import AboutSection from '@/components/home/AboutSection';
import AmbienceSection from '@/components/home/AmbienceSection';
import OffersSection from '@/components/home/OffersSection';
import OrderOnlineSection from '@/components/home/OrderOnlineSection';
import LocationSection from '@/components/home/LocationSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickInfoBar />
      <SpecialitiesSection />
      <MenuPreview />
      <AboutSection />
      <AmbienceSection />
      <OffersSection />
      <OrderOnlineSection />
      <LocationSection />
    </>
  );
}
