const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\blue-fox';
const imagesDir = path.join(projectDir, 'public', 'images');
const outputHtmlPath = 'C:\\Users\\haris\\Downloads\\blue-fox.html';
const artifactHtmlPath = 'C:\\Users\\haris\\.gemini\\antigravity\\brain\\23f98256-8721-42b1-9de6-55b0debcd5d0\\blue-fox.html';

// Helper to convert local image to base64 data URI
function getBase64Image(filename) {
  const filePath = path.join(imagesDir, filename);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filename).toLowerCase().replace('.', '');
    let mimeType = 'image/jpeg';
    if (ext === 'png') mimeType = 'image/png';
    if (ext === 'webp') mimeType = 'image/webp';
    const base64Data = fs.readFileSync(filePath).toString('base64');
    return `data:${mimeType};base64,${base64Data}`;
  }
  return '';
}

console.log('Encoding Blue Fox images to Base64...');
const imgAmbience1 = getBase64Image('blue_fox_ambience_1.webp');
const imgBuffetCounter = getBase64Image('blue_fox_buffet_counter.webp');
const imgEveningDining = getBase64Image('blue_fox_evening_dining.webp');
const imgPanoramicHall = getBase64Image('blue_fox_panoramic_hall.webp');
const imgEntranceLobby = getBase64Image('blue_fox_entrance_lobby.webp');

const imgApolloFish = getBase64Image('dish_apollo_fish.jpg');
const imgBiryani = getBase64Image('dish_hyderabadi_biryani.jpg');
const imgButterChicken = getBase64Image('dish_butter_chicken.jpg');
const imgPaneerTikka = getBase64Image('dish_paneer_tikka.jpg');
const imgApricotDelight = getBase64Image('dish_apricot_delight.jpg');
const imgContinentalPasta = getBase64Image('dish_continental_pasta.jpg');
const imgChineseRice = getBase64Image('dish_chinese_fried_rice.jpg');
const imgPizza = getBase64Image('dish_gourmet_pizza.jpg');
const imgTandooriStarters = getBase64Image('dish_tandoori_starters.jpg');

