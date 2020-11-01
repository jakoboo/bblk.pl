import React from 'react';
import PropTypes from 'prop-types';
import Padded from '../Padded';
import { Root } from './styles';

const Card = ({ padded, hoverable, element, children, ...props }) => (
  <Root as={element} hoverable={hoverable} {...props}>
    <Padded all={padded ? 'xxl' : undefined}>
      <div>{children}</div>
    </Padded>
  </Root>
);

Card.propTypes = {
  padded: PropTypes.bool,
  hoverable: PropTypes.bool,
  element: PropTypes.string,
};

Card.defaultProps = {
  padded: true,
  hoverable: true,
};

export default Card;
