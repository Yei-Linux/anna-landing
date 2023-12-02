import type { NextPage } from 'next';

import { WithLayout } from '../src/hocs/WithLayout';
import { useEffect } from 'react';
import { AnnaCareWrapper } from '../src/components/anna-care/wrapper';
import { useDefaultOptionsStorage } from '../src/store/options';

const Home: NextPage = () => {
  useDefaultOptionsStorage();
  useEffect(() => {
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <AnnaCareWrapper />;
};

export default WithLayout(Home);
