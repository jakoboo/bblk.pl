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
  SocialLink,
  AboutWrap,
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
    <BioWrap>
      {avatar && (
        <Spaced right='m'>
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
        <AboutWrap>
          {compact ? (
            <Text>
              <AboutLink to='/about'>{author?.name || `Author`}</AboutLink>
            </Text>
          ) : (
            <>
              <Spaced top='s'>
                <Heading level={6}>Written by:</Heading>
                <Heading level={4}>
                  <AboutLink to='/about'>{author?.name || `Author`}</AboutLink>
                </Heading>
                <Text>{author?.description || null}</Text>
              </Spaced>
            </>
          )}
        </AboutWrap>
      )}
      {social && (
        <SocialsWrap>
          <Spaced left='m' bottom='m'>
            <SocialLink to={`https://twitter.com/${social?.twitter?.username}`}>
              <Twitter />
            </SocialLink>
            <SocialLink to={`https://github.com/${social?.github?.username}`}>
              <Github />
            </SocialLink>
            <SocialLink to={`mailto:${author?.email}`}>
              <Mail />
            </SocialLink>
          </Spaced>
        </SocialsWrap>
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
