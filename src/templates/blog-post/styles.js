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
    content: '';
    display: inline-block;
    width: 3px;
    height: 3px;
    background: ${(p) => p.theme.textColor};
    border-radius: 50%;
    margin: 0 0.5rem;
    vertical-align: middle;
  }

  a {
    color: ${(p) => p.theme.textColor};
    text-decoration: none;
  }
`;

export const ArticleSubheader = styled.div`
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(p) => p.theme.textColor};
    margin-right: ${(p) => p.theme.spacing['m']};
  }

  * {
    display: inline-block;
    vertical-align: middle;
  }

  svg {
    vertical-align: middle;
    height: 1.25rem;
    color: ${(p) => p.theme.gray500Color}
    stroke-width: 2px;
    margin: 0 ${(p) => p.theme.spacing['s']};
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
