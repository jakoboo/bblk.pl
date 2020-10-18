import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styles';

const Heading = ({ level, element, ...props }) => (
  <Root level={level} as={element ? element : `h${level}`} {...props} />
);

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  element: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
