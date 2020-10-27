import React from 'react';
import { useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ContentWrap from '../../../../ui/ContentWrap';
import Heading from '../../../../ui/Heading';
import Padded from '../../../../ui/Padded';
import Spaced from '../../../../ui/Spaced';
import Link from '../../../../ui/Link';
import ScreenReaderText from '../../../../ui/ScreenReaderText';
import Text from '../../../../ui/Text';

import GridPatternSVG from '../../../../images/circle_grid.svg';
import LinesSVG from '../../../../images/lines.svg';

const RecentArticlesWrap = styled.section`
  background: ${(p) => p.theme.bgSecondary};
  box-shadow: ${(p) => p.theme.elevations['4dp']};
`;

const RecentArticlesContentWrap = styled(ContentWrap)`
  position: relative;
  z-index: 0;
`;

const ArticlesList = styled.div`
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
`;

const ArticleWrap = styled.article`
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

  ${ArticlesList} &:nth-of-type(4) {
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
      display: block;
    }

    @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;

const ArticleLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ArticlePublishDate = styled(Text)``;

const GridPattern = styled(GridPatternSVG)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(35%, 50%);

  circle {
    fill: ${(p) => p.theme.secondaryColor};
  }
`;

const Lines = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 30rem;
  width: auto;
  transform: translate(-25%, -25%);

  .gradient__primary {
    stop-color: ${(p) => p.theme.primaryColor};
  }

  .gradient__secondary {
    stop-color: ${(p) => p.theme.secondaryColor};
  }

  #Rectangle_21 {
    fill: ${(p) => p.theme.primaryColor};
  }
  #Rectangle_23 {
    fill: ${(p) => p.theme.secondaryColor};
  }
`;

const RecentArticles = () => {
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

  const articles = data.allMdx.nodes;

  return (
    <RecentArticlesWrap>
      <Padded vertical='5x'>
        <RecentArticlesContentWrap>
          <Heading level={2}>Recent articles</Heading>
          <ArticlesList>
            <GridPattern />
            <Lines />
            {articles.map((article) => {
              return (
                <ArticleWrap>
                  <ArticleLink to={article.fields.slug}>
                    <ScreenReaderText>Go to article</ScreenReaderText>
                  </ArticleLink>
                  <Padded all='xl'>
                    <div>
                      <Spaced bottom='s'>
                        <ArticlePublishDate order='meta'>
                          <ScreenReaderText>
                            Article published date&nbsp;
                          </ScreenReaderText>
                          {article.frontmatter.date}
                        </ArticlePublishDate>
                      </Spaced>
                      <Spaced bottom='l'>
                        <Heading level={4}>{article.frontmatter.title}</Heading>
                      </Spaced>
                      <Text>
                        {article.frontmatter.description || article.excerpt}
                      </Text>
                    </div>
                  </Padded>
                </ArticleWrap>
              );
            })}
          </ArticlesList>
        </RecentArticlesContentWrap>
      </Padded>
    </RecentArticlesWrap>
  );
};

export default RecentArticles;
