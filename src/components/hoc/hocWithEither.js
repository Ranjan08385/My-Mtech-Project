/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */
import React from 'react';

const hocWithEither = (conditionalRenderingFn, EitherComponent) => Component => props =>
  typeof conditionalRenderingFn === 'function' ? (
    conditionalRenderingFn(props) ? (
      <EitherComponent {...props} />
    ) : (
      <Component {...props} />
    )
  ) : (
    <Component {...props} />
  );

export { hocWithEither };
