import styled from 'styled-components';
import { animated } from 'react-spring';
import ContentWrap from '../../ui/ContentWrap';
import Link from '../../ui/Link';
import { Avatar } from '../../components/Bio/styles';
import { Root as Text } from '../../ui/Text';
import Button from '../../ui/Button';

export const ArticleWrap = styled.div``;
export const ArticleContentWrap = styled(ContentWrap)`
  max-width: 680px;
`;
export const AnimatedArticleContentWrap = animated(ArticleContentWrap);
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
  align-items: center;

  ${Text} {
    font-size: ${(p) => p.theme.fontSizes.s.mobile};
    color: ${(p) => p.theme.gray500Color};
  }
`;

export const PublicationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ArticleAuthorLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.m.mobile};
  color: ${(p) => p.theme.textColor};
  text-decoration: none;

  ${Avatar} {
    width: 3rem;
  }
`;

export const ShareWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ShareButton = styled(Button)`
  width: 1.2rem;
  height: 1.2rem;

  svg {
    vertical-align: top;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
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
