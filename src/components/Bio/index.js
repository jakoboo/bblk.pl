import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Github, Mail, Twitter } from 'styled-icons/feather';
import Spaced from '../../ui/Spaced';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import {
  BioWrap,
  Avatar,
  AboutLink,
  SocialsWrap,
  SocialListItem,
  SocialLink,
} from './styles';

const Bio = ({ compact }) => {
  const data = useStaticQuery(query);

  const {
    avatar: {
      childImageSharp: { fluid: avatar },
    },
    site: {
      siteMetadata: { author, social },
    },
  } = data;

  return (
    <BioWrap itemScope itemType='https://schema.org/Person'>
      {avatar && (
        <Spaced right='xl'>
          <Avatar
            compact={compact}
            fluid={avatar}
            alt={author?.name || ``}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Spaced>
      )}
      {author?.name && (
        <div>
          {compact ? (
            <Text>
              <AboutLink to='/about-me'>{author?.name || `Author`}</AboutLink>
            </Text>
          ) : (
            <>
              <Spaced vertical='s'>
                <Heading level={6}>Written by:</Heading>
              </Spaced>
              <Heading level={4}>
                <AboutLink to='/about-me'>{author?.name || `Author`}</AboutLink>
              </Heading>
              <Spaced top='s'>
                <Text>{author?.description || null}</Text>
              </Spaced>
            </>
          )}
        </div>
      )}
      {social && (
        <Spaced left='xl'>
          <SocialsWrap>
            <ul>
              <Spaced left='xl'>
                <SocialListItem>
                  <SocialLink
                    to={`https://twitter.com/${social?.twitter?.username}`}
                  >
                    <Twitter />
                  </SocialLink>
                </SocialListItem>
                <SocialListItem>
                  <SocialLink
                    to={`https://github.com/${social?.github?.username}`}
                  >
                    <Github />
                  </SocialLink>
                </SocialListItem>
                <SocialListItem>
                  <SocialLink to={`mailto:${author?.email}`}>
                    <Mail />
                  </SocialLink>
                </SocialListItem>
              </Spaced>
            </ul>
          </SocialsWrap>
        </Spaced>
      )}
    </BioWrap>
  );
};

Bio.propTypes = {
  compact: PropTypes.bool,
};

Bio.defaultProps = {
  compact: false,
};

export default Bio;

const query = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/src/images/avatar.jpeg/" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          description
          email
        }
        social {
          github {
            username
          }
          twitter {
            username
          }
        }
      }
    }
  }
`;
