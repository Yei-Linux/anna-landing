import { Text } from '../../../ui/Text';
import { Image } from '../../../ui/Image';
import { Button } from '../../../ui/Button';
import { Pill } from '../../../ui/Pill';

export const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <Text
          text="¿Te sientes mal?"
          className="text-primary text-center"
          level="lg"
          as="h3"
        />
        <Text
          className="text-center text-neutralStrong"
          text="Comienza a cuidarte desde casa"
          level="base"
        />
      </div>
      <div>
        <Image
          hasShadow={false}
          src="/assets/pildores.png"
          alt="Section One"
          width={140}
          height={140}
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <Button>Prueba Care+</Button>
        <Button className="bg-white !text-primary border-2 border-primary">
          Tratarme
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-7">
          <div>
            <Image
              hasShadow={false}
              src="/assets/pildores2.png"
              alt="Section One"
              width={63}
              height={74}
            />
          </div>
          <div className="max-w-[300px]">
            <Text text="Monitoreate con Care+" level="base" />
            <Text
              className="text-neutralStrong"
              text="Realiza seguimiento de su salud Recibe tratamiento de cuidado personal y/o control de su enfermedad crónica."
              level="base"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Pill>+100 miembros</Pill>
          <Pill>24 Provincias</Pill>
        </div>
      </div>
    </div>
  );
};
