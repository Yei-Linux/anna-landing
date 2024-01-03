import { Text } from '../../../ui/Text';
import { Image } from '../../../ui/Image';
import { Card } from '../../../ui/Card';

export const CofounderTestimony = () => {
  return (
    <div className="bg-[#EBFFE7] py-10 flex flex-col items-center gap-10">
      <Text
        text="Imagina de tu hogar, tu propia clínica. Ahora es posible."
        className="text-center font-light"
        level="2xl"
        as="h3"
      />

      <div>
        <Image
          src="/assets/doctor_animated.png"
          alt="testimony"
          width={220}
          height={220}
          hasShadow={false}
        />
        <div className="mt-[-20px]">
          <Card maxWidth="300px">
            <div className="flex flex-col items-center gap-3 p-8">
              <Text
                text="Por cada 100 000 peruanos, hay 42 médicos. La combinación con seguimiento y tecnología basada en análisis de datos es un mundo por explorar."
                className="text-left"
                level="sm"
                as="h4"
              />
              <Image
                src="/assets/cofounder.png"
                alt="testimony"
                width={50}
                height={50}
                hasShadow={false}
              />
              <Text
                text="CO-FUNDADORA Y NEUMÓLOGA DE ANNA"
                className="text-center"
                level="sm"
                as="h4"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
