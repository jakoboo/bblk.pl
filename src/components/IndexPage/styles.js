import styled from 'styled-components';

import Heading from '../../ui/Heading';
import ContentWrap from '../../ui/ContentWrap';
import GridPatternSVG from '../../images/circle_grid.svg';

export const HeaderWrap = styled.section`
  position: relative;
  overflow-y: visible;
`;

export const HeaderContentWrap = styled(ContentWrap)`
  position: relative;

  padding-top: ${({ theme }) => theme.spacing['4x']};
  padding-bottom: ${({ theme }) => theme.spacing['4x']};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing['8x']};
    padding-bottom: ${({ theme }) => theme.spacing['8x']};
  }
`;

export const HeaderTextWrap = styled.div`
  position: relative;
  max-width: 45rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const HeaderHeading = styled(Heading)`
  display: inline-block;
  font-weight: 700;

  /*
  background: -webkit-linear-gradient(
    left,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  */
`;

export const CallToActionWrap = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing['2x']};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing['4x']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing['5x']};
  }
`;

export const GridPattern = styled(GridPatternSVG)`
  position: absolute;
  z-index: -1;
  transform: translate(-70%, -50%);

  circle {
    fill: ${(p) => p.theme.bgWatermark};
  }
`;

export const CircleWatermark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  transform: translate(50%, -70%);
  width: 50%;
  background: ${(p) => p.theme.bgWatermark};
  border-radius: 100%;

  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: none;
  }

  // Keep 1:1 aspect ratio with width in %
  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
