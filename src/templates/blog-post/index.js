import React from 'react';
import { graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useSpring } from 'react-spring';
import { Avatar } from '../../components/Bio/styles';
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';
import Heading from '../../ui/Heading';
import Spaced from '../../ui/Spaced';
import Padded from '../../ui/Padded';
import Text from '../../ui/Text';
import Link from '../../ui/Link';
import ScreenReaderText from '../../ui/ScreenReaderText';
import { Share } from 'styled-icons/feather';
import {
  ArticleWrap,
  AnimatedArticleContentWrap,
  ArticleHeader,
  ArticleTags,
  ArticleTagList,
  ArticleTag,
  ArticleSubheader,
  ArticleAuthorLink,
  ShareButton,
  ArticleBody,
  ShareWrap,
  PublicationWrap,
} from './styles';
import Tippy from '@tippyjs/react';

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

  const shareArticle = async () => {
    try {
      await navigator.share({
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
        publicationDate={post.frontmatter.dateTime}
        article
      />
      <Spaced top='5x'>
        <ArticleWrap>
          <AnimatedArticleContentWrap
            style={props}
            element='article'
            aria-labelledby='article-title'
          >
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
                      <ArticleTag key={kebabCase(tag)}>
                        <Link href={`/tags/${kebabCase(tag)}`}>
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
                <Spaced right='s' bottom='xs'>
                  <Link href='/about'>
                    <Avatar
                      compact
                      fluid={avatar}
                      alt={author?.name || ``}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                  </Link>
                </Spaced>
                <PublicationWrap>
                  <Spaced right='s' bottom='xs'>
                    <ArticleAuthorLink href='/about'>
                      {author?.name}
                    </ArticleAuthorLink>
                    <span>
                      <time dateTime={post.frontmatter.dateTime}>
                        <Text element='span'>
                          {post.frontmatter.date}
                          {/* Add year to the date if it's not current year */}
                          {post.frontmatter.dateYear < new Date().getFullYear()
                            ? `, ${post.frontmatter.dateYear}`
                            : null}
                        </Text>
                      </time>
                      <Text element='span'>
                        ・{post.fields.readingTime.text}
                      </Text>
                    </span>
                  </Spaced>
                </PublicationWrap>
                <ShareWrap>
                  <Spaced left='s' bottom='xs'>
                    <ShareButton unstyled onClick={shareArticle}>
                      <Tippy
                        content={`Share article`}
                        placement='bottom'
                        offset={[0, 20]}
                        animation='shift-away'
                      >
                        <Share />
                      </Tippy>
                    </ShareButton>
                  </Spaced>
                </ShareWrap>
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
          </AnimatedArticleContentWrap>
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
        dateTime: date
        dateYear: date(formatString: "YYYY")
        date: date(formatString: "DD MMM")
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
