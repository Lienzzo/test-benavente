'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type EstadoParte } from "@/types/db";

// Obtener todos los partes de trabajo
export async function getPartesTrabajo() {
  try {
    const partes = await db.parteDeTrabajo.findMany({
      orderBy: {
        fecha: 'desc'
      },
      include: {
        obra: {
          include: {
            cliente: true
          }
        },
        conductor: true,
        vehiculo: true,
        radio: true,
        lineasParte: {
          include: {
            material: true
          }
        }
      }
    });
    
    return { success: true, data: partes };
  } catch (error) {
    console.error("Error al obtener partes de trabajo:", error);
    return { success: false, error: "Error al cargar los partes de trabajo" };
  }
}

// Obtener partes de trabajo de un conductor específico
export async function getPartesTrabajoPorConductor(conductorId: string) {
  try {
    const partes = await db.parteDeTrabajo.findMany({
      where: {
        conductorId
      },
      orderBy: {
        fecha: 'desc'
      },
      include: {
        obra: {
          include: {
            cliente: true
          }
        },
        vehiculo: true,
        radio: true,
        lineasParte: {
          include: {
            material: true
          }
        }
      }
    });
    
    return { success: true, data: partes };
  } catch (error) {
    console.error(`Error al obtener partes de trabajo del conductor ${conductorId}:`, error);
    return { success: false, error: "Error al cargar los partes de trabajo" };
  }
}

// Obtener un parte de trabajo por ID
export async function getParteTrabajoById(id: string) {
  try {
    const parte = await db.parteDeTrabajo.findUnique({
      where: { id },
      include: {
        obra: {
          include: {
            cliente: true
          }
        },
        conductor: true,
        vehiculo: true,
        radio: true,
        lineasParte: {
          include: {
            vehiculo: true,
            material: true
          },
          orderBy: {
            horaSalida: 'asc'
          }
        }
      }
    });
    
    if (!parte) {
      return { success: false, error: "Parte de trabajo no encontrado" };
    }
    
    return { success: true, data: parte };
  } catch (error) {
    console.error(`Error al obtener parte de trabajo ${id}:`, error);
    return { success: false, error: "Error al cargar el parte de trabajo" };
  }
}

// Crear un nuevo parte de trabajo con líneas
export async function createParteTrabajo(formData: FormData) {
  try {
    // Datos del parte
    const fecha = new Date(formData.get('fecha') as string);
    const obraId = formData.get('obraId') as string;
    const conductorId = formData.get('conductorId') as string;
    const vehiculoId = formData.get('vehiculoId') as string;
    const radioId = formData.get('radioId') as string || null;
    const observaciones = formData.get('observaciones') as string || null;
    
    // Validación básica
    if (!fecha || !obraId || !conductorId || !vehiculoId) {
      return { success: false, error: "Faltan campos requeridos" };
    }
    
    // Crear el parte de trabajo
    const newParte = await db.parteDeTrabajo.create({
      data: {
        fecha,
        estado: 'PENDIENTE',
        observaciones,
        firmado: false,
        obraId,
        conductorId,
        vehiculoId,
        radioId
      }
    });
    
    // Si hay información de líneas, procesarlas
    // Nota: Este es un ejemplo simplificado, en una implementación real
    // habría que procesar un array de líneas desde el formulario
    const lineasCount = parseInt(formData.get('lineasCount') as string) || 0;
    
    for (let i = 0; i < lineasCount; i++) {
      const horaSalida = new Date(formData.get(`lineas[${i}].horaSalida`) as string);
      const horaLlegada = new Date(formData.get(`lineas[${i}].horaLlegada`) as string);
      const cantidad = parseFloat(formData.get(`lineas[${i}].cantidad`) as string);
      const vehiculoId = formData.get(`lineas[${i}].vehiculoId`) as string;
      const materialId = formData.get(`lineas[${i}].materialId`) as string;
      const observaciones = formData.get(`lineas[${i}].observaciones`) as string || null;
      
      await db.lineaParte.create({
        data: {
          horaSalida,
          horaLlegada,
          cantidad,
          observaciones,
          parteTrabajoId: newParte.id,
          vehiculoId,
          materialId
        }
      });
    }
    
    // Revalidar rutas
    if (formData.get('isDriver') === 'true') {
      revalidatePath('/driver/partes');
    } else {
      revalidatePath('/admin/partes');
    }
    
    return { success: true, data: newParte };
  } catch (error) {
    console.error("Error al crear parte de trabajo:", error);
    return { success: false, error: "Error al crear el parte de trabajo" };
  }
}

