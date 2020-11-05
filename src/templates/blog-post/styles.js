import styled from 'styled-components';
import { animated } from 'react-spring';
import ContentWrap from '../../ui/ContentWrap';

export const ArticleWrap = styled.article``;
export const ArticleContentWrap = styled(ContentWrap)`
  max-width: 680px;
`;

export const ArticleHeader = styled.header``;
export const AnimatedArticleHeader = animated(ArticleHeader);

export const ArticleTags = styled.div``;
export const ArticleTag = styled.li`
  display: inline-block;
  list-style: none;

  &:not(:first-child)::before {
    content: '·';
    font-size: 2rem;
    margin: 0 0.5rem;
    vertical-align: middle;
  }

  a {
    color: ${(p) => p.theme.textColor};
    text-decoration: none;
  }
`;
export const ArticlePublished = styled.div`
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(p) => p.theme.textColor};
  }

  * {
    display: inline-block;
    vertical-align: middle;
  }

  svg {
    vertical-align: middle;
    height: 1.25rem;
    stroke-width: 2px;
    margin-left: ${(p) => p.theme.spacing['xl']};
    margin-right: ${(p) => p.theme.spacing['s']};
  }
`;

export const ArticleBody = styled.div`
  > p {
    text-indent: 2rem;

    &:first-child {
      text-indent: 0;

      &:first-letter {
        float: left;
        margin-left: 0;
        margin-right: 0.75rem;
        font-family: ${({ theme }) => theme.fonts.serif};
        font-size: 6rem;
        line-height: 0.85;
      }
    }
  }
`;
export const AnimatedArticleBody = animated(ArticleBody);
