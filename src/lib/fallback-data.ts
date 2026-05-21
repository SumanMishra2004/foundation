import type {
  HeroData,
  CountdownData,
  AboutData,
  ThemeData,
  Speaker,
  AgendaData,
  RegistrationData,
  VenueData,
  SponsorsData,
  NavData,
  FooterData,
} from "./sanity/types";

export const fallbackHero: HeroData = {
  conferenceName: "Lorem Summit 2025",
  edition: "Inaugural Edition · 2025",
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  date: "15 November 2025",
  venue: "Kolkata · Biswa Bangla Convention Centre",
  ctaLabel: "Register Now",
  ctaLink: "#registration",
};

export const fallbackCountdown: CountdownData = {
  eventDate: "2025-11-15T09:00:00.000Z",
};

export const fallbackAbout: AboutData = {
  heading: "About the Conference",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  whoItsFor: [
    "🎓 Academic Researchers & PhD Scholars",
    "💼 Industry Leaders & Entrepreneurs",
    "🔬 Scientists & Technologists",
    "🎨 Creative Professionals & Designers",
  ],
  mission:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats: [
    { label: "Day", value: "1" },
    { label: "Speakers", value: "20+" },
    { label: "Attendees", value: "500+" },
  ],
};

export const fallbackTheme: ThemeData = {
  heading: "Conference Theme",
  themeTitle: "Bridging Minds, Building Futures",
  themeDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet.",
  focusAreas: [
    {
      icon: "🤖",
      label: "AI & Human Collaboration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "🌱",
      label: "Sustainable Innovation",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "🔗",
      label: "Digital Transformation",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      icon: "🧠",
      label: "Cognitive Sciences",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      icon: "🌐",
      label: "Global Connectivity",
      description:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    },
  ],
  whyThisTheme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const fallbackKeynoteSpeakers: Speaker[] = [
  {
    _id: "1",
    name: "Dr. Lorem Ipsum",
    designation: "Distinguished Professor of Computer Science",
    organization: "Stanford University",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    type: "keynote",
  },
  {
    _id: "2",
    name: "Prof. Jane Consectetur",
    designation: "Director of Innovation Lab",
    organization: "MIT Media Lab",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    type: "keynote",
  },
  {
    _id: "3",
    name: "Dr. Adipiscing Elite",
    designation: "Chief Science Officer",
    organization: "DeepMind Technologies",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    type: "keynote",
  },
];

export const fallbackInvitedSpeakers: Speaker[] = [
  {
    _id: "4",
    name: "Dr. Sed Diam",
    designation: "Head of Research",
    organization: "Google Brain",
    bio: "",
    type: "invited",
  },
  {
    _id: "5",
    name: "Prof. Nonummy Nibh",
    designation: "Dean of Engineering",
    organization: "IIT Kharagpur",
    bio: "",
    type: "invited",
  },
  {
    _id: "6",
    name: "Dr. Euismod Tincidunt",
    designation: "VP of Product",
    organization: "Microsoft Research",
    bio: "",
    type: "invited",
  },
  {
    _id: "7",
    name: "Prof. Laoreet Dolore",
    designation: "Chair of Data Science",
    organization: "University of Oxford",
    bio: "",
    type: "invited",
  },
  {
    _id: "8",
    name: "Dr. Magna Aliquam",
    designation: "Lead Scientist",
    organization: "OpenAI",
    bio: "",
    type: "invited",
  },
  {
    _id: "9",
    name: "Prof. Erat Volutpat",
    designation: "Director of AI Ethics",
    organization: "Harvard University",
    bio: "",
    type: "invited",
  },
];

export const fallbackAgenda: AgendaData = {
  heading: "Schedule Overview",
  dayLabel: "Day 1 — 15 November 2025",
  agendaItems: [
    { time: "08:30 AM", title: "Registration & Networking Breakfast", type: "Networking", speaker: "" },
    { time: "09:30 AM", title: "Opening Ceremony & Welcome Address", type: "Keynote", speaker: "Dr. Lorem Ipsum" },
    { time: "10:15 AM", title: "The Future of AI in Society", type: "Keynote", speaker: "Prof. Jane Consectetur" },
    { time: "11:00 AM", title: "Coffee Break & Exhibition", type: "Break", speaker: "" },
    { time: "11:30 AM", title: "Panel: Ethics in Technology", type: "Panel", speaker: "Multiple Speakers" },
    { time: "12:30 PM", title: "Lunch & Poster Sessions", type: "Break", speaker: "" },
    { time: "02:00 PM", title: "Workshop: Hands-on Machine Learning", type: "Workshop", speaker: "Dr. Adipiscing Elite" },
    { time: "04:00 PM", title: "Closing Keynote & Awards", type: "Keynote", speaker: "Dr. Lorem Ipsum" },
  ],
  fullScheduleNote: "Full Schedule Coming Soon",
};

export const fallbackRegistration: RegistrationData = {
  heading: "Registration",
  ticketTiers: [
    {
      name: "Early Bird",
      price: "₹1,999",
      inclusions: [
        "Full day access",
        "Conference kit & materials",
        "Lunch & refreshments",
        "Certificate of participation",
      ],
      isRecommended: false,
      ctaLabel: "Get Early Bird",
      ctaLink: "#",
    },
    {
      name: "Professional",
      price: "₹3,499",
      inclusions: [
        "Everything in Early Bird",
        "Priority seating",
        "Workshop access",
        "Networking dinner invite",
        "1-year community membership",
      ],
      isRecommended: true,
      ctaLabel: "Register Now",
      ctaLink: "#",
    },
    {
      name: "Student",
      price: "₹999",
      inclusions: [
        "Full day access",
        "Conference kit & materials",
        "Lunch & refreshments",
        "Certificate of participation",
      ],
      isRecommended: false,
      ctaLabel: "Student Register",
      ctaLink: "#",
    },
  ],
  groupNote: "Group discounts available. Contact us at hello@loremsummit.com for groups of 5+.",
};

export const fallbackVenue: VenueData = {
  heading: "Venue & Travel",
  venueName: "Biswa Bangla Convention Centre",
  address: "New Town, Rajarhat, Kolkata, West Bengal 700156, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.46!3d22.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQ4LjAiTiA4OMKwMjcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  nearbyHotels: [
    { name: "Novotel Kolkata", distance: "1.2 km" },
    { name: "Swissôtel Kolkata", distance: "2.5 km" },
    { name: "The Westin Kolkata", distance: "3.8 km" },
    { name: "Hyatt Regency Kolkata", distance: "5.0 km" },
  ],
  transportOptions: [
    "✈️ Nearest Airport: Netaji Subhas Chandra Bose International Airport (CCU) — 15 km",
    "🚇 Nearest Metro: New Town Station (Blue Line) — 800m walk",
    "🚕 Cab services: Uber & Ola available 24/7",
    "🚌 Bus routes: AC buses available from Howrah, Sealdah & Esplanade",
  ],
  parkingInfo:
    "Free parking is available for all registered attendees at the venue's multi-level parking facility. Please carry your registration confirmation for entry.",
};

