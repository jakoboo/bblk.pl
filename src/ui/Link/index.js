import React from 'react';

import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Root = styled.a`
  color: ${(p) => (p.primary ? p.theme.primaryColor : p.theme.secondaryColor)};
`;

export const Link = ({ to, href, ...props }) => {
  const isExternal = () => {
    if (href) return true;
    if (!to.startsWith('/')) return true;

    return false;
  };

  const externalLink = (
    <Root
      {...props}
      href={to || href}
      target='_blank'
      rel='nofollow noreferrer noopener'
    >
      {props.children}
    </Root>
  );

  if (isExternal()) return externalLink;
  else
    return (
      <GatsbyLink as={Root} to={to} {...props}>
        {props.children}
      </GatsbyLink>
    );
};

Link.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
