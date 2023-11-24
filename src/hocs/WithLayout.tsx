/* eslint-disable react/display-name */
import { Fragment } from 'react';
import { Header } from '../layouts/anna-care/Header';
import { Main } from '../layouts/anna-care/Main';
import { Footer } from '../layouts/anna-care/Footer';
import { Menu } from '../layouts/anna-care/Menu/Menu';

export const WithLayout =
  <P extends object>(WrapperComponent: React.ComponentType) =>
  (props: P) => {
    return (
      <Fragment>
        <Header />
        <Menu />
        <Main>
          <WrapperComponent {...props} />
        </Main>
        <Footer />
      </Fragment>
    );
  };
