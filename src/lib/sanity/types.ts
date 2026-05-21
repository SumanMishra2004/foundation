// Sanity image type
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// Hero Section
export interface HeroData {
  conferenceName: string;
  edition: string;
  tagline: string;
  date: string;
  venue: string;
  backgroundImage?: SanityImage;
  ctaLabel: string;
  ctaLink: string;
}

// Countdown Section
export interface CountdownData {
  eventDate: string;
}

// About Section
export interface AboutData {
  heading: string;
  intro: string;
  whoItsFor: string[];
  mission: string;
  stats: { label: string; value: string }[];
}

// Theme Section
export interface ThemeData {
  heading: string;
  themeTitle: string;
  themeDescription: string;
  focusAreas: { icon: string; label: string; description: string }[];
  whyThisTheme: string;
}

// Speakers
export interface Speaker {
  _id: string;
  name: string;
  designation: string;
  organization: string;
  bio: string;
  type: "keynote" | "invited";
  photo?: SanityImage;
}

// Agenda
export interface AgendaItem {
  time: string;
  title: string;
  type: string;
  speaker?: string;
}

export interface AgendaData {
  heading: string;
  dayLabel: string;
  agendaItems: AgendaItem[];
  fullScheduleNote: string;
}

// Registration
export interface TicketTier {
  name: string;
  price: string;
  inclusions: string[];
  isRecommended: boolean;
  ctaLabel: string;
  ctaLink: string;
}

export interface RegistrationData {
  heading: string;
  ticketTiers: TicketTier[];
  groupNote: string;
}

// Venue
export interface NearbyHotel {
  name: string;
  distance: string;
}

export interface VenueData {
  heading: string;
  venueName: string;
  address: string;
  mapEmbedUrl: string;
  nearbyHotels: NearbyHotel[];
  transportOptions: string[];
  parkingInfo: string;
}

// Sponsors
export interface Sponsor {
  name: string;
  logo?: SanityImage;
  website: string;
}

export interface SponsorTier {
  tierName: string;
  sponsors: Sponsor[];
}

export interface SponsorsData {
  heading: string;
  sponsorTiers: SponsorTier[];
  becomeSponsorLink: string;
}

// Navigation
export interface NavData {
  logo: string;
  logoImage?: SanityImage;
}

// Footer
export interface FooterData {
  conferenceName: string;
  edition: string;
  quickLinks: { label: string; href: string }[];
  twitterUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  copyright: string;
}
