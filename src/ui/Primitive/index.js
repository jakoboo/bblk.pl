import React, { Children, cloneElement, isValidElement } from 'react';

import classNames from 'classnames';

const getClasses = ({ props, child }) => {
  let childClassName;

  if (child && child.props && child.props.className) {
    childClassName = child.props.className;
  }

  return classNames(props.className, childClassName);
};

const Primitive = ({ ...props }) => {
  return Children.map(props.children, (child) => {
    if (isValidElement(child)) {
      // If each child of this component is a valid React component, we can
      // clone and add the correct className to give the correct styles.
      return cloneElement(child, {
        className: getClasses({ props, child }),
      });
    } else if (child == null) {
      // If you have some condition inside the component it will set `props` to
      // the value `true`/`false` and props.children is going to return null in
      // that case.
      return null;
    }
    // If it is just a text node, we wrap the child in a <div> element so we
    // can apply styling to it.
    return <div className={getClasses({ props, child })}>{child}</div>;
  });
};

export default Primitive;
