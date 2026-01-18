export interface EventItem {
  id: string;
  day: string;
  type: "food" | "music";
  name: string;
  description?: string;
  time?: string;
}

export const weeklyEvents: EventItem[] = [
  // Thursday
  {
    id: "thu-food",
    day: "Thursday",
    type: "food",
    name: "Rotating Food Truck",
    description: "Check our social media for this week's food truck!",
    time: "5pm - 8pm",
  },
  // Friday
  {
    id: "fri-food",
    day: "Friday",
    type: "food",
    name: "Featured Food Truck",
    description: "A variety of local favorites",
    time: "5pm - 9pm",
  },
  {
    id: "fri-music",
    day: "Friday",
    type: "music",
    name: "Live Music",
    description: "Local artists and bands",
    time: "7pm - 10pm",
  },
  // Saturday
  {
    id: "sat-food",
    day: "Saturday",
    type: "food",
    name: "Food Truck",
    description: "Great food to pair with great beer",
    time: "1pm - 9pm",
  },
  {
    id: "sat-music",
    day: "Saturday",
    type: "music",
    name: "Live Entertainment",
    description: "Music throughout the evening",
    time: "6pm - 10pm",
  },
  // Sunday
  {
    id: "sun-food",
    day: "Sunday",
    type: "food",
    name: "Sunday Food Truck",
    description: "Perfect for a relaxing afternoon",
    time: "1pm - 6pm",
  },
];

export const getEventsByDay = (day: string) =>
  weeklyEvents.filter((event) => event.day === day);

export const getEventsByType = (type: EventItem["type"]) =>
  weeklyEvents.filter((event) => event.type === type);
