import { Balloon } from '../../../ui/Balloon/Balloon';
import { Text } from '../../../ui/Text';
import { Testimony } from './Testimony';

export const Testimonies = () => {
  return (
    <div className="flex flex-col items-center">
      <Text
        text="HISTORIAS ALREDEDOR"
        className="text-left text-primary"
        level="lg"
        as="h3"
      />
      <Text
        text="Familias y personas como tú"
        className="text-left font-bold"
        level="sm"
        as="h4"
      />

      <div className="flex flex-col gap-3 mt-10">
        <div className="ml-[-100px]">
          <Balloon direction="left" fill="#EBFFE7">
            <Testimony
              src="/assets/testimony_1.png"
              direction="left"
              memberName="Stefani"
              memberState="Miembro por seguro"
              memberTestimony="“Lo pago con mi seguro. En Anna me atendieron y me dieron mi plan personalizado. Ahora me guio de ahí para todo”"
            />
          </Balloon>
        </div>

        <div className="mr-[-100px]">
          <Balloon direction="right" fill="#F6E7FF">
            <Testimony
              src="/assets/testimony_2.png"
              direction="right"
              memberName="Maria"
              memberState="Miembro por care"
              memberTestimony="“Sufro de presión alta. 
            Anna fue un regalo para mi seguimiento. 
            Tambien lo usa mi
            madre”"
            />
          </Balloon>
        </div>
      </div>
    </div>
  );
};
