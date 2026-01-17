import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Use DATABASE_URL or fallback to POSTGRES_PRISMA_URL (for Vercel compatibility)
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : ['error'],
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  })

// Test connection on initialization (in development)
if (process.env.NODE_ENV === 'development') {
  prisma.$connect().catch((error) => {
    console.error('Failed to connect to database:', error)
  })
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
