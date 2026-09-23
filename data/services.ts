export interface Service {
  title: string;
  short: string;
  items: string[];
}

export const servicesList: Service[] = [
  {
    title: "Brand Identity",
    short: "Logos and visual systems that give a brand a consistent look.",
    items: ["Logo design", "Brand graphics", "Visual identity assets"],
  },
  {
    title: "Marketing Design",
    short: "Campaign-ready graphics for promotions and announcements.",
    items: ["Flyers", "Posters", "Promotional materials", "Campaign graphics"],
  },
  {
    title: "Social Media Design",
    short: "Graphics built for the scroll — clear at thumbnail size.",
    items: [
      "Instagram graphics",
      "Facebook graphics",
      "Social media campaigns",
      "Announcement graphics",
    ],
  },
  {
    title: "Event Design",
    short: "Visual materials that carry an event from announcement to day-of.",
    items: ["Event flyers", "Invitations", "Programme graphics", "Banners", "Digital promotional materials"],
  },
  {
    title: "Print Design",
    short: "Print-ready design for physical materials.",
    items: ["Business cards", "Brochures", "Posters", "Banners", "Other print materials"],
  },
];
