import { sendEmail } from '../proxy/nodemailer.proxy';

export const sendEmaiWaitlistForAdmin = async (userEmail: string) => {
  if (!process.env.MAILER_EMAIL) return;

  const messageToSend = `
    <h2>¡Hola!</h2>
    <p>El usuario con email: ${userEmail} acaba de mandar una solicitud!</p>
    <p>Fijate en el administrador en la seccion de usuarios pendientes de aprobacion para aprobarlos!</p>
   `;

  await sendEmail({
    emailToSend: process.env.MAILER_EMAIL,
    message: messageToSend,
    subject: 'Un nuevo usuario acaba de mandar una solicitud a Anna',
  });
};

export const sendEmaiWaitlist = async (email: string) => {
  const messageToSend = `
    <h2>¡Hola!</h2>
    <p>En menos de 24 horas el equipo de Anna va a revisar tu solicitud y te aprobará!</p>
    <p>Te llegará una notificación por whatsapp cuando aprobemos tu cuenta!</p>
    <p>Un saludo de parte de</p>
    <p>Anna</p>`;

  await sendEmail({
    emailToSend: email,
    message: messageToSend,
    subject: 'Acabamos de recibir tu solicitud para unirte a Anna! ',
  });
};

export const sendEmaiWasApproved = async (email: string) => {
  const annaSaludWebsite = `${process.env.NEXTAUTH_URL}`;
  const messageToSend = `
      <h2>¡Hola!</h2>
      <p>Hemos aprobado tu solicitud!</p>
      <p>Bienvenido a Anna y disfruta de todos los beneficios!</p>

      <a href="${annaSaludWebsite}">Ingresa a Anna y comienza esta nueva experiencia</a>

      <p>Un saludo de parte de</p>
      <p>Anna</p>`;

  await sendEmail({
    emailToSend: email,
    message: messageToSend,
    subject: 'Hemos aprobado tu solicitud a Anna!',
  });
};

export const sendEmaiRequestAnnaCare = async (email: string) => {
  const messageToSend = `
      <h2>¡Hola!</h2>
      <p>En menos de 24 horas el equipo de Anna va a revisar tu solicitud y te aprobará!</p>
      <p>Te llegará una notificación por whatsapp cuando aprobemos tu cuenta!</p>
      <p>Un saludo de parte de</p>
      <p>Anna</p>`;

  await sendEmail({
    emailToSend: email,
    message: messageToSend,
    subject: 'Acabamos de recibir tu solicitud para obtener Anna Care!',
  });
};

export const sendEmaiAnnaCareWasApproved = async (email: string) => {
  const annaSaludWebsite = `${process.env.NEXTAUTH_URL}`;
  const messageToSend = `
        <h2>¡Hola!</h2>
        <p>Hemos aprobado tu solicitud!</p>
        <p>Bienvenido a Anna y disfruta de todos los beneficios!</p>
  
        <a href="${annaSaludWebsite}">Ingresa a Anna y comienza esta nueva experiencia</a>
  
        <p>Un saludo de parte de</p>
        <p>Anna</p>`;

  await sendEmail({
    emailToSend: email,
    message: messageToSend,
    subject: 'Hemos aprobado tu solicitud a Anna!',
  });
};
