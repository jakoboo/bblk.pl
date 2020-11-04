import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { animated, Spring } from 'react-spring/renderprops';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import Heading from '../../ui/Heading';
import Spaced from '../../ui/Spaced';
import Padded from '../../ui/Padded';
import ContentWrap from '../../ui/ContentWrap';
import { BlogPostBody, BlogPostWrap } from './styles';
import Text from '../../ui/Text';

const BlogPostTemplate = ({ location, data: { mdx: post }, pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={location.pathname}
        banner={post.frontmatter.featuredImage?.publicURL || undefined}
        publicationDate={post.frontmatter.date}
        article
      />
      <ContentWrap>
        <BlogPostWrap
          element='article'
          itemScope
          itemType='http://schema.org/Article'
        >
          <Spring
            from={{ opacity: 0, transform: 'translateY(0.5rem)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {(props) => (
              <animated.header style={props}>
                <Spaced bottom='m'>
                  <Heading level={1} itemProp='headline'>
                    {post.frontmatter.title}
                  </Heading>
                  <Text>
                    {post.frontmatter.date}
                    &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
                    {post.fields.readingTime.text}
                  </Text>
                  <Bio compact />
                </Spaced>
              </animated.header>
            )}
          </Spring>

          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <animated.div style={props}>
                <Padded vertical='4x'>
                  <BlogPostBody itemProp='articleBody'>
                    <MDXRenderer>{post.body}</MDXRenderer>
                  </BlogPostBody>
                </Padded>
              </animated.div>
            )}
          </Spring>

          <hr />
          <Padded vertical='xl' horizontal='m'>
            <footer>
              <Bio />
            </footer>
          </Padded>
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
        </BlogPostWrap>
      </ContentWrap>
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
          publicURL
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
