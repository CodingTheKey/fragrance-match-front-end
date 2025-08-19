import type { Fragrance } from '@/@types/fragrance'
import { Filter } from 'lucide-react'
import { Logo } from './Logo'

interface HeaderProps {
  selectedFragrances: Fragrance[]
  setShowFilters: (show: boolean) => void
  showFilters: boolean
}

export function Header({
  selectedFragrances,
  setShowFilters,
  showFilters,
}: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Controls Responsivos */}
          <div className="flex items-center gap-2 sm:gap-8">
            {/* Contador de seleções - Sempre visível mas responsivo */}
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-50/80 rounded-full px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 bg-[#A992BB] rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  <span className="hidden sm:inline">Selecionadas: </span>
                  <span className="font-bold text-[#A992BB]">
                    {selectedFragrances.length}
                  </span>
                  /3
                </span>
              </div>
              {selectedFragrances.length > 0 && (
                <div className="flex -space-x-1">
                  {selectedFragrances.map((frag, index) => (
                    <div
                      key={frag.id}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#A992BB]/20 border-2 border-white shadow-sm flex items-center justify-center"
                      title={frag.Name}
                    >
                      <span className="text-xs font-bold text-yellow-700">
                        {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Botão de Filtros - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Filtros</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}
