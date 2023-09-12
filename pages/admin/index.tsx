import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
const AdminWrapper = dynamic(() => import('../../src/components/admin/wrapper'), {
  ssr: false,
});

const Patients: NextPage = () => {
  return (
    <Fragment>
      <AdminWrapper />
    </Fragment>
  );
};

export default Patients;