const menuData = [
  // Grand Buffet Specials
  { id: 'bf1', name: 'Blue Fox Grand Executive Lunch Buffet', category: 'buffet-specials', price: 849, originalPrice: 999, description: 'Lavish multi-cuisine spread with 6+ live starters, soups, salads, North Indian gravies, biryani, continental pasta, and 8 dessert varieties.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Per Person', image: imgBuffetCounter },
  { id: 'bf2', name: 'Royal Weekend Dinner Buffet Spread', category: 'buffet-specials', price: 949, originalPrice: 1099, description: 'Extravagant weekend dinner buffet featuring tandoori grills, Apollo fish live station, mutton dum biryani, live pasta counter, and premium ice creams.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Per Person', image: imgBuffetCounter },
  { id: 'bf3', name: 'Pure Vegetarian Executive Buffet', category: 'buffet-specials', price: 749, description: 'Delightful vegetarian banquet spread featuring paneer tikka, corn cheese balls, veg biryani, dal makhani, and assorted Indian sweets.', isVeg: true, isBestseller: true, portion: 'Per Person', image: imgBuffetCounter },

  // Signature Starters
  { id: 'st1', name: 'Blue Fox Famous Apollo Fish', category: 'starters-appetizers', price: 495, originalPrice: 540, description: 'Crispy batter-fried boneless fish fillets tossed in rich spiced yogurt, fresh curry leaves, and green chillies. Hyderabad\'s legendary recipe.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Chef Special', image: imgApolloFish },
  { id: 'st2', name: 'Bhatti Da Murgh Tandoori (Full)', category: 'starters-appetizers', price: 520, description: 'Tender chicken marinated overnight in Kashmiri deggi mirch, hung curd, and roasted whole spices, char-grilled in a clay oven.', isVeg: false, isBestseller: true, portion: '4 Large Pieces', image: imgTandooriStarters },
  { id: 'st3', name: 'Char-Grilled Zafrani Paneer Tikka', category: 'starters-appetizers', price: 395, description: 'Plump cottage cheese cubes layered with spiced bell peppers and onions, infused with saffron and cooked over glowing coals.', isVeg: true, isBestseller: true, portion: '6 Pieces', image: imgPaneerTikka },
  { id: 'st4', name: 'Crispy Chilli Chicken (Indo-Chinese)', category: 'starters-appetizers', price: 440, description: 'Wok-tossed battered crispy chicken chunks with bell peppers, spring onions, and garlic in a dark soya chilli glaze.', isVeg: false, portion: 'Serves 1-2', image: imgChineseRice },
  { id: 'st5', name: 'Corn Cheese Kurkure Croquettes', category: 'starters-appetizers', price: 345, description: 'Crispy golden fried sweet corn and molten cheese croquettes served with spicy cocktail dip.', isVeg: true, portion: '6 Pieces' },

  // North Indian & Mughlai Curries
  { id: 'cu1', name: 'Classic Murgh Makhani (Butter Chicken)', category: 'main-curries', price: 495, originalPrice: 530, description: 'Tender tandoori chicken simmered in a velvety, buttery tomato gravy infused with kasuri methi and fresh farm cream.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 2', image: imgButterChicken },
  { id: 'cu2', name: 'Kashmiri Mutton Rogan Josh', category: 'main-curries', price: 560, description: 'Prime cuts of tender mutton slow-braised with aromatic ratan jot, fennel powder, Kashmiri dry red chillies, and ginger.', isVeg: false, isBestseller: true, portion: 'Serves 2', image: imgButterChicken },
  { id: 'cu3', name: 'Shahi Paneer Lababdar', category: 'main-curries', price: 410, description: 'Fresh cottage cheese cubes cooked in a rich onion-tomato chunky gravy with grated paneer and cream.', isVeg: true, isBestseller: true, portion: 'Serves 2', image: imgPaneerTikka },
  { id: 'cu4', name: 'Dal Makhani Blue Fox Special', category: 'main-curries', price: 360, description: 'Black lentils and red kidney beans slow-cooked for 18 hours on charcoal embers with white butter and fresh cream.', isVeg: true, portion: 'Serves 2' },
  { id: 'cu5', name: 'Butter Garlic Naan / Laccha Paratha Basket', category: 'main-curries', price: 180, description: 'Assorted basket containing garlic naan, butter naan, and flaky laccha paratha freshly baked in tandoor.', isVeg: true, portion: 'Basket of 3' },

  // Hyderabadi Biryani & Rice
  { id: 'bi1', name: 'Royal Hyderabadi Mutton Dum Biryani', category: 'biryani-rice', price: 540, originalPrice: 580, description: 'Traditional slow-cooked kachchi gosht dum biryani with long basmati grains, saffron, fried onions, served with mirchi ka salan and raita.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 1-2', image: imgBiryani },
  { id: 'bi2', name: 'Special Chicken Dum Biryani', category: 'biryani-rice', price: 440, description: 'Authentic Hyderabadi spiced chicken dum biryani infused with pure ghee, mint, and whole spices.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgBiryani },
  { id: 'bi3', name: 'Nizami Subz Dum Biryani', category: 'biryani-rice', price: 360, description: 'Layered basmati rice with farm fresh vegetables, paneer cubes, and roasted cashews cooked on gentle dum.', isVeg: true, portion: 'Serves 1-2' },
  { id: 'bi4', name: 'Jeera Ghee Rice with Dal Tadka', category: 'biryani-rice', price: 310, description: 'Fragrant basmati tempered with cumin seeds and desi ghee served with homestyle yellow dal tadka.', isVeg: true, portion: 'Serves 1-2' },

  // Continental & Pizza
  { id: 'co1', name: 'Creamy Alfredo Fettuccine Pasta (Chicken / Veg)', category: 'continental-pizza', price: 460, description: 'Classic rich parmesan cream sauce with sauteed garlic mushrooms, herb-grilled chicken breast, and crispy garlic bread.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgContinentalPasta },
  { id: 'co2', name: 'Gourmet Woodfired Chicken & Jalapeno Pizza', category: 'continental-pizza', price: 495, description: 'Handcrafted thin crust with San Marzano tomato sauce, mozzarella, smoked barbecue chicken, and pickled jalapenos.', isVeg: false, portion: '11 Inch', image: imgPizza },
  { id: 'co3', name: 'Margherita Quattro Formaggi Pizza', category: 'continental-pizza', price: 420, description: 'Artisanal cheese pizza loaded with mozzarella, cheddar, gouda, and fresh basil leaves.', isVeg: true, portion: '11 Inch', image: imgPizza },

  // Chinese & Oriental
  { id: 'ch1', name: 'Wok-Tossed Chicken Fried Rice & Chilli Chicken Gravy', category: 'chinese-oriental', price: 480, description: 'Wok-tossed jasmine rice with shredded chicken, eggs, scallions paired with spicy Chinese chilli gravy.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgChineseRice },
  { id: 'ch2', name: 'Chilli Garlic Hakka Noodles (Veg / Chicken)', category: 'chinese-oriental', price: 370, description: 'Handmade noodles stir-fried with crunchy cabbage, capsicum, burnt garlic, and red chilli oil.', isVeg: true, portion: 'Serves 1-2' },

  // Desserts & Bar Beverages
  { id: 'db1', name: 'Blue Fox Signature Apricot Delight', category: 'desserts-beverages', price: 240, originalPrice: 280, description: 'Layered stewed Turkish apricots, sponge cake, and fresh thick vanilla cream with roasted almond slivers.', isVeg: true, isBestseller: true, isSpecial: true, portion: 'Per Portion', image: imgApricotDelight },
  { id: 'db2', name: 'Sizzling Hot Walnut Brownie with Ice Cream', category: 'desserts-beverages', price: 260, description: 'Fudge chocolate brownie on a smoking cast iron sizzler plate topped with vanilla bean gelato and dark chocolate fudge.', isVeg: true, isBestseller: true, portion: 'Per Portion' },
  { id: 'db3', name: 'Chilled Draught Beer (Pint)', category: 'desserts-beverages', price: 155, description: 'Crisp, ice-cold fresh draught beer pint served straight from the tap.', isVeg: true, isSpecial: true, portion: '330 ml Pint' },
  { id: 'db4', name: 'Blue Fox Classic Long Island Iced Tea', category: 'desserts-beverages', price: 475, description: 'Signature cocktail blending five spirits with citrus splash and cola float.', isVeg: true, portion: 'Glass' },
  { id: 'db5', name: 'Virgin Blue Lagoon Mocktail', category: 'desserts-beverages', price: 195, description: 'Refreshing blue curacao syrup, sparkling lemonade, and crushed mint over ice.', isVeg: true, portion: 'Glass' }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blue Fox | Fine Dining, Grand Buffet & Multi-Cuisine Heritage • Madhapur, Hyderabad</title>
  <meta name="description" content="Experience iconic multi-cuisine fine dining at Blue Fox Madhapur. Grand Executive Buffet, Famous Apollo Fish, Butter Chicken, Hyderabadi Dum Biryani, Continental Pastas, Full Bar & Cocktails.">
  
  <!-- Google Fonts: Playfair Display & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            burgundy: {
              50: '#FDF2F3',
              100: '#FCE7E9',
              200: '#F7C5CA',
              300: '#F099A3',
              600: '#A41E30',
              700: '#7E1725',
              800: '#63111C',
              900: '#480B13',
              950: '#2A060B',
            },
            gold: {
              400: '#DFC280',
              500: '#C5A05A',
              600: '#A6823B',
            },
            charcoal: {
              100: '#F3F4F6',
              200: '#E5E7EB',
              300: '#D1D5DB',
              400: '#9CA3AF',
              500: '#6B7280',
              600: '#4B5563',
              700: '#374151',
              800: '#1F2937',
              900: '#111827',
              950: '#0B0F19',
            },
            alabaster: {
              50: '#FAF8F5',
              100: '#F5F2EC',
              200: '#ECE6DC',
            },
            ivory: {
              50: '#FDFCF9',
              100: '#FAF7F0',
            }
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['"Inter"', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #FAF8F5;
      color: #111827;
      font-family: 'Inter', sans-serif;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">

  <!-- TOP BRAND NAVBAR (Exact Amogha Pure White & Burgundy Accents) -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-charcoal-200/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
      
      <!-- Brand Title (Exact Amogha Font & Single Line) -->
      <a href="#" class="flex items-center gap-2">
        <span class="font-serif text-2xl sm:text-3xl font-black text-burgundy-700 tracking-tight whitespace-nowrap">
          BLUE FOX
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-charcoal-700">
        <a href="#menu" class="hover:text-burgundy-700 transition">Our Menu</a>
        <a href="#specialities" class="hover:text-burgundy-700 transition">Buffet & Specialities</a>
        <a href="#about" class="hover:text-burgundy-700 transition">About</a>
        <a href="#gallery" class="hover:text-burgundy-700 transition">Ambience</a>
        <a href="#offers" class="hover:text-burgundy-700 transition">Offers</a>
        <a href="#location" class="hover:text-burgundy-700 transition">Location</a>
      </nav>

      <!-- Action Buttons -->
      <div class="hidden sm:flex items-center gap-3">
        <a href="tel:+919100942515" class="px-4 py-2 rounded-full border border-charcoal-300 text-charcoal-800 hover:bg-alabaster-100 font-bold text-xs transition">
          📞 +91 91009 42515
        </a>
        <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          Book Table (25% OFF)
        </a>
        <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          Order on Zomato
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" class="md:hidden p-2 text-charcoal-700 focus:outline-none" onclick="toggleMobileMenu()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobileMenu" class="hidden md:hidden bg-white border-b border-charcoal-200 px-4 py-4 space-y-3">
      <a href="#menu" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Our Menu</a>
      <a href="#specialities" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Buffet & Specialities</a>
      <a href="#about" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">About Blue Fox</a>
      <a href="#gallery" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Ambience Gallery</a>
      <a href="#offers" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Dining Offers</a>
      <a href="#location" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Location & Contact</a>
      <div class="pt-2 flex flex-col gap-2">
        <a href="tel:+919100942515" class="text-center py-2.5 rounded-full border border-charcoal-300 text-charcoal-800 font-bold text-xs">
          📞 +91 91009 42515
        </a>
        <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="text-center py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs">
          Book Table (25% OFF)
        </a>
        <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="text-center py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs">
          Order on Zomato
        </a>
      </div>
    </div>
  </header>

  <main class="flex-grow pt-[72px]">

    <!-- HERO SECTION (Exact Amogha Proportions, Single-Line Title, Uploaded Ambience Photo) -->
    <section class="relative min-h-[72vh] lg:min-h-[78vh] flex items-center justify-center pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Image: Uploaded Real Ambience Photo -->
      <div class="absolute inset-0 z-0 bg-ivory-100">
        <img src="${imgAmbience1}" alt="Blue Fox Fine Dining Hall Madhapur" class="w-full h-full object-cover brightness-[0.90] contrast-[1.03]" />
        <!-- Amogha Luxury Light Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-alabaster-100/95 via-alabaster-100/80 to-alabaster-100/60"></div>
        <div class="absolute inset-0 bg-white/30"></div>
      </div>

      <div class="relative z-10 max-w-5xl sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        <!-- Eyebrow Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-burgundy-200/80 text-burgundy-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5 shadow-sm backdrop-blur-md">
          <span>✨ Fine Dining & Grand Buffet • Madhapur</span>
          <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>Hyderabad</span>
        </div>

        <!-- Single-Line Heading (Exact Amogha Font & Placement) -->
        <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-burgundy-700 tracking-tight leading-none mb-4 whitespace-nowrap drop-shadow-sm">
          BLUE FOX
        </h1>

        <p class="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-800 font-semibold max-w-2xl mb-3 leading-snug">
          Fine Dining, Grand Buffet, North Indian & Continental Heritage
        </p>

        <p class="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal leading-relaxed max-w-2xl mb-7">
          A celebrated Madhapur dining landmark at Huda Techno Enclave for lavish multi-cuisine buffets, signature Apollo Fish, royal dum biryani, live grills, and full bar hospitality.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-8">
          <a href="#menu" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Menu (35+ Dishes) →
          </a>
          <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            📅 Book Table (Flat 25% OFF)
          </a>
          <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-50 text-charcoal-800 border border-charcoal-200 font-semibold text-sm shadow-sm transition">
            🛍️ Order Online
          </a>
        </div>

        <!-- Hero Information Chips -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-700">
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            ⭐ 3.8 Dining (323+ Reviews)
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            🍲 Lavish Lunch & Dinner Buffet
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            ✨ Famous Apollo Fish & Butter Chicken
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            🍺 Beer @ ₹155 (Pint)
          </span>
        </div>
      </div>
    </section>

    <!-- QUICK INFO STRIP (4-Column Amogha Operational Facts) -->
    <section class="bg-white border-y border-charcoal-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              🍲
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Cuisines & Dining</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">North Indian, Continental, Chinese & Mughlai</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Grand Lunch & Dinner Buffet Spread</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              ⏰
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Opening Hours</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">12:00 PM – 3:30 PM & 7:00 PM – 11:30 PM</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Open 7 days a week for Lunch & Dinner</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              ₹
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Average Cost</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">₹1,700 for two (approx.)</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Pint of beer starting at ₹155</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              📍
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Madhapur Location</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">Plot 20, Sector 1, Huda Techno Enclave</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Near Hitech City Metro Station</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHEF SPECIALITIES / RECOMMENDATIONS -->
    <section id="specialities" class="py-16 sm:py-20 bg-ivory-50/60 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>✨ Chef's Signature Recommendations</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Iconic Blue Fox Delicacies & Buffet
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            From our legendary spicy Apollo Fish and rich Butter Chicken to our lavish multi-cuisine executive buffet spread.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Dish 1 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgApolloFish}" alt="Blue Fox Famous Apollo Fish" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Legendary</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Chef Special</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Special Portion</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Blue Fox Famous Apollo Fish</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Crispy batter-fried boneless fish fillets tossed in rich spiced yogurt, fresh curry leaves, and green chillies. Hyderabad\'s legendary recipe.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹495</span>
                  <span class="text-xs text-charcoal-400 line-through">₹540</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 2 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgBuffetCounter}" alt="Blue Fox Grand Executive Lunch Buffet" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Grand Buffet</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Per Person</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Blue Fox Grand Executive Lunch Buffet</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Lavish multi-cuisine spread with 6+ live starters, soups, salads, North Indian gravies, biryani, continental pasta, and 8 dessert varieties.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹849</span>
                  <span class="text-xs text-charcoal-400 line-through">₹999</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 text-xs font-bold transition">
                  📅 Book Table
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 3 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgButterChicken}" alt="Classic Murgh Makhani Butter Chicken" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Classic Murgh Makhani (Butter Chicken)</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Tender tandoori chicken simmered in a velvety, buttery tomato gravy infused with kasuri methi and fresh farm cream.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <span class="text-xl font-black text-burgundy-700">₹495</span>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 4 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgBiryani}" alt="Royal Hyderabadi Mutton Dum Biryani" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Royal Heritage</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Royal Hyderabadi Mutton Dum Biryani</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Traditional slow-cooked kachchi gosht dum biryani with long basmati grains, saffron, fried onions, served with mirchi ka salan and raita.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <span class="text-xl font-black text-burgundy-700">₹540</span>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 5 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgPaneerTikka}" alt="Char-Grilled Zafrani Paneer Tikka" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">Pure Veg</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">6 Pieces</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Char-Grilled Zafrani Paneer Tikka</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Plump cottage cheese cubes layered with spiced bell peppers and onions, infused with saffron and cooked over glowing coals.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <span class="text-xl font-black text-burgundy-700">₹395</span>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 6 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgApricotDelight}" alt="Blue Fox Signature Apricot Delight" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">Pure Veg</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Signature</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Blue Fox Signature Apricot Delight</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Layered stewed Turkish apricots, sponge cake, and fresh thick vanilla cream with roasted almond slivers.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹240</span>
                  <span class="text-xs text-charcoal-400 line-through">₹280</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="#menu" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Complete Menu →
          </a>
        </div>
      </div>
    </section>

    <!-- FULL INTERACTIVE MENU SECTION (Search + Category Filter + Veg/Non-Veg) -->
    <section id="menu" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🍽️ Grand Multi-Cuisine Menu</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Explore Blue Fox Offerings
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            From iconic Andhra appetisers and royal curries to our grand multi-cuisine buffet spreads.
          </p>
        </div>

        <!-- Search & Dietary Filter -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div class="relative w-full sm:w-80">
            <input
              id="menuSearchInput"
              type="text"
              placeholder="Search Apollo Fish, Buffet, Biryani..."
              oninput="filterMenu()"
              class="w-full pl-10 pr-4 py-2.5 rounded-full border border-charcoal-200 bg-alabaster-50 focus:bg-white focus:outline-none focus:border-burgundy-600 text-sm text-charcoal-900 transition"
            />
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400">🔍</span>
          </div>

          <div class="inline-flex p-1 rounded-full bg-alabaster-100 border border-charcoal-200 text-xs font-semibold">
            <button onclick="setDiet('all')" id="diet-all" class="diet-btn px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition">
              All Items (${menuData.length})
            </button>
            <button onclick="setDiet('non-veg')" id="diet-non-veg" class="diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition">
              🔴 Non-Veg
            </button>
            <button onclick="setDiet('veg')" id="diet-veg" class="diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition">
              🟢 Pure Veg
            </button>
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <button onclick="setCategory('all')" id="cat-all" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-burgundy-700 text-white shadow-md shrink-0 transition">
            All Dishes
          </button>
          <button onclick="setCategory('buffet-specials')" id="cat-buffet-specials" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Grand Buffet Specials
          </button>
          <button onclick="setCategory('starters-appetizers')" id="cat-starters-appetizers" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Signature Starters
          </button>
          <button onclick="setCategory('main-curries')" id="cat-main-curries" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            North Indian & Mughlai Curries
          </button>
          <button onclick="setCategory('biryani-rice')" id="cat-biryani-rice" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Hyderabadi Biryani & Rice
          </button>
          <button onclick="setCategory('continental-pizza')" id="cat-continental-pizza" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Continental & Pizza
          </button>
          <button onclick="setCategory('chinese-oriental')" id="cat-chinese-oriental" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Chinese & Oriental
          </button>
          <button onclick="setCategory('desserts-beverages')" id="cat-desserts-beverages" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Desserts & Bar Beverages
          </button>
        </div>

        <!-- Menu Items Grid Container -->
        <div id="menuGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Populated by JavaScript -->
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION (Heritage, Buffet & Full Bar) -->
    <section id="about" class="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 relative">
            <div class="relative z-10 grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgPanoramicHall}" alt="Blue Fox Panoramic Hall" class="w-full h-52 sm:h-64 object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgBuffetCounter}" alt="Blue Fox Buffet" class="w-full h-40 sm:h-48 object-cover" />
                </div>
              </div>
              <div class="space-y-4 pt-6">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgEveningDining}" alt="Blue Fox Evening Ambient Dining" class="w-full h-44 sm:h-52 object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span class="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">3.8 ★</span>
                  <p class="text-xs uppercase tracking-widest font-semibold text-alabaster-100">323+ Dining Reviews</p>
                  <p class="text-[11px] text-alabaster-200 mt-2">Madhapur's Trusted Multi-Cuisine Destination</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <span>✨ The Blue Fox Tradition</span>
            </div>

            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              A Legacy of Fine Dining, Lavish Buffets & Warm Hospitality
            </h2>

            <p class="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located at <strong>Sector 1, Huda Techno Enclave, Madhapur</strong>, <strong>Blue Fox</strong> is an institution of gourmet multi-cuisine dining. Blending time-honoured North Indian tandoori mastercraft with famous Andhra specialities like Apollo Fish, classic Continental pastas, and our signature executive lunch and dinner buffets.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🏆</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Decades of Culinary Excellence</h4>
                  <p class="text-[11px] text-charcoal-500">A revered household brand in Hyderabad known for consistent quality, rich flavours, and warm hospitality.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🍲</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Extravagant Multi-Cuisine Buffet</h4>
                  <p class="text-[11px] text-charcoal-500">Daily lunch & dinner buffets featuring live starter stations, aromatic biryani, and rich dessert counters.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🍸</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Full Bar & Signature Cocktails</h4>
                  <p class="text-[11px] text-charcoal-500">Extensive spirits, draught beer pints at ₹155, and handcrafted cocktails in a relaxed dining atmosphere.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">👥</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Corporate & Family Friendly</h4>
                  <p class="text-[11px] text-charcoal-500">Spacious seating layouts accommodating family gatherings, corporate team lunches, and private parties.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <span>✅ Executive Buffet</span>
              <span>✅ Full Bar & Cocktails</span>
              <span>✅ Free Valet Parking</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REAL AMBIENCE GALLERY (Only Uploaded Restaurant Photos) -->
    <section id="gallery" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>📸 Authentic Dining Ambience</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Experience Blue Fox Madhapur
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Take a look inside our spacious fine dining halls, grand buffet spreads, and relaxed evening ambiance.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div class="sm:col-span-2 lg:col-span-2 group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgAmbience1}" alt="Main Fine Dining Hall" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Plush Seating & Elegant Decor</span>
              <h4 class="font-serif text-lg font-bold text-white">Main Fine Dining Hall</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgBuffetCounter}" alt="Grand Buffet Station" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Live Chafing Dishes & Copper Warmers</span>
              <h4 class="font-serif text-lg font-bold text-white">Grand Buffet Station</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgEveningDining}" alt="Evening Ambient Dining" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Soft Lighting & Modern Ceiling</span>
              <h4 class="font-serif text-lg font-bold text-white">Evening Ambient Dining</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgPanoramicHall}" alt="Panoramic Restaurant Hall" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Corporate & Family Friendly</span>
              <h4 class="font-serif text-lg font-bold text-white">Panoramic Restaurant Hall</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgEntranceLobby}" alt="Glass Entrance & Reception" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Sector 1 Huda Techno Enclave</span>
              <h4 class="font-serif text-lg font-bold text-white">Glass Entrance & Reception</h4>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/photos" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-800 border border-charcoal-300 font-bold text-sm shadow-sm transition">
            <span>View All Photos on Zomato ↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- OFFERS & PROMOTIONS (From Zomato Blue Fox Listing) -->
    <section id="offers" class="py-16 bg-ivory-50/70 px-4 sm:px-6 lg:px-8 border-t border-charcoal-200/80">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🏷️ Special Deals & Savings</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Exclusive Dining & Table Offers
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Take advantage of exclusive discounts when pre-booking your table or ordering online.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Pre-Book Offer</span>
                <span class="text-xl">📅</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Flat 25% OFF on Dining Bill</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Reserve your table on Zomato in advance. Valid for dinner dining from 8:00 PM to 11:30 PM.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: PREBOOK25</span>
              <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Book Table →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Instant Offer</span>
                <span class="text-xl">💳</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Flat 15% OFF via Zomato Pay</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Instant flat 15% discount on bill payments made directly through Zomato dining payment.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: INSTANT15</span>
              <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Pay Bill →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Bank Offer</span>
                <span class="text-xl">🏦</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">25% OFF up to ₹5,000</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Exclusive savings on dining bills using RBL Bank LUMIÈRE Credit Card and partner bank cards.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: RBL25</span>
              <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Check Offers →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Surprise Reward</span>
                <span class="text-xl">🎁</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">FLAT ₹175 OFF + Scratch Card</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Receive an instant surprise scratch card reward and flat ₹175 voucher on every dining transaction.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: REWARD175</span>
              <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">View Rewards →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ORDER ONLINE & TABLE RESERVATIONS -->
    <section id="order" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🛍️ Reservations & Orders</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Reserve Your Table or Order Online
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Enjoy Blue Fox's celebrated cuisine at our Madhapur restaurant or delivered to your doorstep.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Flat 25% OFF</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Table Reservation</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Pre-book on Zomato</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Reserve your dining table or corporate party booth in advance and unlock flat 25% OFF on total dining bill.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-gold-500 hover:bg-gold-600 text-burgundy-950">
              Book a Table (25% OFF) →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Fast Delivery</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Zomato Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Online Delivery & Takeaway</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Get hot Apollo fish, butter chicken, and biryani delivered quickly across Madhapur, Hitech City & Jubilee Hills.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-[#CB202D] hover:bg-[#b01a25] text-white">
              Order on Zomato →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Quick Delivery</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Swiggy Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Doorstep Delivery</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Order your favourite Blue Fox specialties comfortably through Swiggy with live GPS tracking.</p>
            </div>
            <a href="https://www.swiggy.com/restaurants/blue-fox-madhapur-hyderabad" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-[#FC8019] hover:bg-[#e67312] text-white">
              Order on Swiggy →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Instant Support</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Direct Phone Call</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Buffet Booking & Banquets</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Planning a corporate lunch, family celebration or group buffet? Call our banquet team directly.</p>
            </div>
            <a href="tel:+919100942515" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-charcoal-900 hover:bg-charcoal-800 text-white">
              Call +91 91009 42515 →
            </a>
          </div>
        </div>

        <!-- Executive Buffet Banner -->
        <div class="p-6 rounded-2xl bg-burgundy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="flex items-center gap-4 text-center md:text-left">
            <span class="text-3xl">🍲</span>
            <div>
              <h4 class="font-serif text-lg sm:text-xl font-bold text-white mb-0.5">
                Executive Lunch & Dinner Buffets Daily
              </h4>
              <p class="text-xs sm:text-sm text-alabaster-200">
                Extensive multi-cuisine spreads with live starters, biryani, and desserts. Ideal for team lunches and gatherings.
              </p>
            </div>
          </div>
          <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs sm:text-sm transition shadow-md">
            📅 Pre-Book Buffet Table
          </a>
        </div>
      </div>
    </section>

    <!-- LOCATION & ADDRESS (Warm Light Brown Background #F4ECE1 with High-Contrast Dark Text & 3 Info Cards Below Map) -->
    <section id="location" class="py-16 sm:py-20 bg-[#F4ECE1] border-t border-[#D8C5AE] px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-100 border border-burgundy-300 text-burgundy-900 text-xs font-bold tracking-widest uppercase mb-3">
            <span>📍 Visit Us in Madhapur</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mb-4">
            Find Blue Fox
          </h2>
          <p className="text-charcoal-800 text-sm sm:text-base font-medium">
            Conveniently situated in Sector 1, Huda Techno Enclave, Madhapur, Hyderabad.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <!-- Address & Details Card -->
          <div class="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-2xl font-black text-burgundy-800 mb-4">
                Blue Fox Madhapur
              </h3>

              <div class="space-y-4 text-sm text-charcoal-800 mb-6">
                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">📍</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Address:</strong>
                    <p class="text-charcoal-800 leading-relaxed font-normal">
                      Plot 20, Sector 1, Huda Techno Enclave, Madhapur, Hyderabad, Telangana 500081
                    </p>
                    <p class="text-xs text-charcoal-600 mt-1 font-medium">
                      Landmark: Sector 1, Huda Techno Enclave, Near Hitech City Metro, Madhapur
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">⏰</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Dining Hours:</strong>
                    <p class="text-charcoal-800 font-medium">
                      Lunch: 12:00 PM – 3:30 PM
                    </p>
                    <p class="text-charcoal-800 font-medium">
                      Dinner: 7:00 PM – 11:30 PM
                    </p>
                    <p class="text-xs font-semibold text-emerald-700 mt-0.5">
                      Open 7 Days a Week
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">📞</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Direct Contact:</strong>
                    <a href="tel:+919100942515" class="text-burgundy-800 hover:text-burgundy-950 font-bold">
                      +91 91009 42515
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row gap-3">
              <a href="https://maps.google.com/?q=Blue+Fox+Plot+20+Sector+1+Huda+Techno+Enclave+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-md transition">
                🧭 Get Directions
              </a>
              <a href="tel:+919100942515" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-alabaster-100 hover:bg-alabaster-200 text-charcoal-900 border border-charcoal-300 font-bold text-xs transition">
                📞 Call Restaurant
              </a>
            </div>
          </div>

          <!-- Google Maps Iframe Embed -->
          <div class="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-charcoal-200 shadow-md h-80 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=Blue+Fox+Madhapur+Huda+Techno+Enclave+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Blue Fox Google Maps Location"
            ></iframe>
          </div>
        </div>

        <!-- 3 High-Contrast Info Cards Directly Below the Map -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">🚗</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Free Valet & Parking
              </h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              Complimentary valet parking and ample parking space available for both cars and two-wheelers.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">🍸</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Full Bar & Beverages
              </h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              Full bar license with chilled draught beer starting @ ₹155, fine wines, and signature cocktails.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">🍽️</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Corporate & Family Halls
              </h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              Spacious fine dining halls and semi-private dining enclosures for business lunches and family gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-burgundy-950 text-white border-t border-burgundy-900 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div class="space-y-4">
          <h3 class="font-serif text-2xl font-black text-gold-400">BLUE FOX</h3>
          <p class="text-xs text-alabaster-200 leading-relaxed">
            Hyderabad's iconic multi-cuisine destination at Huda Techno Enclave, Madhapur. Renowned for grand executive buffets, signature Apollo Fish, North Indian gravies, and full bar hospitality.
          </p>
          <div class="flex items-center gap-3 text-xs text-gold-400 font-semibold">
            <span>⭐ 3.8 Dining (323+ Reviews) • 4.0 Delivery</span>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Explore & Dine</h4>
          <ul class="space-y-2.5 text-xs text-alabaster-200">
            <li><a href="#menu" class="hover:text-white transition">Complete Menu (35+ Items)</a></li>
            <li><a href="#specialities" class="hover:text-white transition">Grand Lunch & Dinner Buffet</a></li>
            <li><a href="#about" class="hover:text-white transition">Our Culinary Legacy</a></li>
            <li><a href="#gallery" class="hover:text-white transition">Ambience & Dining Halls</a></li>
            <li><a href="#offers" class="hover:text-white transition">Table Booking & Bank Offers</a></li>
            <li><a href="#location" class="hover:text-white transition">Directions & Parking</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Timings & Details</h4>
          <div class="space-y-2.5 text-xs text-alabaster-200">
            <p><strong>Lunch Buffet:</strong> 12:00 PM – 3:30 PM</p>
            <p><strong>Dinner & Bar:</strong> 7:00 PM – 11:30 PM</p>
            <p><strong>Reservations:</strong> +91 91009 42515</p>
            <p><strong>Cost for Two:</strong> ₹1,700 approx.</p>
            <p><strong>Pint of Beer:</strong> ₹155 approx.</p>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Table Booking & Delivery</h4>
          <div class="flex flex-col gap-2.5">
            <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 text-xs font-bold text-center transition">
              Pre-Book Table (Flat 25% OFF)
            </a>
            <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="px-4 py-2 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-white text-xs font-bold text-center transition">
              Order on Zomato
            </a>
            <a href="https://www.swiggy.com/restaurants/blue-fox-madhapur-hyderabad" target="_blank" class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition">
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-burgundy-900 text-center text-xs text-alabaster-300">
        <p>© 2026 Blue Fox. Plot 20, Sector 1, Huda Techno Enclave, Madhapur, Hyderabad, Telangana 500081. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- MOBILE BOTTOM STICKY QUICK BAR -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-charcoal-200 p-2.5 flex items-center gap-2 shadow-2xl">
    <a href="tel:+919100942515" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      📞 Call
    </a>
    <a href="https://maps.google.com/?q=Blue+Fox+Plot+20+Sector+1+Huda+Techno+Enclave+Madhapur+Hyderabad" target="_blank" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      📍 Map
    </a>
    <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/book" target="_blank" class="flex-1 py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      Book Table
    </a>
    <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" class="flex-1 py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      Order
    </a>
  </div>

  <!-- INTERACTIVE JAVASCRIPT FOR MENU FILTERING -->
  <script>
    const allMenuData = ${JSON.stringify(menuData)};
    let currentCategory = 'all';
    let currentDiet = 'all';

    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    function setCategory(catId) {
      currentCategory = catId;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = 'cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition';
      });
      const activeBtn = document.getElementById('cat-' + catId);
      if (activeBtn) {
        activeBtn.className = 'cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-burgundy-700 text-white shadow-md shrink-0 transition';
      }
      renderMenuItems();
    }

    function setDiet(diet) {
      currentDiet = diet;
      document.querySelectorAll('.diet-btn').forEach(btn => {
        btn.className = 'diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition';
      });
      const activeBtn = document.getElementById('diet-' + diet);
      if (activeBtn) {
        activeBtn.className = 'diet-btn px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition';
      }
      renderMenuItems();
    }

    function filterMenu() {
      renderMenuItems();
    }

    function renderMenuItems() {
      const query = (document.getElementById('menuSearchInput').value || '').toLowerCase().trim();
      const grid = document.getElementById('menuGrid');

      const filtered = allMenuData.filter(item => {
        if (currentCategory !== 'all' && item.category !== currentCategory) return false;
        if (currentDiet === 'veg' && !item.isVeg) return false;
        if (currentDiet === 'non-veg' && item.isVeg) return false;
        if (query) {
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description.toLowerCase().includes(query);
          if (!matchName && !matchDesc) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-16 bg-alabaster-50 rounded-2xl border border-charcoal-200"><p class="text-charcoal-500 font-medium">No dishes match your selection.</p></div>';
        return;
      }

      grid.innerHTML = filtered.map(item => {
        return \`
          <div class="bg-white rounded-xl p-5 border border-charcoal-200/80 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-start justify-between gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 \${item.isVeg ? 'border-emerald-600' : 'border-burgundy-600'}">
                    <span class="w-1.5 h-1.5 rounded-full \${item.isVeg ? 'bg-emerald-600' : 'bg-burgundy-600'}"></span>
                  </span>
                  <h4 class="font-serif font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors text-base">\${item.name}</h4>
                </div>
              </div>

              <div class="flex flex-wrap gap-1.5 mb-2">
                \${item.isBestseller ? '<span class="px-2 py-0.5 rounded bg-burgundy-50 text-burgundy-700 border border-burgundy-200 text-[10px] font-bold uppercase">Bestseller</span>' : ''}
                \${item.isSpecial ? '<span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">Chef Special</span>' : ''}
                \${item.portion ? '<span class="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-600 text-[10px] font-medium">' + item.portion + '</span>' : ''}
              </div>

              <p class="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">\${item.description}</p>
            </div>

            <div class="pt-3 border-t border-charcoal-100 flex items-center justify-between mt-auto">
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-black text-burgundy-700">₹\${item.price}</span>
                \${item.originalPrice ? '<span class="text-xs text-charcoal-400 line-through">₹' + item.originalPrice + '</span>' : ''}
              </div>

              <a href="https://www.zomato.com/hyderabad/blue-fox-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                🛍️ Order
              </a>
            </div>
          </div>
        \`;
      }).join('');
    }

    // Initial render
    renderMenuItems();
  </script>
</body>
</html>
`;

console.log('Writing standalone HTML file to Downloads and Artifacts...');
fs.writeFileSync(outputHtmlPath, htmlContent, 'utf-8');
fs.writeFileSync(artifactHtmlPath, htmlContent, 'utf-8');
console.log('Successfully generated standalone blue-fox.html!');
