/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */
import React from 'react';

const hocWithLoader = loaderRenderingFn => Component => props =>
  typeof loaderRenderingFn === 'function' ? (
    loaderRenderingFn(props) ? (
      <Component {...props} isLoading />
    ) : (
      <Component {...props} isLoading={false} />
    )
  ) : (
    <Component {...props} />
  );

export { hocWithLoader };
