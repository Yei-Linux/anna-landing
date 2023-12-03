export const validClassName = (className: string) => {
  const isInvalid = className.includes('undefined');

  return isInvalid ? '' : className;
};

export const getBotUrlSender = (phone: string, message: string) => {
  const link = `https://wa.me/${phone}?text=${message}`;

  return link;
};

export interface IGetTreatmentMessage {
  turnText: string;
  diseaseText: string;
  dayText: string;
}
export const getTreatmentMessage = ({
  turnText,
  dayText,
  diseaseText,
}: IGetTreatmentMessage) => {
  const message = `Hola, creo que tengo ${diseaseText}, y acabo de registrar una cita para el día ${dayText} en el turno ${turnText} `;

  return message;
};

interface ISuscribeMessage {
  type: string;
  cronicDiseaseText: string;
}
export const getSuscribeMessage = ({
  type,
  cronicDiseaseText,
}: ISuscribeMessage) => {
  const message = `Hola,me quiero suscribir al ${type} para la enfermedad crónica ${cronicDiseaseText}`;

  return message;
};

export const options = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

export const formatDate = (date: Date) =>
  options[date.getDay()] + ' ' + date.getDate();

export const getWeekList = () => {
  const days = [];

  const now = Date.now();
  const DAY = 60 * 60 * 24 * 1000;

  for (let i = 0; i < 7; i++) {
    const date = new Date(now + DAY * i);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    days.push({
      text: formatDate(date),
      id: date.getTime().toString(),
    });
  }

  return days;
};
