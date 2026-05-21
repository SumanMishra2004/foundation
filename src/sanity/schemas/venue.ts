import { defineType, defineField } from "sanity";

export default defineType({
  name: "venue",
  title: "Venue & Travel",
  type: "document",
  initialValue: {
    heading: "Venue & Travel",
    venueName: "Biswa Bangla Convention Centre",
    address: "New Town, Rajarhat, Kolkata, West Bengal 700156, India",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=",
    nearbyHotels: [
      { _key: "hotel-1", name: "Lorem Hotel", distance: "1.2 km" },
      { _key: "hotel-2", name: "Ipsum Suites", distance: "2.5 km" },
      { _key: "hotel-3", name: "Consectetur Inn", distance: "3.8 km" },
    ],
    transportOptions: [
      "Nearest airport: Lorem International Airport - 15 km",
      "Metro and cab services available throughout the day",
      "Dedicated shuttle service from major transit hubs",
    ],
    parkingInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venueName",
      title: "Venue Name",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Full Address",
      type: "text",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "string",
    }),
    defineField({
      name: "nearbyHotels",
      title: "Nearby Hotels",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Hotel Name", type: "string" }),
            defineField({ name: "distance", title: "Distance", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "transportOptions",
      title: "Transport Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "parkingInfo",
      title: "Parking Info",
      type: "text",
    }),
  ],
});
