export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  category: "leadership" | "operations" | "brewing" | "vip" | "crew";
}

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: "barry-boyd",
    name: "Barry Boyd",
    role: "Founder",
    bio: "Barry's passion for craft beer led him to establish Barley Naked Brewing Company. With a vision for creating a welcoming community space where great beer brings people together, Barry has built a brewery that reflects his commitment to quality and hospitality.",
    image: "/team/Barry Boyd.webp",
    category: "leadership",
  },
  {
    id: "missy-boyd",
    name: "Missy Boyd",
    role: "Owner",
    bio: "Missy brings business acumen and a warm, welcoming spirit to Barley Naked. She ensures every guest feels at home and helps maintain the friendly, family-oriented atmosphere that defines the taproom.",
    image: "/team/Missy Boyd.webp",
    category: "leadership",
  },
  // Operations
  {
    id: "gary-preston",
    name: "Gary Preston",
    role: "Operations Manager",
    bio: "Gary keeps everything running smoothly behind the scenes. From coordinating events to managing day-to-day operations, he ensures the taproom experience is consistently excellent.",
    image: "/team/Gary Preston.webp",
    category: "operations",
  },
  // Brewing Team
  {
    id: "brady-fox",
    name: "Brady Fox",
    role: "Head Brewer",
    bio: "Brady crafts each batch with precision and creativity. His extensive brewing knowledge and innovative approach have produced award-winning beers that keep customers coming back for more.",
    image: "/team/Brady Fox.webp",
    category: "brewing",
  },
  {
    id: "bri-boyd",
    name: "Bri Boyd",
    role: "Assistant Brewer",
    bio: "Bri brings fresh energy and ideas to the brewing team. Learning the craft while contributing to recipe development, she's an integral part of what makes our beers special.",
    image: "/team/Bri Boyd.webp",
    category: "brewing",
  },
  // VIPs - The Dogs
  {
    id: "vips",
    name: "Barley & Hops",
    role: "Chief Happiness Officers",
    bio: "Our beloved brewery mascots greet guests with wagging tails and remind everyone that the best moments are shared with good company. They keep morale high and ensure everyone knows they're welcome at Barley Naked.",
    image: "/team/VIPs.webp",
    category: "vip",
  },
  // Brew Crew
  {
    id: "allie",
    name: "Allie",
    role: "Brew Crew",
    bio: "",
    image: "/team/Allie.webp",
    category: "crew",
  },
  {
    id: "ashley",
    name: "Ashley",
    role: "Brew Crew",
    bio: "",
    image: "/team/Ashley.webp",
    category: "crew",
  },
  {
    id: "carlea",
    name: "Carlea",
    role: "Brew Crew",
    bio: "",
    image: "/team/Carlea.webp",
    category: "crew",
  },
  {
    id: "connor",
    name: "Connor",
    role: "Brew Crew",
    bio: "",
    image: "/team/Connor.webp",
    category: "crew",
  },
  {
    id: "dan",
    name: "Dan",
    role: "Brew Crew",
    bio: "",
    image: "/team/Dan.webp",
    category: "crew",
  },
  {
    id: "emily",
    name: "Emily",
    role: "Brew Crew",
    bio: "",
    image: "/team/Emily.webp",
    category: "crew",
  },
  {
    id: "graham",
    name: "Graham",
    role: "Brew Crew",
    bio: "",
    image: "/team/Graham.webp",
    category: "crew",
  },
  {
    id: "heather",
    name: "Heather",
    role: "Brew Crew",
    bio: "",
    image: "/team/Heather.webp",
    category: "crew",
  },
  {
    id: "john",
    name: "John",
    role: "Brew Crew",
    bio: "",
    image: "/team/John.webp",
    category: "crew",
  },
  {
    id: "peyton",
    name: "Peyton",
    role: "Brew Crew",
    bio: "",
    image: "/team/Peyton.webp",
    category: "crew",
  },
  {
    id: "sarah",
    name: "Sarah",
    role: "Brew Crew",
    bio: "",
    image: "/team/Sarah.webp",
    category: "crew",
  },
  {
    id: "teagan",
    name: "Teagan",
    role: "Brew Crew",
    bio: "",
    image: "/team/Teagan.webp",
    category: "crew",
  },
];

export const getTeamByCategory = (category: TeamMember["category"]) =>
  teamMembers.filter((member) => member.category === category);
