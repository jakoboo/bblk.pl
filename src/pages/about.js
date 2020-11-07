import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

const AboutMe = ({ data, location }) => {
  const author = data.site.siteMetadata.author;

  return (
    <>
      <SEO title='About me' />
      <h1>About me</h1>
      <p>{author.description}</p>
    </>
  );
};

export default AboutMe;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          email
          description
        }
      }
    }
  }
`;
