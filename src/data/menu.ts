export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpecial?: boolean;
  portion?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Dishes' },
  { id: 'buffet-specials', name: 'Grand Buffet Specials' },
  { id: 'starters-appetizers', name: 'Signature Starters' },
  { id: 'main-curries', name: 'North Indian & Mughlai Curries' },
  { id: 'biryani-rice', name: 'Hyderabadi Biryani & Rice' },
  { id: 'continental-pizza', name: 'Continental & Pizza' },
  { id: 'chinese-oriental', name: 'Chinese & Oriental' },
  { id: 'desserts-beverages', name: 'Desserts & Bar Beverages' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Grand Buffet Specials
  {
    id: 'bf1',
    name: 'Blue Fox Grand Executive Lunch Buffet',
    category: 'buffet-specials',
    price: 849,
    originalPrice: 999,
    description: 'Lavish multi-cuisine spread with 6+ live starters, soups, salads, North Indian gravies, biryani, continental pasta, and 8 dessert varieties.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Per Person',
    image: '/images/blue_fox_buffet_counter.webp'
  },
  {
    id: 'bf2',
    name: 'Royal Weekend Dinner Buffet Spread',
    category: 'buffet-specials',
    price: 949,
    originalPrice: 1099,
    description: 'Extravagant weekend dinner buffet featuring tandoori grills, Apollo fish live station, mutton dum biryani, live pasta counter, and premium ice creams.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Per Person',
    image: '/images/blue_fox_buffet_counter.webp'
  },
  {
    id: 'bf3',
    name: 'Pure Vegetarian Executive Buffet',
    category: 'buffet-specials',
    price: 749,
    description: 'Delightful vegetarian banquet spread featuring paneer tikka, corn cheese balls, veg biryani, dal makhani, and assorted Indian sweets.',
    isVeg: true,
    isBestseller: true,
    portion: 'Per Person',
    image: '/images/blue_fox_buffet_counter.webp'
  },

  // Signature Starters
  {
    id: 'st1',
    name: 'Blue Fox Famous Apollo Fish',
    category: 'starters-appetizers',
    price: 495,
    originalPrice: 540,
    description: 'Crispy batter-fried boneless fish fillets tossed in rich spiced yogurt, fresh curry leaves, and green chillies. Hyderabad\'s legendary recipe.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Chef Special',
    image: '/images/dish_apollo_fish.jpg'
  },
  {
    id: 'st2',
    name: 'Bhatti Da Murgh Tandoori (Full)',
    category: 'starters-appetizers',
    price: 520,
    description: 'Tender chicken marinated overnight in Kashmiri deggi mirch, hung curd, and roasted whole spices, char-grilled in a clay oven.',
    isVeg: false,
    isBestseller: true,
    portion: '4 Large Pieces',
    image: '/images/dish_tandoori_starters.jpg'
  },
  {
    id: 'st3',
    name: 'Char-Grilled Zafrani Paneer Tikka',
    category: 'starters-appetizers',
    price: 395,
    description: 'Plump cottage cheese cubes layered with spiced bell peppers and onions, infused with saffron and cooked over glowing coals.',
    isVeg: true,
    isBestseller: true,
    portion: '6 Pieces',
    image: '/images/dish_paneer_tikka.jpg'
  },
  {
    id: 'st4',
    name: 'Crispy Chilli Chicken (Indo-Chinese)',
    category: 'starters-appetizers',
    price: 440,
    description: 'Wok-tossed battered crispy chicken chunks with bell peppers, spring onions, and garlic in a dark soya chilli glaze.',
    isVeg: false,
    portion: 'Serves 1-2',
    image: '/images/dish_chinese_fried_rice.jpg'
  },
  {
    id: 'st5',
    name: 'Corn Cheese Kurkure Croquettes',
    category: 'starters-appetizers',
    price: 345,
    description: 'Crispy golden fried sweet corn and molten cheese croquettes served with spicy cocktail dip.',
    isVeg: true,
    portion: '6 Pieces'
  },

  // North Indian & Mughlai Curries
  {
    id: 'cu1',
    name: 'Classic Murgh Makhani (Butter Chicken)',
    category: 'main-curries',
    price: 495,
    originalPrice: 530,
    description: 'Tender tandoori chicken simmered in a velvety, buttery tomato gravy infused with kasuri methi and fresh farm cream.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 2',
    image: '/images/dish_butter_chicken.jpg'
  },
  {
    id: 'cu2',
    name: 'Kashmiri Mutton Rogan Josh',
    category: 'main-curries',
    price: 560,
    description: 'Prime cuts of tender mutton slow-braised with aromatic ratan jot, fennel powder, Kashmiri dry red chillies, and ginger.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 2',
    image: '/images/dish_butter_chicken.jpg'
  },
  {
    id: 'cu3',
    name: 'Shahi Paneer Lababdar',
    category: 'main-curries',
    price: 410,
    description: 'Fresh cottage cheese cubes cooked in a rich onion-tomato chunky gravy with grated paneer and cream.',
    isVeg: true,
    isBestseller: true,
    portion: 'Serves 2',
    image: '/images/dish_paneer_tikka.jpg'
  },
  {
    id: 'cu4',
    name: 'Dal Makhani Blue Fox Special',
    category: 'main-curries',
    price: 360,
    description: 'Black lentils and red kidney beans slow-cooked for 18 hours on charcoal embers with white butter and fresh cream.',
    isVeg: true,
    portion: 'Serves 2'
  },
  {
    id: 'cu5',
    name: 'Butter Garlic Naan / Laccha Paratha Basket',
    category: 'main-curries',
    price: 180,
    description: 'Assorted basket containing garlic naan, butter naan, and flaky laccha paratha freshly baked in tandoor.',
    isVeg: true,
    portion: 'Basket of 3'
  },

  // Hyderabadi Biryani & Rice
  {
    id: 'bi1',
    name: 'Royal Hyderabadi Mutton Dum Biryani',
    category: 'biryani-rice',
    price: 540,
    originalPrice: 580,
    description: 'Traditional slow-cooked kachchi gosht dum biryani with long basmati grains, saffron, fried onions, served with mirchi ka salan and raita.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2',
    image: '/images/dish_hyderabadi_biryani.jpg'
  },
  {
    id: 'bi2',
    name: 'Special Chicken Dum Biryani',
    category: 'biryani-rice',
    price: 440,
    description: 'Authentic Hyderabadi spiced chicken dum biryani infused with pure ghee, mint, and whole spices.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/dish_hyderabadi_biryani.jpg'
  },
  {
    id: 'bi3',
    name: 'Nizami Subz Dum Biryani',
    category: 'biryani-rice',
    price: 360,
    description: 'Layered basmati rice with farm fresh vegetables, paneer cubes, and roasted cashews cooked on gentle dum.',
    isVeg: true,
    portion: 'Serves 1-2'
  },
  {
    id: 'bi4',
    name: 'Jeera Ghee Rice with Dal Tadka',
    category: 'biryani-rice',
    price: 310,
    description: 'Fragrant basmati tempered with cumin seeds and desi ghee served with homestyle yellow dal tadka.',
    isVeg: true,
    portion: 'Serves 1-2'
  },

  // Continental & Pizza
  {
    id: 'co1',
    name: 'Creamy Alfredo Fettuccine Pasta (Chicken / Veg)',
    category: 'continental-pizza',
    price: 460,
    description: 'Classic rich parmesan cream sauce with sauteed garlic mushrooms, herb-grilled chicken breast, and crispy garlic bread.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/dish_continental_pasta.jpg'
  },
  {
    id: 'co2',
    name: 'Gourmet Woodfired Chicken & Jalapeno Pizza',
    category: 'continental-pizza',
    price: 495,
    description: 'Handcrafted thin crust with San Marzano tomato sauce, mozzarella, smoked barbecue chicken, and pickled jalapenos.',
    isVeg: false,
    portion: '11 Inch',
    image: '/images/dish_gourmet_pizza.jpg'
  },
  {
    id: 'co3',
    name: 'Margherita Quattro Formaggi Pizza',
    category: 'continental-pizza',
    price: 420,
    description: 'Artisanal cheese pizza loaded with mozzarella, cheddar, gouda, and fresh basil leaves.',
    isVeg: true,
    portion: '11 Inch',
    image: '/images/dish_gourmet_pizza.jpg'
  },

  // Chinese & Oriental
  {
    id: 'ch1',
    name: 'Wok-Tossed Chicken Fried Rice & Chilli Chicken Gravy',
    category: 'chinese-oriental',
    price: 480,
    description: 'Wok-tossed jasmine rice with shredded chicken, eggs, scallions paired with spicy Chinese chilli gravy.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/dish_chinese_fried_rice.jpg'
  },
  {
    id: 'ch2',
    name: 'Chilli Garlic Hakka Noodles (Veg / Chicken)',
    category: 'chinese-oriental',
    price: 370,
    description: 'Handmade noodles stir-fried with crunchy cabbage, capsicum, burnt garlic, and red chilli oil.',
    isVeg: true,
    portion: 'Serves 1-2'
  },

  // Desserts & Bar Beverages
  {
    id: 'db1',
    name: 'Blue Fox Signature Apricot Delight',
    category: 'desserts-beverages',
    price: 240,
    originalPrice: 280,
    description: 'Layered stewed Turkish apricots, sponge cake, and fresh thick vanilla cream with roasted almond slivers.',
    isVeg: true,
    isBestseller: true,
    isSpecial: true,
    portion: 'Per Portion',
    image: '/images/dish_apricot_delight.jpg'
  },
  {
    id: 'db2',
    name: 'Sizzling Hot Walnut Brownie with Ice Cream',
    category: 'desserts-beverages',
    price: 260,
    description: 'Fudge chocolate brownie on a smoking cast iron sizzler plate topped with vanilla bean gelato and dark chocolate fudge.',
    isVeg: true,
    isBestseller: true,
    portion: 'Per Portion'
  },
  {
    id: 'db3',
    name: 'Chilled Draught Beer (Pint)',
    category: 'desserts-beverages',
    price: 155,
    description: 'Crisp, ice-cold fresh draught beer pint served straight from the tap.',
    isVeg: true,
    isSpecial: true,
    portion: '330 ml Pint'
  },
  {
    id: 'db4',
    name: 'Blue Fox Classic Long Island Iced Tea',
    category: 'desserts-beverages',
    price: 475,
    description: 'Signature cocktail blending five spirits with citrus splash and cola float.',
    isVeg: true,
    portion: 'Glass'
  },
  {
    id: 'db5',
    name: 'Virgin Blue Lagoon Mocktail',
    category: 'desserts-beverages',
    price: 195,
    description: 'Refreshing blue curacao syrup, sparkling lemonade, and crushed mint over ice.',
    isVeg: true,
    portion: 'Glass'
  }
];
