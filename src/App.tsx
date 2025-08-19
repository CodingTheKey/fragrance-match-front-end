import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Search, Star, X } from 'lucide-react'
import { useState } from 'react'
import { FilterSidebar } from './components/FilterSidebar'
import { Header } from './components/Header'
import { fragrances } from './mock/fragrances'

export function App() {
  const [selectedFragrances, setSelectedFragrances] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenders, setSelectedGenders] = useState([])
  const [selectedOccasions, setSelectedOccasions] = useState([])
  const [selectedProjections, setSelectedProjections] = useState([])
  const [selectedLongevities, setSelectedLongevities] = useState([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [showFilters, setShowFilters] = useState(false)
  const [loadedImages, setLoadedImages] = useState(new Set())

  const filteredFragrances = fragrances.filter(item => {
    const matchesSearch =
      item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Brand.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesGender =
      selectedGenders.length === 0 || selectedGenders.includes(item.Gender)
    
    const matchesOccasion =
      selectedOccasions.length === 0 || 
      selectedOccasions.some(occasion => 
        item.OccasionRanking?.some(o => o.name === occasion && o.score > 0)
      )
    
    const matchesProjection =
      selectedProjections.length === 0 ||
      selectedProjections.some(projection => {
        const projectionRanges = {
          'Baixa': [0, 30],
          'Moderada': [30, 60], 
          'Alta': [60, 100]
        }
        const range = projectionRanges[projection] || [0, 100]
        const sillage = parseFloat(item.Sillage?.replace('%', '') || '0')
        return sillage >= range[0] && sillage < range[1]
      })
    
    const matchesLongevity =
      selectedLongevities.length === 0 ||
      selectedLongevities.some(longevity => {
        const longevityRanges = {
          'Baixa': [0, 30],
          'Moderada': [30, 60],
          'Alta': [60, 100]
        }
        const range = longevityRanges[longevity] || [0, 100]
        const itemLongevity = parseFloat(item.Longevity?.replace('%', '') || '0')
        return itemLongevity >= range[0] && itemLongevity < range[1]
      })
    
    const matchesPrice =
      parseFloat(item.Price) >= priceRange[0] &&
      parseFloat(item.Price) <= priceRange[1]

    return matchesSearch && matchesGender && matchesOccasion && matchesProjection && matchesLongevity && matchesPrice
  })

  const toggleFragrance = fragranceItem => {
    if (selectedFragrances.find(f => f.id === fragranceItem.id)) {
      setSelectedFragrances(
        selectedFragrances.filter(f => f.id !== fragranceItem.id)
      )
    } else if (selectedFragrances.length < 3) {
      setSelectedFragrances([...selectedFragrances, fragranceItem])
    }
  }


  return (
    <div className="min-h-screen bg-background">
      <Header
        selectedFragrances={selectedFragrances}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <div
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Busca Mobile */}
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

                {/* Filtros Mobile simplificados */}
                <div className="text-center py-4">
                  <p className="text-gray-600">
                    Use a versão desktop para filtros avançados
                  </p>
                </div>

                {/* Preço Mobile */}
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

              </div>
            </div>
          </div>
        )}

        {/* Layout Principal Responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          <FilterSidebar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedGenders={selectedGenders}
            setSelectedGenders={setSelectedGenders}
            selectedOccasions={selectedOccasions}
            setSelectedOccasions={setSelectedOccasions}
            selectedProjections={selectedProjections}
            setSelectedProjections={setSelectedProjections}
            selectedLongevities={selectedLongevities}
            setSelectedLongevities={setSelectedLongevities}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedFragrances={selectedFragrances}
            allFragrances={fragrances}
          />

          {/* Área Principal Responsiva */}
          <div className="lg:col-span-3">
            {/* Busca e Filtros Principais */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Input de Busca */}
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Buscar fragrâncias
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Digite o nome ou marca..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Filtro de Gênero */}
                  <div className="w-full sm:w-48">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Gênero
                    </label>
                    <Select 
                      value={selectedGenders.length === 0 ? 'all' : selectedGenders[0]} 
                      onValueChange={(value) => {
                        if (value === 'all') {
                          setSelectedGenders([])
                        } else {
                          setSelectedGenders([value])
                        }
                      }}
                    >
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
                </div>
              </div>
            </div>

            {/* Grid de Fragrâncias */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredFragrances.map(item => {
                  const isSelected = selectedFragrances.some(
                    f => f.id === item.id
                  )
                  const isDisabled =
                    !isSelected && selectedFragrances.length >= 3

                  return (
                    <div
                      key={item.id}
                      className={`group relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                        isSelected
                          ? 'ring-2 ring-[#A992BB] scale-105'
                          : ''
                      } ${isDisabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                      onClick={() => !isDisabled && toggleFragrance(item)}
                    >
                      {/* Indicador de seleção */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#A992BB] to-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      )}

                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                        {/* Imagem */}
                        <div className="h-60 bg-transparent p-4 flex items-center justify-center relative">
                          {!loadedImages.has(item.id) && (
                            <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm animate-pulse"></div>
                          )}
                          <img
                            src={item.ImageURL}
                            alt={item.Name}
                            className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-105 ${
                              loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ imageRendering: 'auto' }}
                            onLoad={() => {
                              setLoadedImages(prev => new Set([...prev, item.id]))
                            }}
                            onError={e => {
                              e.currentTarget.src = 'https://via.placeholder.com/60x80?text=Sem+Imagem'
                              setLoadedImages(prev => new Set([...prev, item.id]))
                            }}
                          />
                        </div>

                        {/* Informações */}
                        <div className="px-4 pb-4 pt-3 text-center">
                          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 opacity-80">
                            {item.Brand}
                          </p>
                          <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-2 mb-1">
                            {item.Name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            {/* Empty State */}
            {filteredFragrances.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhuma fragrância encontrada
                </h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar seus filtros para ver mais resultados.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedGenders([])
                    setSelectedOccasions([])
                    setSelectedProjections([])
                    setSelectedLongevities([])
                    setPriceRange([0, 2000])
                  }}
                  variant="outline"
                  className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
