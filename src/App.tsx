import { Badge } from '@/components/ui/badge'
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
import { Plus, Search, Sparkles, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AccordBars } from './components/AccordBars'
import { FilterSidebar } from './components/FilterSidebar'
import { Header } from './components/Header'
import { NotesSection } from './components/NotesSection'
import { fragrances } from './mock/fragrances'

export function App() {
  const [selectedFragrances, setSelectedFragrances] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedAccord, setSelectedAccord] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [showFilters, setShowFilters] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Pré-carregar todas as imagens
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = fragrances.map(fragrance => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = fragrance.ImageURL
          img.onload = resolve
          img.onerror = resolve // Resolve mesmo em erro para não travar
        })
      })

      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }

    preloadImages()
  }, [])

  // Acordes direto, sem useMemo
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

  // Calcular fragrâncias similares
  const getSimilarFragrances = () => {
    if (selectedFragrances.length === 0) {
      return []
    }

    const allSimilarIds = selectedFragrances.flatMap(f => f.similares || [])
    const similarCounts: Record<string, number> = {}

    allSimilarIds.forEach(id => {
      if (!selectedFragrances.find(f => f.id === id)) {
        similarCounts[id] = (similarCounts[id] || 0) + 1
      }
    })

    return Object.entries(similarCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([id]) => fragrances.find(f => f.id === parseInt(id)))
      .filter(Boolean)
  }

  const similarFragrances = getSimilarFragrances()

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
            similarFragrances={similarFragrances}
            toggleFragrance={toggleFragrance}
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
                    <Card
                      key={item.id}
                      className={`group relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                        isSelected
                          ? 'ring-2 ring-[#A992BB] shadow-xl bg-[#A992BB]/10'
                          : 'shadow-md hover:shadow-lg bg-white'
                      } ${isDisabled ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-md' : ''}`}
                      onClick={() => !isDisabled && toggleFragrance(item)}
                    >
                      {/* Botão de Adicionar/Remover */}
                      <div
                        className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
                          isSelected
                            ? 'bg-gradient-to-br from-red-400 to-red-500 text-white scale-110'
                            : 'bg-white text-gray-400 group-hover:bg-yellow-100 group-hover:text-yellow-600 group-hover:scale-105'
                        }`}
                      >
                        {isSelected ? (
                          <span className="text-lg font-bold">×</span>
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </div>

                      {/* Badge de Destaque */}
                      {isSelected && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#A992BB] text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                          <span className="hidden sm:inline">Selecionado</span>
                          <span className="sm:hidden">★</span>
                        </div>
                      )}

                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        {/* Imagem do Produto */}
                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 sm:mb-5 flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-all duration-300">
                          <img
                            src={item.ImageURL}
                            alt={item.Name}
                            loading="eager"
                            fetchpriority="high"
                            decoding="sync"
                            className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                            onError={e => {
                              e.currentTarget.src =
                                'https://via.placeholder.com/200x250?text=Sem+Imagem'
                            }}
                          />
                        </div>

                        {/* Informações do Produto */}
                        <div className="flex flex-col flex-grow">
                          {/* Brand e Nome */}
                          <div className="text-center mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              {item.Brand}
                            </p>
                            <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center px-2">
                              {item.Name}
                            </h3>
                          </div>

                          {/* Preço e Gênero */}
                          <div className="flex justify-between items-center mb-3 sm:mb-4">
                            <span className="text-xl sm:text-2xl font-bold text-[#A992BB]">
                              R$ {parseFloat(item.Price).toFixed(0)}
                            </span>
                            <Badge
                              variant="secondary"
                              className={`capitalize font-medium px-2 sm:px-3 py-1 text-xs ${
                                item.Gender === 'masculine'
                                  ? 'bg-blue-100 text-blue-700 border-blue-200'
                                  : item.Gender === 'feminine'
                                    ? 'bg-pink-100 text-pink-700 border-pink-200'
                                    : 'bg-[#A992BB]/20 text-[#A992BB] border-[#A992BB]/30'
                              }`}
                            >
                              {item.Gender === 'masculine'
                                ? 'Masculino'
                                : item.Gender === 'feminine'
                                  ? 'Feminino'
                                  : 'Unissex'}
                            </Badge>
                          </div>

                          {/* Seções que crescem para ocupar espaço */}
                          <div className="flex-grow flex flex-col space-y-3 sm:space-y-4">
                            {/* Barras de Acordes */}
                            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#A992BB] rounded-full"></div>
                                Principais Acordes
                              </h4>

                              <AccordBars
                                accordsPercentage={item.MainAccordsPercentage}
                                compact={true}
                              />
                            </div>

                            {/* Notas com Imagens */}
                            <div className="flex-grow">
                              <NotesSection notes={item.Notes} compact={true} />
                            </div>
                          </div>

                          {/* Botão de Ação */}
                          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4">
                            <Button
                              className={`w-full text-sm transition-all duration-300 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white'
                                  : 'bg-[#A992BB] hover:bg-[#A992BB]/90 text-white'
                              }`}
                              onClick={e => {
                                e.stopPropagation()
                                if (!isDisabled) {
                                  toggleFragrance(item)
                                }
                              }}
                              disabled={isDisabled}
                            >
                              {isSelected ? 'Remover Seleção' : 'Selecionar'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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

        {/* Recomendações Mobile */}
        {similarFragrances.length > 0 && (
          <div className="lg:hidden mt-8">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-yellow-100 rounded-lg">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Recomendações</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {similarFragrances.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors cursor-pointer"
                      onClick={() => toggleFragrance(item)}
                    >
                      <div className="w-6 h-6 bg-[#A992BB] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img
                          src={item.ImageURL}
                          loading="eager"
                          alt={item.Name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-600 text-xs uppercase tracking-wide">
                          {item.Brand}
                        </p>
                        <p className="font-bold text-gray-900 text-sm truncate">
                          {item.Name}
                        </p>
                        <p className="font-bold text-yellow-600 text-sm">
                          R$ {item.Price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
