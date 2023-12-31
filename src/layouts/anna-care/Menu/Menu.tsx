import { Text } from '../../../components/ui/Text';
import styles from './Menu.styles';
import { useLandingBotStore } from '../../../store';

import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List } from '../../../components/ui/List';
import { MenuLoggedContent } from '../../../components/anna-care/Platform/MenuLogged';
import { useSession } from 'next-auth/react';
import { useHome } from '../../../components/anna-care/Platform/Home/useHome';
import { Button } from '../../../components/ui/Button';

const Content = () => {
  const { data } = useSession();
  const haspaymentPlansId = (data?.user as any)?.paymentPlansId;
  const { handleCarePlus } = useHome();

  return (
    <div className="h-full">
      <div className={styles.MenuTitleCSS}>
        <Text text="Cómo funciona" level="base" />
      </div>

      <div className="flex flex-col gap-10">
        <List>
          <List.Item
            title="Trata tu dolor"
            description="Indica que tipo es tu dolencia y si sufres de alguna condición crónica con anterioridad"
          />
          <List.Item
            title="Selecciona tu horario y listo"
            description="Selecciona el horario que se te acomode e indica si es para ti o algún familiar"
          />
          <List.Item
            title="Hazte seguimiento y ahorra"
            description="Con Care+ logra mejores resultados para ti. Ten beneficios mensuales y monitorea tu situación."
          />
        </List>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Para Profesionales</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pronto conocerás soluciones remotas para organizaciones de salud,
              colegios, pagadores, clínicas, entre otras.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="absolute bottom-20 w-full flex justify-center">
        {!haspaymentPlansId && (
          <Button className="w-[98%]" onClick={handleCarePlus}>
            Ser miembro Care+
          </Button>
        )}
      </div>
    </div>
  );
};

export const Menu = () => {
  const { data } = useSession();
  const { isOpenMenu, toggleMenu } = useLandingBotStore();

  return (
    <Drawer open={isOpenMenu} onClose={toggleMenu} className="menu-drawer">
      {data?.user ? <MenuLoggedContent /> : <Content />}
    </Drawer>
  );
};
