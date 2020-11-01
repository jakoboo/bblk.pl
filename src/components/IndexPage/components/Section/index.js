import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styles';

const Section = ({ elevated, element, children, ...props }) => (
  <Root as={element} elevated={elevated} {...props}>
    {children}
  </Root>
);

Section.propTypes = {
  elevated: PropTypes.bool,
  element: PropTypes.string,
};

Section.defaultProps = {
  elevated: false,
};

export default Section;
