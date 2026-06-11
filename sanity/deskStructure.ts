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
        .title('Home Page Content')
        .id('homeContent')
        .child(
          S.document()
            .schemaType('homeContent')
            .documentId('homeContent')
            .title('Home Page Content')
        ),
      S.listItem()
        .title('About Page Content')
        .id('aboutContent')
        .child(
          S.document()
            .schemaType('aboutContent')
            .documentId('aboutContent')
            .title('About Page Content')
        ),
      S.listItem()
        .title('Programs Page Content')
        .id('programsPageContent')
        .child(
          S.document()
            .schemaType('programsPageContent')
            .documentId('programsPageContent')
            .title('Programs Page Content')
        ),
      S.listItem()
        .title('Team Page Content')
        .id('teamPageContent')
        .child(
          S.document()
            .schemaType('teamPageContent')
            .documentId('teamPageContent')
            .title('Team Page Content')
        ),
      S.listItem()
        .title('Advisory Board Page Content')
        .id('advisoryPageContent')
        .child(
          S.document()
            .schemaType('advisoryPageContent')
            .documentId('advisoryPageContent')
            .title('Advisory Board Page Content')
        ),
      S.listItem()
        .title('Contact Page Content')
        .id('contactPageContent')
        .child(
          S.document()
            .schemaType('contactPageContent')
            .documentId('contactPageContent')
            .title('Contact Page Content')
        ),
      /*
      S.listItem()
        .title('Program Gallery')
        .id('gallery')
        .child(
          S.document()
            .schemaType('gallery')
            .documentId('gallery')
            .title('Program Gallery')
        ),
      */
      S.divider(),
      S.listItem()
        .title('Programs (Focus Areas)')
        .child(S.documentTypeList('program').title('Programs')),
      S.listItem()
        .title('Team Members')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      S.listItem()
        .title('Advisory Board Members')
        .child(S.documentTypeList('advisoryMember').title('Advisory Board Members')),
    ]);