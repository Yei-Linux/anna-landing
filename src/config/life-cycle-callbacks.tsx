import simpleRestProvider from 'ra-data-simple-rest';
import { httpClient } from './admin-http-client';
import { withLifecycleCallbacks } from 'react-admin';

const baseDataProvider = simpleRestProvider('/api', httpClient);

export const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: 'patients',
    beforeUpdate: async (params, dataProvider) => {
      const isInactive = !!params.data?.isInactive;
      const paymentPlansId = params.data?.paymentPlansId;
      const cronicalDiseasesId = params.data?.cronicalDiseasesId;

      return {
        ...params,
        data: { isInactive, paymentPlansId, cronicalDiseasesId },
      };
    },
  },
  {
    resource: 'not-approved-patients',
    beforeUpdate: async (params, dataProvider) => {
      const isInactive = !!params.data?.isInactive;
      const approved = !!params.data?.approved;
      const paymentPlansId = params.data?.paymentPlansId;
      const cronicalDiseasesId = params.data?.cronicalDiseasesId;

      return {
        ...params,
        data: { isInactive, approved, paymentPlansId, cronicalDiseasesId },
      };
    },
  },
]);
