import TextField from '@mui/material/TextField';
import { Text } from '../../../../ui/Text';

export const KnowYou = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Text text="A conocerte" level="2xl" fontWeight="semibold" as="h3" />
        <Text
          text="Completa los datos para que Anna te de una mejor experiencia"
          level="base"
        />
      </div>

      <div className="flex flex-col gap-5">
        <TextField label="Ingresa tu nombre" variant="outlined" />
        <TextField label="Ingresa tu numero de celular" variant="outlined" />
      </div>
    </div>
  );
};
