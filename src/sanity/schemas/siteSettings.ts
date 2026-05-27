import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",
  description: "Control which sections are visible on the homepage",
  initialValue: {
    showHero: true,
    showCountdown: true,
    showAbout: true,
    showTheme: true,
    showKeynoteSpeakers: true,
    showInvitedSpeakers: true,
    showAgenda: true,
    showRegistration: true,
    showVenue: true,
    showSponsors: true,
    showSubmissions: true,
    showCommittee: true,
    showFaqs: true,
    showCertificates: false,
  },
  fields: [
    defineField({
      name: "showHero",
      title: "Show Hero Banner",
      type: "boolean",
      description: "Toggle the hero banner section",
    }),
    defineField({
      name: "showCountdown",
      title: "Show Countdown Timer",
      type: "boolean",
      description: "Toggle the countdown timer section",
    }),
    defineField({
      name: "showAbout",
      title: "Show About Conference",
      type: "boolean",
      description: "Toggle the about conference section",
    }),
    defineField({
      name: "showTheme",
      title: "Show Conference Theme",
      type: "boolean",
      description: "Toggle the conference theme section",
    }),
    defineField({
      name: "showKeynoteSpeakers",
      title: "Show Keynote Speakers",
      type: "boolean",
      description: "Toggle the keynote speakers section",
    }),
    defineField({
      name: "showInvitedSpeakers",
      title: "Show Invited Speakers",
      type: "boolean",
      description: "Toggle the invited speakers section",
    }),
    defineField({
      name: "showAgenda",
      title: "Show Schedule / Agenda",
      type: "boolean",
      description: "Toggle the schedule/agenda section",
    }),
    defineField({
      name: "showRegistration",
      title: "Show Registration",
      type: "boolean",
      description: "Toggle the registration section",
    }),
    defineField({
      name: "showVenue",
      title: "Show Venue & Travel",
      type: "boolean",
      description: "Toggle the venue and travel section",
    }),
    defineField({
      name: "showSponsors",
      title: "Show Sponsors & Partners",
      type: "boolean",
      description: "Toggle the sponsors and partners section",
    }),
    defineField({
      name: "showSubmissions",
      title: "Show Call for Papers / Submissions",
      type: "boolean",
      description: "Toggle the call for papers / submissions section",
    }),
    defineField({
      name: "showCommittee",
      title: "Show Committees",
      type: "boolean",
      description: "Toggle the committees section",
    }),
    defineField({
      name: "showFaqs",
      title: "Show FAQs",
      type: "boolean",
      description: "Toggle the FAQs section",
    }),
    defineField({
      name: "showCertificates",
      title: "Show Certificate Generation (Post-Conference)",
      type: "boolean",
      description: "Toggle the post-conference certificate download portal",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "Section visibility controls",
      };
    },
  },
});
