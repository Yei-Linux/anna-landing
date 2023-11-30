import { Fragment } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Providers } from '../src/layouts/anna-care/provider';

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
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Fragment>
  );
}

export default MyApp;
