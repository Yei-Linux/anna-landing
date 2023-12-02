import { Information } from './Information';
import { Social } from './Social';

import styles from './Footer.styles';

export const Footer = () => {
  return (
    <footer className={styles.FooterCSS}>
      <div className={styles.FooterContainerCSS}>
        <Social />
        <div className="hidden md:flex">
          <Information />
        </div>
      </div>
    </footer>
  );
};
