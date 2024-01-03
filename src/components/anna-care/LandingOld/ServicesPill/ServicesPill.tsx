import { HomeIcon, LockerIcon, UserIcon } from '../../../ui/Icons';
import { Pill } from '../../../ui/Pill';

import styles from './ServicePill.styles';

export const ServicesPill = () => {
  return (
    <div className={styles.ServicePillCSS}>
      <Pill>
        <UserIcon />
        <span>Atención 24/7</span>
      </Pill>

      <Pill>
        <HomeIcon />
        <span>A domicilio.Sin filas</span>
      </Pill>

      <Pill>
        <LockerIcon />
        <span>Seguro</span>
      </Pill>
    </div>
  );
};
