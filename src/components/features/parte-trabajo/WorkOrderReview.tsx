'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { 
  Check, 
  AlertTriangle, 
  Clock, 
  Calendar, 
  Truck,
  Package,
  Clipboard,
  Radio,
  MessageSquare,
  Edit
} from 'lucide-react';
import { toast } from "sonner";

import { useWorkOrderForm, WorkOrderFormStep } from '@/lib/context/WorkOrderFormContext';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Importamos las acciones del servidor para guardar el parte
import { createParteTrabajo } from '@/lib/actions/parteActions';

// Definir interfaces para los datos
interface Obra {
  id: string;
  nombre: string;
  cliente?: {
    nombre: string;
  };
  clienteNombre?: string;
}

interface Conductor {
  id: string;
  nombre: string;
  apellidos?: string;
}

interface Vehiculo {
  id: string;
  matricula: string;
  marca: string;
  modelo: string;
}

interface Radio {
  id: string;
  nombre: string;
}

interface Material {
  id: string;
  nombre: string;
  unidad: string;
}

export default function WorkOrderReview() {
  const { formData, goToStep, setIsSubmitting } = useWorkOrderForm();
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  // Estado para almacenar los datos de referencia
  const [obras, setObras] = useState<Obra[]>([]);
  const [conductores, setConductores] = useState<Conductor[]>([]);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [radios, setRadios] = useState<Radio[]>([]);
  const [materiales, setMateriales] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Cargar datos reales para mostrarlos en la revisión
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        // Cargar obras
        const obrasRes = await fetch('/api/obras');
        if (obrasRes.ok) {
          const obrasData = await obrasRes.json();
          setObras(obrasData);
        }
        
        // Cargar conductores
        const conductoresRes = await fetch('/api/conductores');
        if (conductoresRes.ok) {
          const conductoresData = await conductoresRes.json();
          setConductores(conductoresData);
        }
        
        // Cargar vehículos
        const vehiculosRes = await fetch('/api/vehiculos');
        if (vehiculosRes.ok) {
          const vehiculosData = await vehiculosRes.json();
          setVehiculos(vehiculosData);
        }
        
        // Cargar radios
        const radiosRes = await fetch('/api/radios');
        if (radiosRes.ok) {
          const radiosData = await radiosRes.json();
          setRadios(radiosData);
        }
        
        // Cargar materiales
        const materialesRes = await fetch('/api/materiales');
        if (materialesRes.ok) {
          const materialesData = await materialesRes.json();
          setMateriales(materialesData);
        }
        
      } catch (err) {
        console.error('Error cargando datos para revisión:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Debug - console.log form data
  console.log('Review form data:', formData);
  
  // Find related data for display
  const obra = obras.find(o => o.id === formData.obraId);
  const conductor = conductores.find(c => c.id === formData.conductorId);
  const vehiculo = vehiculos.find(v => v.id === formData.vehiculoId);
  const radio = radios.find(r => r.id === formData.radioId);
  
  // Convert form data for display
  const canSubmit = Boolean(formData.obraId && formData.conductorId && formData.vehiculoId && formData.lineasParte?.length);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Protección contra envíos accidentales o automáticos
    const isFormSubmit = e.target === document.getElementById('form-review');
    if (!isFormSubmit) {
      console.warn('Intento de envío automático bloqueado');
      return;
    }
    
    if (!canSubmit) {
      setError('Por favor complete todos los campos obligatorios antes de enviar el parte de trabajo.');
      return;
    }
    
    setIsSubmittingLocal(true);
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Preparar los datos para enviar al servidor en formato JSON
      const parteData = {
        fecha: formData.fecha?.toISOString() || new Date().toISOString(),
        obraId: formData.obraId || '',
        conductorId: formData.conductorId || '',
        vehiculoId: formData.vehiculoId || '',
        radioId: formData.radioId === '_none_' ? null : formData.radioId,
        observaciones: formData.observaciones || null,
        lineasParte: formData.lineasParte?.map(linea => {
          // Convertir las horas a objetos Date para el formato esperado por el servidor
          const fechaBase = formData.fecha ? new Date(formData.fecha) : new Date();
          
          const horaSalida = new Date(fechaBase);
          horaSalida.setHours(linea.horaInicio.hours, linea.horaInicio.minutes, 0, 0);
          
          const horaLlegada = new Date(fechaBase);
          horaLlegada.setHours(linea.horaFin.hours, linea.horaFin.minutes, 0, 0);
          
          // Para debugging
          console.log(`Línea ${linea.materialId} - horaSalida: ${horaSalida.toISOString()}, horaLlegada: ${horaLlegada.toISOString()}`);
          
          return {
            materialId: linea.materialId,
            cantidad: parseFloat(linea.cantidad.toString()), // Asegurarse de que es un número
            horaSalida: horaSalida.toISOString(),
            horaLlegada: horaLlegada.toISOString(),
            vehiculoId: (linea.vehiculoId && linea.vehiculoId !== "_none_") ? linea.vehiculoId : formData.vehiculoId,
            observaciones: linea.notas || null
          };
        }) || []
      };
      
      console.log("Enviando parte de trabajo:", parteData);
      
      // Mostrar que estamos enviando datos
      toast.loading("Enviando parte de trabajo...");
      
      const response = await fetch("/api/partes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parteData),
      });

      const result = await response.json();
      console.log("Respuesta del servidor:", result);
      
      if (!response.ok) {
        toast.dismiss();
        throw new Error(result.error || result.details || "Error al crear el parte de trabajo");
      }
      
      if (result.success) {
        toast.dismiss();
        // Redireccionar a la página de partes del conductor
        toast.success("Parte de trabajo guardado con éxito");
        
        // Esperar un momento para asegurar que el usuario ve el mensaje
        setTimeout(() => {
          router.push("/conductor");
          router.refresh(); // Refrescar para asegurar que se cargan los datos actualizados
        }, 1500);
      } else {
        toast.dismiss();
        // Si el servidor devolvió un objeto con success: false pero sin error
        throw new Error(result.error || "Error desconocido al guardar el parte");
      }
      
    } catch (err: any) {
      console.error('Error al enviar el parte:', err);
      toast.error(`Error: ${err.message || 'Error desconocido'}`);
      setError(`Ha ocurrido un error al enviar el parte: ${err.message || 'Error desconocido'}`);
    } finally {
      setIsSubmittingLocal(false);
      setIsSubmitting(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <span className="mt-3 text-sm">Cargando datos para revisión...</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <Alert className="py-2 px-3 text-sm bg-muted/50">
        <AlertDescription>
          Revise todos los datos del parte de trabajo antes de enviarlo.
        </AlertDescription>
      </Alert>
      
      {error && (
        <Alert variant="destructive" className="animate-in fade-in-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="overflow-hidden border-muted shadow-sm">
          <CardHeader className="bg-muted/40 p-4 pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Clipboard className="h-4 w-4 text-primary" />
              Información Básica
            </CardTitle>
            <CardDescription className="text-xs">
              Datos generales del parte de trabajo
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <dl className="space-y-3 text-sm">
              <div className="flex">
                <dt className="w-1/3 text-muted-foreground font-medium">Fecha:</dt>
                <dd className="w-2/3">
                  {formData.fecha ? (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{format(formData.fecha, 'PPP', { locale: es })}</span>
                    </div>
                  ) : (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      No especificada
                    </span>
                  )}
                </dd>
              </div>
              
              <div className="flex">
                <dt className="w-1/3 text-muted-foreground font-medium">Obra:</dt>
                <dd className="w-2/3">
                  {obra ? (
                    <div>
                      <div className="font-medium">{obra.nombre}</div>
                      <div className="text-xs text-muted-foreground">{obra.clienteNombre}</div>
                    </div>
                  ) : (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      No especificada
                    </span>
                  )}
                </dd>
              </div>
              
              <Separator className="my-1" />
              
              <div className="flex">
                <dt className="w-1/3 text-muted-foreground font-medium">Conductor:</dt>
                <dd className="w-2/3">
                  {conductor ? (
                    <span className="font-medium">{conductor.nombre}</span>
                  ) : (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      No especificado
                    </span>
                  )}
                </dd>
              </div>
              
              <div className="flex">
                <dt className="w-1/3 text-muted-foreground font-medium">Vehículo:</dt>
                <dd className="w-2/3">
                  {vehiculo ? (
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{vehiculo.matricula}</div>
                        <div className="text-xs text-muted-foreground">{vehiculo.marca} {vehiculo.modelo}</div>
                      </div>
                    </div>
                  ) : (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      No especificado
                    </span>
                  )}
                </dd>
              </div>
              
              <div className="flex">
                <dt className="w-1/3 text-muted-foreground font-medium">Radio:</dt>
                <dd className="w-2/3">
                  {radio ? (
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{radio.nombre}</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground italic text-sm">No especificado</span>
                  )}
                </dd>
              </div>
              
              {formData.observaciones && (
                <>
                  <Separator className="my-1" />
                  <div className="flex flex-col">
                    <dt className="text-muted-foreground font-medium flex items-center gap-1 mb-1">
                      <MessageSquare className="h-4 w-4" />
                      Observaciones:
                    </dt>
                    <dd className="font-normal pl-3 border-l-2 border-muted text-sm">
                      {formData.observaciones}
                    </dd>
                  </div>
                </>
              )}
            </dl>
            
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => goToStep(WorkOrderFormStep.BasicInfo)}
                className="h-7 text-xs px-2"
              >
                <Edit className="mr-1 h-3 w-3" />
                Editar información básica
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-muted shadow-sm">
          <CardHeader className="bg-muted/40 p-4 pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              Detalles del Parte
            </CardTitle>
            <CardDescription className="text-xs">
              Líneas del parte de trabajo
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            {formData.lineasParte && formData.lineasParte.length > 0 ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">Número de líneas:</span>
                  <Badge variant="secondary" className="h-5 text-xs">{formData.lineasParte.length}</Badge>
                </div>
                
                <div className="overflow-hidden rounded-lg border">
                  <Table className="w-full text-sm">
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="font-medium text-xs py-2">Tipo</TableHead>
                        <TableHead className="font-medium text-xs">Material</TableHead>
                        <TableHead className="text-right font-medium text-xs">Cant.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {formData.lineasParte.map((linea, index) => {
                        const material = materiales.find(m => m.id === linea.materialId);
                        
                        return (
                          <TableRow key={index}>
                            <TableCell className="py-1.5">
                              {linea.tipo === 'SUMINISTRO' && <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 text-xs">Suministro</Badge>}
                              {linea.tipo === 'RETIRADA' && <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 text-xs">Retirada</Badge>}
                              {linea.tipo === 'TRANSPORTE' && <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 text-xs">Transporte</Badge>}
                              {linea.tipo === 'OTRO' && <Badge variant="outline" className="text-xs">Otro</Badge>}
                            </TableCell>
                            <TableCell className="font-medium">
                              {material ? material.nombre : 'Desconocido'}
                            </TableCell>
                            <TableCell className="text-right">
                              {linea.cantidad} <span className="text-xs text-muted-foreground">{material?.unidad || ''}</span>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="py-6 px-4 text-center border border-dashed rounded-lg">
                <Package className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                <div className="text-yellow-600 font-medium text-sm">
                  No hay líneas en el parte
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Por favor, añada al menos una línea para poder enviar el parte.
                </p>
              </div>
            )}
            
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => goToStep(WorkOrderFormStep.WorkOrderLines)}
                className="h-7 text-xs px-2"
              >
                <Edit className="mr-1 h-3 w-3" />
                Editar líneas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-3" />
      
      <div className="flex justify-center pt-2">
        <div id="form-review-container">
          <form 
            id="form-review" 
            onSubmit={handleSubmit}
            style={{ display: 'contents' }}
          >
            <Button 
              type="submit" 
              size="lg"
              className="min-w-[200px] h-10 px-4"
              disabled={!canSubmit || isSubmittingLocal}
            >
              {isSubmittingLocal ? (
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full border-2 border-background border-t-transparent animate-spin mr-2" />
                  Enviando parte...
                </div>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Confirmar y Enviar Parte
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 