import ReactPlayer from 'react-player/lazy';
import { Text } from '../../../ui/Text';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="mt-[-40px] z-[1]">
        <ReactPlayer
          width="100%"
          height="95%"
          playsInline
          url="https://trova-images.s3.amazonaws.com/herovideo.mp4"
          controls={false}
          playing
          loop
          muted
        />
        <div className="h-[40px] w-full bg-white mt-[-40px] z-[2] relative"></div>
      </div>

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
