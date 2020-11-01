import styled from 'styled-components';
import { animated } from 'react-spring';
import Link from '../../../../ui/Link';
import Text from '../../../../ui/Text';
import Card from '../../../../ui/Card';
import GridPatternSVG from '../../../../images/circle_grid.svg';
import LinesSVG from '../../../../images/lines.svg';
import Heading from '../../../../ui/Heading';

export const ArticlesList = styled.div`
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

export const ArticleWrap = styled(animated.div)`
  position: relative;
  grid-column: 1 / -1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: auto / span 6;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: auto / span 4;
  }

  ${ArticlesList} &:nth-of-type(4) {
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
      display: block;
    }

    @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;

export const ArticleCard = styled(Card)`
  background: ${(p) => p.theme.bgWatermark};
`;

export const ArticleLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const ArticlePublishDate = styled(Text)``;

export const GridPattern = styled(GridPatternSVG)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(35%, 50%);

  circle {
    fill: ${(p) => p.theme.secondaryColor};
  }
`;

export const Lines = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 30rem;
  width: auto;
  transform: translate(-25%, -25%);

  .gradient__primary {
    stop-color: ${(p) => p.theme.primaryColor};
  }

  .gradient__secondary {
    stop-color: ${(p) => p.theme.secondaryColor};
  }

  #Rectangle_21 {
    fill: ${(p) => p.theme.primaryColor};
  }
  #Rectangle_23 {
    fill: ${(p) => p.theme.secondaryColor};
  }
`;

export const AnimatedHeading = animated(Heading);
