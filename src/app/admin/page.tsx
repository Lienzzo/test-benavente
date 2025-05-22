import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthUser } from "@/lib/auth";
import { FileText, Users, Truck, Building, History, Clock } from "lucide-react";

export default async function AdminDashboard() {
  const user = await getAuthUser();
  
  // Placeholder metrics data with Lucide React icons
  const metrics = [
    { 
      title: "Partes de Trabajo", 
      value: "32", 
      description: "Total de partes registrados",
      icon: <FileText className="h-5 w-5 text-muted-foreground" />
    },
    { 
      title: "Conductores", 
      value: "8", 
      description: "Conductores activos",
      icon: <Users className="h-5 w-5 text-muted-foreground" />
    },
    { 
      title: "Vehículos", 
      value: "15", 
      description: "Vehículos en flota",
      icon: <Truck className="h-5 w-5 text-muted-foreground" />
    },
    { 
      title: "Clientes", 
      value: "24", 
      description: "Clientes registrados",
      icon: <Building className="h-5 w-5 text-muted-foreground" />
    },
  ];
  
  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard de Administración</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Actividad Reciente
            </CardTitle>
            <CardDescription>Historial de operaciones recientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4">
              <p className="text-sm text-muted-foreground">No hay actividad reciente para mostrar.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Partes Pendientes
            </CardTitle>
            <CardDescription>Partes de trabajo pendientes de revisión</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4">
              <p className="text-sm text-muted-foreground">No hay partes pendientes actualmente.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 