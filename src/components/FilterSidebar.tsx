import type { Fragrance } from '@/@types/fragrance'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import { AccordBars } from './AccordBars'

interface FilterSidebarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedGender: string
  setSelectedGender: (gender: string) => void
  selectedAccord: string
  setSelectedAccord: (accord: string) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  allAccords: string[]
  similarFragrances: Fragrance[]
  toggleFragrance: (item: Fragrance) => void
}

export function FilterSidebar({
  searchTerm,
  setSearchTerm,
  selectedGender,
  setSelectedGender,
  selectedAccord,
  setSelectedAccord,
  priceRange,
  setPriceRange,
  allAccords,
  similarFragrances,
  toggleFragrance,
}: FilterSidebarProps) {
  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32 self-start space-y-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-lg">Filtros</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Busca Desktop */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Buscar por nome ou marca...
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ex: Sauvage, Dior..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Gênero Desktop */}
            <div className="w-full">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Gênero
              </label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="masculine">Masculino</SelectItem>
                  <SelectItem value="feminine">Feminino</SelectItem>
                  <SelectItem value="unisex">Unissex</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Acordes Desktop */}
            <div className="w-full">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Acordes
              </label>
              <Select value={selectedAccord} onValueChange={setSelectedAccord}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {allAccords.map(accord => (
                    <SelectItem key={accord} value={accord}>
                      {accord}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Preço Desktop */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  Preço
                </label>
                <span className="text-sm text-gray-600">
                  R$ {priceRange[0]} - R$ {priceRange[1]}
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={2000}
                min={0}
                step={50}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Recomendações Desktop */}
        {similarFragrances.length > 0 && (
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-yellow-100 rounded-lg">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Recomendações</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {similarFragrances.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors cursor-pointer"
                  onClick={() => toggleFragrance(item)}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={item.ImageURL}
                      alt={item.Name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-600 text-xs uppercase tracking-wide">
                          {item.Brand}
                        </p>
                        <p className="font-bold text-gray-900 text-sm truncate">
                          {item.Name}
                        </p>
                        <div className="mt-1">
                          <AccordBars
                            accordsPercentage={item.MainAccordsPercentage}
                            maxBars={2}
                            compact={true}
                          />
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <p className="font-bold text-yellow-600">
                          R$ {item.Price}
                        </p>
                        <Button
                          size="sm"
                          className="mt-1 h-6 px-2 text-xs bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500"
                        >
                          Ver
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
