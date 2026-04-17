
import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.1),_transparent_30%),linear-gradient(to_bottom,_rgb(255,241,233),_rgb(255,255,255))] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto flex h-full w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[2.5rem] bg-amber-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className={ `${ titleFont.className } text-4xl sm:text-5xl lg:text-6xl mb-6` }>Ingresar</h1>
            <p className="text-slate-600 mb-6 italic text-base sm:text-lg lg:text-xl leading-8 max-w-xl">
              Bienvenido de nuevo. Usa tus datos para entrar y disfruta de la tienda en una interfaz amplia, moderna y adaptada a toda la pantalla.
            </p>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-8 max-w-xl">
              Si todavía no tienes cuenta, crea una nueva y empieza a comprar con un estilo más suave y cómodo, con ambos lados bien ajustados.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-12 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
