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
  return (
    <Fragment>
      <Head>
        <title>Anna - Nuestro Asistente virtual</title>
        <link rel="icon" href="/assets/brand.jpeg" sizes="any" />
        <meta
          name="description"
          content="Anna es un asistente virtual destinado para brinar una guia medica y derivarte segun tu diagnostico a nuestros medicos especializados o general"
          key="desc"
        />
        <meta property="og:title" content="Anna nuestro asistente Virtual" />
        <meta
          property="og:description"
          content="Anna es un asistente virtual destinado para brinar una guia medica y derivarte segun tu diagnostico a nuestros medicos especializados o general"
        />
      </Head>
      <AdminWrapper />
    </Fragment>
  );
};

export default Admin;
