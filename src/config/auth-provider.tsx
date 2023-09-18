import { AUTH_CHECK, AUTH_ERROR, AUTH_LOGIN, AUTH_LOGOUT } from 'react-admin';

export default async (type: string, params: any) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const response = await fetch(request);
    const json = await response.json();

    if (json.error || !json.token) throw new Error(json.message);

    localStorage.setItem('token', json.token);
    localStorage.setItem('personalInfo', JSON.stringify(json.personalInfo));
    return json.token;
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('personalInfo');
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('personalInfo');
      return Promise.reject();
    }

    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    const hasToken = localStorage.getItem('token');

    return hasToken ? Promise.resolve() : Promise.reject();
  }

  return Promise.resolve();
};
