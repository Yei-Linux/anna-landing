import { Text } from '../../../ui/Text';

export const Hero = () => {
  return (
    <div className="flex flex-col gap-14">
      <img src="/assets/hero.webp" alt="Hero" width="100%" />

      <div className="flex flex-col gap-3 px-3 max-w-[500px] m-auto">
        <Text
          text="Adiós complicaciones. Ten bienestar a largo plazo"
          className="text-left"
          level="xl"
          as="h3"
        />
        <Text
          className="text-left text-neutralStrong #8a8a8a"
          text="Finalmente, las familias pueden tratar problemas recurrentes y dolencias crónicas"
          level="base"
        />
      </div>

      <div className="flex flex-col gap-3 px-3 max-w-[500px] m-auto">
        <Text
          text="Orientación todos los días del año."
          className="text-left"
          level="xl"
          as="h3"
        />
        <Text
          className="text-left text-neutralStrong #8a8a8a"
          text="Haz de tu hogar, tu clínica revisando tu progreso de su salud y teniendo acceso a atención crónica como ambulatoria. Sin copagos, tarifas ocultas ni facturas sorpresa."
          level="base"
        />
      </div>
    </div>
  );
};
