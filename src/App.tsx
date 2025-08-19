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
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedAccord, setSelectedAccord] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [showFilters, setShowFilters] = useState(false)
  const [loadedImages, setLoadedImages] = useState(new Set())

  const allAccords: string[] = (() => {
    const accordsSet = new Set<string>()
    fragrances.forEach(f => f.MainAccords.forEach(a => accordsSet.add(a)))
    return Array.from(accordsSet).sort()
  })()

  const filteredFragrances = fragrances.filter(item => {
    const matchesSearch =
      item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGender =
      selectedGender === 'all' || item.Gender === selectedGender
    const matchesAccord =
      selectedAccord === 'all' || item.MainAccords.includes(selectedAccord)
    const matchesPrice =
      parseFloat(item.Price) >= priceRange[0] &&
      parseFloat(item.Price) <= priceRange[1]

    return matchesSearch && matchesGender && matchesAccord && matchesPrice
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

                {/* Gênero Mobile */}
                <div className="w-full">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Gênero
                  </label>
                  <Select
                    value={selectedGender}
                    onValueChange={setSelectedGender}
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

                {/* Acordes Mobile */}
                <div className="w-full">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Acordes
                  </label>
                  <Select
                    value={selectedAccord}
                    onValueChange={setSelectedAccord}
                  >
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
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedAccord={selectedAccord}
            setSelectedAccord={setSelectedAccord}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            allAccords={allAccords}
          />

          {/* Área Principal Responsiva */}
          <div className="lg:col-span-3">
            {/* Resultados Count */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {filteredFragrances.length}
                  </span>{' '}
                  fragrâncias encontradas
                </span>
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

                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                        {/* Imagem */}
                        <div className="aspect-[4/5] bg-transparent p-3 flex items-center justify-center relative">
                          {!loadedImages.has(item.id) && (
                            <div className="absolute inset-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
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
                              e.currentTarget.src = 'https://via.placeholder.com/160x200?text=Sem+Imagem'
                              setLoadedImages(prev => new Set([...prev, item.id]))
                            }}
                          />
                        </div>

                        {/* Informações */}
                        <div className="p-3 text-center">
                          <p className="text-sm font-semibold text-[#A992BB] uppercase tracking-wide mb-1">
                            {item.Brand}
                          </p>
                          <h3 className="font-bold text-gray-900 text-base leading-tight line-clamp-2">
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
                    setSelectedGender('all')
                    setSelectedAccord('all')
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
