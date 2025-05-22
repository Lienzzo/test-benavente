import { getAuthUser, getRedirectPathAfterSignIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  // Get authenticated user
  const user = await getAuthUser();
  
  // If logged in, redirect to the appropriate dashboard
  if (user) {
    const redirectPath = await getRedirectPathAfterSignIn();
    redirect(redirectPath);
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Benavente Logística</h1>
          <p className="mt-2 text-gray-600">Sistema de Gestión de Partes de Trabajo</p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/sign-in" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Iniciar sesión
          </Link>
          
          <Link 
            href="/sign-up" 
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}
