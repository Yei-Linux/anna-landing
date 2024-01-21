import nodemailer from 'nodemailer';

export interface SendEmail {
  emailToSend: string;
  message: string;
  subject: string;
}

export const sendEmail = async ({
  emailToSend,
  message,
  subject,
}: SendEmail) => {
  const authOptions = {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  };

  console.log('test', authOptions);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: authOptions,
  });
  const mailOptions = {
    from: `Anna Salud: ${process.env.MAILER_EMAIL}`,
    html: message,
    body: message,
    to: emailToSend,
    subject,
  };

  await transporter.sendMail(mailOptions);
};
