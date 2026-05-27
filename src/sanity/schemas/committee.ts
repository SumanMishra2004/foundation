import { defineType, defineField } from "sanity";

export default defineType({
  name: "committee",
  title: "Committee Members",
  type: "document",
  icon: () => "👥",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Organizing Committee",
    }),
    defineField({
      name: "committeeGroups",
      title: "Committee Groups",
      type: "array",
      of: [
        {
          type: "object",
          name: "committeeGroup",
          title: "Committee Group",
          fields: [
            { name: "groupName", title: "Group Name (e.g., Steering Committee)", type: "string" },
            {
              name: "members",
              title: "Members",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "committeeMember",
                  title: "Member Details",
                  fields: [
                    { name: "name", title: "Full Name", type: "string" },
                    { name: "designation", title: "Designation / Title", type: "string" },
                    { name: "organization", title: "Organization / Institution", type: "string" },
                    { name: "role", title: "Committee Role (e.g. General Chair, Member)", type: "string" },
                    { name: "image", title: "Photo / Profile Image", type: "image", options: { hotspot: true } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
