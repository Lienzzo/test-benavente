import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed de materiales...');

  // Crear materiales básicos
  const materiales = [
    { nombre: 'Arena', descripcion: 'Arena fina de construcción', unidad: 'Tonelada' },
    { nombre: 'Grava', descripcion: 'Grava para construcción', unidad: 'Tonelada' },
    { nombre: 'Cemento', descripcion: 'Cemento Portland', unidad: 'Saco' },
    { nombre: 'Hormigón', descripcion: 'Hormigón premezclado', unidad: 'Metro cúbico' },
    { nombre: 'Ladrillo', descripcion: 'Ladrillos estándar', unidad: 'Unidad' },
    { nombre: 'Madera', descripcion: 'Madera para construcción', unidad: 'Metro cúbico' },
    { nombre: 'Acero', descripcion: 'Barras de acero para construcción', unidad: 'Tonelada' },
    { nombre: 'Piedra', descripcion: 'Piedra para construcción', unidad: 'Tonelada' }
  ];

  for (const material of materiales) {
    // Verificar si ya existe
    const exists = await prisma.material.findFirst({
      where: { nombre: material.nombre }
    });

    if (!exists) {
      await prisma.material.create({
        data: material
      });
      console.log(`Material creado: ${material.nombre}`);
    } else {
      console.log(`Material ya existe: ${material.nombre}`);
    }
  }

  console.log('Seed completado!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 