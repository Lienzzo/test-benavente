import { PrismaClient } from '../generated/prisma';

// Prevenir múltiples instancias de Prisma Client en desarrollo
// debido a hot-reloading de Next.js

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
} 