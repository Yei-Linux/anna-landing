export const validClassName = (className: string) => {
  const isInvalid = className.includes('undefined');

  return isInvalid ? '' : className;
};

export const getBotUrlSender = (phone: string, message: string) => {
  const link = `https://wa.me/${phone}?text=${message}`;

  return link;
};

export const getWeekList = () => {
  const days = [];
  const options = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const now = Date.now();
  const DAY = 60 * 60 * 24 * 1000;

  for (let i = 0; i < 7; i++) {
    const date = new Date(now + DAY * i);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    days.push({
      text: options[date.getDay()] + ' ' + date.getDate(),
      id: date.getTime(),
    });
  }

  return days;
};
