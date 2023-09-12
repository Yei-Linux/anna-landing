import { TextField } from '@mui/material';
import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Button } from '../../ui/Button';
import { Image } from '../../../components/ui/Image';

export const Login = ({ theme }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ email, password }).catch(() =>
      notify('Email y/o contraseña invalidos')
    );
  };

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center bg-[#eeecff]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 py-7 px-4 rounded-lg bg-[white] shadow-md"
      >
        <div className="flex justify-center items-center flex-col">
          <Image
            src="/assets/anna_draw.png"
            alt="Brand Logo"
            width={125}
            height={125}
            hasShadow={false}
          />
          <Image
            src="/assets/logo_purple.jpeg"
            alt="Brand Logo"
            width={65}
            height={65}
            hasShadow={false}
          />
        </div>
        <p className="text-xs max-w-xs">
          *Hola! Para entrar a nuestro administrador coloca tu correo y
          contraseña asignada
        </p>
        <TextField
          name="email"
          label="Email"
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="email"
          label="Password"
          type="password"
          value={password}
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="m-auto bg-primaryLight" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};
