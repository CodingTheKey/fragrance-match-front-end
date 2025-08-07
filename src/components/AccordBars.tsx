interface AccordBarsProps {
  accordsPercentage: Record<string, string>
  maxBars?: number
  compact?: boolean
}

const accordColors: Record<string, string> = {
  // Suas cores já estão ótimas, mantendo as mesmas
  citrus: '#9ACD32',
  floral: '#DA70D6',
  'white floral': '#F8F8FF',
  rose: '#FF1493',
  fruity: '#FF8C00',
  fresh: '#00FA9A',
  'fresh spicy': '#FF4500',
  aromatic: '#4682B4',
  green: '#228B22',
  almond: '#DEB887',
  sweet: '#FF69B4',
  woody: '#8B4513',
  vanilla: '#F5DEB3',
  oriental: '#800080',
  aquatic: '#1E90FF',
  musky: '#BC8F8F',
  powdery: '#E6E6FA',
  amber: '#FFBF00',
  spicy: '#D2691E',
  leather: '#654321',
  tobacco: '#8B4513',
  honey: '#FFB347',
  coconut: '#FFFACD',
  marine: '#006994',
  ozonic: '#87CEEB',
  metallic: '#C0C0C0',
  earthy: '#8B7355',
  herbal: '#9CAF88',
  smoky: '#696969',
  lactonic: '#FFF8DC',
  animalic: '#8B4513',
  balsamic: '#CD853F',
  resinous: '#DAA520',
  camphor: '#F0F8FF',
}

export function AccordBars({
  accordsPercentage,
  compact = false,
}: AccordBarsProps) {
  if (!accordsPercentage) {
    return null
  }

  const accordEntries = Object.entries(accordsPercentage)
    .sort(([, a], [, b]) => parseFloat(b) - parseFloat(a))
    .slice(0, 3)

  return (
    <div className={compact ? 'space-y-2' : 'space-y-3'}>
      {accordEntries.map(([accord, percentage], index) => {
        const intensity = parseFloat(percentage) / 100
        const color = accordColors[accord] || '#94A3B8'

        const lightColor = `${color}20`

        return (
          <div
            key={accord}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-2">
                {/* Indicador de cor */}
                <div
                  className={`${compact ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full shadow-sm`}
                  style={{ backgroundColor: color }}
                />
                <span
                  className={`${compact ? 'text-xs' : 'text-sm'} text-gray-800 font-medium capitalize truncate transition-colors group-hover:text-gray-900`}
                >
                  {accord.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span
                  className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600 font-bold`}
                >
                  {percentage}
                </span>
                {/* Ícone de ranking opcional */}
                {index === 0 && !compact && (
                  <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                )}
              </div>
            </div>

            {/* Barra principal */}
            <div className="relative">
              <div
                className={`w-full bg-gray-100 rounded-full ${compact ? 'h-2' : 'h-2.5'} overflow-hidden shadow-inner relative`}
                style={{ backgroundColor: lightColor }}
              >
                {/* Barra de progresso com gradiente */}
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{
                    width: `${Math.max(intensity * 100, 5)}%`,
                    background: `linear-gradient(90deg, ${color} 0%, ${color}E6 50%, ${color} 100%)`,
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Efeito de brilho */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      animation:
                        intensity > 0.3 ? 'shimmer 2s infinite' : 'none',
                      animationDelay: `${index * 200}ms`,
                    }}
                  />

                  {/* Highlight no topo */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
                </div>

                {/* Linha de grade sutil para referência visual */}
                {!compact && (
                  <>
                    <div className="absolute top-0 left-1/4 w-px h-full bg-white/40" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-white/40" />
                    <div className="absolute top-0 left-3/4 w-px h-full bg-white/40" />
                  </>
                )}
              </div>

              {!compact && (
                <div className="absolute -top-8 left-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {accord}: {percentage}
                  <div className="absolute top-full left-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900" />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
