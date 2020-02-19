/* eslint-disable import/prefer-default-export */
import { compose } from 'recompose';
import { hocComponent } from './hocComponent';
import { hocWithFetcher } from '../../network';
import { hocWithLoader } from './hocWithLoader';

const hocComponentFetcherWithLoader = isLoadingConditionFn => Component => {
  const composedComponent = compose(
    hocWithFetcher,
    hocWithLoader(isLoadingConditionFn),
    hocComponent
  );
  return composedComponent(Component);
};

export { hocComponentFetcherWithLoader };
