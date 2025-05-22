import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const conductores = await db.conductor.findMany();
    
    return NextResponse.json(conductores);
  } catch (error) {
    console.error('Error al obtener conductores:', error);
    return NextResponse.json(
      { error: 'Error al cargar los conductores' },
      { status: 500 }
    );
  }
} 