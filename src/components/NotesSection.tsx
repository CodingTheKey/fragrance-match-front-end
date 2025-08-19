import type { Fragrance } from '@/@types/fragrance'

interface NotesSectionProps {
  notes: Fragrance['Notes']
  maxNotes?: number
  compact?: boolean
}

export function NotesSection({ notes, compact = false }: NotesSectionProps) {
  const allNotes = notes
    ? [
        ...(notes.Top || []),
        ...(notes.Middle || []),
        ...(notes.Base || []),
      ].slice(0, 6)
    : []

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      <h4
        className={`${compact ? 'text-xs' : 'text-xs'} font-semibold text-gray-600 mb-2 flex items-center gap-2`}
      >
        <div className="w-2 h-2 bg-[#A992BB] rounded-full"></div>
        Notas Principais
      </h4>

      {allNotes.length > 0 ? (
        <div
          className={`grid ${compact ? 'grid-cols-4 gap-2' : 'grid-cols-3 gap-3'}`}
        >
          {allNotes.map((note, index) => (
            <div
              key={`${note.name}-${index}`}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center overflow-hidden mb-1 border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200 relative`}
              >
                <img
                  src={note.imageUrl}
                  alt={note.name}
                  className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} object-cover rounded-full`}
                  onError={e => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    ;(target.nextSibling as HTMLElement).style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 bg-[#A992BB]/20 rounded-full items-center justify-center text-gray-600 text-xs font-bold hidden">
                  {note.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <span
                className={`${compact ? 'text-xs' : 'text-xs'} text-gray-700 font-medium leading-tight max-w-full break-words px-1`}
              >
                {note.name.length > 8 ? note.name.split(' ')[0] : note.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-[46px] text-gray-400">
          <div className="w-6 h-6 border-2 border-dashed border-gray-300 rounded-full mb-2 flex items-center justify-center">
            <span className="text-xs">?</span>
          </div>
          <span className="text-xs text-center">Dados não disponíveis</span>
        </div>
      )}
    </div>
  )
}
