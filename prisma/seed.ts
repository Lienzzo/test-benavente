import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

// Definir tipos de vehículo y estados
type TipoVehiculo = 'CAMION' | 'EXCAVADORA' | 'RETROEXCAVADORA' | 'BULLDOZER' | 'GRUA' | 'OTRO';
type EstadoParte = 'PENDIENTE' | 'EN_PROCESO' | 'COMPLETADO' | 'CANCELADO' | 'RECHAZADO';

async function main() {
  console.log('🌱 Iniciando proceso de seeding...');

  // Limpiar base de datos existente (opcional)
  console.log('🧹 Limpiando base de datos...');
  await prisma.lineaParte.deleteMany();
  await prisma.parteDeTrabajo.deleteMany();
  await prisma.jornada.deleteMany();
  await prisma.material.deleteMany();
  await prisma.vehiculo.deleteMany();
  await prisma.transportista.deleteMany();
  await prisma.conductor.deleteMany();
  await prisma.obra.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.radio.deleteMany();

  // Crear clientes
  console.log('👥 Creando clientes...');
  const cliente1 = await prisma.cliente.create({
    data: {
      nombre: 'Construcciones XYZ S.L.',
      cif: 'B12345678',
      direccion: 'Calle Principal 123',
      codigoPostal: '28001',
      ciudad: 'Madrid',
      provincia: 'Madrid',
      telefono: '912345678',
      email: 'info@construccionesxyz.es',
      contacto: 'Juan Pérez'
    }
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      nombre: 'Inmobiliaria Futuro S.A.',
      cif: 'A87654321',
      direccion: 'Avenida Central 45',
      codigoPostal: '08001',
      ciudad: 'Barcelona',
      provincia: 'Barcelona',
      telefono: '932345678',
      email: 'contacto@inmobiliariafuturo.com',
      contacto: 'María Rodríguez'
    }
  });

  // Crear obras
  console.log('🏗️ Creando obras...');
  const obra1 = await prisma.obra.create({
    data: {
      nombre: 'Residencial Los Pinos',
      direccion: 'Calle Pinar 78',
      codigoPostal: '28054',
      ciudad: 'Madrid',
      provincia: 'Madrid',
      estado: 'ACTIVA',
      fechaInicio: new Date('2023-12-01'),
      clienteId: cliente1.id
    }
  });

  const obra2 = await prisma.obra.create({
    data: {
      nombre: 'Centro Comercial Nuevo Horizonte',
      direccion: 'Avenida del Comercio 123',
      codigoPostal: '08023',
      ciudad: 'Barcelona',
      provincia: 'Barcelona',
      estado: 'ACTIVA',
      fechaInicio: new Date('2024-01-15'),
      clienteId: cliente2.id
    }
  });

  // Crear transportistas
  console.log('🚚 Creando transportistas...');
  const transportista1 = await prisma.transportista.create({
    data: {
      nombre: 'Transportes Rápidos S.L.',
      cif: 'B23456789',
      direccion: 'Carretera Nacional km 34',
      telefono: '912345987',
      email: 'info@transportesrapidos.es',
      contacto: 'Carlos Gómez'
    }
  });

  // Crear conductores
  console.log('👷 Creando conductores...');
  const conductor1 = await prisma.conductor.create({
    data: {
      nombre: 'Antonio',
      apellidos: 'Martínez López',
      dni: '12345678A',
      telefono: '654321987',
      email: 'antonio.martinez@example.com',
      licencia: 'C'
    }
  });

  const conductor2 = await prisma.conductor.create({
    data: {
      nombre: 'Laura',
      apellidos: 'García Sánchez',
      dni: '87654321B',
      telefono: '654987321',
      email: 'laura.garcia@example.com',
      licencia: 'C+E'
    }
  });

  // Crear vehículos
  console.log('🚛 Creando vehículos...');
  const vehiculo1 = await prisma.vehiculo.create({
    data: {
      matricula: '1234ABC',
      tipo: 'CAMION' as TipoVehiculo,
      marca: 'Mercedes',
      modelo: 'Actros',
      capacidad: 24.0,
      año: 2020,
      transportistaId: transportista1.id
    }
  });

  const vehiculo2 = await prisma.vehiculo.create({
    data: {
      matricula: '5678DEF',
      tipo: 'EXCAVADORA' as TipoVehiculo,
      marca: 'Caterpillar',
      modelo: '320',
      año: 2019,
      transportistaId: transportista1.id
    }
  });

  // Crear materiales
  console.log('📦 Creando materiales...');
  const material1 = await prisma.material.create({
    data: {
      nombre: 'Arena fina',
      descripcion: 'Arena fina para construcción',
      unidad: 'Toneladas',
      precio: 45.50
    }
  });

  const material2 = await prisma.material.create({
    data: {
      nombre: 'Grava',
      descripcion: 'Grava para hormigón',
      unidad: 'Toneladas',
      precio: 38.75
    }
  });

  // Crear radios
  console.log('📍 Creando radios...');
  const radio1 = await prisma.radio.create({
    data: {
      nombre: 'Zona Norte Madrid',
      descripcion: 'Área de operaciones norte de Madrid',
      ciudad: 'Madrid',
      provincia: 'Madrid'
    }
  });

  // Crear jornadas
  console.log('⏰ Creando jornadas...');
  const jornada1 = await prisma.jornada.create({
    data: {
      fecha: new Date('2024-04-15'),
      horaInicio: new Date('2024-04-15T08:00:00Z'),
      horaFin: new Date('2024-04-15T16:00:00Z'),
      observaciones: 'Jornada normal',
      conductorId: conductor1.id
    }
  });

  // Crear partes de trabajo
  console.log('📝 Creando partes de trabajo...');
  const parte1 = await prisma.parteDeTrabajo.create({
    data: {
      fecha: new Date('2024-04-15'),
      estado: 'COMPLETADO' as EstadoParte,
      observaciones: 'Entrega realizada correctamente',
      firmado: true,
      numeroAlbaran: 'ALB-24-0001',
      obraId: obra1.id,
      conductorId: conductor1.id,
      vehiculoId: vehiculo1.id,
      radioId: radio1.id
    }
  });

  // Crear líneas de parte
  console.log('📋 Creando líneas de parte...');
  const linea1 = await prisma.lineaParte.create({
    data: {
      horaSalida: new Date('2024-04-15T09:00:00Z'),
      horaLlegada: new Date('2024-04-15T10:30:00Z'),
      cantidad: 18.5,
      observaciones: 'Primera entrega del día',
      parteTrabajoId: parte1.id,
      vehiculoId: vehiculo1.id,
      materialId: material1.id
    }
  });

  console.log('✅ Seeding completado con éxito');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el proceso de seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 