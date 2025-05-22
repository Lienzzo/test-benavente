import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const materiales = await db.material.findMany({
      orderBy: {
        nombre: 'asc'
      }
    });
    
    return NextResponse.json(materiales);
  } catch (error) {
    console.error('Error al obtener materiales:', error);
    return NextResponse.json(
      { error: 'Error al cargar los materiales' },
      { status: 500 }
    );
  }
} 