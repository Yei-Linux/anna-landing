import classNames from 'classnames';
import { Text } from '../../../components/ui/Text';

import styles from './Footer.styles';
import stylesCSS from './Information.module.css';
import Link from 'next/link';
import {
  ABOUT_US,
  MEDICAL_TEAM,
} from '../../../constants';

export const Information = () => {
  return (
    <div className={styles.InformationCSS}>
      <ul
        className={classNames(
          styles.InformationListCSS,
          stylesCSS.informationHeader
        )}
      >
        <li>
          <Link href={ABOUT_US} target="_blank">
            <a target="_blank">
              <Text
                text="Acerca de nosotros"
                level="base"
                className="text-sm"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href={MEDICAL_TEAM} target="_blank">
            <a target="_blank">
              <Text text="Soporte" level="base" className="text-sm" />
            </a>
          </Link>
        </li>
        <li>
          <Link href={MEDICAL_TEAM} target="_blank">
            <a target="_blank">
              <Text
                text="Términos y condiciones"
                level="base"
                className="text-sm"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
