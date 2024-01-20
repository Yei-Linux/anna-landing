const TAKE_CARE_SIGNUP_ENABLE = {
  title: 'Hola. Bienvenido a Anna!',
  description: 'Registrate o inicia sesión en Anna. Es rápido y gratis.',
};

const TAKE_CARE_SIGNUP_NOT_ENABLE = {
  title: 'Hola. Bienvenido a Anna!',
  description: 'Completa las siguientes preguntas y únete a Anna 😄',
};

const KNOW_YOU_SIGNUP_ENABLE = {
  title: 'A conocerte',
  description: 'Completa los datos para que Anna te de una mejor experiencia',
};

const KNOW_YOU_SIGNUP_NOT_ENABLE = {
  title: 'Quiero conocerte mejor',
  description:
    'Estos datos permitirán a Anna, en un futuro , darte una mejor experiencia!',
};

const PAYMENT_PLAN_SIGNUP_ENABLE = {
  button: 'Suscribirme',
};
const PAYMENT_PLAN_SIGNUP_NOT_ENABLE = {
  button: 'Unirme a la Lista de Espera!',
};

const FLOW_ENABLE = {
  TAKE_CARE_SIGNUP: TAKE_CARE_SIGNUP_ENABLE,
  KNOW_YOU_SIGNUP: KNOW_YOU_SIGNUP_ENABLE,
  PAYMENT_PLAN_SIGNUP: PAYMENT_PLAN_SIGNUP_ENABLE,
};

const FLOW_NOT_ENABLE = {
  TAKE_CARE_SIGNUP: TAKE_CARE_SIGNUP_NOT_ENABLE,
  KNOW_YOU_SIGNUP: KNOW_YOU_SIGNUP_NOT_ENABLE,
  PAYMENT_PLAN_SIGNUP: PAYMENT_PLAN_SIGNUP_NOT_ENABLE,
};

export const messages = (signUpEnable: boolean) =>
  signUpEnable ? FLOW_ENABLE : FLOW_NOT_ENABLE;
