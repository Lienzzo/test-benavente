import { z } from 'zod';

/**
 * Environment variable schema validation
 */
const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  
  // Clerk Authentication
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1, "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is required"),
  CLERK_SECRET_KEY: z.string().min(1, "CLERK_SECRET_KEY is required"),
  CLERK_WEBHOOK_SECRET: z.string().optional(), // Optional for development
});

/**
 * Parse and validate environment variables
 * This will throw an error if any required variables are missing
 */
function parseEnv() {
  const parsed = envSchema.safeParse(process.env);
  
  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }
}

/**
 * Call this function in your app to validate environment variables
 * Example usage: validateEnv() at the beginning of your app initialization
 */
export function validateEnv() {
  // Only validate on the server side
  if (typeof window === 'undefined') {
    parseEnv();
  }
}

/**
 * For client-side use, export public environment variables
 */
export const publicEnv = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
}; 