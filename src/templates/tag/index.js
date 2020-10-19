import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../../components/bio';
import SEO from '../../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const TagTemplate = ({ data, pageContext: { tag } }) => {
  const posts = data.allMdx.nodes;

  if (posts.length === 0) {
    return (
      <>
        <SEO title='All posts' />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </>
    );
  }

  return (
    <>
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
                  {post.frontmatter.description || post.excerpt}
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </>
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
