"use client";

import { useEffect } from 'react';
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';
// import { useRouter } from 'next/navigation';

export const LoginForm = () => {


  // const router = useRouter();
  const [state, dispatch] = useFormState(authenticate, undefined);
  
  console.log(state);

  useEffect(() => {
    if ( state === 'Success' ) {
      // redireccionar
      // router.replace('/');
      window.location.replace('/');
    }

  },[state]);



  return (
    <form action={dispatch} className="flex flex-col space-y-6">
      <label className="text-sm uppercase tracking-[0.24em] text-slate-500" htmlFor="email">
        Correo electrónico
      </label>
      <input
        className="w-full min-h-[4rem] px-6 rounded-[3rem] bg-slate-100 text-slate-900 placeholder:text-slate-400 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
        type="email"
        name="email"
        placeholder="tucorreo@ejemplo.com"
      />

      <label className="text-sm uppercase tracking-[0.24em] text-slate-500" htmlFor="email">
        Contraseña
      </label>
      <input
        className="w-full min-h-[4rem] px-6 rounded-[3rem] bg-slate-100 text-slate-900 placeholder:text-slate-400 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
        type="password"
        name="password"
        placeholder="********"
      />

      <div
        className="min-h-[2rem]"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="rounded-2xl bg-rose-50 px-4 py-2 text-sm text-rose-700">
            <IoInformationOutline className="inline-block h-5 w-5 mr-2 align-middle" />
            Credenciales no son correctas
          </div>
        )}
      </div>

      <LoginButton />

      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-slate-300/70"></div>
        <div className="px-2 text-slate-500">O</div>
        <div className="flex-1 h-px bg-slate-300/70"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary w-full text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={ clsx(
        "w-full py-4 text-lg",
        {
          "btn-primary": !pending,
          "btn-disabled": pending
        }
      )}
      disabled={ pending }
    >
      Ingresar
    </button>
  );
}
