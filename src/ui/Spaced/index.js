import React from 'react';
import styled from 'styled-components';

import Primitive from '../Primitive';

const Root = styled(Primitive)`
  ${({ theme, all, vertical, horizontal, top, right, bottom, left }) => {
    let str = '';
    if (all) {
      str += `margin: ${theme.spacing[all]}`;
    }
    if (vertical) {
      str += `margin-top: ${theme.spacing[vertical]}; margin-bottom: ${theme.spacing[vertical]};`;
    }
    if (horizontal) {
      str += `margin-left: ${theme.spacing[horizontal]}; margin-right: ${theme.spacing[horizontal]};`;
    }
    if (top) {
      str += `margin-top: ${theme.spacing[top]};`;
    }
    if (right) {
      str += `margin-right: ${theme.spacing[right]};`;
    }
    if (bottom) {
      str += `margin-bottom: ${theme.spacing[bottom]};`;
    }
    if (left) {
      str += `margin-left: ${theme.spacing[left]};`;
    }
    return str;
  }}
`;

const Spaced = ({ ...props }) => <Root {...props} />;

export default Spaced;
