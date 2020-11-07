import React from 'react';
import { graphql } from 'gatsby';
import * as _ from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useSpring } from 'react-spring';
import { Avatar } from '../../components/Bio/styles';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import Heading from '../../ui/Heading';
import Spaced from '../../ui/Spaced';
import Padded from '../../ui/Padded';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import Link from '../../ui/Link';
import ScreenReaderText from '../../ui/ScreenReaderText';
import {
  AnimatedArticleWrap,
  ArticleHeader,
  ArticleTags,
  ArticleTag,
  ArticleSubheader,
  ArticleContentWrap,
  ArticleBody,
  ArticleAuthorLink,
  ArticleTagList,
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

  const shareArticle = () => {
    try {
      navigator.share({
        title: post.frontmatter.title,
        url: `${window.location.origin}${post.fields.slug}`,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const props = useSpring({
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
        <AnimatedArticleWrap style={props} aria-labelledby='article-title'>
          <ArticleContentWrap>
            <ArticleHeader>
              <Spaced bottom='s'>
                <ArticleTags>
                  <ScreenReaderText aria>
                    <Heading level={2} id='article-tags-label'>
                      Article tags
                    </Heading>
                  </ScreenReaderText>
                  <ArticleTagList aria-labelledby='article-tags-label'>
                    {post.frontmatter.tags.map((tag) => (
                      <ArticleTag key={_.kebabCase(tag)}>
                        <Link href={`/tags/${_.kebabCase(tag)}`}>
                          <Text element='span' order='meta'>
                            {tag}
                          </Text>
                        </Link>
                      </ArticleTag>
                    ))}
                  </ArticleTagList>
                </ArticleTags>
              </Spaced>
              <Spaced bottom='xl'>
                <Heading level={1} id='article-title'>
                  {post.frontmatter.title}
                </Heading>
              </Spaced>
              <ArticleSubheader>
                <Spaced right='m' bottom='m'>
                  <ArticleAuthorLink href='/about-me'>
                    <Spaced right='xs'>
                      <span>
                        <Avatar
                          compact
                          fluid={avatar}
                          alt={author?.name || ``}
                          imgStyle={{
                            borderRadius: `50%`,
                          }}
                        />
                      </span>
                    </Spaced>
                    {author?.name}
                  </ArticleAuthorLink>
                  <span>
                    <time datetime={post.frontmatter.datetime}>
                      <Text element='span'>{post.frontmatter.date}</Text>
                    </time>
                    <Text element='span'>・{post.fields.readingTime.text}</Text>
                  </span>
                  <span>
                    <Button unstyled onClick={shareArticle}>
                      Share
                    </Button>
                  </span>
                </Spaced>
              </ArticleSubheader>
            </ArticleHeader>
            <Padded vertical='2x'>
              <ArticleBody>
                <MDXRenderer>{post.body}</MDXRenderer>
              </ArticleBody>
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
        </AnimatedArticleWrap>
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
        date: date(formatString: "DD MMM, YYYY")
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
