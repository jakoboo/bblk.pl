import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContentWrap from '../../ui/ContentWrap';
import Heading from '../../ui/Heading';
import Link from '../../ui/Link';
import Padded from '../../ui/Padded';
import DesktopMenu from './DesktopMenu';

import SiteLogo from '../../images/bblk-logo.svg';

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const HeaderContentWrap = styled(ContentWrap)`
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

const Header = ({ location }) => (
  <HeaderWrap>
    <Padded vertical='m'>
      <HeaderContentWrap>
        <SiteTitle level={4} element='span'>
          <Link to='/' aria-label='Home page'>
            <SiteLogo />
          </Link>
        </SiteTitle>

        <DesktopMenu location={location} />
      </HeaderContentWrap>
    </Padded>
  </HeaderWrap>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
