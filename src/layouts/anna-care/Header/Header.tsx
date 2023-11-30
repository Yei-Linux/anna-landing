import { Image } from '../../../components/ui/Image';
import { useLandingBotStore } from '../../../store';
import styles from './Header.styles';

export const Header = () => {
  const { toggleMenu } = useLandingBotStore();

  return (
    <header className={styles.HeaderCSS}>
      <nav className={styles.NavCSS}>
        <div className={styles.NavContainerCSS}>
          <a href="#" className={styles.NavLogoCSS}>
            <Image
              src="/assets/newlogo.png"
              alt="Brand Logo"
              width={35}
              height={35}
              hasShadow={false}
            />
          </a>

          <div className={styles.NavListCSS}>
            <button type="button" onClick={toggleMenu}>
              <Image
                className="cursor-pointer"
                src="/assets/hamburguer.png"
                alt="Hamburguer Logo"
                width={51}
                height={36}
                hasShadow={false}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
