import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useSpring } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import ContentWrap from '../../../../ui/ContentWrap';
import Heading, { AnimatedHeading } from '../../../../ui/Heading';
import Padded from '../../../../ui/Padded';
import Spaced from '../../../../ui/Spaced';
import ScreenReaderText from '../../../../ui/ScreenReaderText';
import Text from '../../../../ui/Text';
import Section from '../Section';
import {
  RecentDemosListWrap,
  GridPattern,
  Circles,
  DemoWrap,
  DemoCard,
  DemoLink,
  LinkList,
  LinkListItem,
  ListLink,
  NoDemosHeading,
} from './styles';

const config = {
  from: { opacity: 0, transform: 'translateY(2rem)' },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
};

const RecentDemosList = () => {
  const data = useStaticQuery(query);
  const demos = data.allMdx.nodes;

  if (demos.length > 0) {
    return (
      <Trail
        items={demos}
        keys={(demo) => demo.id}
        from={config.from}
        to={config.to}
      >
        {(demo) => (props) => (
          <DemoWrap style={props}>
            <DemoCard element='article'>
              <DemoLink to={demo.fields.slug}>
                <ScreenReaderText>Go to demo</ScreenReaderText>
              </DemoLink>
              <Spaced bottom='l'>
                <Heading level={4}>{demo.frontmatter.title}</Heading>
              </Spaced>
              <Text>{demo.frontmatter.description}</Text>

              <LinkList>
                {demo.frontmatter.sourceURL ? (
                  <LinkListItem>
                    <ListLink
                      to={demo.frontmatter.sourceURL}
                      target='_blank'
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
                      target='_blank'
                      rel=''
                    >
                      Live demo
                    </ListLink>
                  </LinkListItem>
                ) : null}
              </LinkList>
            </DemoCard>
          </DemoWrap>
        )}
      </Trail>
    );
  } else {
    return <NoDemosHeading level={3}>No demos found</NoDemosHeading>;
  }
};

const RecentDemos = () => {
  const spring = useSpring(config);

  return (
    <Section>
      <Padded vertical='5x'>
        <ContentWrap>
          <AnimatedHeading style={spring} level={2}>
            Recent Demos
          </AnimatedHeading>
          <RecentDemosListWrap>
            <GridPattern />
            <Circles />
            <RecentDemosList />
          </RecentDemosListWrap>
        </ContentWrap>
      </Padded>
    </Section>
  );
};

export default RecentDemos;

const query = graphql`
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
`;
