import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import { breakpoints } from '../../../theme';
import Text from '../../../ui/Text';
import Spaced from '../../../ui/Spaced';

const DesktopMenuWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const SiteNavigation = styled.section``;

const MenuLinkWrap = styled.li`
  display: inline-block;
  list-style: none;
`;

const MenuLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    > span {
      color: var(--color-gray700);
    }
  }

  &.active > span {
    color: var(--color-gray500);
  }
`;

const MenuLinkText = styled(Text)``;

const SiteTools = styled.section`
  display: flex;
  align-items: center;
`;
const themeName = 'light';
const DesktopMenu = () => {
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    // set up logic ot hide/show desktop menu based on the window width
    const desktopWidth = breakpoints.desktop.replace('px', '');

    const handleResize = debounce(() => {
      setVisibility(window.innerWidth >= desktopWidth);
    }, 10);

    setVisibility(window.innerWidth >= desktopWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visible ? (
    <DesktopMenuWrap>
      <SiteNavigation id='site-navigation' aria-label='Site links'>
        <nav
          role='navigation'
          itemScope
          itemType='http://www.schema.org/SiteNavigationElement'
        >
          <ul>
            <Spaced right='xxl'>
              <MenuLinkWrap>
                <MenuLink to='/' activeClassName='active'>
                  <MenuLinkText order='body' element='span'>
                    Home
                  </MenuLinkText>
                </MenuLink>
              </MenuLinkWrap>
              <MenuLinkWrap>
                <MenuLink to='/blog' activeClassName='active'>
                  <MenuLinkText order='body' element='span'>
                    Blog
                  </MenuLinkText>
                </MenuLink>
              </MenuLinkWrap>
              <MenuLinkWrap>
                <MenuLink to='/demos' activeClassName='active'>
                  <MenuLinkText order='body' element='span'>
                    Demos
                  </MenuLinkText>
                </MenuLink>
              </MenuLinkWrap>
            </Spaced>
          </ul>
        </nav>
      </SiteNavigation>
      <SiteTools aria-label='Site tools'>
        <button>
          <Tippy
            key={themeName}
            content={`Change theme to ${
              themeName === 'light' ? 'dark' : 'light'
            }`}
            placement='bottom'
            animation='shift-away'
          >
            <span>change {themeName}</span>
          </Tippy>
        </button>
      </SiteTools>
    </DesktopMenuWrap>
  ) : null;
};

export default DesktopMenu;
