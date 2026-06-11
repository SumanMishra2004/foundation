import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.listItem()
        .title('Home Content')
        .id('homeContent')
        .child(
          S.document()
            .schemaType('homeContent')
            .documentId('homeContent')
            .title('Home Content')
        ),
      S.listItem()
        .title('About Content')
        .id('aboutContent')
        .child(
          S.document()
            .schemaType('aboutContent')
            .documentId('aboutContent')
            .title('About Content')
        ),
      S.listItem()
        .title('Program Gallery')
        .id('gallery')
        .child(
          S.document()
            .schemaType('gallery')
            .documentId('gallery')
            .title('Program Gallery')
        ),
      S.divider(),
      S.listItem()
        .title('Programs')
        .child(S.documentTypeList('program').title('Programs')),
      S.listItem()
        .title('Team Members')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      S.listItem()
        .title('Advisory Board')
        .child(S.documentTypeList('advisoryMember').title('Advisory Board')),
    ]);