import React from 'react';
import { animated, Keyframes } from 'react-spring/renderprops';
import styled from 'styled-components';

const pathValues = [
  'M 90.82 34.37 C 161.61 12.18 251.44 -32.73 306.44 65.77 C 361.44 164.27 479.94 243.43 422.73 290.34 C 365.52 337.25 288.18 287.95 306.44 410.94 C 324.7 533.93 176.92 466.64 98.49 410.94 C 20.06 355.24 20.44 327.18 54.57 275.95 C 88.7 224.72 42.51 179.32 18.29 140.77 C -5.93 102.22 20.02 56.56 90.82 34.37 Z',
  'M 104.11 41.18 C 174.9 18.99 260.79 -27.53 296.85 82.28 C 332.91 192.09 465.44 231.62 424.75 286.98 C 384.06 342.34 345.35 298.18 312.44 412.24 C 279.53 526.3 220.91 467.64 123.52 442.9 C 26.13 418.16 28.73 343.46 41.17 286.98 C 53.61 230.5 92.09 186.1 67.86 147.55 C 43.63 109 33.32 63.34 104.11 41.18 Z',
  'M 101.99 30.32 C 172.79 8.18 223.26 -12.47 295.87 89.78 C 368.48 192.03 431.32 208.26 422.63 276.18 C 413.94 344.1 400.16 316.18 341.31 418.57 C 282.46 520.96 206.44 478.02 117.37 441.18 C 28.3 404.34 51.97 352.28 39.06 276.18 C 26.15 200.08 12.63 173.94 22.31 127.06 C 31.99 80.18 31.2 52.51 101.99 30.32 Z',
  'M 67.82 3.75 C 138.62 -18.44 172.28 65.48 315.06 59.25 C 457.84 53.02 434.66 195.81 425.98 263.7 C 417.3 331.59 342.53 298.04 345.59 410.91 C 348.65 523.78 212.06 490.27 123.02 453.4 C 33.98 416.53 80.73 355.82 67.82 279.71 C 54.91 203.6 -8.68 167.62 1 120.71 C 10.68 73.8 -2.97 25.94 67.82 3.75 Z',
];

const SVG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -60%) rotate(-45deg);
  z-index: -1;
  width: 40%;
  height: auto;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: none;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    transform: translate(10%, 15%);
  }
`;

const Blob = () => {
  const Container = Keyframes.Spring(async (next) => {
    const config = { duration: 5000 };

    while (true) {
      await next({
        from: { d: pathValues[0] },
        d: pathValues[1],
        config,
      });
      await next({
        from: { d: pathValues[1] },
        d: pathValues[2],
        config,
      });
      await next({
        from: { d: pathValues[2] },
        d: pathValues[3],
        config,
      });
      await next({
        from: { d: pathValues[3] },
        d: pathValues[0],
        config,
      });
    }
  });

  return (
    <SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
      <defs>
        <linearGradient
          id='f52d6251-211b-4ba8-8db1-a07b638a8376'
          x1='0.5'
          x2='0.5'
          y2='1'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#5da9e0' />
          <stop offset='1' stopColor='#e57eae' />
        </linearGradient>
      </defs>
      <Container>
        {({ d }) => (
          <animated.path
            d={d}
            fill='url(#f52d6251-211b-4ba8-8db1-a07b638a8376)'
          />
        )}
      </Container>
    </SVG>
  );
};

export default Blob;
