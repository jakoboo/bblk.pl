import styled from 'styled-components';
import { animated } from 'react-spring';
import Card from '../../../../ui/Card';

import GridPatternSVG from '../../../../images/circle_grid.svg';
import CirclesSVG from '../../../../images/circles.svg';
import Heading from '../../../../ui/Heading';
import Link from '../../../../ui/Link';

export const RecentDemosListWrap = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing['3x']};
  margin-bottom: ${({ theme }) => theme.spacing['3x']};
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: ${(p) => p.theme.spacing.xxl} 0;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing['4x']};
    margin-bottom: ${({ theme }) => theme.spacing['4x']};
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: ${({ theme }) => theme.spacing['5x']};
    margin-bottom: ${({ theme }) => theme.spacing['5x']};
  }
`;

export const NoDemosHeading = styled(Heading)`
  grid-column: auto / span 12;
  font-weight: 700;
  text-align: center;
`;

export const DemoWrap = styled(animated.div)`
  position: relative;
  grid-column: 1 / -1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: auto / span 6;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: auto / span 4;
  }

  ${RecentDemosListWrap} &:nth-of-type(4) {
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
      display: block;
    }

    @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;

export const DemoCard = styled(Card)`
  background: ${(p) => p.theme.bgWatermark};
`;

export const DemoLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const LinkList = styled.ul`
  margin-top: ${(p) => p.theme.spacing.l};
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;
export const LinkListItem = styled.li``;
export const ListLink = styled(Link)`
  position: relative;
  z-index: 2;
`;

export const GridPattern = styled(GridPatternSVG)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transform: translate(-35%, -25%);

  circle {
    fill: ${(p) => p.theme.primaryColor};
  }
`;

export const Circles = styled(CirclesSVG)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 20rem;
  width: auto;
  transform: translate(30%, 50%) scaleX(-1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    top: 0;
    bottom: auto;
    transform: translate(50%, -30%);
  }

  .gradient__primary {
    stop-color: ${(p) => p.theme.primaryColor};
  }

  .gradient__secondary {
    stop-color: ${(p) => p.theme.secondaryColor};
  }
`;

export const AnimatedHeading = animated(Heading);
