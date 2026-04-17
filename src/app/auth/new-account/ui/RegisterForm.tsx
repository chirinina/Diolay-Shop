"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { login, registerUser } from '@/actions';
import { useState } from 'react';


type FormInputs = {
  name: string;
  email: string;
  password: string;  
}



export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser( name, email, password );

    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');


  }


  return (
    <form onSubmit={ handleSubmit( onSubmit ) } className="flex flex-col space-y-5">
      <label className="text-sm uppercase tracking-[0.2em] text-slate-500" htmlFor="email">
        Nombre completo
      </label>
      <input
        className={
          clsx(
            "px-5 py-3 rounded-[2rem] bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300",
            {
              'ring-2 ring-rose-300': errors.name
            }
          )
        }
        type="text"
        autoFocus
        placeholder="Tu nombre completo"
        { ...register('name', { required: true }) }
      />

      <label className="text-sm uppercase tracking-[0.2em] text-slate-500" htmlFor="email">
        Correo electrónico
      </label>
      <input
        className={
          clsx(
            "px-5 py-3 rounded-[2rem] bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300",
            {
              'ring-2 ring-rose-300': errors.email
            }
          )
        }
        type="email"
        placeholder="tucorreo@ejemplo.com"
        { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }
      />

      <label className="text-sm uppercase tracking-[0.2em] text-slate-500" htmlFor="email">
        Contraseña
      </label>
      <input
        className={
          clsx(
            "px-5 py-3 rounded-[2rem] bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300",
            {
              'ring-2 ring-rose-300': errors.password
            }
          )
        }
        type="password"
        placeholder="********"
        { ...register('password', { required: true, minLength: 6 }) }
      />

      <span className="text-rose-600 text-sm italic min-h-[1.5rem]">{ errorMessage }</span>

      <button className="btn-primary">Crear cuenta</button>

      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-slate-300/70"></div>
        <div className="px-2 text-slate-500">O</div>
        <div className="flex-1 h-px bg-slate-300/70"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
