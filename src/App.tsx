import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, Sparkles, Plus, SlidersHorizontal, Grid3X3, List, Star } from "lucide-react";

// Usando o import real dos dados
import { fragrance } from "./mock/fragance";

// Configuração de cores para os acordes (baseada na estrutura real)
const accordColors = {
  "citrus": "#32CD32",
  "floral": "#FF69B4",
  "white floral": "#FFB3E6",
  "fruity": "#FFD93D",
  "fresh": "#98FB98",
  "fresh spicy": "#FF6347",
  "aromatic": "#87CEEB",
  "rose": "#FFB6C1",
  "green": "#90EE90",
  "almond": "#F5DEB3",
  "sweet": "#FF6B6B",
  "woody": "#8B4513",
  "vanilla": "#F5DEB3",
  "oriental": "#8B008B",
  "aquatic": "#00CED1",
  "musky": "#DEB887",
  "powdery": "#E6E6FA",
  "amber": "#FFBF00",
  "spicy": "#CD853F"
};

// Componente para as barras de acordes com percentuais reais
const AccordBars = ({ accordsPercentage, maxBars = 4 }) => {
  if (!accordsPercentage) return null;
  
  const accordEntries = Object.entries(accordsPercentage)
    .sort(([,a], [,b]) => parseFloat(b) - parseFloat(a)) // Ordena por percentual decrescente
    .slice(0, maxBars);
  
  return (
    <div className="space-y-2.5">
      {accordEntries.map(([accord, percentage]) => {
        const intensity = parseFloat(percentage) / 100;
        const color = accordColors[accord] || "#94A3B8";
        
        return (
          <div key={accord} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-700 font-medium capitalize">
                {accord}
              </span>
              <span className="text-xs text-gray-600 font-bold">
                {percentage}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div 
                className="h-full rounded-full transition-all duration-700 ease-out shadow-sm"
                style={{ 
                  backgroundColor: color,
                  width: `${Math.max(intensity * 100, 8)}%`, // Mínimo 8% para visibilidade
                  opacity: 1,
                  boxShadow: `inset 0 1px 2px rgba(0,0,0,0.1)`
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Componente para mostrar as notas com imagens
const NotesSection = ({ notes, maxNotes = 6 }) => {
  const allNotes = notes ? [
    ...(notes.Top || []),
    ...(notes.Middle || []),
    ...(notes.Base || [])
  ].slice(0, maxNotes) : [];
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="text-xs font-semibold text-gray-600 mb-3 flex items-center gap-2">
        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        Notas Principais
      </h4>
      
      {allNotes.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          {allNotes.map((note, index) => (
            <div key={`${note.name}-${index}`} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center overflow-hidden mb-2 border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200 relative">
                <img 
                  src={note.imageUrl} 
                  alt={note.name}
                  className="w-8 h-8 object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full items-center justify-center text-gray-600 text-sm font-bold hidden">
                  {note.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="text-xs text-gray-700 font-medium leading-tight max-w-full break-words px-1">
                {note.name.length > 8 ? note.name.split(' ')[0] : note.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-4 text-gray-400">
          <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full mb-2 flex items-center justify-center">
            <span className="text-sm">?</span>
          </div>
          <span className="text-xs text-center">
            Dados de notas não disponíveis
          </span>
        </div>
      )}
    </div>
  );
};

export function App() {
  const [selectedFragrances, setSelectedFragrances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedAccord, setSelectedAccord] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [viewMode, setViewMode] = useState("grid");

  const allAccords = useMemo(() => {
    const accordsSet = new Set();
    fragrance.forEach(f => f.MainAccords.forEach(a => accordsSet.add(a)));
    return Array.from(accordsSet).sort();
  }, []);

  const filteredFragrances = useMemo(() => {
    return fragrance.filter(item => {
      const matchesSearch = item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.Brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGender = selectedGender === "all" || item.Gender === selectedGender;
      const matchesAccord = selectedAccord === "all" || item.MainAccords.includes(selectedAccord);
      const matchesPrice = parseFloat(item.Price) >= priceRange[0] && parseFloat(item.Price) <= priceRange[1];
      
      return matchesSearch && matchesGender && matchesAccord && matchesPrice;
    });
  }, [searchTerm, selectedGender, selectedAccord, priceRange]);

  const toggleFragrance = (fragranceItem) => {
    if (selectedFragrances.find(f => f.id === fragranceItem.id)) {
      setSelectedFragrances(selectedFragrances.filter(f => f.id !== fragranceItem.id));
    } else if (selectedFragrances.length < 3) {
      setSelectedFragrances([...selectedFragrances, fragranceItem]);
    }
  };

  // Calcular fragrâncias similares
  const getSimilarFragrances = () => {
    if (selectedFragrances.length === 0) return [];
    
    const allSimilarIds = selectedFragrances.flatMap(f => f.similares || []);
    const similarCounts = {};
    
    allSimilarIds.forEach(id => {
      if (!selectedFragrances.find(f => f.id === id)) {
        similarCounts[id] = (similarCounts[id] || 0) + 1;
      }
    });
    
    return Object.entries(similarCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([id]) => fragrance.find(f => f.id === parseInt(id)))
      .filter(Boolean);
  };

  const similarFragrances = getSimilarFragrances();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
              <svg 
                className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                {/* Frasco de perfume estilizado */}
                <path d="M8 4V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" strokeLinecap="round"/>
                <path d="M7 4h10v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4z" fill="currentColor" fillOpacity="0.2"/>
                <rect x="6" y="6" width="12" height="14" rx="3" ry="3" fill="currentColor" fillOpacity="0.1"/>
                <path d="M6 9c0-1.5 1.5-3 3-3h6c1.5 0 3 1.5 3 3v8c0 1.5-1.5 3-3 3H9c-1.5 0-3-1.5-3-3V9z"/>
                {/* Detalhes decorativos */}
                <circle cx="12" cy="13" r="2" fill="currentColor" fillOpacity="0.3"/>
                <path d="M10 11h4" strokeLinecap="round"/>
                <path d="M10 15h4" strokeLinecap="round"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                FragranceMatch
              </h1>
              <p className="text-xs text-gray-500 font-medium">Encontre sua fragrância perfeita</p>
            </div>
          </div>
          
          {/* Stats e Controles */}
          <div className="flex items-center gap-8">
            {/* Contador de seleções */}
            <div className="flex items-center gap-3 bg-gray-50/80 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Selecionadas: <span className="font-bold text-yellow-600">{selectedFragrances.length}</span>/3
                </span>
              </div>
              {selectedFragrances.length > 0 && (
                <div className="flex -space-x-1">
                  {selectedFragrances.map((frag, index) => (
                    <div 
                      key={frag.id}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-white shadow-sm flex items-center justify-center"
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
            
            {/* Toggle de visualização */}
            <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === "grid" 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                Grade
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === "list" 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <List className="w-4 h-4" />
                Lista
              </button>
            </div>
          </div>
        </div>
      </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com Filtros */}
          <div className="lg:col-span-1">
            <Card className="mb-6 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                  <CardTitle className="text-lg">Filtros</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Busca */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Buscar por nome ou marca...
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Ex: Sauvage, Dior..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Gênero */}
                <div className="w-full">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Gênero</label>
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

                {/* Acordes */}
                <div className="w-full">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Acordes</label>
                  <Select value={selectedAccord} onValueChange={setSelectedAccord}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      {allAccords.map(accord => (
                        <SelectItem key={accord} value={accord}>{accord}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preço */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Preço</label>
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

            {/* Recomendações */}
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
                    <div key={item.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors">
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
                            <p className="font-medium text-gray-600 text-xs uppercase tracking-wide">{item.Brand}</p>
                            <p className="font-bold text-gray-900 text-sm truncate">{item.Name}</p>
                            <div className="mt-1">
                              <AccordBars accordsPercentage={item.MainAccordsPercentage} maxBars={2} />
                            </div>
                          </div>
                          <div className="text-right ml-2">
                            <p className="font-bold text-yellow-600">R$ {item.Price}</p>
                            <Button size="sm" className="mt-1 h-6 px-2 text-xs bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500">
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

          {/* Área Principal */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">{filteredFragrances.length} fragrâncias encontradas</p>
            </div>

            {/* Grid de Fragrâncias */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFragrances.map(item => {
                  const isSelected = selectedFragrances.some(f => f.id === item.id);
                  const isDisabled = !isSelected && selectedFragrances.length >= 3;
                  
                  return (
                    <Card 
                      key={item.id}
                      className={`group relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                        isSelected 
                          ? 'ring-2 ring-yellow-400 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50' 
                          : 'shadow-md hover:shadow-lg bg-white'
                      } ${isDisabled ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-md' : ''}`}
                      onClick={() => !isDisabled && toggleFragrance(item)}
                    >
                      {/* Botão de Adicionar/Remover */}
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
                        isSelected 
                          ? 'bg-gradient-to-br from-red-400 to-red-500 text-white scale-110' 
                          : 'bg-white text-gray-400 group-hover:bg-yellow-100 group-hover:text-yellow-600 group-hover:scale-105'
                      }`}>
                        {isSelected ? (
                          <span className="text-lg font-bold">×</span>
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>

                      {/* Badge de Destaque */}
                      {isSelected && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          Selecionado
                        </div>
                      )}
                      
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Imagem do Produto */}
                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-5 flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-all duration-300">
                          <img 
                            src={item.ImageURL} 
                            alt={item.Name}
                            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                            onError={(e) => {
                              e.target.src = item.ImageFallbacks?.[0] || 'https://via.placeholder.com/200x250?text=Sem+Imagem';
                            }}
                          />
                        </div>
                        
                        {/* Informações do Produto - flex-grow para ocupar espaço disponível */}
                        <div className="flex flex-col flex-grow">
                          {/* Brand e Nome */}
                          <div className="text-center mb-4">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              {item.Brand}
                            </p>
                            <h3 className="font-bold text-lg text-gray-900 leading-tight min-h-[2.5rem] flex items-center justify-center">
                              {item.Name}
                            </h3>
                          </div>
                          
                          {/* Preço e Gênero */}
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                              R$ {parseFloat(item.Price).toFixed(0)}
                            </span>
                            <Badge 
                              variant="secondary" 
                              className={`capitalize font-medium px-3 py-1 ${
                                item.Gender === 'masculine' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                                item.Gender === 'feminine' ? 'bg-pink-100 text-pink-700 border-pink-200' : 
                                'bg-purple-100 text-purple-700 border-purple-200'
                              }`}
                            >
                              {item.Gender === 'masculine' ? 'Masculino' : 
                               item.Gender === 'feminine' ? 'Feminino' : 'Unissex'}
                            </Badge>
                          </div>
                          
                          {/* Seções que crescem para ocupar espaço */}
                          <div className="flex-grow flex flex-col space-y-4">
                            {/* Barras de Acordes */}
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                                Principais Acordes
                              </h4>
                              <AccordBars accordsPercentage={item.MainAccordsPercentage} maxBars={4} />
                            </div>

                            {/* Notas com Imagens */}
                            <div className="flex-grow">
                              <NotesSection notes={item.Notes} maxNotes={6} />
                            </div>
                          </div>

                          {/* Botão de Ação - sempre no final */}
                          <div className="mt-4 pt-4">
                            <Button 
                              className={`w-full transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white' 
                                  : 'bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDisabled) toggleFragrance(item);
                              }}
                              disabled={isDisabled}
                            >
                              {isSelected ? 'Remover Seleção' : 'Selecionar'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              // Visualização em Lista - Redesenhada
              <div className="space-y-4 ">
                {filteredFragrances.map(item => {
                  const isSelected = selectedFragrances.some(f => f.id === item.id);
                  const isDisabled = !isSelected && selectedFragrances.length >= 3;
                  
                  return (
                    <Card 
                      key={item.id}
                      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        isSelected 
                          ? 'ring-2 ring-yellow-400 shadow-xl bg-gradient-to-r from-yellow-50 to-orange-50' 
                          : 'shadow-md hover:shadow-lg bg-white'
                      } ${isDisabled ? 'opacity-50 cursor-not-allowed hover:shadow-md' : ''}`}
                      onClick={() => !isDisabled && toggleFragrance(item)}
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-6 h-50">
                          {/* Imagem */}
                          <div className="w-32 h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 relative group-hover:shadow-inner transition-all duration-300">
                            {/* Botão de seleção */}
                            <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
                              isSelected 
                                ? 'bg-gradient-to-br from-red-400 to-red-500 text-white scale-110' 
                                : 'bg-white text-gray-400 group-hover:bg-yellow-100 group-hover:text-yellow-600 group-hover:scale-105'
                            }`}>
                              {isSelected ? (
                                <span className="text-sm font-bold">×</span>
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </div>

                            {/* Badge de Destaque */}
                            {isSelected && (
                              <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                <Star className="w-2 h-2 fill-current" />
                                Selecionado
                              </div>
                            )}
                            
                            <img 
                              src={item.ImageURL} 
                              alt={item.Name}
                              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                              onError={(e) => {
                                e.target.src = item.ImageFallbacks?.[0] || 'https://via.placeholder.com/130x160?text=Sem+Imagem';
                              }}
                            />
                          </div>
                          
                          {/* Informações Principais */}
                          <div className="flex-grow flex flex-col justify-between min-w-0">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-3">
                              <div className="min-w-0 flex-grow">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                  {item.Brand}
                                </p>
                                <h3 className="font-bold text-xl text-gray-900 leading-tight mb-2 truncate">
                                  {item.Name}
                                </h3>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                                    R$ {parseFloat(item.Price).toFixed(0)}
                                  </span>
                                  <Badge 
                                    variant="secondary" 
                                    className={`capitalize font-medium px-3 py-1 ${
                                      item.Gender === 'masculine' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                                      item.Gender === 'feminine' ? 'bg-pink-100 text-pink-700 border-pink-200' : 
                                      'bg-purple-100 text-purple-700 border-purple-200'
                                    }`}
                                  >
                                    {item.Gender === 'masculine' ? 'Masculino' : 
                                     item.Gender === 'feminine' ? 'Feminino' : 'Unissex'}
                                  </Badge>
                                </div>
                              </div>
                              
                              {/* Botão de ação no header */}
                              <div className="ml-4">
                                <Button 
                                  className={`px-6 transition-all duration-300 ${
                                    isSelected 
                                      ? 'bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white' 
                                      : 'bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white'
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isDisabled) toggleFragrance(item);
                                  }}
                                  disabled={isDisabled}
                                >
                                  {isSelected ? 'Remover' : 'Selecionar'}
                                </Button>
                              </div>
                            </div>
                            
                            {/* Conteúdo Expandido */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
                              {/* Principais Acordes */}
                              <div className="bg-gray-50 rounded-lg p-3">
                                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                                  Principais Acordes
                                </h4>
                                {item.MainAccordsPercentage && (
                                  <div className="space-y-1.5">
                                    {Object.entries(item.MainAccordsPercentage)
                                      .sort(([,a], [,b]) => parseFloat(b) - parseFloat(a))
                                      .slice(0, 3)
                                      .map(([accord, percentage]) => {
                                        const intensity = parseFloat(percentage) / 100;
                                        const color = accordColors[accord] || "#94A3B8";
                                        
                                        return (
                                          <div key={accord} className="flex items-center gap-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                              <div 
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{ 
                                                  backgroundColor: color,
                                                  width: `${Math.max(intensity * 100, 8)}%`,
                                                  opacity: 1
                                                }}
                                              />
                                            </div>
                                            <span className="text-xs text-gray-700 font-medium whitespace-nowrap min-w-0">
                                              {accord}
                                            </span>
                                            <span className="text-xs text-gray-600 font-bold whitespace-nowrap">
                                              {percentage}
                                            </span>
                                          </div>
                                        );
                                      })}
                                  </div>
                                )}
                              </div>

                              {/* Notas Principais */}
                              <div className="bg-white border border-gray-200 rounded-lg p-3">
                                <h4 className="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                                  Notas Principais
                                </h4>
                                
                                {(() => {
                                  const allNotes = item.Notes ? [
                                    ...(item.Notes.Top || []),
                                    ...(item.Notes.Middle || []),
                                    ...(item.Notes.Base || [])
                                  ].slice(0, 6) : [];
                                  
                                  return allNotes.length > 0 ? (
                                    <div className="grid grid-cols-6 gap-1">
                                      {allNotes.map((note, index) => (
                                        <div key={`${note.name}-${index}`} className="flex flex-col items-center text-center">
                                          <div className="w-7 h-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 relative">
                                            <img 
                                              src={note.imageUrl} 
                                              alt={note.name}
                                              className="w-5 h-5 object-cover rounded-full"
                                              onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                              }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full items-center justify-center text-gray-600 text-xs font-bold hidden">
                                              {note.name.charAt(0).toUpperCase()}
                                            </div>
                                          </div>
                                          <span className="text-xs text-gray-700 font-medium leading-tight mt-0.5 truncate max-w-full">
                                            {note.name.split(' ')[0]}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="flex items-center justify-center py-2 text-gray-400">
                                      <div className="w-5 h-5 border border-dashed border-gray-300 rounded-full mr-2 flex items-center justify-center">
                                        <span className="text-xs">?</span>
                                      </div>
                                      <span className="text-xs">Dados não disponíveis</span>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}