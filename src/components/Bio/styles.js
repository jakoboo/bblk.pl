import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from '../../ui/Link';

export const BioWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 5rem;
  align-self: flex-start;

  ${({ compact }) => (compact ? 'max-width: 50px;' : null)}
`;

export const AboutLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.textColor};
`;

export const AboutWrap = styled.div`
  flex-grow: 1;
`;

export const SocialsWrap = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
`;

export const SocialLink = styled(Link)`
  color: ${(p) => p.theme.textColor};

  svg {
    height: 1.5rem;
  }
`;
