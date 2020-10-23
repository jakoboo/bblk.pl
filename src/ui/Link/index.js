import React from 'react';

import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

export const Link = ({ to, href, ...props }) => {
  const isExternal = () => {
    if (href) return true;
    if (!to.startsWith('/')) return true;

    return false;
  };

  const externalLink = (
    <a
      {...props}
      href={to || href}
      target='_blank'
      rel='nofollow noreferrer noopener'
    >
      {props.children}
    </a>
  );

  if (isExternal()) return externalLink;
  else
    return (
      <GatsbyLink to={to} {...props}>
        {props.children}
      </GatsbyLink>
    );
};

Link.propTypes = {
  exact: PropTypes.bool,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
