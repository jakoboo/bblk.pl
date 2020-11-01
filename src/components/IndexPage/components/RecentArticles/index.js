import React from 'react';
import { useStaticQuery } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import ContentWrap from '../../../../ui/ContentWrap';
import Padded from '../../../../ui/Padded';
import Spaced from '../../../../ui/Spaced';
import ScreenReaderText from '../../../../ui/ScreenReaderText';
import Text from '../../../../ui/Text';
import Section from '../Section';
import {
  ArticlesList,
  ArticleWrap,
  ArticleCard,
  ArticleLink,
  ArticlePublishDate,
  Lines,
  GridPattern,
  AnimatedHeading,
} from './styles';
import Heading from '../../../../ui/Heading';

const RecentArticles = () => {
  const data = useStaticQuery(query);
  const articles = data.allMdx.nodes;

  const config = {
    from: { opacity: 0, transform: 'translateY(2rem)' },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  };
  const spring = useSpring(config);

  return (
    <Section elevated={true}>
      <Padded vertical='5x'>
        <ContentWrap>
          <AnimatedHeading style={spring} level={2}>
            Recent articles
          </AnimatedHeading>
          <ArticlesList>
            <GridPattern />
            <Lines />
            <Trail
              items={articles}
              keys={(article) => article.id}
              from={config.from}
              to={config.to}
            >
              {(article) => (props) => (
                <ArticleWrap style={props}>
                  <ArticleCard element='article'>
                    <ArticleLink to={article.fields.slug}>
                      <ScreenReaderText>Go to article</ScreenReaderText>
                    </ArticleLink>
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
                  </ArticleCard>
                </ArticleWrap>
              )}
            </Trail>
          </ArticlesList>
        </ContentWrap>
      </Padded>
    </Section>
  );
};

export default RecentArticles;

const query = graphql`
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
`;
