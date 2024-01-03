import { Fragment } from 'react';
import { SignIn } from '../SignIn/SignIn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNotificationStore } from '../../../../store';
import { useSession } from 'next-auth/react';
import { HomeContent } from './HomeContent';
import { Landing } from '../../Landing';

export const Home = () => {
  const { close, isOpen, message, severity } = useNotificationStore();
  const { status } = useSession();

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={close}
      >
        <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <SignIn />
      {status === 'authenticated' && <HomeContent />}
      {status === 'unauthenticated' && <Landing />}
    </Fragment>
  );
};
