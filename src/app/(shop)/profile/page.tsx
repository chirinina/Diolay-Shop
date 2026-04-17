import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const user = session.user;
  const displayName = user.name || user.email || 'Usuario';

  return (
    <div className="flex flex-col min-h-screen items-center pt-24 px-4 pb-20">
      <div className="w-full max-w-4xl rounded-[2rem] bg-white/75 p-8 backdrop-blur-sm">
        <Title title="Perfil" subtitle="Tu información de usuario" />

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-[1.75rem] bg-slate-100/90 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Nombre</p>
            <p className="mt-4 text-xl font-semibold text-slate-900">{displayName}</p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-100/90 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Correo</p>
            <p className="mt-4 text-xl font-semibold text-slate-900">{user.email}</p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-100/90 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Rol</p>
            <p className="mt-4 text-xl font-semibold text-slate-900 capitalize">{user.role}</p>
          </div>
        </div>

        <details className="mt-8 rounded-[1.75rem] bg-slate-100/90 p-6">
          <summary className="cursor-pointer text-sm font-medium text-slate-700">
            Ver detalles de usuario
          </summary>
          <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap text-sm text-slate-600">
            {JSON.stringify(session.user, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
