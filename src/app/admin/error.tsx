"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold text-destructive">Error</h2>
        <p className="text-muted-foreground">
          Se ha producido un error al cargar esta página. Por favor, inténtelo de nuevo o contacte con el administrador si el problema persiste.
        </p>
        <div className="p-4 rounded bg-muted text-muted-foreground text-sm overflow-auto">
          <code>{error.message || "Error desconocido"}</code>
        </div>
        <Button onClick={() => reset()}>
          Intentar de nuevo
        </Button>
      </div>
    </div>
  );
} 