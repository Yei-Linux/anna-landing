const AUTH_PROVIDERS = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    allowDangerousEmailAccountLinking: true,
  },
};
const AUTH_SECRET = process.env.SECRET;
export { AUTH_PROVIDERS, AUTH_SECRET };
