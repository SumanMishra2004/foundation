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

// Site Settings (Section Visibility)
export interface SiteSettings {
  showHero: boolean;
  showCountdown: boolean;
  showAbout: boolean;
  showTheme: boolean;
  showKeynoteSpeakers: boolean;
  showInvitedSpeakers: boolean;
  showAgenda: boolean;
  showRegistration: boolean;
  showVenue: boolean;
  showSponsors: boolean;
  showSubmissions: boolean;
  showCommittee: boolean;
  showFaqs: boolean;
  showCertificates: boolean;
}

// Hero Section
export interface HeroData {
  conferenceName: string;
  subtitle?: string;
  edition: string;
  tagline: string;
  date: string;
  venue: string;
  heroImage?: SanityImage;
  backgroundImage?: SanityImage;
  ctaLabel: string;
  ctaLink: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  highlightStats?: { value: string; label: string }[];
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

// Submissions / Call for Papers
export interface ImportantDate {
  title: string;
  dateString: string;
  badge?: string;
  isPassed: boolean;
}

export interface SubmissionData {
  heading: string;
  intro: string;
  tracks: string[];
  importantDates: ImportantDate[];
  submissionInstructions: string;
  submissionLink: string;
}

// Committee
export interface CommitteeMember {
  name: string;
  designation: string;
  organization: string;
  role?: string;
  image?: SanityImage;
}

export interface CommitteeGroup {
  groupName: string;
  members: CommitteeMember[];
}

export interface CommitteeData {
  heading: string;
  committeeGroups: CommitteeGroup[];
}

// FAQ
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  heading: string;
  faqs: FaqItem[];
}

// Certificate
export interface CertificateData {
  name: string;
  email: string;
  role: string;
  presentationTitle?: string;
  certificateCode: string;
}
