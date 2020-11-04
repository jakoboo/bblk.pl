import React from 'react';
import * as _ from 'lodash';
import Tippy from '@tippyjs/react';

import ScreenReaderText from '../../ui/ScreenReaderText';
import { HeadingLink, HeadingWrap } from './styles';
import { Hash } from 'styled-icons/feather';

const ArticleHeading = ({ children, ...props }) => {
  const id = _.kebabCase(children);

  const copyUrl = (event) => {
    event.preventDefault();

    const el = document.createElement('textarea');
    el.value = event.target.href;
    document.body.appendChild(el);

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <HeadingWrap id={id} {...props}>
      {children}
      <Tippy
        content='Copy direct url'
        placement='bottom'
        offset={[0, 10]}
        animation='shift-away'
      >
        <HeadingLink
          href={`#${id}`}
          aria-labelledby={`${id}-label`}
          onClick={copyUrl}
        >
          <ScreenReaderText id={`${id}-label`}>
            Link to this section
          </ScreenReaderText>
          <Hash />
        </HeadingLink>
      </Tippy>
    </HeadingWrap>
  );
};

export default ArticleHeading;
