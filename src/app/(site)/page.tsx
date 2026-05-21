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
import {
  fallbackAbout,
  fallbackAgenda,
  fallbackCountdown,
  fallbackHero,
  fallbackInvitedSpeakers,
  fallbackKeynoteSpeakers,
  fallbackRegistration,
  fallbackSponsors,
  fallbackTheme,
  fallbackVenue,
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
  sponsorsQuery,
  themeQuery,
  venueQuery,
} from "@/lib/sanity/queries";
import type {
  AboutData,
  AgendaData,
  CountdownData,
  HeroData,
  RegistrationData,
  Speaker,
  SponsorsData,
  ThemeData,
  VenueData,
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
  ] = await Promise.all([
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
  ]);

  return (
    <>
      <HeroBanner data={hero} />
      <CountdownTimer data={countdown} />
      <AboutConference data={about} />
      <ConferenceTheme data={theme} />
      <KeynoteSpeakers speakers={keynoteSpeakers} />
      <InvitedSpeakers speakers={invitedSpeakers} />
      <AgendaTeaser data={agenda} />
      <Registration data={registration} />
      <VenueTravel data={venue} />
      <SponsorsPartners data={sponsors} />
    </>
  );
}
