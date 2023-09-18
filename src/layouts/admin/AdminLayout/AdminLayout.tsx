import { AppBar, Layout, Menu } from 'react-admin';
import { Image } from '../../../components/ui/Image';
import { Avatar } from '@mui/material';
import Logout from '../../../components/admin/Logout/Logout';
import { useEffect, useState } from 'react';

export interface IPersonalInfo {
  email: string;
  fullName: string;
  documentNumber: string;
}

const MyAppBar = () => {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
    email: '',
    fullName: '',
    documentNumber: '',
  });

  useEffect(() => {
    const personalInfoStorage = localStorage.getItem('personalInfo');

    if (!personalInfoStorage) return;
    setPersonalInfo(JSON.parse(personalInfoStorage));
  }, []);

  return (
    <AppBar color="primary" userMenu={<></>}>
      <div className="w-full flex justify-between items-center">
        <div>
          <a href="/admin#/patients">
            <Image
              src="/assets/logo_transp.png"
              alt="Brand Logo"
              width={65}
              height={65}
              hasShadow={false}
            />
          </a>
        </div>

        <div className="h-full flex items-center gap-3">
          <Avatar alt="User" src="/assets/userprofile.png" />
          <span className="font-bold">Dr. {personalInfo?.fullName}</span>
          <Logout />
        </div>
      </div>
    </AppBar>
  );
};

export const MyMenu = () => (
  <div className="py-4">
    <Menu>
      <Menu.ResourceItem name="patients" />
    </Menu>
  </div>
);

export const AdminLayout = (props: any) => (
  <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
);
