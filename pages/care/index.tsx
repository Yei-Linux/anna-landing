import type { NextPage } from 'next';
import { useEffect } from 'react';

import { WithLayout } from '../../src/hocs/WithLayout';
import { AnnaCareWrapper } from '../../src/components/anna-care/wrapper';

const CarePage: NextPage = () => {
  useEffect(() => {
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <AnnaCareWrapper />;
};

export default WithLayout(CarePage);
