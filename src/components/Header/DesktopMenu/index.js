import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import { breakpoints } from '../../../ui/variables';
import Link from '../../../ui/Link';
import Text from '../../../ui/Text';
import Spaced from '../../../ui/Spaced';
import Button from '../../../ui/Button';
import { useTheme } from '../../../ui/ThemeContext';

import { Sun, Moon } from '@styled-icons/feather';

const DesktopMenuWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const SiteNavigation = styled.section``;

const MenuLinkWrap = styled.li`
  display: inline-block;
  list-style: none;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const MenuLinkText = styled(Text)`
  ${MenuLink}:hover &,
  ${MenuLink}:focus {
    & {
      color: ${(p) => p.theme.gray500Color};
    }
  }

  ${MenuLink}.active & {
    color: ${(p) => p.theme.secondaryColor};
  }
`;

const SiteTools = styled.section`
  display: flex;
  align-items: center;
`;

const ThemeToggleButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${(p) => p.theme.gray500Color};

  svg {
    vertical-align: top;
    stroke: ${(p) => p.theme.gray500Color};
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const DesktopMenu = () => {
  const { themeName, toggle: toggleTheme } = useTheme();
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
              <MenuLinkWrap>
                <MenuLink to='/about' activeClassName='active'>
                  <MenuLinkText order='body' element='span'>
                    About
                  </MenuLinkText>
                </MenuLink>
              </MenuLinkWrap>
            </Spaced>
          </ul>
        </nav>
      </SiteNavigation>
      <SiteTools aria-label='Site tools'>
        <ThemeToggleButton
          unstyled
          aria-label='Theme toggle button'
          onClick={() => toggleTheme()}
        >
          <Tippy
            key={themeName}
            content={`Change theme to ${
              themeName === 'light' ? 'dark' : 'light'
            }`}
            placement='bottom'
            offset={[0, 20]}
            animation='shift-away'
          >
            {themeName === 'light' ? <Sun /> : <Moon />}
          </Tippy>
        </ThemeToggleButton>
      </SiteTools>
    </DesktopMenuWrap>
  ) : null;
};

export default DesktopMenu;
