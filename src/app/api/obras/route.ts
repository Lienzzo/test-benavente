import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const obras = await db.obra.findMany({
      include: {
        cliente: true
      }
    });
    
    return NextResponse.json(obras);
  } catch (error) {
    console.error('Error al obtener obras:', error);
    return NextResponse.json(
      { error: 'Error al cargar las obras' },
      { status: 500 }
    );
  }
} 