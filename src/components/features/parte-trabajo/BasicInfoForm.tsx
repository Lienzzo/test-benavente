'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Info } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';

import { useWorkOrderForm } from '@/lib/context/WorkOrderFormContext';
import { BasicInfoFormValues, basicInfoSchema } from '@/lib/validators/parteSchema';

import { Input } from '@/components/ui/input';
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
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Definir interfaces para los datos
interface Obra {
  id: string;
  nombre: string;
  cliente?: {
    nombre: string;
  };
  clienteNombre?: string; // Para compatibilidad
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

export default function BasicInfoForm() {
  const { formData, updateFormData, nextStep } = useWorkOrderForm();
  
  // Estado para almacenar los datos reales
  const [obras, setObras] = useState<Obra[]>([]);
  const [conductores, setConductores] = useState<Conductor[]>([]);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [radios, setRadios] = useState<Radio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Cargar datos reales
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Cargar obras
        const obrasRes = await fetch('/api/obras');
        const obrasData = await obrasRes.json();
        if (!obrasRes.ok) throw new Error('Error al cargar obras');
        setObras(obrasData);
        
        // Cargar conductores
        const conductoresRes = await fetch('/api/conductores');
        const conductoresData = await conductoresRes.json();
        if (!conductoresRes.ok) throw new Error('Error al cargar conductores');
        setConductores(conductoresData);
        
        // Cargar vehículos
        const vehiculosRes = await fetch('/api/vehiculos');
        const vehiculosData = await vehiculosRes.json();
        if (!vehiculosRes.ok) throw new Error('Error al cargar vehículos');
        setVehiculos(vehiculosData);
        
        // Cargar radios
        const radiosRes = await fetch('/api/radios');
        const radiosData = await radiosRes.json();
        if (!radiosRes.ok) throw new Error('Error al cargar radios');
        setRadios(radiosData);
        
      } catch (err: any) {
        console.error('Error cargando datos:', err);
        setError('Error al cargar datos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Initialize form with React Hook Form
  const form = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      fecha: formData.fecha || new Date(),
      obraId: formData.obraId || '',
      conductorId: formData.conductorId || '',
      vehiculoId: formData.vehiculoId || '',
      radioId: formData.radioId || '_none_',
      observaciones: formData.observaciones || '',
    },
  });
  
  // Submit handler - simplified
  const onSubmit = (data: BasicInfoFormValues) => {
    // Update form data
    updateFormData(data);
    
    // In case this is triggered directly
    return true;
  };
  
  // Add useEffect to save form data on unmount
  useEffect(() => {
    // Save form data on unmount to ensure it's saved even if user
    // skips direct form submission
    return () => {
      const values = form.getValues();
      updateFormData(values);
    };
  }, [updateFormData, form]);
  
  // Add a function to handle next button click
  const handleSubmitAndContinue = () => {
    form.handleSubmit((data) => {
      updateFormData(data);
      nextStep();
    })();
  };
  
  return (
    <Form {...form}>
      <form 
        id="form-step-0" 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-3"
      >
        <Alert className="py-1.5 px-2.5 text-sm">
          <AlertDescription>
            Complete la información básica del parte de trabajo.
          </AlertDescription>
        </Alert>
        
        {error && (
          <Alert variant="destructive" className="py-1.5 px-2.5 text-sm">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {loading ? (
          <div className="flex items-center justify-center py-6">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            <span className="ml-2 text-sm">Cargando datos...</span>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Grid de todos los campos en formato más compacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              {/* FECHA Y OBRA */}
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm">Fecha</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={`w-full h-9 pl-3 text-left font-normal text-sm ${!field.value ? 'text-muted-foreground' : ''}`}
                          >
                            {field.value ? (
                              format(field.value, 'PPP', { locale: es })
                            ) : (
                              <span>Seleccione una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('2020-01-01')}
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* OBRA field - Replace with real data */}
              <FormField
                control={form.control}
                name="obraId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm">Obra</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 w-full text-sm">
                          <SelectValue placeholder="Seleccione una obra" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {obras.map((obra) => (
                          <SelectItem key={obra.id} value={obra.id}>
                            <div className="flex flex-col">
                              <span>{obra.nombre}</span>
                              <span className="text-xs text-muted-foreground">
                                {obra.cliente?.nombre || obra.clienteNombre || ''}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* CONDUCTOR Y VEHÍCULO */}
              <FormField
                control={form.control}
                name="conductorId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm">Conductor</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 w-full text-sm">
                          <SelectValue placeholder="Seleccione un conductor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {conductores.map((conductor) => (
                          <SelectItem key={conductor.id} value={conductor.id}>
                            {conductor.apellidos 
                              ? `${conductor.nombre} ${conductor.apellidos}`
                              : conductor.nombre}
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
                name="vehiculoId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm">Vehículo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 w-full text-sm">
                          <SelectValue placeholder="Seleccione un vehículo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {vehiculos.map((vehiculo) => (
                          <SelectItem key={vehiculo.id} value={vehiculo.id}>
                            <div className="flex flex-col">
                              <span>{vehiculo.matricula}</span>
                              <span className="text-xs text-muted-foreground">
                                {vehiculo.marca} {vehiculo.modelo}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* RADIO field - Replace with real data */}
              <FormField
                control={form.control}
                name="radioId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm">Radio (Opcional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 w-full text-sm">
                          <SelectValue placeholder="Seleccione un radio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="_none_">-- Sin radio --</SelectItem>
                        {radios.map((radio) => (
                          <SelectItem key={radio.id} value={radio.id}>
                            {radio.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* OBSERVACIONES - SPAN 2 COLUMNAS */}
              <FormField
                control={form.control}
                name="observaciones"
                render={({ field }) => (
                  <FormItem className="md:col-span-2 w-full">
                    <FormLabel className="text-sm">Observaciones (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Añada cualquier anotación relevante..."
                        className="min-h-[70px] resize-none w-full text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}

        <input type="hidden" name="_action" value="basic-info" />
        
        {/* Add a hidden button that other buttons can target */}
        <Button 
          id="submit-basic-info" 
          type="button"
          className="hidden" 
          onClick={handleSubmitAndContinue}
        />
      </form>
    </Form>
  );
} 