import styled from 'styled-components';
import { animated } from 'react-spring';
import ContentWrap from '../../ui/ContentWrap';
import Link from '../../ui/Link';
import { Avatar } from '../../components/Bio/styles';
import { Root as Text } from '../../ui/Text';

export const ArticleWrap = styled.article``;
export const AnimatedArticleWrap = animated(ArticleWrap);
export const ArticleContentWrap = styled(ContentWrap)`
  max-width: 680px;
`;
export const ArticleHeader = styled.header``;
export const ArticleTags = styled.div``;
export const ArticleTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const ArticleTag = styled.span`
  display: inline-block;

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
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${Text} {
    font-size: ${(p) => p.theme.fontSizes.s.mobile};
  }
`;

export const ArticleAuthorLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.m.mobile};
  font-weight: 500;
  color: ${(p) => p.theme.textColor};
  text-decoration: none;

  ${Avatar} {
    width: 2rem;
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
