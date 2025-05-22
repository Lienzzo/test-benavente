import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui Button
import { HomeIcon, AlertTriangleIcon } from "lucide-react"; // Example icons

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 text-center w-full">
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <AlertTriangleIcon className="w-16 h-16 text-destructive" />
          <h1 className="text-6xl font-bold text-destructive">404</h1>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">¡Ups! Página no encontrada</h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Lo sentimos, pero la página que estás buscando no existe, ha sido
            eliminada, se le ha cambiado el nombre o no está disponible
            temporalmente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/" className="flex items-center">
              <HomeIcon className="mr-2 h-5 w-5" />
              Volver a Inicio
            </Link>
          </Button>
          {/* You could add another button, e.g., to contact support or report an issue */}
          {/*
          <Button asChild variant="ghost" size="lg">
            <Link href="/contacto" className="flex items-center">
              Contactar Soporte
            </Link>
          </Button>
          */}
        </div>
      </div>
    </div>
  );
}
