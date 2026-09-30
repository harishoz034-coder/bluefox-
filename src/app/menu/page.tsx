import React from 'react';
import MenuPreview from '@/components/home/MenuPreview';
import OffersSection from '@/components/home/OffersSection';
import OrderOnlineSection from '@/components/home/OrderOnlineSection';

export const metadata = {
  title: "Full Menu | Blue Fox Madhapur Hyderabad",
  description: "Browse the complete dining, buffet, and bar menu of Blue Fox Madhapur. Apollo Fish, Butter Chicken, Mutton Dum Biryani, Continental Pastas, Pizzas & Cocktails.",
};

export default function MenuPage() {
  return (
    <div className="pt-6">
      <MenuPreview />
      <OffersSection />
      <OrderOnlineSection />
    </div>
  );
}
