import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from '../../ui/Link';

export const BioWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(Image)`
  flex-shrink: 0;
  width: 100px;
  align-self: flex-start;

  ${({ compact }) => (compact ? 'max-width: 50px;' : null)}
`;

export const AboutLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.textColor};
`;

export const SocialsWrap = styled.div`
  margin-left: auto;
  flex-shrink: 0;
`;

export const SocialListItem = styled.li`
  display: inline-block;
  list-style: none;
`;

export const SocialLink = styled(Link)`
  color: ${(p) => p.theme.textColor};

  svg {
    height: 1.5rem;
  }
`;
