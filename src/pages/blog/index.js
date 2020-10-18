import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className='post-list-item'
                itemScope
                itemType='http://schema.org/Article'
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp='url'>
                      <span itemProp='headline'>{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <MDXRenderer itemProp='description'>
                    {post.frontmatter.description || post.excerpt}
                  </MDXRenderer>
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          description
        }
      }
    }
  }
`;
