const website = require('./website-config');

module.exports = {
  siteMetadata: {
    siteUrl: website.url,
    banner: website.logo,
    defaultTitle: website.defaultTitle,
    titleTemplate: website.titleTemplate,
    description: website.description,
    headline: website.headline,
    author: website.author,
    siteLanguage: website.siteLanguage,
    social: website.social,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180334181-1',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/uploads`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/demos`,
        name: `demos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            // Headings and large font
            family: `Montserrat`,
            variants: [`400`, `700`],
            subsets: [`latin-ext`],
          },
          {
            // Body text
            family: `Roboto`,
            variants: [`400`, `400i`, `500`, `700`],
            subsets: [`latin-ext`],
          },
          {
            family: 'DM Serif Text',
            variants: ['400', '400i'],
            subsets: ['latin-ext'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: `transparent`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // Including in your Remark plugins will transform any paths in your markdown body
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // When using mdx reading time must be outside remark plugins to work
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
