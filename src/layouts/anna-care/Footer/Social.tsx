import { SocialNetworks } from '../../../components/anna-care/LandingOld/SocialNetworks';
import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
} from '../../../components/ui/Icons';
import { Text } from '../../../components/ui/Text';
import { FACEBOOK, INSTAGRAM, LINKEDIN, TIKTOK } from '../../../constants';

import styles from './Footer.styles';
import { Information } from './Information';

export const Social = () => {
  return (
    <div className={styles.SocialCSS}>
      <div>
        <SocialNetworks>
          <SocialNetworks.Item link={FACEBOOK}>
            <Facebook />
          </SocialNetworks.Item>
          <SocialNetworks.Item link={INSTAGRAM}>
            <Instagram />
          </SocialNetworks.Item>
          <SocialNetworks.Item link={LINKEDIN}>
            <Linkedin />
          </SocialNetworks.Item>
          <SocialNetworks.Item link={TIKTOK}>
            <Tiktok />
          </SocialNetworks.Item>
        </SocialNetworks>
      </div>

      <div className="md:hidden">
        <Information />
      </div>

      <ul className={styles.SocialListCSS}>
        <li>
          <Text
            text="Copyright © 2023 AnnaHealth LLC"
            level="base"
            className="text-sm"
          />
        </li>
        <li>
          <Text
            text="Todos los derechos reservados"
            level="base"
            className="text-sm"
          />
        </li>
      </ul>
    </div>
  );
};
