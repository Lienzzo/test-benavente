import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EstadoParte } from '@/generated/prisma';

export async function POST(request: Request) {
  console.log("===== INICIO DE PROCESAMIENTO DE PARTE DE TRABAJO =====");
  
  // Prueba de conexión simple para verificar que el acceso a DB funciona
  try {
    const testQuery = await db.$queryRaw`SELECT 1 as test`;
    console.log("Prueba de conexión a DB exitosa:", testQuery);
  } catch (dbTestError) {
    console.error("ERROR - Prueba de conexión a DB falló:", dbTestError);
  }
  
  try {
    const formData = await request.json();
    console.log("API Recibió datos para crear parte:", JSON.stringify(formData, null, 2));
    
    // Extraer datos básicos
    const { 
      fecha, 
      obraId, 
      conductorId, 
      vehiculoId, 
      radioId, 
      observaciones, 
      lineasParte 
    } = formData;
    
    // Validación básica
    if (!fecha || !obraId || !conductorId || !vehiculoId || !lineasParte || lineasParte.length === 0) {
      console.error("Validación fallida:", { fecha, obraId, conductorId, vehiculoId, lineasCount: lineasParte?.length });
      return NextResponse.json(
        { error: "Faltan campos requeridos para crear el parte" },
        { status: 400 }
      );
    }
    
    console.log("Iniciando inserción en base de datos...");
    
    try {
      console.log("Creando parte de trabajo directamente...");
      const fechaParte = new Date(fecha);
      
      // Datos para la creación del parte
      const createData = {
        fecha: fechaParte,
        estado: EstadoParte.PENDIENTE,
        observaciones: observaciones || null,
        firmado: false,
        obra: {
          connect: { id: obraId }
        },
        conductor: {
          connect: { id: conductorId }
        },
        vehiculo: {
          connect: { id: vehiculoId }
        },
        ...(radioId && radioId !== "_none_" ? {
          radio: {
            connect: { id: radioId }
          }
        } : {})
      };
      
      console.log("Datos para crear parte:", JSON.stringify(createData, null, 2));
      
      // Crea el parte con sus líneas en una sola operación
      const nuevoParte = await db.parteDeTrabajo.create({
        data: {
          ...createData,
          lineasParte: {
            create: lineasParte.map((linea: { 
              materialId: string;
              cantidad: number;
              horaSalida: string;
              horaLlegada: string;
              vehiculoId?: string;
              observaciones?: string | null;
            }) => ({
              horaSalida: new Date(linea.horaSalida),
              horaLlegada: new Date(linea.horaLlegada),
              cantidad: linea.cantidad,
              observaciones: linea.observaciones || null,
              vehiculo: {
                connect: { 
                  id: (linea.vehiculoId && linea.vehiculoId !== "_none_") 
                    ? linea.vehiculoId 
                    : vehiculoId 
                }
              },
              material: {
                connect: { id: linea.materialId }
              }
            }))
          }
        },
        include: {
          lineasParte: true,
          obra: true,
          conductor: true,
          vehiculo: true,
          radio: true
        }
      });
      
      console.log("Parte de trabajo creado exitosamente con ID:", nuevoParte.id);
      console.log(`Líneas creadas: ${nuevoParte.lineasParte.length}`);
      
      return NextResponse.json({ 
        success: true, 
        message: `Parte de trabajo creado con ${nuevoParte.lineasParte.length} líneas`, 
        data: nuevoParte
      });
      
    } catch (dbError: any) {
      console.error("ERROR CRÍTICO - Fallo al insertar en la base de datos:", dbError);
      console.error("Detalles del error:", {
        message: dbError.message,
        code: dbError.code,
        stack: dbError.stack
      });
      
      // Intentar acceder a más detalles si es un error de Prisma
      if (dbError.meta) {
        console.error("Metadatos del error de Prisma:", dbError.meta);
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: "Error al crear el parte de trabajo en la base de datos", 
          details: dbError.message,
          code: dbError.code,
          meta: dbError.meta
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error general al procesar la solicitud API:", error);
    
    // Mostrar detalles del error para depuración
    return NextResponse.json(
      { 
        success: false, 
        error: "Error al procesar la solicitud para crear parte de trabajo", 
        details: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
      },
      { status: 500 }
    );
  } finally {
    console.log("===== FIN DE PROCESAMIENTO DE PARTE DE TRABAJO =====");
  }
} 