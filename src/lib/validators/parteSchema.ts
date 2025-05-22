import { z } from "zod";
import { EstadoParte, TipoVehiculo } from "@/types/db";

// Time value schema for TimeField component
export const timeValueSchema = z.object({
  hours: z.number().min(0).max(23),
  minutes: z.number().min(0).max(59),
});

export type TimeValue = z.infer<typeof timeValueSchema>;

// Schema for basic work order information
export const basicInfoSchema = z.object({
  fecha: z.date({
    required_error: "La fecha es requerida",
    invalid_type_error: "Formato de fecha inválido",
  }),
  obraId: z.string({
    required_error: "La obra es requerida",
  }).min(1, "Debe seleccionar una obra"),
  conductorId: z.string({
    required_error: "El conductor es requerido",
  }).min(1, "Debe seleccionar un conductor"),
  vehiculoId: z.string({
    required_error: "El vehículo es requerido",
  }).min(1, "Debe seleccionar un vehículo"),
  radioId: z.string().optional(),
  observaciones: z.string().optional(),
});

// Schema for a single work order line (transport of material)
export const lineaParteSchema = z.object({
  id: z.string().optional(), // Only needed for edits
  tipo: z.enum(["SUMINISTRO", "RETIRADA", "TRANSPORTE", "OTRO"]),
  horaInicio: timeValueSchema,
  horaFin: timeValueSchema,
  cantidad: z.number({
    required_error: "La cantidad es requerida",
    invalid_type_error: "Debe ser un número",
  }).positive("La cantidad debe ser mayor que cero"),
  vehiculoId: z.string().optional(),
  transportistaId: z.string().optional(),
  materialId: z.string({
    required_error: "El material es requerido",
  }).min(1, "Debe seleccionar un material"),
  notas: z.string().optional(),
}).refine((data) => {
  // Validate that horaFin is after horaInicio on the same day
  const inicioMinutes = data.horaInicio.hours * 60 + data.horaInicio.minutes;
  const finMinutes = data.horaFin.hours * 60 + data.horaFin.minutes;
  return finMinutes > inicioMinutes;
}, {
  message: "La hora de fin debe ser posterior a la hora de inicio",
  path: ["horaFin"],
});

// Schema for the complete work order form
export const parteTrabajoSchema = z.object({
  ...basicInfoSchema.shape,
  lineasParte: z.array(lineaParteSchema).min(1, "Debe agregar al menos una línea de parte"),
  estado: z.enum([
    "PENDIENTE", 
    "EN_PROCESO", 
    "COMPLETADO", 
    "CANCELADO", 
    "RECHAZADO"
  ] as const).default("PENDIENTE"),
  firmado: z.boolean().default(false),
  numeroAlbaran: z.string().optional(),
});

// For step 1: Basic information
export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;

// For step 2: Work order lines/details
export type LineaParteValues = z.infer<typeof lineaParteSchema>;

// For the complete form
export type ParteTrabajoFormValues = z.infer<typeof parteTrabajoSchema>;

// For draft saving
export const draftSchema = z.object({
  savedAt: z.date(),
  formData: parteTrabajoSchema.partial(),
}); 