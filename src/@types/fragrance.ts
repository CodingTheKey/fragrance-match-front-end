interface SeasonRanking {
  name: string
  score: number
}

interface OccasionRanking {
  name: string
  score: number
}

interface Note {
  name: string
  imageUrl: string
}

interface Notes {
  Top: Note[]
  Middle: Note[]
  Base: Note[]
}

interface MainAccordsPercentage {
  [key: string]: string
}

export interface Fragrance {
  id?: number
  Name: string
  Brand: string
  ImageURL: string
  Gender: string
  Price: string
  Longevity: string
  Sillage: string
  GeneralNotes: string[]
  MainAccords: string[]
  MainAccordsPercentage: MainAccordsPercentage
  SeasonRanking: SeasonRanking[]
  OccasionRanking: OccasionRanking[]
  Notes: Notes
  ImageFallbacks: string[]
  PurchaseURL: string
  similares?: number[]
}