export const fallbackSponsors: SponsorsData = {
  heading: "Sponsors & Partners",
  sponsorTiers: [
    {
      tierName: "Gold Sponsors",
      sponsors: [
        { name: "TechCorp Global", website: "#" },
        { name: "InnovateLabs", website: "#" },
      ],
    },
    {
      tierName: "Silver Sponsors",
      sponsors: [
        { name: "DataFlow Inc.", website: "#" },
        { name: "CloudNine Solutions", website: "#" },
        { name: "AI Ventures", website: "#" },
      ],
    },
    {
      tierName: "Bronze Sponsors",
      sponsors: [
        { name: "StartupHub", website: "#" },
        { name: "CodeCraft", website: "#" },
        { name: "DigitalEdge", website: "#" },
        { name: "FutureTech", website: "#" },
      ],
    },
    {
      tierName: "Community Partners",
      sponsors: [
        { name: "Dev Community India", website: "#" },
        { name: "Women in Tech", website: "#" },
        { name: "Open Source Kolkata", website: "#" },
      ],
    },
  ],
  becomeSponsorLink: "mailto:sponsors@loremsummit.com",
};

export const fallbackNav: NavData = {
  logo: "Lorem Summit",
};

export const fallbackFooter: FooterData = {
  conferenceName: "Lorem Summit 2025",
  edition: "Inaugural Edition",
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#agenda" },
    { label: "Register", href: "#registration" },
    { label: "Venue", href: "#venue" },
    { label: "Sponsors", href: "#sponsors" },
  ],
  twitterUrl: "https://twitter.com/loremsummit",
  linkedinUrl: "https://linkedin.com/company/loremsummit",
  instagramUrl: "https://instagram.com/loremsummit",
  copyright: "© 2025 Lorem Summit. All rights reserved.",
};
