import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-14 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1300px] rounded-[2rem] bg-white/95 p-4 sm:p-6 lg:p-8 xl:p-10 backdrop-blur-sm">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="rounded-[2rem] bg-amber-50 p-8 sm:p-10 h-full flex flex-col justify-center">
            <h1 className={ `${ titleFont.className } text-4xl sm:text-5xl mb-4` }>Nueva cuenta</h1>
            <p className="text-slate-600 mb-6 italic text-sm sm:text-base leading-7">
              Crea tu usuario en un espacio amplio y muy responsive. Nuestro diseño está hecho para verse bien en cualquier pantalla.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-7">
              Completa tus datos y entra a una experiencia más bonita, fluida y sin bordes fuertes.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-8 sm:p-10">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
