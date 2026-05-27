import AboutConference from "@/components/sections/AboutConference";
import AgendaTeaser from "@/components/sections/AgendaTeaser";
import ConferenceTheme from "@/components/sections/ConferenceTheme";
import CountdownTimer from "@/components/sections/CountdownTimer";
import HeroBanner from "@/components/sections/HeroBanner";
import InvitedSpeakers from "@/components/sections/InvitedSpeakers";
import KeynoteSpeakers from "@/components/sections/KeynoteSpeakers";
import Registration from "@/components/sections/Registration";
import SponsorsPartners from "@/components/sections/SponsorsPartners";
import VenueTravel from "@/components/sections/VenueTravel";
import Submissions from "@/components/sections/Submissions";
import Committee from "@/components/sections/Committee";
import Faq from "@/components/sections/Faq";
import {
  fallbackAbout,
  fallbackAgenda,
  fallbackCountdown,
  fallbackHero,
  fallbackInvitedSpeakers,
  fallbackKeynoteSpeakers,
  fallbackRegistration,
  fallbackSiteSettings,
  fallbackSponsors,
  fallbackTheme,
  fallbackVenue,
  fallbackSubmissions,
  fallbackCommittee,
  fallbackFaqs,
} from "@/lib/fallback-data";
import { client } from "@/lib/sanity/client";
import {
  aboutQuery,
  agendaQuery,
  countdownQuery,
  heroQuery,
  invitedSpeakersQuery,
  keynoteSpeakersQuery,
  registrationQuery,
  siteSettingsQuery,
  sponsorsQuery,
  themeQuery,
  venueQuery,
  submissionsQuery,
  committeeQuery,
  faqQuery,
} from "@/lib/sanity/queries";
import type {
  AboutData,
  AgendaData,
  CountdownData,
  HeroData,
  RegistrationData,
  SiteSettings,
  Speaker,
  SponsorsData,
  ThemeData,
  VenueData,
  SubmissionData,
  CommitteeData,
  FaqData,
} from "@/lib/sanity/types";

export const revalidate = 60;

async function fetchWithFallback<T>(query: string, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T | null>(query, {}, { next: { revalidate: 60 } });
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export default async function Page() {
  const [
    settings,
    hero,
    countdown,
    about,
    theme,
    keynoteSpeakers,
    invitedSpeakers,
    agenda,
    registration,
    venue,
    sponsors,
    submissions,
    committee,
    faq,
  ] = await Promise.all([
    fetchWithFallback<SiteSettings>(siteSettingsQuery, fallbackSiteSettings),
    fetchWithFallback<HeroData>(heroQuery, fallbackHero),
    fetchWithFallback<CountdownData>(countdownQuery, fallbackCountdown),
    fetchWithFallback<AboutData>(aboutQuery, fallbackAbout),
    fetchWithFallback<ThemeData>(themeQuery, fallbackTheme),
    fetchWithFallback<Speaker[]>(keynoteSpeakersQuery, fallbackKeynoteSpeakers),
    fetchWithFallback<Speaker[]>(invitedSpeakersQuery, fallbackInvitedSpeakers),
    fetchWithFallback<AgendaData>(agendaQuery, fallbackAgenda),
    fetchWithFallback<RegistrationData>(registrationQuery, fallbackRegistration),
    fetchWithFallback<VenueData>(venueQuery, fallbackVenue),
    fetchWithFallback<SponsorsData>(sponsorsQuery, fallbackSponsors),
    fetchWithFallback<SubmissionData>(submissionsQuery, fallbackSubmissions),
    fetchWithFallback<CommitteeData>(committeeQuery, fallbackCommittee),
    fetchWithFallback<FaqData>(faqQuery, fallbackFaqs),
  ]);

  return (
    <>
      {settings.showHero && <HeroBanner data={hero} />}
      {settings.showCountdown && <CountdownTimer data={countdown} />}
      {settings.showAbout && <AboutConference data={about} />}
      {settings.showSubmissions && <Submissions data={submissions} />}
      {settings.showTheme && <ConferenceTheme data={theme} />}
      {settings.showKeynoteSpeakers && <KeynoteSpeakers speakers={keynoteSpeakers} />}
      {settings.showInvitedSpeakers && <InvitedSpeakers speakers={invitedSpeakers} />}
      {settings.showCommittee && <Committee data={committee} />}
      {settings.showAgenda && <AgendaTeaser data={agenda} />}
      {settings.showRegistration && <Registration data={registration} />}
      {settings.showVenue && <VenueTravel data={venue} />}
      {settings.showFaqs && <Faq data={faq} />}
      {settings.showSponsors && <SponsorsPartners data={sponsors} />}
    </>
  );
}
