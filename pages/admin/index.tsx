import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useDefaultOptionsStorage } from '../../src/store/options';
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
  useDefaultOptionsStorage();
  return <AdminWrapper />;
};

export default Admin;
