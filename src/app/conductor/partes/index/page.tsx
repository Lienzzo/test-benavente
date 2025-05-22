"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  FileText, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Search, 
  SlidersHorizontal,
  CalendarIcon,
  X,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { getPartesTrabajoPorConductor } from "@/lib/actions/parteActions";
import { useDebounce } from "@/hooks/use-debounce";
import { useMediaQuery } from "@/hooks/use-media-query";

// Tipos para los filtros y estado
type FilterState = {
  estado: string;
  fechaDesde: Date | null;
  fechaHasta: Date | null;
  busqueda: string;
};

type SortConfig = {
  column: string;
  direction: 'asc' | 'desc';
};

type PaginationState = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
};

export default function PartesIndexPage() {
  // Estado para partes de trabajo, filtros, ordenamiento y paginación
  const [partes, setPartes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredPartes, setFilteredPartes] = useState<any[]>([]);
  
  const [filters, setFilters] = useState<FilterState>({
    estado: "todos",
    fechaDesde: null,
    fechaHasta: null,
    busqueda: "",
  });
  
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    column: "fecha",
    direction: "desc",
  });
  
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Add the debounce functionality for search
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms delay

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Cargar partes de trabajo
  useEffect(() => {
    const fetchPartes = async () => {
      setLoading(true);
      try {
        // En una implementación real, usaríamos el ID real del usuario
        const conductorId = "user_123";
        const response = await getPartesTrabajoPorConductor(conductorId);
        
        if (response.success && response.data) {
          setPartes(response.data);
        } else {
          setPartes([]);
        }
      } catch (error) {
        console.error("Error cargando partes de trabajo:", error);
        setPartes([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPartes();
  }, []);
  
  // Funciones para manejar los cambios
  const handleFilterChange = useCallback((key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  // Update filters when debounced search changes
  useEffect(() => {
    handleFilterChange('busqueda', debouncedSearchTerm);
  }, [debouncedSearchTerm, handleFilterChange]);
  
  // Aplicar filtros y ordenamiento cada vez que cambian los estados
  useEffect(() => {
    // Filtrar
    let result = [...partes];
    
    // Filtro por estado
    if (filters.estado !== "todos") {
      result = result.filter(parte => parte.estado === filters.estado);
    }
    
    // Filtro por fecha
    if (filters.fechaDesde) {
      result = result.filter(parte => new Date(parte.fecha) >= filters.fechaDesde!);
    }
    
    if (filters.fechaHasta) {
      result = result.filter(parte => new Date(parte.fecha) <= filters.fechaHasta!);
    }
    
    // Búsqueda
    if (filters.busqueda) {
      const searchTerm = filters.busqueda.toLowerCase();
      result = result.filter(parte => 
        parte.id?.toLowerCase().includes(searchTerm) ||
        parte.obra?.nombre?.toLowerCase().includes(searchTerm) ||
        parte.obra?.cliente?.nombre?.toLowerCase().includes(searchTerm)
      );
    }
    
    // Ordenar
    result.sort((a, b) => {
      const aValue = a[sortConfig.column];
      const bValue = b[sortConfig.column];
      
      if (sortConfig.column === 'fecha') {
        return sortConfig.direction === 'asc' 
          ? new Date(aValue).getTime() - new Date(bValue).getTime()
          : new Date(bValue).getTime() - new Date(aValue).getTime();
      }
      
      // Ordenamiento para cadenas de texto
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      // Ordenamiento para otros tipos
      return sortConfig.direction === 'asc'
        ? (aValue > bValue ? 1 : -1)
        : (bValue > aValue ? 1 : -1);
    });
    
    setFilteredPartes(result);
    setPagination(prev => ({
      ...prev,
      currentPage: 1,
      totalItems: result.length
    }));
  }, [partes, filters, sortConfig]);
  
  // Calcular páginas totales
  const totalPages = useMemo(() => {
    return Math.ceil(pagination.totalItems / pagination.pageSize);
  }, [pagination.totalItems, pagination.pageSize]);
  
  // Obtener partes para la página actual
  const currentPageItems = useMemo(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
    return filteredPartes.slice(startIndex, startIndex + pagination.pageSize);
  }, [filteredPartes, pagination.currentPage, pagination.pageSize]);
  
  const handleSortChange = useCallback((column: string) => {
    setSortConfig(prev => ({
      column,
      direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  }, []);
  
  const handlePageChange = useCallback((page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  }, []);
  
  const handlePageSizeChange = useCallback((size: number) => {
    setPagination(prev => ({ ...prev, pageSize: size, currentPage: 1 }));
  }, []);
  
  const clearFilters = useCallback(() => {
    setFilters({
      estado: "todos",
      fechaDesde: null,
      fechaHasta: null,
      busqueda: "",
    });
  }, []);
  
  // Renderizar indicador de ordenamiento
  const renderSortIndicator = (column: string) => {
    if (sortConfig.column !== column) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="ml-2 h-4 w-4" />
      : <ArrowDown className="ml-2 h-4 w-4" />;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Mis Partes de Trabajo</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Button 
            asChild
            className={isMobile ? 'fixed bottom-4 right-4 z-50 shadow-lg rounded-full h-14 w-14 p-0' : ''}
          >
            <Link 
              href="/conductor/partes/nuevo" 
              className="flex items-center gap-2"
              aria-label="Crear Nuevo Parte de Trabajo"
            >
              <Plus size={isMobile ? 24 : 16} />
              {!isMobile && <span>Nuevo Parte</span>}
            </Link>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Partes de Trabajo</CardTitle>
          <CardDescription>Gestiona tus partes de trabajo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por obra, cliente o ID..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar partes de trabajo"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-9 w-9 p-0"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Filtrar por Fecha</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="range"
                    selected={{
                      from: filters.fechaDesde || undefined,
                      to: filters.fechaHasta || undefined,
                    }}
                    onSelect={(range) => {
                      handleFilterChange('fechaDesde', range?.from || null);
                      handleFilterChange('fechaHasta', range?.to || null);
                    }}
                    locale={es}
                    className="border rounded-md"
                  />
                  {(filters.fechaDesde || filters.fechaHasta) && (
                    <div className="p-3 border-t flex justify-between items-center">
                      <div className="text-sm">
                        {filters.fechaDesde && filters.fechaHasta ? (
                          <span>
                            {format(filters.fechaDesde, 'dd/MM/yyyy')} - {format(filters.fechaHasta, 'dd/MM/yyyy')}
                          </span>
                        ) : filters.fechaDesde ? (
                          <span>Desde {format(filters.fechaDesde, 'dd/MM/yyyy')}</span>
                        ) : (
                          <span>Hasta {format(filters.fechaHasta!, 'dd/MM/yyyy')}</span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          handleFilterChange('fechaDesde', null);
                          handleFilterChange('fechaHasta', null);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
              
              <Select
                value={filters.estado}
                onValueChange={(value) => handleFilterChange('estado', value)}
              >
                <SelectTrigger className="w-[160px] h-9">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los estados</SelectItem>
                  <SelectItem value="PENDIENTE">Pendiente</SelectItem>
                  <SelectItem value="EN_PROCESO">En proceso</SelectItem>
                  <SelectItem value="COMPLETADO">Completado</SelectItem>
                  <SelectItem value="CANCELADO">Cancelado</SelectItem>
                  <SelectItem value="RECHAZADO">Rechazado</SelectItem>
                </SelectContent>
              </Select>
              
              {(filters.estado !== 'todos' || filters.fechaDesde || filters.fechaHasta || filters.busqueda) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearFilters}
                  className="h-9"
                >
                  <X className="h-4 w-4 mr-2" />
                  Limpiar filtros
                </Button>
              )}
            </div>
          </div>
          
          {/* Indicador de filtros activos */}
          {(filters.estado !== 'todos' || filters.fechaDesde || filters.fechaHasta) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.estado !== 'todos' && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Estado: {filters.estado}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => handleFilterChange('estado', 'todos')}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              
              {(filters.fechaDesde || filters.fechaHasta) && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Fecha: {filters.fechaDesde && format(filters.fechaDesde, 'dd/MM/yyyy')}
                  {filters.fechaDesde && filters.fechaHasta && ' - '}
                  {filters.fechaHasta && format(filters.fechaHasta, 'dd/MM/yyyy')}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => {
                      handleFilterChange('fechaDesde', null);
                      handleFilterChange('fechaHasta', null);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
            </div>
          )}
          
          {/* Tabla de partes */}
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          ) : filteredPartes.length === 0 ? (
            <div className="text-center p-8 border rounded-lg">
              <div className="mx-auto w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">No hay resultados</h3>
              <p className="text-muted-foreground mb-4">
                {debouncedSearchTerm 
                  ? `No se encontraron partes que coincidan con "${debouncedSearchTerm}"`
                  : "No se encontraron partes de trabajo con los filtros aplicados."
                }
              </p>
              {(filters.estado !== 'todos' || filters.fechaDesde || filters.fechaHasta || filters.busqueda) && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                >
                  Limpiar filtros
                </Button>
              )}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortChange('fecha')}
                    >
                      <div className="flex items-center">
                        Fecha {renderSortIndicator('fecha')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortChange('obra.nombre')}
                    >
                      <div className="flex items-center">
                        Obra {renderSortIndicator('obra.nombre')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hidden md:table-cell"
                      onClick={() => handleSortChange('obra.cliente.nombre')}
                    >
                      <div className="flex items-center">
                        Cliente {renderSortIndicator('obra.cliente.nombre')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSortChange('estado')}
                    >
                      <div className="flex items-center">
                        Estado {renderSortIndicator('estado')}
                      </div>
                    </TableHead>
                    <TableHead className="w-[100px]">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPageItems.map((parte) => (
                    <TableRow key={parte.id} className="group">
                      <TableCell className={isMobile ? 'py-3 px-2' : ''}>
                        {formatDate(parte.fecha)}
                      </TableCell>
                      <TableCell className={isMobile ? 'py-3 px-2 max-w-[120px] truncate' : ''}>
                        {parte.obra?.nombre || 'Sin obra'}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {parte.obra?.cliente?.nombre || 'Sin cliente'}
                      </TableCell>
                      <TableCell className={isMobile ? 'py-3 px-2' : ''}>
                        <EstadoBadge estado={parte.estado} />
                      </TableCell>
                      <TableCell className={isMobile ? 'py-3 px-2' : ''}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className={`h-8 w-8 p-0 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/conductor/partes/${parte.id}`}>
                                Ver detalles
                              </Link>
                            </DropdownMenuItem>
                            {parte.estado !== 'COMPLETADO' && parte.estado !== 'CANCELADO' && (
                              <DropdownMenuItem asChild>
                                <Link href={`/conductor/partes/${parte.id}/editar`}>
                                  Editar
                                </Link>
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {/* Paginación */}
          {filteredPartes.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Mostrando {Math.min(pagination.pageSize, filteredPartes.length)} de {filteredPartes.length} resultados
                </p>
                <Select 
                  value={pagination.pageSize.toString()} 
                  onValueChange={(value) => handlePageSizeChange(parseInt(value))}
                >
                  <SelectTrigger className="w-[80px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(1)}
                  disabled={pagination.currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-sm mx-2">
                  Página {pagination.currentPage} de {totalPages || 1}
                </span>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage >= totalPages}
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(totalPages)}
                  disabled={pagination.currentPage >= totalPages}
                  className="h-8 w-8 p-0"
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Componentes auxiliares

function EstadoBadge({ estado }: { estado: string }) {
  switch (estado) {
    case 'COMPLETADO':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completado</Badge>;
    case 'PENDIENTE':
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Pendiente</Badge>;
    case 'EN_PROCESO':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">En Proceso</Badge>;
    case 'CANCELADO':
      return <Badge variant="destructive">Cancelado</Badge>;
    case 'RECHAZADO':
      return <Badge variant="destructive">Rechazado</Badge>;
    default:
      return <Badge variant="outline">{estado}</Badge>;
  }
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  } catch (error) {
    return dateString;
  }
} 