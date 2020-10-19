module.exports = {
  siteMetadata: {
    title: `Jakub Bąbelek`,
    author: {
      name: `Jakub Bąbelek`,
      summary: `student and Full Stack Developer living in Poznań, PL`,
    },
    description: `Portfolio and personal blog about web dev`,
    siteUrl: `https://bblk.pl`,
    social: {
      github: `https://github.com/jakoboo`,
      twitter: `https://twitter.com/jbbabelek`,
      email: 'mailto:jakub@bblk.pl',
    },
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
            family: 'DM Serif Display',
            variants: ['400'],
            subsets: ['latin-ext'],
          },
          {
            family: 'DM Serif Text',
            variants: ['400'],
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
    `gatsby-remark-images`,
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
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              fromHeading: 1,
              toHeading: 6,
              className: 'table-of-contents',
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
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
    `gatsby-plugin-offline`,
  ],
};
