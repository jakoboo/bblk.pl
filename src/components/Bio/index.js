/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-picture.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className='bio' itemScope itemType='https://schema.org/Person'>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className='bio-avatar'
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <>
          <h2>
            <a href='https://bblk.pl/about-me'>{author.name}</a>
          </h2>
          <p>{author?.summary || null}</p>
          <ul>
            <li>
              <a href={social?.twitter || `https://twitter.com`}>Twitter</a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Bio;
