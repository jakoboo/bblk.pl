import React from 'react';
import { useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ContentWrap from '../../ui/ContentWrap';
import Heading from '../../ui/Heading';
import Padded from '../../ui/Padded';
import Spaced from '../../ui/Spaced';
import Link from '../../ui/Link';
import ScreenReaderText from '../../ui/ScreenReaderText';
import Text from '../../ui/Text';

import GridPatternSVG from '../../images/circle_grid.svg';
import CirclesSVG from '../../images/circles.svg';

const RecentDemosWrap = styled.section``;

const RecentDemosContentWrap = styled(ContentWrap)`
  position: relative;
`;

const DemosList = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing['3x']};
  margin-bottom: ${({ theme }) => theme.spacing['3x']};
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: ${(p) => p.theme.spacing.xxl} 0;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing['4x']};
    margin-bottom: ${({ theme }) => theme.spacing['4x']};
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.spacing['5x']};
    margin-bottom: ${({ theme }) => theme.spacing['5x']};
  }

  > *:nth-child(4) {
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
      display: block;
    }

    @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;

const DemoWrap = styled.article`
  position: relative;
  grid-column: 1 / -1;
  height: 100%;
  background: ${(p) => p.theme.bgWatermark};
  box-shadow: ${(p) => p.theme.elevations['1dp']};
  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;

  &:hover {
    transform: translateY(-5%);
    box-shadow: ${(p) => p.theme.elevations['8dp']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: auto / span 6;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: auto / span 4;
  }
`;

const DemoLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const GridPattern = styled(GridPatternSVG)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transform: translate(-35%, -25%);

  circle {
    fill: ${(p) => p.theme.primaryColor};
  }
`;

const Circles = styled(CirclesSVG)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 20rem;
  width: auto;
  transform: translate(30%, 50%) scaleX(-1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    top: 0;
    bottom: auto;
    transform: translate(50%, -30%);
  }

  .gradient__primary {
    stop-color: ${(p) => p.theme.primaryColor};
  }

  .gradient__secondary {
    stop-color: ${(p) => p.theme.secondaryColor};
  }
`;

const RecentDemos = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
        limit: 4
      ) {
        nodes {
          id
          excerpt
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
          }
        }
      }
    }
  `);

  const Demos = data.allMdx.nodes;

  return (
    <RecentDemosWrap>
      <Padded vertical='5x'>
        <RecentDemosContentWrap>
          <Heading level={2}>Recent Demos</Heading>
          <DemosList>
            <GridPattern />
            <Circles />
            {Demos.map((demo) => {
              return (
                <DemoWrap>
                  <DemoLink to={demo.fields.slug}>
                    <ScreenReaderText>Go to demo</ScreenReaderText>
                  </DemoLink>
                  <Padded all='xl'>
                    <div>
                      <Spaced bottom='l'>
                        <Heading level={4}>{demo.frontmatter.title}</Heading>
                      </Spaced>
                      <Text>{demo.frontmatter.description}</Text>
                    </div>
                  </Padded>
                </DemoWrap>
              );
            })}
          </DemosList>
        </RecentDemosContentWrap>
      </Padded>
    </RecentDemosWrap>
  );
};

export default RecentDemos;
