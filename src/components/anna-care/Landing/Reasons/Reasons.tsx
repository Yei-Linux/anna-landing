import { Text } from '../../../ui/Text';
import { Reason } from './Reason';

export const Reasons = () => {
  return (
    <div className="flex flex-col gap-3 py-4 mt-3 mb-7">
      <div className="flex flex-col gap-3 m-auto">
        <Text
          text="RAZONES PARA AMAR"
          className="text-left text-primary"
          level="sm"
          as="h3"
        />
        <Text
          text="Mira cómo Anna es diferente"
          className="text-left font-bold"
          level="base"
          as="h2"
        />
      </div>

      <div className="flex flex-col items-center gap-20 mt-10">
        <Reason
          src="/assets/reason_1.png"
          reason="Apoyo continuo y atención 
de soporte médico"
        >
          <Reason.SubReason
            src="/assets/heart.png"
            text="Monitoreo de condición crónica"
          />
          <Reason.SubReason src="/assets/dna.png" text="Evolución gráfica" />
          <Reason.SubReason
            src="/assets/shield.png"
            text="Seguimiento y prevención de riesgos"
          />
        </Reason>

        <Reason
          isOdd
          src="/assets/reason_2.png"
          reason="Evaluación detallada con nutricionistas, análisis de laboratorio y conexión constante"
        >
          <Reason.SubReason
            src="/assets/stethoscope.png"
            text="Asesoría con especialistas"
          />
          <Reason.SubReason
            src="/assets/target.png"
            text="Sigue tus propios objetivos"
          />
        </Reason>

        <Reason
          src="/assets/reason_3.png"
          reason="Vigila a quiénes más amas de manera guiada y con orientación"
        >
          <Reason.SubReason
            src="/assets/thermometer.png"
            text="Comparte situaciones con tu doctor"
          />
          <Reason.SubReason
            src="/assets/risks.png"
            text="Identifica patrones y facilita nuevos hábitos"
          />
        </Reason>

        <Reason
          isOdd
          src="/assets/reason_4.png"
          reason="Tú en el centro: Mejora tu condición impulsada por tecnología"
        >
          <Reason.SubReason
            src="/assets/community.png"
            text="Nos unimos con Portamor, para una atención continua y apoyo en tu diagnóstico médico"
          />
          <Reason.SubReason
            src="/assets/risks.png"
            text="Talleres de creación para adultos mayores y en comunidad"
          />
          <Reason.SubReason
            src="/assets/anna.png"
            text="Anna y tu equipo médico  harán seguimiento y podrán definir objetivos a través de hábitos bajo medicina informada"
          />
        </Reason>
      </div>
    </div>
  );
};
