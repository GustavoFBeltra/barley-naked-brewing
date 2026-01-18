export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  category: "leadership" | "operations" | "brewing" | "vip" | "crew";
}

export const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: "barry-boyd",
    name: "Barry Boyd",
    role: "Founder",
    bio: "Barry's passion for craft beer led him to establish Barley Naked Brewing Company. With a vision for creating a welcoming community space where great beer brings people together, Barry has built a brewery that reflects his commitment to quality and hospitality.",
    category: "leadership",
  },
  {
    id: "missy-boyd",
    name: "Missy Boyd",
    role: "Owner",
    bio: "Missy brings business acumen and a warm, welcoming spirit to Barley Naked. She ensures every guest feels at home and helps maintain the friendly, family-oriented atmosphere that defines the taproom.",
    category: "leadership",
  },
  // Operations
  {
    id: "gary-preston",
    name: "Gary Preston",
    role: "Operations Manager",
    bio: "Gary keeps everything running smoothly behind the scenes. From coordinating events to managing day-to-day operations, he ensures the taproom experience is consistently excellent.",
    category: "operations",
  },
  // Brewing Team
  {
    id: "brady-fox",
    name: "Brady Fox",
    role: "Head Brewer",
    bio: "Brady crafts each batch with precision and creativity. His extensive brewing knowledge and innovative approach have produced award-winning beers that keep customers coming back for more.",
    category: "brewing",
  },
  {
    id: "bri-boyd",
    name: "Bri Boyd",
    role: "Assistant Brewer",
    bio: "Bri brings fresh energy and ideas to the brewing team. Learning the craft while contributing to recipe development, she's an integral part of what makes our beers special.",
    category: "brewing",
  },
  // VIPs - The Dogs
  {
    id: "barley",
    name: "Barley",
    role: "Chief Happiness Officer",
    bio: "One half of our beloved brewery mascots. Barley greets guests with a wagging tail and reminds everyone that the best moments are shared with good company.",
    category: "vip",
  },
  {
    id: "hops",
    name: "Hops",
    role: "Director of Belly Rubs",
    bio: "The other half of our dynamic duo. Hops keeps morale high and ensures everyone knows they're welcome at Barley Naked.",
    category: "vip",
  },
];

export const getTeamByCategory = (category: TeamMember["category"]) =>
  teamMembers.filter((member) => member.category === category);