// Actualizar un parte de trabajo existente
export async function updateParteTrabajo(id: string, formData: FormData) {
  try {
    // Datos del parte
    const fecha = new Date(formData.get('fecha') as string);
    const estado = formData.get('estado') as EstadoParte;
    const obraId = formData.get('obraId') as string;
    const conductorId = formData.get('conductorId') as string;
    const vehiculoId = formData.get('vehiculoId') as string;
    const radioId = formData.get('radioId') as string || null;
    const observaciones = formData.get('observaciones') as string || null;
    const firmado = formData.get('firmado') === 'true';
    const numeroAlbaran = formData.get('numeroAlbaran') as string || null;
    
    // Validación básica
    if (!fecha || !obraId || !conductorId || !vehiculoId) {
      return { success: false, error: "Faltan campos requeridos" };
    }
    
    // Verificar si existe el parte
    const existingParte = await db.parteDeTrabajo.findUnique({
      where: { id },
      include: {
        lineasParte: true
      }
    });
    
    if (!existingParte) {
      return { success: false, error: "Parte de trabajo no encontrado" };
    }
    
    // Actualizar el parte de trabajo
    const updatedParte = await db.parteDeTrabajo.update({
      where: { id },
      data: {
        fecha,
        estado,
        observaciones,
        firmado,
        numeroAlbaran,
        obraId,
        conductorId,
        vehiculoId,
        radioId
      }
    });
    
    // Eliminar líneas existentes y crear nuevas
    await db.lineaParte.deleteMany({
      where: { parteTrabajoId: id }
    });
    
    const lineasCount = parseInt(formData.get('lineasCount') as string) || 0;
    
    for (let i = 0; i < lineasCount; i++) {
      const horaSalida = new Date(formData.get(`lineas[${i}].horaSalida`) as string);
      const horaLlegada = new Date(formData.get(`lineas[${i}].horaLlegada`) as string);
      const cantidad = parseFloat(formData.get(`lineas[${i}].cantidad`) as string);
      const vehiculoId = formData.get(`lineas[${i}].vehiculoId`) as string;
      const materialId = formData.get(`lineas[${i}].materialId`) as string;
      const observaciones = formData.get(`lineas[${i}].observaciones`) as string || null;
      
      await db.lineaParte.create({
        data: {
          horaSalida,
          horaLlegada,
          cantidad,
          observaciones,
          parteTrabajoId: id,
          vehiculoId,
          materialId
        }
      });
    }
    
    // Revalidar rutas
    if (formData.get('isDriver') === 'true') {
      revalidatePath('/driver/partes');
      revalidatePath(`/driver/partes/${id}`);
    } else {
      revalidatePath('/admin/partes');
      revalidatePath(`/admin/partes/${id}`);
    }
    
    return { success: true, data: updatedParte };
  } catch (error) {
    console.error(`Error al actualizar parte de trabajo ${id}:`, error);
    return { success: false, error: "Error al actualizar el parte de trabajo" };
  }
}

// Cambiar el estado de un parte de trabajo
export async function cambiarEstadoParte(id: string, estado: EstadoParte) {
  try {
    // Verificar si existe el parte
    const parte = await db.parteDeTrabajo.findUnique({
      where: { id }
    });
    
    if (!parte) {
      return { success: false, error: "Parte de trabajo no encontrado" };
    }
    
    // Actualizar estado
    const updatedParte = await db.parteDeTrabajo.update({
      where: { id },
      data: {
        estado
      }
    });
    
    revalidatePath('/admin/partes');
    revalidatePath(`/admin/partes/${id}`);
    revalidatePath('/driver/partes');
    revalidatePath(`/driver/partes/${id}`);
    
    return { success: true, data: updatedParte };
  } catch (error) {
    console.error(`Error al cambiar estado del parte ${id}:`, error);
    return { success: false, error: "Error al cambiar el estado del parte" };
  }
}

// Eliminar un parte de trabajo
export async function deleteParteTrabajo(id: string) {
  try {
    // Verificar si el parte existe
    const parte = await db.parteDeTrabajo.findUnique({
      where: { id }
    });
    
    if (!parte) {
      return { success: false, error: "Parte de trabajo no encontrado" };
    }
    
    // Eliminar primero las líneas asociadas
    await db.lineaParte.deleteMany({
      where: { parteTrabajoId: id }
    });
    
    // Eliminar el parte
    await db.parteDeTrabajo.delete({
      where: { id }
    });
    
    revalidatePath('/admin/partes');
    revalidatePath('/driver/partes');
    
    return { success: true };
  } catch (error) {
    console.error(`Error al eliminar parte de trabajo ${id}:`, error);
    return { success: false, error: "Error al eliminar el parte de trabajo" };
  }
} 