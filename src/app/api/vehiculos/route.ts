import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const vehiculos = await db.vehiculo.findMany();
    
    return NextResponse.json(vehiculos);
  } catch (error) {
    console.error('Error al obtener vehículos:', error);
    return NextResponse.json(
      { error: 'Error al cargar los vehículos' },
      { status: 500 }
    );
  }
} 