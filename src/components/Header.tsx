import { Filter, Package, Sparkles, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  filteredFragrancesCount: number;
  activeFiltersCount: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  onFiltersToggle?: () => void;
}

export function Header({
  filteredFragrancesCount,
  activeFiltersCount,
  viewMode,
  onViewModeChange,
  onFiltersToggle,
}: HeaderProps) {
  return (
    <header className="bg-card/90 backdrop-blur-xl border-b border-border sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Principal */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo e Branding */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="p-3 bg-primary rounded-xl shadow-lg">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 bg-primary rounded-xl blur opacity-20 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">
                FragranceMatch
              </h1>
              <p className="text-sm text-muted-foreground font-medium">Sua jornada olfativa personalizada</p>
            </div>
          </div>
          
          {/* Stats e Controles do Header */}
          <div className="flex items-center gap-6">
            {/* Estatísticas Rápidas */}
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-accent rounded-xl border border-border">
                <Package className="w-4 h-4 text-accent-foreground" />
                <span className="text-foreground font-semibold">{filteredFragrancesCount}</span>
                <span className="text-muted-foreground">perfumes</span>
              </div>
              {activeFiltersCount > 0 && (
                <div className="flex items-center gap-2 px-3 py-2 bg-chart-3/10 border border-chart-3/20 rounded-xl">
                  <Filter className="w-4 h-4 text-chart-3" />
                  <span className="text-chart-3 font-semibold">{activeFiltersCount}</span>
                  <span className="text-chart-3/80">filtros</span>
                </div>
              )}
            </div>

            {/* Controles de Visualização */}
            <div className="flex items-center gap-3">
              <div className="flex bg-muted rounded-xl p-1 shadow-sm border border-border">
                <Toggle
                  pressed={viewMode === "grid"}
                  onPressedChange={() => onViewModeChange("grid")}
                  className="data-[state=on]:bg-card data-[state=on]:shadow-sm data-[state=on]:text-primary px-3 py-2 rounded-lg transition-all duration-200"
                  size="sm"
                >
                  <Grid3X3 className="w-4 h-4" />
                  <span className="ml-2 hidden sm:inline text-sm font-medium">Grade</span>
                </Toggle>
                <Toggle
                  pressed={viewMode === "list"}
                  onPressedChange={() => onViewModeChange("list")}
                  className="data-[state=on]:bg-card data-[state=on]:shadow-sm data-[state=on]:text-primary px-3 py-2 rounded-lg transition-all duration-200"
                  size="sm"
                >
                  <List className="w-4 h-4" />
                  <span className="ml-2 hidden sm:inline text-sm font-medium">Lista</span>
                </Toggle>
              </div>

              {/* Botão Filtros Mobile */}
              {onFiltersToggle && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onFiltersToggle}
                  className="md:hidden relative"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtros
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-chart-3 text-primary-foreground text-xs px-1.5 py-0.5">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}