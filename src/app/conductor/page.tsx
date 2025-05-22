"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Truck, Plus, Clock, Calendar, CheckCircle2, AlertCircle, ArrowUp, ArrowDown, TrendingDown, TrendingUp, BarChart3, CreditCard } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { getPartesTrabajoPorConductor } from "@/lib/actions/parteActions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ConductorDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [partes, setPartes] = useState<any[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    completados: 0,
    pendientes: 0,
  });

  // Inside the component, add the mobile detection
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // This would normally come from the server component, but we're simulating for now
        const userData = { firstName: "Conductor", id: "user_123" };
        setUser(userData);
        
        // Get work orders for this driver
        // In a real implementation, this would use the actual user ID
        const response = await getPartesTrabajoPorConductor(userData.id);
        
        if (response.success && response.data) {
          // If we have actual data
          setPartes(response.data);
          
          // Calculate stats from the data
          const completados = response.data.filter((parte: any) => parte.estado === 'COMPLETADO').length;
          setStats({
            total: response.data.length,
            completados,
            pendientes: response.data.length - completados
          });
        } else {
          // Sample data for demonstration
          setPartes([]);
          setStats({
            total: 0,
            completados: 0,
            pendientes: 0
          });
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Panel de Conductor</h1>
          <p className="text-muted-foreground">
            Bienvenido, {user?.firstName || "..."}
          </p>
        </div>
        <Button 
          asChild 
          size={isMobile ? "default" : "sm"} 
          className={`w-full md:w-auto ${isMobile ? 'fixed bottom-4 right-4 z-50 shadow-lg rounded-full h-14 w-14 p-0' : ''}`}
        >
          <Link 
            href="/conductor/partes/nuevo" 
            className="flex items-center gap-2"
            aria-label="Crear Nuevo Parte de Trabajo"
          >
            <Plus size={isMobile ? 24 : 16} />
            {!isMobile && <span>Crear Nuevo Parte</span>}
          </Link>
        </Button>
      </div>
      
      {/* Dashboard metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard 
          title="Partes Totales" 
          value={loading ? null : stats.total}
          icon={<FileText className="h-5 w-5" />}
          description="Total de partes registrados"
          trend={loading ? null : { value: '+2', direction: 'up' }}
        />
        <MetricCard 
          title="Completados" 
          value={loading ? null : stats.completados}
          icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
          description="Partes finalizados"
          trend={loading ? null : { value: '+1', direction: 'up' }}
        />
        <MetricCard 
          title="Pendientes" 
          value={loading ? null : stats.pendientes}
          icon={<Clock className="h-5 w-5 text-amber-500" />}
          description="Partes en proceso"
          trend={loading ? null : { value: '+1', direction: 'same' }}
        />
      </div>
      
      {/* Enhanced metrics dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Rendimiento
                </CardTitle>
                <CardDescription>Resumen de actividad semanal</CardDescription>
              </div>
              <Select defaultValue="semanal">
                <SelectTrigger className="w-28 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="mensual">Mensual</SelectItem>
                  <SelectItem value="anual">Anual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-[120px] w-full" />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-1 h-24">
                  {Array.from({ length: 7 }).map((_, i) => {
                    // Simulated data - in reality, this would come from actual metrics
                    const height = Math.max(20, Math.random() * 100);
                    return (
                      <div key={i} className="flex flex-col items-center justify-end">
                        <div 
                          className="bg-primary/80 w-full rounded-sm" 
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-1">
                          {['L', 'M', 'X', 'J', 'V', 'S', 'D'][i]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-sm font-medium mb-1">Tiempo medio de viaje</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">42</span>
                      <span className="text-sm text-muted-foreground ml-1">min</span>
                      <span className="ml-2 text-xs text-green-500 flex items-center">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        -5%
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-1">Viajes por día</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">5.2</span>
                      <span className="ml-2 text-xs text-green-500 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Cumplimiento de Objetivos
            </CardTitle>
            <CardDescription>Progreso hacia objetivos mensuales</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Entregas completadas</span>
                    <span className="font-medium">24/30</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Puntualidad</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Satisfacción del cliente</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                
                <div className="pt-4 border-t text-sm flex items-center justify-between">
                  <span className="text-muted-foreground">Evaluación mensual</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Excelente
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Work orders */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Partes de Trabajo
              </CardTitle>
              <CardDescription>Gestiona tus partes de trabajo desde aquí</CardDescription>
            </div>
            <Button variant="outline" asChild size="sm" className="w-full md:w-auto">
              <Link href="/conductor/partes">
                Ver Todos
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
              <TabsTrigger value="completados">Completados</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="mt-4">
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <WorkOrderSkeleton key={i} />
                  ))}
                </div>
              ) : partes.length > 0 ? (
                <div className="space-y-4">
                  {partes.slice(0, 5).map((parte: any) => (
                    <WorkOrderItem key={parte.id} parte={parte} />
                  ))}
                </div>
              ) : (
                <div className="rounded-md bg-muted p-4 text-center">
                  <p className="text-muted-foreground">No hay partes de trabajo registrados.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="pendientes" className="mt-4">
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <WorkOrderSkeleton key={i} />
                  ))}
                </div>
              ) : partes.filter((p: any) => p.estado !== 'COMPLETADO').length > 0 ? (
                <div className="space-y-4">
                  {partes
                    .filter((p: any) => p.estado !== 'COMPLETADO')
                    .slice(0, 5)
                    .map((parte: any) => (
                      <WorkOrderItem key={parte.id} parte={parte} />
                    ))}
                </div>
              ) : (
                <div className="rounded-md bg-muted p-4 text-center">
                  <p className="text-muted-foreground">No hay partes de trabajo pendientes.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="completados" className="mt-4">
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <WorkOrderSkeleton key={i} />
                  ))}
                </div>
              ) : partes.filter((p: any) => p.estado === 'COMPLETADO').length > 0 ? (
                <div className="space-y-4">
                  {partes
                    .filter((p: any) => p.estado === 'COMPLETADO')
                    .slice(0, 5)
                    .map((parte: any) => (
                      <WorkOrderItem key={parte.id} parte={parte} />
                    ))}
                </div>
              ) : (
                <div className="rounded-md bg-muted p-4 text-center">
                  <p className="text-muted-foreground">No hay partes de trabajo completados.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Próximas Jornadas
            </CardTitle>
            <CardDescription>Tus próximas jornadas programadas</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : (
              <div className="rounded-md bg-muted p-4 text-center">
                <p className="text-muted-foreground">No hay jornadas programadas.</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Vehículo Asignado
            </CardTitle>
            <CardDescription>Información sobre tu vehículo actual</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-[72px] w-full rounded-md" />
              </div>
            ) : (
              <div className="rounded-md bg-muted p-4 text-center">
                <p className="text-muted-foreground">No hay vehículo asignado actualmente.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Reusable components
function MetricCard({ 
  title, 
  value, 
  icon, 
  description, 
  trend 
}: { 
  title: string, 
  value: number | null, 
  icon: React.ReactNode, 
  description: string,
  trend?: { value: string, direction: 'up' | 'down' | 'same' } | null
}) {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          {value === null ? (
            <Skeleton className="h-8 w-24" />
          ) : (
            <div className="text-3xl font-bold">{value}</div>
          )}
          
          {trend && (
            <div className={`text-xs flex items-center ${
              trend.direction === 'up' 
                ? 'text-green-500' 
                : trend.direction === 'down' 
                  ? 'text-red-500' 
                  : 'text-muted-foreground'
            }`}>
              {trend.direction === 'up' && <ArrowUp className="h-3 w-3 mr-1" />}
              {trend.direction === 'down' && <ArrowDown className="h-3 w-3 mr-1" />}
              {trend.direction === 'same' && <span className="h-3 w-3 mr-1">—</span>}
              {trend.value}
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function WorkOrderItem({ parte }: { parte: any }) {
  // In a real implementation, parte would be properly typed
  const fecha = new Date(parte.fecha || Date.now()).toLocaleDateString();
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{parte.obra?.nombre || 'Obra sin nombre'}</span>
          <EstadoBadge estado={parte.estado} />
        </div>
        <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {fecha}
          </span>
          {parte.obra?.cliente && (
            <span className="flex items-center gap-1">
              <FileText size={14} />
              {parte.obra.cliente.nombre}
            </span>
          )}
        </div>
      </div>
      <Button asChild variant="outline" size="sm">
        <Link href={`/conductor/partes/${parte.id}`}>Ver Detalles</Link>
      </Button>
    </div>
  );
}

function EstadoBadge({ estado }: { estado: string }) {
  switch (estado) {
    case 'COMPLETADO':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completado</Badge>;
    case 'PENDIENTE':
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Pendiente</Badge>;
    case 'EN_PROCESO':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">En proceso</Badge>;
    case 'CANCELADO':
      return <Badge variant="destructive">Cancelado</Badge>;
    case 'RECHAZADO':
      return <Badge variant="destructive">Rechazado</Badge>;
    default:
      return <Badge variant="outline">{estado}</Badge>;
  }
}

function WorkOrderSkeleton() {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4">
        <div className="space-y-2 w-full">
          <Skeleton className="h-5 w-40" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
    </div>
  );
} 