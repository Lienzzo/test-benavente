'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertTriangle,
  Plus,
  Trash,
  Edit,
  Save,
  Clock,
  Hammer,
  Truck,
  Info,
  Clipboard,
  Trash2,
  Package,
} from 'lucide-react';

import { useWorkOrderForm } from '@/lib/context/WorkOrderFormContext';
import { 
  lineaParteSchema,
  LineaParteValues 
} from '@/lib/validators/parteSchema';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

// Definir interfaces para los datos reales
interface Vehiculo {
  id: string;
  matricula: string;
  marca: string;
  modelo: string;
}

interface Material {
  id: string;
  nombre: string;
  unidad: string;
}

// Mock data solo para transportistas
const MOCK_TRANSPORTISTAS = [
  { id: 'transportista1', nombre: 'Transportes Rápidos S.A.' },
  { id: 'transportista2', nombre: 'Logística Express S.L.' },
  { id: 'transportista3', nombre: 'Transportes García' },
];

const TIPOS_ACTIVIDAD = [
  { value: 'SUMINISTRO', label: 'Suministro' },
  { value: 'RETIRADA', label: 'Retirada' },
  { value: 'TRANSPORTE', label: 'Transporte' },
  { value: 'OTRO', label: 'Otro' },
];

// Función auxiliar para formatear las horas de un objeto time
const formatTime = (time: { hours: number; minutes: number }) => {
  return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}`;
};

// Este es un componente simplificado para seleccionar hora, se puede reemplazar con el componente real
const TimeFieldComponent = ({ value, onChange }: { value: { hours: number; minutes: number }, onChange: (value: { hours: number; minutes: number }) => void }) => {
  return (
    <div className="flex space-x-2">
      <Input 
        type="number" 
        min="0" 
        max="23" 
        className="h-9 w-16"
        value={value.hours}
        onChange={(e) => onChange({ ...value, hours: parseInt(e.target.value) || 0 })}
      />
      <span className="flex items-center">:</span>
      <Input 
        type="number" 
        min="0" 
        max="59" 
        className="h-9 w-16"
        value={value.minutes}
        onChange={(e) => onChange({ ...value, minutes: parseInt(e.target.value) || 0 })}
      />
    </div>
  );
};

export default function WorkOrderLinesForm() {
  const { formData, updateFormData, addLineaParte, removeLineaParte, updateLineaParte } = useWorkOrderForm();
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  
  // Estado para los datos reales
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [materiales, setMateriales] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Cargar datos reales
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Cargar vehículos
        const vehiculosRes = await fetch('/api/vehiculos');
        if (vehiculosRes.ok) {
          const vehiculosData = await vehiculosRes.json();
          setVehiculos(vehiculosData);
        }
        
        // Cargar materiales
        const materialesRes = await fetch('/api/materiales');
        if (materialesRes.ok) {
          const materialesData = await materialesRes.json();
          setMateriales(materialesData);
        }
      } catch (err: any) {
        console.error('Error cargando datos:', err);
        setError('Error al cargar datos necesarios');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Indica si se debe mostrar la advertencia de no líneas
  const showNoLinesWarning = !formData.lineasParte || formData.lineasParte.length === 0;
  
  // Valores predeterminados para el formulario
  const getDefaultValues = () => {
    if (editIndex !== null && formData.lineasParte && formData.lineasParte[editIndex]) {
      return formData.lineasParte[editIndex];
    }
    
    return {
      tipo: "SUMINISTRO" as const,
      materialId: "",
      cantidad: 0,
      horaInicio: { hours: 8, minutes: 0 },
      horaFin: { hours: 9, minutes: 0 },
      vehiculoId: "_none_",
      transportistaId: "_none_"
    };
  };
  
  // Inicializar formulario con React Hook Form
  const form = useForm<LineaParteValues>({
    resolver: zodResolver(lineaParteSchema),
    defaultValues: getDefaultValues(),
  });
  
  // Resetear el formulario cuando cambia el índice de edición
  useEffect(() => {
    form.reset(getDefaultValues());
  }, [editIndex, form]);
  
  // Manejar la adición/actualización de una línea
  const handleSubmit = (data: LineaParteValues) => {
    // Convertir "_none_" values back to empty strings
    if (data.vehiculoId === "_none_") data.vehiculoId = "";
    if (data.transportistaId === "_none_") data.transportistaId = "";
    
    if (editIndex !== null) {
      updateLineaParte(editIndex, data);
    } else {
      addLineaParte(data);
    }
    setShowAddDialog(false);
    setEditIndex(null);
  };
  
  // Manejar la edición de una línea
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowAddDialog(true);
  };
  
  // Manejar la eliminación de una línea
  const handleDelete = (index: number) => {
    if (confirm('¿Está seguro de que desea eliminar esta línea?')) {
      removeLineaParte(index);
    }
  };
  
  return (
    <div className="space-y-3">
      <Alert className={`py-2 px-3 text-sm ${showNoLinesWarning ? 'border-yellow-500 bg-yellow-50' : 'bg-muted/50'}`}>
        {showNoLinesWarning ? (
          <>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-medium">No hay líneas en el parte</AlertTitle>
            <AlertDescription className="mt-1">
              Añada al menos una línea para poder continuar.
            </AlertDescription>
          </>
        ) : (
          <AlertDescription>
            Gestione las líneas del parte de trabajo.
          </AlertDescription>
        )}
      </Alert>
      
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={() => setShowAddDialog(true)}
          className="gap-1"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          Añadir Línea
        </Button>
      </div>
      
      {loading && (
        <div className="flex items-center justify-center p-4 h-24">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <span className="ml-2 text-sm">Cargando datos...</span>
        </div>
      )}
      
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {!loading && (
        <>
          {formData.lineasParte && formData.lineasParte.length > 0 ? (
            <div className="border rounded-md overflow-hidden">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent bg-muted/30">
                    <TableHead className="font-medium text-xs py-1.5 px-2">Tipo</TableHead>
                    <TableHead className="font-medium text-xs py-1.5 px-2">Material</TableHead>
                    <TableHead className="font-medium text-xs text-right py-1.5 px-2">Cant.</TableHead>
                    <TableHead className="w-[100px] text-right py-1.5 px-2"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formData.lineasParte.map((linea, index) => {
                    const material = materiales.find(m => m.id === linea.materialId);
                    
                    return (
                      <TableRow key={index} className="hover:bg-muted/40">
                        <TableCell className="py-1 px-2">
                          {linea.tipo === 'SUMINISTRO' && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">Suministro</Badge>}
                          {linea.tipo === 'RETIRADA' && <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">Retirada</Badge>}
                          {linea.tipo === 'TRANSPORTE' && <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">Transporte</Badge>}
                          {linea.tipo === 'OTRO' && <Badge variant="outline" className="text-xs">Otro</Badge>}
                        </TableCell>
                        <TableCell className="py-1 px-2">
                          <div className="font-medium text-sm">{material?.nombre || 'Desconocido'}</div>
                          <div className="text-xs text-muted-foreground">
                            {linea.horaInicio && linea.horaFin ? (
                              <>
                                {formatTime(linea.horaInicio)} - {formatTime(linea.horaFin)}
                              </>
                            ) : null}
                          </div>
                        </TableCell>
                        <TableCell className="text-right py-1 px-2">
                          {linea.cantidad} <span className="text-xs text-muted-foreground">{material?.unidad || ''}</span>
                        </TableCell>
                        <TableCell className="text-right py-1 px-2">
                          <div className="flex items-center justify-end gap-1">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-7 w-7" 
                              onClick={() => handleEdit(index)}
                            >
                              <Edit className="h-3.5 w-3.5" />
                              <span className="sr-only">Editar</span>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-7 w-7 text-red-500 hover:text-red-600" 
                              onClick={() => handleDelete(index)}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              <span className="sr-only">Eliminar</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="border border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center my-2">
              <Package className="h-7 w-7 text-muted-foreground mb-1.5" />
              <h3 className="font-medium">No hay líneas en el parte</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                Pulse el botón "Añadir Línea" para comenzar a registrar las actividades del parte de trabajo.
              </p>
            </div>
          )}
          
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editIndex !== null ? 'Editar línea' : 'Añadir línea'}</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="tipo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-9">
                              <SelectValue placeholder="Seleccione tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SUMINISTRO">Suministro</SelectItem>
                            <SelectItem value="RETIRADA">Retirada</SelectItem>
                            <SelectItem value="TRANSPORTE">Transporte</SelectItem>
                            <SelectItem value="OTRO">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="materialId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Material</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione material" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {materiales.map((material) => (
                              <SelectItem key={material.id} value={material.id}>
                                {material.nombre} ({material.unidad})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cantidad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cantidad</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            step="0.01"
                            className="h-9"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="horaInicio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hora inicio</FormLabel>
                            <FormControl>
                              <TimeFieldComponent
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="horaFin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hora fin</FormLabel>
                            <FormControl>
                              <TimeFieldComponent
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {form.watch('tipo') === 'TRANSPORTE' && (
                    <div className="pt-2 border-t">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">DETALLES DEL TRANSPORTE</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="vehiculoId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vehículo (Opcional)</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Vehículo por defecto" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="_none_">-- Vehículo por defecto --</SelectItem>
                                  {vehiculos.map((vehiculo) => (
                                    <SelectItem key={vehiculo.id} value={vehiculo.id}>
                                      {vehiculo.matricula} - {vehiculo.marca} {vehiculo.modelo}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="transportistaId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Transportista</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value === "" ? "_none_" : field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-9">
                                    <SelectValue placeholder="Seleccione transportista" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="_none_">Sin transportista</SelectItem>
                                  {MOCK_TRANSPORTISTAS.map(transportista => (
                                    <SelectItem key={transportista.id} value={transportista.id}>
                                      {transportista.nombre}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                  
                  <DialogFooter className="pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddDialog(false)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit">
                      {editIndex !== null ? 'Guardar cambios' : 'Añadir línea'}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
} 