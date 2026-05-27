import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  showHero,
  showCountdown,
  showAbout,
  showTheme,
  showKeynoteSpeakers,
  showInvitedSpeakers,
  showAgenda,
  showRegistration,
  showVenue,
  showSponsors,
  showSubmissions,
  showCommittee,
  showFaqs,
  showCertificates
}`;

export const heroQuery = groq`*[_type == "hero"][0]{
  conferenceName,
  subtitle,
  edition,
  tagline,
  date,
  venue,
  heroImage,
  backgroundImage,
  ctaLabel,
  ctaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
  highlightStats
}`;

export const countdownQuery = groq`*[_type == "countdown"][0]{
  eventDate
}`;

export const aboutQuery = groq`*[_type == "about"][0]{
  heading,
  intro,
  whoItsFor,
  mission,
  stats
}`;

export const themeQuery = groq`*[_type == "theme"][0]{
  heading,
  themeTitle,
  themeDescription,
  focusAreas,
  whyThisTheme
}`;

export const keynoteSpeakersQuery = groq`*[_type == "speakers" && type == "keynote"]{
  _id,
  name,
  designation,
  organization,
  bio,
  type,
  photo
}`;

export const invitedSpeakersQuery = groq`*[_type == "speakers" && type == "invited"]{
  _id,
  name,
  designation,
  organization,
  bio,
  type,
  photo
}`;

export const agendaQuery = groq`*[_type == "agenda"][0]{
  heading,
  dayLabel,
  agendaItems,
  fullScheduleNote
}`;

export const registrationQuery = groq`*[_type == "registration"][0]{
  heading,
  ticketTiers,
  groupNote
}`;

export const venueQuery = groq`*[_type == "venue"][0]{
  heading,
  venueName,
  address,
  mapEmbedUrl,
  nearbyHotels,
  transportOptions,
  parkingInfo
}`;

export const sponsorsQuery = groq`*[_type == "sponsors"][0]{
  heading,
  sponsorTiers,
  becomeSponsorLink
}`;

export const navQuery = groq`*[_type == "navigation"][0]{
  logo,
  logoImage
}`;

export const footerQuery = groq`*[_type == "footer"][0]{
  conferenceName,
  edition,
  quickLinks,
  twitterUrl,
  linkedinUrl,
  instagramUrl,
  copyright
}`;

export const submissionsQuery = groq`*[_type == "submissions"][0]{
  heading,
  intro,
  tracks,
  importantDates,
  submissionInstructions,
  submissionLink
}`;

export const committeeQuery = groq`*[_type == "committee"][0]{
  heading,
  committeeGroups
}`;

export const faqQuery = groq`*[_type == "faq"][0]{
  heading,
  faqs
}`;
