import { Text } from '../../../components/ui/Text';
import styles from './Menu.styles';
import { useLandingBotStore } from '../../../store';

import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '../../../components/ui/Button';

interface IItem {
  title: string;
  description: string;
}
const Item = ({ title, description }: IItem) => (
  <li>
    <div className="flex gap-2 items-center">
      <span className={styles.MarketItemCSS} />
      <Text text={title} level="lg" fontWeight="medium" as="h3" />
    </div>

    <Text
      text={description}
      level="base"
      as="p"
      className="text-neutralStrong"
    />
  </li>
);

const Content = () => (
  <div className="h-full">
    <div className={styles.MenuTitleCSS}>
      <Text text="Cómo funciona" level="base" />
    </div>

    <div className="flex flex-col gap-10">
      <ul className="flex flex-col gap-5 px-[20px] mt-5">
        <Item
          title="Trata tu dolor"
          description="Indica que tipo es tu dolencia y si sufres de alguna condición crónica con anterioridad"
        />
        <Item
          title="Selecciona tu horario y listo"
          description="Selecciona el horario que se te acomode e indica si es para ti o algún familiar"
        />
        <Item
          title="Hazte seguimiento y ahorra"
          description="Con Care+ logra mejores resultados para ti. Ten beneficios mensuales y monitorea tu situación."
        />
      </ul>

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
      <Button className="w-[95%]">Ser miembro Care+</Button>
    </div>
  </div>
);

export const Menu = () => {
  const { isOpenMenu, toggleMenu } = useLandingBotStore();

  return (
    <Drawer open={isOpenMenu} onClose={toggleMenu} className="menu-drawer">
      <Content />
    </Drawer>
  );
};
