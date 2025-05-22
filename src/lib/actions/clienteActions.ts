'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Obtener todos los clientes
export async function getClientes() {
  try {
    const clientes = await db.cliente.findMany({
      orderBy: {
        nombre: 'asc'
      }
    });
    
    return { success: true, data: clientes };
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    return { success: false, error: "Error al cargar los clientes" };
  }
}

// Obtener un cliente por ID
export async function getClienteById(id: string) {
  try {
    const cliente = await db.cliente.findUnique({
      where: { id },
      include: {
        obras: true
      }
    });
    
    if (!cliente) {
      return { success: false, error: "Cliente no encontrado" };
    }
    
    return { success: true, data: cliente };
  } catch (error) {
    console.error(`Error al obtener cliente ${id}:`, error);
    return { success: false, error: "Error al cargar el cliente" };
  }
}

// Crear un nuevo cliente
export async function createCliente(formData: FormData) {
  try {
    const nombre = formData.get('nombre') as string;
    const cif = formData.get('cif') as string;
    const direccion = formData.get('direccion') as string;
    const codigoPostal = formData.get('codigoPostal') as string;
    const ciudad = formData.get('ciudad') as string;
    const provincia = formData.get('provincia') as string;
    const telefono = formData.get('telefono') as string || null;
    const email = formData.get('email') as string || null;
    const contacto = formData.get('contacto') as string || null;
    
    // Validación básica
    if (!nombre || !cif || !direccion || !codigoPostal || !ciudad || !provincia) {
      return { success: false, error: "Faltan campos requeridos" };
    }
    
    // Verificar si ya existe un cliente con el mismo CIF
    const existingCliente = await db.cliente.findUnique({
      where: { cif }
    });
    
    if (existingCliente) {
      return { success: false, error: "Ya existe un cliente con este CIF" };
    }
    
    // Crear cliente
    const newCliente = await db.cliente.create({
      data: {
        nombre,
        cif,
        direccion,
        codigoPostal,
        ciudad,
        provincia,
        telefono,
        email,
        contacto
      }
    });
    
    revalidatePath('/admin/clientes');
    return { success: true, data: newCliente };
  } catch (error) {
    console.error("Error al crear cliente:", error);
    return { success: false, error: "Error al crear el cliente" };
  }
}

// Actualizar un cliente existente
export async function updateCliente(id: string, formData: FormData) {
  try {
    const nombre = formData.get('nombre') as string;
    const cif = formData.get('cif') as string;
    const direccion = formData.get('direccion') as string;
    const codigoPostal = formData.get('codigoPostal') as string;
    const ciudad = formData.get('ciudad') as string;
    const provincia = formData.get('provincia') as string;
    const telefono = formData.get('telefono') as string || null;
    const email = formData.get('email') as string || null;
    const contacto = formData.get('contacto') as string || null;
    
    // Validación básica
    if (!nombre || !cif || !direccion || !codigoPostal || !ciudad || !provincia) {
      return { success: false, error: "Faltan campos requeridos" };
    }
    
    // Verificar si existe el cliente
    const existingCliente = await db.cliente.findUnique({
      where: { id }
    });
    
    if (!existingCliente) {
      return { success: false, error: "Cliente no encontrado" };
    }
    
    // Verificar si el CIF ya está en uso por otro cliente
    if (existingCliente.cif !== cif) {
      const clienteWithCif = await db.cliente.findUnique({
        where: { cif }
      });
      
      if (clienteWithCif) {
        return { success: false, error: "El CIF ya está en uso por otro cliente" };
      }
    }
    
    // Actualizar cliente
    const updatedCliente = await db.cliente.update({
      where: { id },
      data: {
        nombre,
        cif,
        direccion,
        codigoPostal,
        ciudad,
        provincia,
        telefono,
        email,
        contacto
      }
    });
    
    revalidatePath(`/admin/clientes/${id}`);
    revalidatePath('/admin/clientes');
    return { success: true, data: updatedCliente };
  } catch (error) {
    console.error(`Error al actualizar cliente ${id}:`, error);
    return { success: false, error: "Error al actualizar el cliente" };
  }
}

// Eliminar un cliente
export async function deleteCliente(id: string) {
  try {
    // Verificar si el cliente existe
    const cliente = await db.cliente.findUnique({
      where: { id },
      include: {
        obras: true
      }
    });
    
    if (!cliente) {
      return { success: false, error: "Cliente no encontrado" };
    }
    
    // Verificar si tiene obras asociadas
    if (cliente.obras.length > 0) {
      return { 
        success: false, 
        error: "No se puede eliminar el cliente porque tiene obras asociadas" 
      };
    }
    
    // Eliminar cliente
    await db.cliente.delete({
      where: { id }
    });
    
    revalidatePath('/admin/clientes');
    return { success: true };
  } catch (error) {
    console.error(`Error al eliminar cliente ${id}:`, error);
    return { success: false, error: "Error al eliminar el cliente" };
  }
} 