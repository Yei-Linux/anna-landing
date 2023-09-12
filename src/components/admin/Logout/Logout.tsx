import { MenuItem } from '@mui/material';
import ExitIcon from '@mui/icons-material/PowerSettingsNew';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';

const Logout = forwardRef((props, ref: any) => {
  const logout = useLogout();
  const handleClick = () => logout({}, '/login');

  return (
    <MenuItem onClick={handleClick} ref={ref}>
      <ExitIcon />
    </MenuItem>
  );
});

export default Logout;
