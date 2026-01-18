export interface Beer {
  id: string;
  name: string;
  style: string;
  description: string;
  abv: number;
  ibu?: number;
  awards?: string[];
  category: "flagship" | "seasonal" | "specialty" | "seltzer";
  isGlutenFree?: boolean;
  featured?: boolean;
}

export const beers: Beer[] = [
  // Flagship Beers
  {
    id: "naked-blonde",
    name: "Naked Blonde",
    style: "American Blonde Ale",
    description: "Our flagship blonde ale. Light, crisp, and refreshing with subtle malt sweetness and a clean finish. Perfect for any occasion.",
    abv: 5.2,
    ibu: 18,
    category: "flagship",
    featured: true,
  },
  {
    id: "barebones-ipa",
    name: "Barebones IPA",
    style: "American IPA",
    description: "A well-balanced IPA featuring citrus and pine hop characteristics with a solid malt backbone. Bold but approachable.",
    abv: 6.8,
    ibu: 65,
    category: "flagship",
    featured: true,
  },
  {
    id: "au-naturel-amber",
    name: "Au Naturel Amber",
    style: "American Amber Ale",
    description: "A malt-forward amber with caramel and toasted notes balanced by a moderate hop bitterness. Smooth and sessionable.",
    abv: 5.5,
    ibu: 28,
    category: "flagship",
  },
  {
    id: "full-monty-stout",
    name: "Full Monty Stout",
    style: "Irish Dry Stout",
    description: "Rich and roasty with notes of coffee and dark chocolate. Creamy mouthfeel with a dry finish.",
    abv: 4.8,
    ibu: 35,
    category: "flagship",
    featured: true,
  },
  {
    id: "birthday-suit-wheat",
    name: "Birthday Suit Wheat",
    style: "American Wheat Ale",
    description: "Light and hazy wheat ale with hints of citrus and a soft, pillowy body. Refreshingly smooth.",
    abv: 4.9,
    ibu: 15,
    category: "flagship",
  },
  {
    id: "skinny-dipper-pilsner",
    name: "Skinny Dipper Pilsner",
    style: "German Pilsner",
    description: "Crisp and clean with noble hop character. Brewed in traditional German style for ultimate refreshment.",
    abv: 4.7,
    ibu: 32,
    category: "flagship",
  },
  // Specialty/Seasonal
  {
    id: "exposed-hazy",
    name: "Exposed Hazy IPA",
    style: "New England IPA",
    description: "Juicy and hazy with tropical fruit notes of mango, pineapple, and citrus. Low bitterness with a soft mouthfeel.",
    abv: 6.5,
    ibu: 40,
    awards: ["Gold Medal - Virginia Craft Beer Cup 2023"],
    category: "specialty",
    featured: true,
  },
  {
    id: "bare-minimum-lager",
    name: "Bare Minimum Lager",
    style: "American Light Lager",
    description: "Light and easy-drinking lager with minimal calories. Crisp, clean, and crushable.",
    abv: 4.0,
    ibu: 10,
    category: "seasonal",
  },
  {
    id: "stripped-down-porter",
    name: "Stripped Down Porter",
    style: "Robust Porter",
    description: "Dark and complex with flavors of chocolate, caramel, and a hint of smoke. Medium-bodied and satisfying.",
    abv: 5.8,
    ibu: 30,
    category: "specialty",
  },
  {
    id: "unclothed-kolsch",
    name: "Unclothed Kolsch",
    style: "German Kolsch",
    description: "Bright, light, and delicately fruity. A traditional German-style ale that drinks like a lager.",
    abv: 4.8,
    ibu: 20,
    category: "seasonal",
  },
  // Seltzers
  {
    id: "barely-there-mango",
    name: "Barely There Mango",
    style: "Hard Seltzer",
    description: "Light and refreshing hard seltzer with natural mango flavor. Zero sugar, low carb.",
    abv: 5.0,
    category: "seltzer",
    isGlutenFree: true,
  },
  {
    id: "barely-there-lime",
    name: "Barely There Lime",
    style: "Hard Seltzer",
    description: "Crisp hard seltzer with zesty lime flavor. Perfect for a refreshing alternative.",
    abv: 5.0,
    category: "seltzer",
    isGlutenFree: true,
  },
  {
    id: "barely-there-berry",
    name: "Barely There Mixed Berry",
    style: "Hard Seltzer",
    description: "A blend of natural berry flavors in a light, bubbly seltzer. Low calorie and gluten-free.",
    abv: 5.0,
    category: "seltzer",
    isGlutenFree: true,
  },
];

export const getFeaturedBeers = () => beers.filter((beer) => beer.featured);
export const getBeersByCategory = (category: Beer["category"]) =>
  beers.filter((beer) => beer.category === category);
