import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/SEO';

const BlogIndex = ({ location, data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <SEO
        title='Blog'
        description="Stay up to date with my latest experiments and discoveries. Jakub Bąbelek's blog on web development and technology."
        pathname={location.pathname}
      />
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
                <section itemProp='description'>
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

export default BlogIndex;

export const pageQuery = graphql`
  query {
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
