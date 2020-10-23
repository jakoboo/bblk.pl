const _ = require(`lodash`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const blogPostsResult = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
          }
        }
      }
    }
  `);
  if (blogPostsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogPostsResult.errors
    );
    return;
  }

  const blogPosts = blogPostsResult.data.allMdx.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previous =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1];
      const next = index === 0 ? null : blogPosts[index - 1];

      createPage({
        path: post.fields.slug,
        component: path.resolve(
          `src/templates/${post.frontmatter.templateKey}/index.js`
        ),
        context: {
          id: post.id,
          previous,
          next,
        },
      });
    });
  }

  // Get all blog post tags sorted by date
  const tagsResult = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  if (tagsResult.errors) {
    reporter.panicOnBuild(`There was an error loading tags`, tagsResult.errors);
    return;
  }

  const tags = tagsResult.data.allMdx.group;

  tags.forEach(({ fieldValue: tag }) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tag/index.js`),
      context: {
        tag,
      },
    });
  });
};

async function fixIndex(page, { deletePage, createPage }) {
  return new Promise((resolve) => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
}

exports.onCreatePage = async ({ page, actions }) => {
  // Make index page appear on / instead of /index
  await fixIndex(page, actions);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const parent = getNode(node.parent);

  if (!parent) {
    return;
  }

  // Collection name based on the 'name' property of gatsby-source-filesystem in gatsby-config.js
  // used to set slug (/blog/<post> or /projects/<project>) and filter content
  const collection = parent.sourceInstanceName;

  if (node.internal.type === `Mdx`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });

    createNodeField({
      name: `collection`,
      node,
      value: collection,
    });

    createNodeField({
      name: `slug`,
      node,
      value: `/${collection}${relativeFilePath}`,
    });
  }
};

exports.createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
  createContentDigest,
}) => {
  createFieldExtension({
    name: 'mdx',
    extend() {
      return {
        type: 'String',
        resolve(source, args, context, info) {
          // Grab field
          const value = source[info.fieldName];
          // Isolate MDX
          const mdxType = info.schema.getType('Mdx');
          // Grab just the body contents of what MDX generates
          const { resolve } = mdxType.getFields().body;
          return resolve({
            rawBody: value,
            internal: {
              contentDigest: createContentDigest(value), // Used for caching
            },
          });
        },
      };
    },
  });

  // Also explicitly define the Mdx frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      title: String
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter
      fields: Fields
    }

    type MdxFrontmatter {
      templateKey: String
      title: String
      date: Date @dateformat
      description: String
      featuredImage: File
      tags: [String]
    }

    type Fields {
      readingTime: ReadingTime
      slug: String
      collection: String
    }

    type ReadingTime {
      text: String
    }
  `);
};
