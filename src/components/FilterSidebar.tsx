import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { SlidersHorizontal, Sparkles } from 'lucide-react'

interface FilterSidebarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedGenders: string[]
  setSelectedGenders: (genders: string[]) => void
  selectedOccasions: string[]
  setSelectedOccasions: (occasions: string[]) => void
  selectedProjections: string[]
  setSelectedProjections: (projections: string[]) => void
  selectedLongevities: string[]
  setSelectedLongevities: (longevities: string[]) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  selectedFragrances: any[]
  allFragrances: any[]
}

export function FilterSidebar({
  searchTerm,
  setSearchTerm,
  selectedGenders,
  setSelectedGenders,
  selectedOccasions,
  setSelectedOccasions,
  selectedProjections,
  setSelectedProjections,
  selectedLongevities,
  setSelectedLongevities,
  priceRange,
  setPriceRange,
  selectedFragrances,
  allFragrances,
}: FilterSidebarProps) {

  // Função para contar ocorrências
  const getCount = (type: string, value: string) => {
    switch (type) {
      case 'gender':
        return allFragrances.filter(f => f.Gender === value).length
      case 'occasion':
        return allFragrances.filter(f => 
          f.OccasionRanking?.some(o => o.name === value && o.score > 0)
        ).length
      case 'projection':
        const projectionRanges = {
          'Baixa': [0, 30],
          'Moderada': [30, 60], 
          'Alta': [60, 100]
        }
        const range = projectionRanges[value] || [0, 100]
        return allFragrances.filter(f => {
          const sillage = parseFloat(f.Sillage?.replace('%', '') || '0')
          return sillage >= range[0] && sillage < range[1]
        }).length
      case 'longevity':
        const longevityRanges = {
          'Baixa': [0, 30],
          'Moderada': [30, 60],
          'Alta': [60, 100]
        }
        const longRange = longevityRanges[value] || [0, 100]
        return allFragrances.filter(f => {
          const longevity = parseFloat(f.Longevity?.replace('%', '') || '0')
          return longevity >= longRange[0] && longevity < longRange[1]
        }).length
      default:
        return 0
    }
  }

  // Função para toggle de checkboxes
  const toggleFilter = (currentArray: string[], setValue: (arr: string[]) => void, value: string) => {
    if (currentArray.includes(value)) {
      setValue(currentArray.filter(item => item !== value))
    } else {
      setValue([...currentArray, value])
    }
  }
  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-24 self-start space-y-5">
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-lg">Filtros</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Ocasião */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Ocasião
              </label>
              <div className="space-y-2">
                {['casual', 'professional', 'night', 'formal', 'party'].map(occasion => (
                  <div key={occasion} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={occasion}
                        checked={selectedOccasions.includes(occasion)}
                        onChange={() => toggleFilter(selectedOccasions, setSelectedOccasions, occasion)}
                        className="w-4 h-4 text-[#A992BB] bg-gray-100 border-gray-300 rounded focus:ring-[#A992BB] focus:ring-2"
                      />
                      <label htmlFor={occasion} className="text-sm text-gray-700 capitalize cursor-pointer">
                        {occasion === 'casual' ? 'Casual' : 
                         occasion === 'professional' ? 'Profissional' : 
                         occasion === 'night' ? 'Noturno' : 
                         occasion === 'formal' ? 'Formal' : 'Festa'}
                      </label>
                    </div>
                    <Badge className="text-xs bg-[#A992BB]/15 text-[#51435C] border-[#A992BB]/30 hover:bg-[#A992BB]/20 font-semibold">
                      {getCount('occasion', occasion)}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Projeção */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Projeção
              </label>
              <div className="space-y-2">
                {['Baixa', 'Moderada', 'Alta'].map(projection => (
                  <div key={projection} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={projection}
                        checked={selectedProjections.includes(projection)}
                        onChange={() => toggleFilter(selectedProjections, setSelectedProjections, projection)}
                        className="w-4 h-4 text-[#A992BB] bg-gray-100 border-gray-300 rounded focus:ring-[#A992BB] focus:ring-2"
                      />
                      <label htmlFor={projection} className="text-sm text-gray-700 cursor-pointer">
                        {projection}
                      </label>
                    </div>
                    <Badge className="text-xs bg-[#A992BB]/15 text-[#51435C] border-[#A992BB]/30 hover:bg-[#A992BB]/20 font-semibold">
                      {getCount('projection', projection)}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixação */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Fixação
              </label>
              <div className="space-y-2">
                {['Baixa', 'Moderada', 'Alta'].map(longevity => (
                  <div key={longevity} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`longevity-${longevity}`}
                        checked={selectedLongevities.includes(longevity)}
                        onChange={() => toggleFilter(selectedLongevities, setSelectedLongevities, longevity)}
                        className="w-4 h-4 text-[#A992BB] bg-gray-100 border-gray-300 rounded focus:ring-[#A992BB] focus:ring-2"
                      />
                      <label htmlFor={`longevity-${longevity}`} className="text-sm text-gray-700 cursor-pointer">
                        {longevity}
                      </label>
                    </div>
                    <Badge className="text-xs bg-[#A992BB]/15 text-[#51435C] border-[#A992BB]/30 hover:bg-[#A992BB]/20 font-semibold">
                      {getCount('longevity', longevity)}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Preço */}
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

        {/* Contador de seleções */}
        <div className="flex items-center gap-2 sm:gap-3 bg-gray-50/80 rounded-lg px-3 sm:px-4 py-3 backdrop-blur-sm border border-gray-200">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 bg-[#A992BB] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Selecionadas: 
              <span className="font-bold text-[#A992BB] ml-1">
                {selectedFragrances.length}
              </span>
              /3
            </span>
          </div>
          {selectedFragrances.length > 0 && (
            <div className="flex -space-x-1 ml-2">
              {selectedFragrances.map((frag, index) => (
                <div
                  key={frag.id}
                  className="w-6 h-6 rounded-full bg-[#A992BB]/20 border-2 border-white shadow-sm flex items-center justify-center"
                  title={frag.Name}
                >
                  <span className="text-xs font-bold text-[#A992BB]">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botão de Gerar Recomendação */}
        <Button
          onClick={() => {
            if (selectedFragrances.length === 0) {
              alert('Por favor, selecione pelo menos 1 fragrância para gerar recomendações personalizadas com IA.')
            } else {
              // Aqui seria a lógica de gerar recomendação
              console.log('Gerando recomendação para:', selectedFragrances)
            }
          }}
          disabled={selectedFragrances.length === 0}
          className={`w-full flex items-center gap-2 transition-all duration-300 px-4 py-3 rounded-lg font-medium text-base ${
            selectedFragrances.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
              : 'bg-gradient-to-r from-[#A992BB] to-purple-500 hover:from-[#9A84AC] hover:to-purple-600 text-white shadow-md hover:shadow-lg'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Gerar Recomendação com IA</span>
        </Button>

      </div>
    </div>
  )
}
