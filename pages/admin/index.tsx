import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';
const AdminWrapper = dynamic(
  () =>
    import('../../src/components/admin/wrapper').then(
      (module) => module.AdminWrapper
    ),
  {
    ssr: false,
  }
);

const Admin: NextPage = () => {
  return <AdminWrapper />;
};

export default Admin;
