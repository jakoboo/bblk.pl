module.exports = {
  defaultTitle: `Jakub Bąbelek | Full Stack Developer`,
  titleTemplate: `%s | Jakub Bąbelek`,
  description: `Portfolio and personal blog about web dev.`,
  headline: 'Portfolio and personal blog about web dev.',
  url: `https://bblk.pl`,
  siteLanguage: 'en',
  logo: `/img/favicon.png`,

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'J. Bąbelek', // shortname for manifest. MUST be shorter than 12 characters
  author: {
    name: `Jakub Bąbelek`,
    email: `jakub@bblk.pl`,
    description: `Student and Full Stack Developer living in Poznań, PL`,
    sameAs: [`https://twitter.com/jbbabelek`, `https://github.com/jakoboo`],
  }, // Author for schemaORGJSONLD
  themeColor: '#ffffff',
  backgroundColor: '#ffffff',

  social: {
    github: {
      username: `jakoboo`,
    },
    twitter: {
      username: `jbbabelek`,
    },
    facebook: {
      language: 'en_US',
    },
  },
};
