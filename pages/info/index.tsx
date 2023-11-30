import type { NextPage } from 'next';

import { WithLayout } from '../../src/hocs/WithLayout';
import { Landing } from '../../src/components/anna-care/Landing';

const LandingPage: NextPage = () => {
  return <Landing />;
};

export default WithLayout(LandingPage);
