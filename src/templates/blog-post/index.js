import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import Bio from '../../components/Bio';
import SEO from '../../components/SEO';

const BlogPostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className='blog-post'
        itemScope
        itemType='http://schema.org/Article'
      >
        <header>
          <h1 itemProp='headline'>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <span>{post.fields.readingTime.text}</span>
        </header>
        {post.frontmatter.featuredImage && (
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        )}
        <section itemProp='articleBody'>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className='blog-post-nav'>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        readingTime {
          text
        }
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
