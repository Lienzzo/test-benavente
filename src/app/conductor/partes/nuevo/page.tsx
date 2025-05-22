import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import WorkOrderForm from "@/components/features/parte-trabajo/WorkOrderForm";

export default async function NuevoPartePage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Crear Nuevo Parte de Trabajo</h1>
        <Link 
          href="/conductor" 
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Volver
        </Link>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <WorkOrderForm />
      </div>
    </div>
  );
} 