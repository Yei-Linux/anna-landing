import simpleRestProvider from 'ra-data-simple-rest';
import { httpClient } from './admin-http-client';
import { withLifecycleCallbacks } from 'react-admin';

const baseDataProvider = simpleRestProvider('/api', httpClient);

export const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: 'patients',
    beforeUpdate: async (params, dataProvider) => {
      const isInactive = !!params.data?.isInactive;

      return { ...params, data: { isInactive } };
    },
  },
]);
