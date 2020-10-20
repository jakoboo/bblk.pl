import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ContentWrap from '../../ui/ContentWrap';
import Heading from '../../ui/Heading';
import Padded from '../../ui/Padded';

import SiteLogo from '../../images/bblk-logo.svg';
import DesktopMenu from './DesktopMenu';

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const HeaderContentWrap = styled(ContentWrap)`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-space-between;
`;

const SiteTitle = styled(Heading)`
  a {
    text-decoration: none;
  }

  svg {
    height: 3rem;
    width: auto;

    .cls-1 {
      fill: ${(p) => p.theme.textColor};
    }
    .cls-2 {
      fill: ${(p) => p.theme.primaryColor};
    }
  }
`;

const Header = () => (
  <HeaderWrap>
    <Padded vertical='m'>
      <HeaderContentWrap>
        <SiteTitle level={4} element='span'>
          <Link to='/'>
            <SiteLogo />
          </Link>
        </SiteTitle>

        <DesktopMenu />
      </HeaderContentWrap>
    </Padded>
  </HeaderWrap>
);

export default Header;
