# Environment Variable Setup

This document explains how to configure environment variables for the application.

## Required Environment Variables

The application requires the following environment variables to be set:

- `DATABASE_URL`: Connection string for the PostgreSQL database
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Publishable key for Clerk authentication
- `CLERK_SECRET_KEY`: Secret key for Clerk authentication

## Environment Files

The application uses the following environment files:

- `.env.local`: Local development variables (not committed to git)
- `.env.development`: Development environment template
- `.env.production`: Production environment template
- `.env.example`: Example file with required variables (committed to git for documentation)

## Setting Up Local Development

1. Create a `.env.local` file in the project root
2. Add the required environment variables:

```
DATABASE_URL="your-database-url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```

3. For additional environments, use `.env.development` or `.env.production` files

## Environment Variable Validation

The application validates environment variables at startup through the configuration in `src/lib/config.ts`. If any required variables are missing, the application will show an error during build or startup.

## Security Notes

- Never commit `.env.local` or any files containing actual secrets to git
- Keep your secret keys private and regenerate them if they are accidentally exposed
- For production deployments, use the secure environment variable configuration provided by your hosting platform 