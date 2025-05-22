/**
 * Database types for type-safety across the application
 */

// Exportar tipos de Prisma
export * from '@prisma/client';

// Estado de parte de trabajo enum (matches EstadoParte from Prisma)
export type EstadoParte = 
  | "PENDIENTE"
  | "EN_PROCESO"
  | "COMPLETADO"
  | "CANCELADO"
  | "RECHAZADO";

// Tipo de vehículo enum (matches TipoVehiculo from Prisma)
export type TipoVehiculo = 
  | "CAMION"
  | "EXCAVADORA"
  | "RETROEXCAVADORA"
  | "BULLDOZER"
  | "GRUA"
  | "OTRO";

// Tipo para líneas de parte con cálculos
export interface LineaParteConCalculos {
  id: string;
  horaSalida: Date;
  horaLlegada: Date;
  cantidad: number;
  observaciones: string | null;
  parteTrabajoId: string;
  vehiculoId: string;
  materialId: string;
  // Campos calculados
  duracion?: number; // en minutos
  precioTotal?: number; // cantidad * precio unitario
}

// Tipo para partes de trabajo con cálculos adicionales
export interface ParteTrabajoConCalculos {
  id: string;
  fecha: Date;
  estado: EstadoParte;
  observaciones: string | null;
  firmado: boolean;
  numeroAlbaran: string | null;
  obraId: string;
  conductorId: string;
  vehiculoId: string;
  radioId: string | null;
  lineasParte: LineaParteConCalculos[];
  // Campos calculados
  cantidadTotal?: number;
  valorTotal?: number;
  duracionTotal?: number; // en minutos
}

// Parte de trabajo type
export type ParteTrabajo = {
  id: string;
  fecha: Date;
  estado: EstadoParte;
  observaciones?: string | null;
  firmado: boolean;
  numeroAlbaran?: string | null;
  obraId: string;
  obra?: Obra;
  conductorId: string;
  conductor?: Conductor;
  vehiculoId: string;
  vehiculo?: Vehiculo;
  radioId?: string | null;
  radio?: Radio | null;
  lineasParte?: LineaParte[];
  createdAt: Date;
  updatedAt: Date;
};

// Línea de parte type
export type LineaParte = {
  id: string;
  horaSalida: Date;
  horaLlegada: Date;
  cantidad: number;
  observaciones?: string | null;
  parteTrabajoId: string;
  parteTrabajo?: ParteTrabajo;
  vehiculoId: string;
  vehiculo?: Vehiculo;
  materialId: string;
  material?: Material;
  createdAt: Date;
  updatedAt: Date;
};

// Obra type
export type Obra = {
  id: string;
  nombre: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  provincia: string;
  estado: string;
  fechaInicio: Date;
  fechaFin?: Date | null;
  clienteId: string;
  cliente?: Cliente;
  createdAt: Date;
  updatedAt: Date;
};

// Cliente type
export type Cliente = {
  id: string;
  nombre: string;
  cif: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  provincia: string;
  telefono?: string | null;
  email?: string | null;
  contacto?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// Conductor type
export type Conductor = {
  id: string;
  nombre: string;
  apellidos: string;
  dni: string;
  telefono?: string | null;
  email?: string | null;
  licencia?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// Vehículo type
export type Vehiculo = {
  id: string;
  matricula: string;
  tipo: TipoVehiculo;
  marca: string;
  modelo: string;
  capacidad?: number | null;
  año?: number | null;
  transportistaId?: string | null;
  transportista?: Transportista | null;
  createdAt: Date;
  updatedAt: Date;
};

// Material type
export type Material = {
  id: string;
  nombre: string;
  descripcion?: string | null;
  unidad: string;
  precio?: number | null;
  createdAt: Date;
  updatedAt: Date;
};

// Radio type
export type Radio = {
  id: string;
  nombre: string;
  descripcion?: string | null;
  ciudad: string;
  provincia: string;
  createdAt: Date;
  updatedAt: Date;
};

// Transportista type
export type Transportista = {
  id: string;
  nombre: string;
  cif: string;
  direccion?: string | null;
  telefono?: string | null;
  email?: string | null;
  contacto?: string | null;
  createdAt: Date;
  updatedAt: Date;
}; 