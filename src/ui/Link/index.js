import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Root = styled.a`
  color: ${(p) => (p.primary ? p.theme.primaryColor : p.theme.secondaryColor)};
`;

export const Link = ({ to, href, ...props }) => {
  href = href || to;

  const isExternal = () => {
    if (!href.startsWith('/') && !href.startsWith('#')) return true;

    return false;
  };

  const externalLink = (
    <Root
      {...props}
      href={href}
      target={props.target !== undefined ? props.target : '_blank'}
      rel={props.rel !== undefined ? props.rel : 'nofollow noreferrer noopener'}
    >
      {props.children}
    </Root>
  );

  if (isExternal()) return externalLink;
  else
    return (
      <Root as={GatsbyLink} to={href} {...props}>
        {props.children}
      </Root>
    );
};

Link.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
