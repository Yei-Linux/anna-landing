import classNames from 'classnames';
import { Image } from '../../../components/ui/Image';
import { useLandingBotStore } from '../../../store';
import styles from './Header.styles';
import { useSession } from 'next-auth/react';
import { useHome } from '../../../components/anna-care/Platform/Home/useHome';

export const Header = () => {
  const { data } = useSession();
  const haspaymentPlansId = (data?.user as any)?.paymentPlansId;
  const { handleCarePlus } = useHome();
  const { toggleMenu, isOpenMenu } = useLandingBotStore();

  return (
    <header className={styles.HeaderCSS}>
      <nav className={styles.NavCSS}>
        <div className={styles.NavContainerCSS}>
          <a href="#" className={styles.NavLogoCSS}>
            <Image
              src="/assets/anna.png"
              alt="Brand Logo"
              width={35}
              height={35}
              hasShadow={false}
            />
            <Image
              src="/assets/anna_letter.png"
              alt="Brand Logo"
              width={190}
              height={45}
              hasShadow={false}
            />
          </a>

          <div className={styles.NavListCSS}>
            {!haspaymentPlansId && (
              <button
                className="hidden md:flex bg-primary px-4 py-2 text-white rounded-full"
                type="button"
                onClick={handleCarePlus}
              >
                Ser miembro Care+
              </button>
            )}

            <button type="button" onClick={toggleMenu}>
              <Image
                isHidden={isOpenMenu}
                className={classNames('cursor-pointer')}
                src={`/assets/hamburguer.png`}
                alt="Hamburguer Logo"
                width={51}
                height={36}
                hasShadow={false}
              />
              <div
                className={classNames({
                  hidden: !isOpenMenu,
                })}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9999 16.9999L10 9M10 9L1 1M10 9L19 1M10 9L1 17"
                    stroke="#515151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
