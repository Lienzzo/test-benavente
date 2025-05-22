import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const radios = await db.radio.findMany();
    
    return NextResponse.json(radios);
  } catch (error) {
    console.error('Error al obtener radios:', error);
    return NextResponse.json(
      { error: 'Error al cargar los radios' },
      { status: 500 }
    );
  }
} 