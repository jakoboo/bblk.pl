import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../../components/bio';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const TagTemplate = ({ data, location, pageContext: { tag } }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='All posts' />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={'"' + tag + '" - posts'} />
      <h1>All posts tagged with '{tag}'</h1>
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

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
        }
      }
    }
  }
`;
