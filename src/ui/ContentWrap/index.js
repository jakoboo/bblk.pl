import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktopLarge};
  margin-left: auto;
  margin-right: auto;
  padding-right: ${({ theme }) => theme.spacing.xl};
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const ContentWrap = ({ ...props }) => <Root {...props} />;

export default ContentWrap;
