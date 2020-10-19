import styled from 'styled-components';

import Heading from '../../ui/Heading';
import ContentWrap from '../../ui/ContentWrap';

export const HeaderWrap = styled.header`
  position: relative;
  padding-top: 6rem;
`;

export const HeaderContentWrap = styled(ContentWrap)`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing['3x']};
  padding-bottom: ${({ theme }) => theme.spacing['3x']};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing['4x']};
    padding-bottom: ${({ theme }) => theme.spacing['4x']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing['5x']};
    padding-bottom: ${({ theme }) => theme.spacing['5x']};
  }
`;

export const HeaderTextWrap = styled.div`
  max-width: 40rem;
`;

export const HeaderHeading = styled(Heading)`
  display: inline-block;
  font-weight: 700;

  background: -webkit-linear-gradient(
    left,
    var(--color-primary),
    var(--color-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeaderCallToActionWrap = styled(ContentWrap)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    width: calc((100vw - ${({ theme }) => theme.breakpoints.desktopLarge}) / 2);
    background: var(--color-backgroundInverted);
  }
`;

export const HeaderCallToActionContentWrap = styled(HeaderTextWrap)`
  text-align: center;
`;
