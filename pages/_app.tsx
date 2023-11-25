import { Fragment } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
