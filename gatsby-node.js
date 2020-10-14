const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post/index.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            id
            tableOfContents
            fields {
              readingTime {
                text
              }
              slug
            }
            frontmatter {
              templateKey
              title
              date
              description
              tags
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      // Resolve custom template key or use default blog-post
      createPage({
        path: post.fields.slug,
        component:
          path.resolve(
            `./src/templates/${post.frontmatter.templateKey}/blog-post.js`
          ) || blogPost,
        context: {
          id: post.id,
          previous,
          next,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Also explicitly define the Mdx frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      fields: Fields
    }

    type MdxFrontmatter {
      templateKey: String
      title: String
      date: Date @dateformat
      description: String
      featuredImage: Image!
      socialImage: Image!
      tags: [String!]!
    }

    type Fields {
      readingTime: ReadingTime
      slug: String
    }

    type ReadingTime {
      text: String
    }

    type Image {
      publicURL: String
    }
  `);
};
