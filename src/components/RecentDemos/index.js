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

const RecentDemosListWrap = styled.div`
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

const NoDemosHeading = styled(Heading)`
  grid-column: auto / span 12;
  font-weight: 700;
  text-align: center;
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

const LinkList = styled.ul`
  margin-top: ${(p) => p.theme.spacing.l};
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;
const LinkListItem = styled.li``;
const ListLink = styled(Link)`
  position: relative;
  z-index: 2;
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

const RecentDemosList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "demos" } } }
        limit: 4
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            sourceURL
            liveDemoURL
          }
        }
      }
    }
  `);

  const Demos = data.allMdx.nodes;

  if (Demos.length > 0) {
    return (
      <>
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

                  <LinkList>
                    {demo.frontmatter.sourceURL ? (
                      <LinkListItem>
                        <ListLink
                          to={demo.frontmatter.sourceURL}
                          target=''
                          rel=''
                        >
                          Source
                        </ListLink>
                      </LinkListItem>
                    ) : null}
                    {demo.frontmatter.liveDemoURL ? (
                      <LinkListItem>
                        <ListLink
                          to={demo.frontmatter.liveDemoURL}
                          target=''
                          rel=''
                        >
                          Live demo
                        </ListLink>
                      </LinkListItem>
                    ) : null}
                  </LinkList>
                </div>
              </Padded>
            </DemoWrap>
          );
        })}
      </>
    );
  } else {
    return <NoDemosHeading level={3}>No demos found</NoDemosHeading>;
  }
};

const RecentDemos = () => {
  return (
    <RecentDemosWrap>
      <Padded vertical='5x'>
        <RecentDemosContentWrap>
          <Heading level={2}>Recent Demos</Heading>
          <RecentDemosListWrap>
            <GridPattern />
            <Circles />
            <RecentDemosList />
          </RecentDemosListWrap>
        </RecentDemosContentWrap>
      </Padded>
    </RecentDemosWrap>
  );
};

export default RecentDemos;
