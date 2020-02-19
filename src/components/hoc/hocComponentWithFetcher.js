/* eslint-disable import/prefer-default-export */
import { compose } from 'recompose';
import { hocComponent } from './hocComponent';
import { hocWithFetcher } from '../../network';
import { hocWithEither } from './hocWithEither';

const hocComponentWithFetcher = (isLoadingConditionFn, EitherComponent) => Component => {
  const composedComponent = compose(
    hocWithFetcher,
    hocWithEither(isLoadingConditionFn, EitherComponent),
    hocComponent
  );
  return composedComponent(Component);
};

export { hocComponentWithFetcher };
