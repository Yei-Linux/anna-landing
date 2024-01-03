import { Card } from '../../../ui/Card';
import { Text } from '../../../ui/Text';

export const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-14 bg-[#fafafa] py-10">
      <Card>
        <Card.Cover src="/assets/benefit1.png" />
        <Card.Body>
          <div className="flex flex-col gap-5">
            <Text
              text="Adiós complicaciones. Ten bienestar a largo plazo"
              className="text-center"
              level="sm"
              as="h4"
            />
            <Text
              className="text-center text-neutralStrong #8a8a8a"
              text="Finalmente, las familias pueden tratar problemas recurrentes y dolencias crónicas"
              level="sm"
              as="h4"
            />
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Cover src="/assets/benefit2.png" />
        <Card.Body>
          <div className="flex flex-col gap-5">
            <Text
              text="Recibe orientación de un equipo médico solo para ti."
              className="text-center"
              level="sm"
              as="h4"
            />
            <Text
              className="text-center text-neutralStrong #8a8a8a"
              text="Que no sea solo 1 cita. Médicos especialistas que te conoceran a través 
              consultas online y teleconsultas."
              level="sm"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
