import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Text from '../../ui/Text';
import Spaced from '../../ui/Spaced';
import Quote from '../../ui/Quote';
import {
  HeaderWrap,
  HeaderContentWrap,
  HeaderTextWrap,
  HeaderHeading,
  CallToActionWrap,
  GridPattern,
  CircleWatermark,
} from './styles';
import Blob from '../../ui/Blob';
import Button from '../../ui/Button';
import Padded from '../../ui/Padded';

const Index = ({ data }) => {
  const siteTitle = `Portfolio`;

  return (
    <>
      <SEO title={siteTitle} />
      <HeaderWrap aria-labelledby='introduction-label'>
        <CircleWatermark />
        <HeaderContentWrap>
          <Blob />
          <HeaderTextWrap>
            <GridPattern />
            <HeaderHeading level={1} id='introduction-label'>
              Full Stack Developer
            </HeaderHeading>
            <Spaced top='m'>
              <Quote>
                I'm extremely good at googling, and most of the time I
                understand answers from stack overflow.
              </Quote>
              <Text>
                I'm a student majoring in physics at{' '}
                <a href='https://www.put.poznan.pl' target='_blank'>
                  Poznań University of Technology
                </a>{' '}
                and full stack developer passionate about new technologies,
                creating engaging user experience, and sharing what I've learned
                on my dev blog.
              </Text>
            </Spaced>
            <Spaced vertical='5x'>
              <CallToActionWrap>
                <Button element={Link} to='/about'>
                  <Padded vertical='m' horizontal='8x'>
                    Learn more
                  </Padded>
                </Button>
              </CallToActionWrap>
            </Spaced>
          </HeaderTextWrap>
        </HeaderContentWrap>
      </HeaderWrap>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
          date(formatString: "DD MMMM, YYYY")
          title
          description
        }
      }
    }
  }
`;
