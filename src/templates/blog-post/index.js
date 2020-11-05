import React from 'react';
import { graphql } from 'gatsby';
import * as _ from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useSpring } from 'react-spring';
import { Clock } from 'styled-icons/feather';
import { Avatar } from '../../components/Bio/styles';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import Heading from '../../ui/Heading';
import Spaced from '../../ui/Spaced';
import Padded from '../../ui/Padded';
import Text from '../../ui/Text';
import Link from '../../ui/Link';
import ScreenReaderText from '../../ui/ScreenReaderText';
import {
  AnimatedArticleHeader,
  ArticleTags,
  ArticleTag,
  ArticleSubheader,
  ArticleContentWrap,
  AnimatedArticleBody,
  ArticleWrap,
  ArticleAuthorLink,
} from './styles';

const ArticleTemplate = ({ location, data, pageContext }) => {
  const {
    avatar: {
      childImageSharp: { fluid: avatar },
    },
    site: {
      siteMetadata: { author },
    },
    mdx: post,
  } = data;
  const { previous, next } = pageContext;

  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-5rem)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
  const bodySpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

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
      <Spaced top='5x'>
        <ArticleWrap aria-labelledby='article-title'>
          <ArticleContentWrap>
            <AnimatedArticleHeader style={headerSpring}>
              <Spaced bottom='s'>
                <ArticleTags>
                  <ScreenReaderText aria>
                    <Heading level={2} id='article-tags-label'>
                      Article tags
                    </Heading>
                  </ScreenReaderText>
                  <ul aria-labelledby='article-tags-label'>
                    {post.frontmatter.tags.map((tag) => (
                      <ArticleTag key={_.kebabCase(tag)}>
                        <Link href={`/tags/${_.kebabCase(tag)}`}>
                          <Text element='span' order='meta'>
                            {tag}
                          </Text>
                        </Link>
                      </ArticleTag>
                    ))}
                  </ul>
                </ArticleTags>
                <Heading level={1} id='article-title'>
                  {post.frontmatter.title}
                </Heading>
              </Spaced>
              <ArticleSubheader>
                <ArticleAuthorLink href='/about-me'>
                  <Avatar
                    compact
                    fluid={avatar}
                    alt={author?.name || ``}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                  <Text element='span'>{author?.name}</Text>
                </ArticleAuthorLink>
                <span>
                  <time datetime={post.frontmatter.datetime}>
                    <Text element='span'>{post.frontmatter.date}</Text>
                  </time>
                  <Clock />
                  <Text element='span'>{post.fields.readingTime.text}</Text>
                </span>
              </ArticleSubheader>
            </AnimatedArticleHeader>
            <Padded vertical='5x'>
              <AnimatedArticleBody style={bodySpring}>
                <MDXRenderer>{post.body}</MDXRenderer>
              </AnimatedArticleBody>
            </Padded>
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
          </ArticleContentWrap>
        </ArticleWrap>
      </Spaced>
    </>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    avatar: file(absolutePath: { regex: "/src/images/avatar.jpeg/" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
        }
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
        datetime: date
        date: date(formatString: "DD MMMM, YYYY")
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
