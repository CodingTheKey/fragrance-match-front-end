import type { Fragrance } from '@/@types/fragrance'
import { Button } from '@/components/ui/button'
import { Coins, Filter, User } from 'lucide-react'
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
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Contador de Créditos */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#A992BB]/10 to-purple-500/10 rounded-full px-3 sm:px-4 py-2 backdrop-blur-sm border border-[#A992BB]/20">
              <Coins className="w-4 h-4 text-[#A992BB]" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                <span className="hidden sm:inline">Créditos: </span>
                <span className="font-bold text-[#A992BB]">3</span>
              </span>
            </div>


            {/* Botão de Login */}
            <Button 
              variant="outline"
              className="flex items-center gap-3 px-6 py-3 rounded-lg font-medium text-base"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Entrar</span>
            </Button>

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
