import type { Fragrance } from '../@types/fragrance'

export const fragrances: Fragrance[] = [
  {
    id: 1,
    Name: 'Dior Star',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-star.jpg',
    Gender: 'feminine',
    Price: '142.99',
    Longevity: '58.0%',
    Sillage: '59.5%',
    GeneralNotes: [
      'Petitgrain',
      'Mandarin Orange',
      'Bergamot',
      'Musk',
      'Almond',
    ],
    MainAccords: [
      'citrus',
      'floral',
      'white floral',
      'fruity',
      'fresh',
      'fresh spicy',
      'aromatic',
      'rose',
      'green',
      'almond',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      floral: '71%',
      whiteFloral: '68%',
      fruity: '58%',
      fresh: '56%',
      freshSpicy: '53%',
      aromatic: '52%',
      rose: '49%',
      green: '47%',
      almond: '45%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 2.91,
      },
      {
        name: 'summer',
        score: 1.842,
      },
      {
        name: 'fall',
        score: 0,
      },
      {
        name: 'winter',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 1.957,
      },
      {
        name: 'professional',
        score: 1.743,
      },
      {
        name: 'night out',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Petitgrain',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Petitgrain.png',
        },
        {
          name: 'Mandarin Orange',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mandarin%20Orange.png',
        },
      ],
      Middle: [
        {
          name: 'Peony',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peony.png',
        },
        {
          name: 'Honeysuckle',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Honeysuckle.png',
        },
      ],
      Base: [
        {
          name: 'Almond',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Almond.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/140581.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-star/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#140581',
  },
  {
    id: 2,
    Name: 'Dior Joy',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-joy.jpg',
    Gender: 'feminine',
    Price: '224.99',
    Longevity: '',
    Sillage: '',
    GeneralNotes: ['Peach', 'Cassis', 'Jasmine', 'Musk', 'Patchouli'],
    MainAccords: [
      'citrus',
      'woody',
      'powdery',
      'white floral',
      'musky',
      'rose',
      'warm spicy',
      'floral',
      'fruity',
      'aromatic',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      woody: '91%',
      powdery: '77%',
      whiteFloral: '75%',
      musky: '74%',
      rose: '60%',
      warmSpicy: '55%',
      floral: '54%',
      fruity: '54%',
      aromatic: '53%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.925,
      },
      {
        name: 'spring',
        score: 1.811,
      },
      {
        name: 'winter',
        score: 1.187,
      },
      {
        name: 'summer',
        score: 1,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.429,
      },
      {
        name: 'casual',
        score: 1.278,
      },
      {
        name: 'night out',
        score: 1.106,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Mandarin Orange',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mandarin%20Orange.png',
        },
      ],
      Middle: [
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Grasse Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grasse%20Rose.png',
        },
        {
          name: 'Peach',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peach.png',
        },
        {
          name: 'Cassis',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cassis.png',
        },
      ],
      Base: [
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cedar.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Benzoin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Benzoin.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/347476.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-joy/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#316088',
  },
  {
    id: 3,
    Name: 'Miss Dior',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/miss-dior.jpg',
    Gender: 'feminine',
    Price: '144.59',
    Longevity: '65.6%',
    Sillage: '52.5%',
    GeneralNotes: ['rose', 'gardenia', 'sage', 'and other green florals.'],
    MainAccords: [
      'vanilla',
      'powdery',
      'rose',
      'floral',
      'fruity',
      'sweet',
      'fresh',
      'iris',
      'musky',
      'amber',
    ],
    MainAccordsPercentage: {
      vanilla: '100%',
      powdery: '98%',
      rose: '79%',
      floral: '72%',
      fruity: '68%',
      sweet: '66%',
      fresh: '60%',
      iris: '59%',
      musky: '57%',
      amber: '57%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 1.356,
      },
      {
        name: 'spring',
        score: 1.32,
      },
      {
        name: 'fall',
        score: 1.083,
      },
      {
        name: 'summer',
        score: 0.6,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.783,
      },
      {
        name: 'casual',
        score: 1.5,
      },
      {
        name: 'professional',
        score: 0.588,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
        {
          name: 'Peony',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peony.png',
        },
        {
          name: 'Lily-of-the-Valley',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lily-of-the-valley.png',
        },
      ],
      Middle: [
        {
          name: 'Apricot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Apricot.png',
        },
        {
          name: 'Rose',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Rose.png',
        },
        {
          name: 'Peach',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peach.png',
        },
      ],
      Base: [
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Tonka Bean',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tonka%20Bean.png',
        },
        {
          name: 'Benzoin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Benzoin.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/414295.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/miss-dior/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#414296',
  },
  {
    id: 4,
    Name: 'Dior Homme',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-homme.jpg',
    Gender: 'masculine',
    Price: '159.99',
    Longevity: '68.2%',
    Sillage: '53.5%',
    GeneralNotes: ['Leather', 'Rose', 'Sandalwood', 'Agarwood', 'Cedar'],
    MainAccords: ['woody', 'musky', 'aromatic', 'amber', 'citrus'],
    MainAccordsPercentage: {
      woody: '100%',
      musky: '73%',
      aromatic: '54%',
      amber: '53%',
      citrus: '47%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.087,
      },
      {
        name: 'winter',
        score: 1.124,
      },
      {
        name: 'spring',
        score: 0.801,
      },
      {
        name: 'summer',
        score: 0.47,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.616,
      },
      {
        name: 'night out',
        score: 1.187,
      },
      {
        name: 'casual',
        score: 0.423,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
        {
          name: 'elemi',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Elemi.png',
        },
      ],
      Middle: [
        {
          name: 'Atlas Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Atlas%20Cedar.png',
        },
        {
          name: 'Cashmere Wood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cashmere%20Wood.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
      Base: [
        {
          name: 'Iso E Super',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iso%20E%20Super.png',
        },
        {
          name: 'Haitian Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Haitian%20Vetiver.png',
        },
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/378691.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-homme/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#141169',
  },
  {
    id: 5,
    Name: 'Dior Addict',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-addict.jpg',
    Gender: 'feminine',
    Price: '209.99',
    Longevity: '82.6%',
    Sillage: '76.25%',
    GeneralNotes: [
      'Orange Blossom',
      'Mandarin Orange',
      'Silkwood Blossom',
      'Bulgarian Rose',
      'Night Blooming Cereus',
      'Tonka Bean',
      'Sandalwood',
      'Vanilla',
    ],
    MainAccords: [
      'vanilla',
      'white floral',
      'sweet',
      'fruity',
      'amber',
      'aromatic',
      'citrus',
      'powdery',
    ],
    MainAccordsPercentage: {
      vanilla: '100%',
      whiteFloral: '82%',
      sweet: '65%',
      fruity: '48%',
      amber: '47%',
      aromatic: '46%',
      citrus: '46%',
      powdery: '44%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 1.276,
      },
      {
        name: 'spring',
        score: 0.736,
      },
      {
        name: 'fall',
        score: 0.47,
      },
      {
        name: 'summer',
        score: 0.46,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.17,
      },
      {
        name: 'professional',
        score: 1.092,
      },
      {
        name: 'casual',
        score: 0.804,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Blackberry',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Blackberry.png',
        },
        {
          name: 'Mandarin Leaf',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mandarin%20Leaf.png',
        },
        {
          name: 'Silk Tree blossom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Silk%20Tree%20Blossom.png',
        },
      ],
      Middle: [
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Orange Blossom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Orange%20Blossom.png',
        },
        {
          name: 'Night blooming Cereus',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Night%20Blooming%20Cereus.png',
        },
        {
          name: 'Rose',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Rose.png',
        },
      ],
      Base: [
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Tonka Bean',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tonka%20Bean.png',
        },
        {
          name: 'Mysore Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mysore%20Sandalwood.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/256046.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-addict/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#256046',
  },
  {
    id: 6,
    Name: 'Dior Homme Eau',
    Brand: 'Christian Dior',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-homme-eau.jpg',
    Gender: 'masculine',
    Price: '7.99',
    Longevity: '71.2%',
    Sillage: '57.5%',
    GeneralNotes: [
      'Grapefruit',
      'Calabrian bergamot',
      'Coriander',
      'Tuscan iris',
      'Virginian cedar',
    ],
    MainAccords: [
      'iris',
      'citrus',
      'powdery',
      'woody',
      'aromatic',
      'violet',
      'amber',
      'earthy',
      'fresh spicy',
      'soft spicy',
    ],
    MainAccordsPercentage: {
      iris: '100%',
      citrus: '90%',
      powdery: '86%',
      woody: '81%',
      aromatic: '78%',
      violet: '65%',
      amber: '60%',
      earthy: '58%',
      freshSpicy: '54%',
      softSpicy: '52%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.793,
      },
      {
        name: 'spring',
        score: 1.356,
      },
      {
        name: 'winter',
        score: 1.047,
      },
      {
        name: 'summer',
        score: 0.9,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.583,
      },
      {
        name: 'casual',
        score: 0.81,
      },
      {
        name: 'night out',
        score: 0.6,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Coriander',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Coriander.png',
        },
        {
          name: 'Grapefruit',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grapefruit.png',
        },
        {
          name: 'Calabrian bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Calabrian%20Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Tuscan Iris',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tuscan%20Iris.png',
        },
      ],
      Base: [
        {
          name: 'Virginian Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Virginian%20Cedar.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/309341.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-homme-eau/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#309341',
  },
  {
    id: 7,
    Name: 'Dior Homme Sport',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-homme-sport.jpg',
    Gender: 'masculine',
    Price: '180.99',
    Longevity: '71.8%',
    Sillage: '55.75%',
    GeneralNotes: [
      'Pear',
      'Lemon',
      'Blood Orange',
      'Grapefruit',
      'Geranium',
      'Nutmeg',
      'Pink Pepper',
      'Sandalwood',
      'Vetiver',
    ],
    MainAccords: [
      'citrus',
      'aromatic',
      'woody',
      'fresh spicy',
      'amber',
      'aldehydic',
      'fresh',
      'soft spicy',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      aromatic: '70%',
      woody: '62%',
      freshSpicy: '58%',
      amber: '56%',
      aldehydic: '54%',
      fresh: '50%',
      softSpicy: '45%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.89,
      },
      {
        name: 'summer',
        score: 1.5,
      },
      {
        name: 'fall',
        score: 1.118,
      },
      {
        name: 'winter',
        score: 0.882,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.934,
      },
      {
        name: 'casual',
        score: 1.4,
      },
      {
        name: 'night out',
        score: 0.56,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Lemon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lemon.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Aldehydes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Aldehydes.png',
        },
      ],
      Middle: [
        {
          name: 'elemi',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Elemi.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
      ],
      Base: [
        {
          name: 'Woody Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Woody%20Notes.png',
        },
        {
          name: 'Olibanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Olibanum.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/296413.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-homme-sport/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#296413',
  },
  {
    id: 8,
    Name: 'Dior Homme Intense',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-homme-intense.jpg',
    Gender: 'masculine',
    Price: '209.99',
    Longevity: '77.2%',
    Sillage: '64.75%',
    GeneralNotes: [
      'Lavender',
      'Pear',
      'Ambrette (Musk Mallow)',
      'Iris',
      'Vetiver',
      'Virginia Cedar',
    ],
    MainAccords: [
      'iris',
      'woody',
      'powdery',
      'earthy',
      'violet',
      'aromatic',
      'floral',
      'lavender',
      'musky',
      'fruity',
    ],
    MainAccordsPercentage: {
      iris: '100%',
      woody: '81%',
      powdery: '77%',
      earthy: '68%',
      violet: '65%',
      aromatic: '65%',
      floral: '63%',
      lavender: '62%',
      musky: '61%',
      fruity: '45%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.822,
      },
      {
        name: 'spring',
        score: 1.085,
      },
      {
        name: 'winter',
        score: 0.567,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.679,
      },
      {
        name: 'night out',
        score: 0.549,
      },
      {
        name: 'casual',
        score: 0.441,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Lavender',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lavender.png',
        },
      ],
      Middle: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
        {
          name: 'Ambrette (Musk Mallow)',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ambrette%20(musk%20Mallow).png',
        },
        {
          name: 'Pear',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pear.png',
        },
      ],
      Base: [
        {
          name: 'Virginia Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Virginia%20Cedar.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/200108.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-homme-intense/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#200108',
  },
  {
    id: 9,
    Name: 'Dior Homme (New)',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-homme-(new).jpg',
    Gender: 'masculine',
    Price: '194.99',
    Longevity: '58.8%',
    Sillage: '48.0%',
    GeneralNotes: ['lavender', 'sage', 'iris', 'patchouli', 'leather'],
    MainAccords: [
      'woody',
      'patchouli',
      'earthy',
      'amber',
      'iris',
      'powdery',
      'warm spicy',
      'violet',
      'balsamic',
      'aromatic',
    ],
    MainAccordsPercentage: {
      amber: '100%',
      woody: '93%',
      earthy: '87%',
      patchouli: '87%',
      iris: '74%',
      powdery: '67%',
      warmSpicy: '58%',
      violet: '52%',
      aromatic: '50%',
      balsamic: '47%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 3.606,
      },
      {
        name: 'winter',
        score: 3.056,
      },
      {
        name: 'spring',
        score: 0.35,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.553,
      },
      {
        name: 'night out',
        score: 1.464,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
      ],
      Middle: [
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
      Base: [
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/243068.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-homme-new/cologne?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#243068',
  },
  {
    id: 10,
    Name: 'Dior Joy Intense',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-joy-intense.jpg',
    Gender: 'feminine',
    Price: '130.79',
    Longevity: '69.2%',
    Sillage: '64.0%',
    GeneralNotes: [
      'Grasse Rose',
      'Jasmine',
      'Tonka Bean',
      'Sandalwood',
      'Vanilla',
    ],
    MainAccords: [
      'vanilla',
      'white floral',
      'powdery',
      'citrus',
      'rose',
      'musky',
      'woody',
      'floral',
      'sweet',
      'aromatic',
    ],
    MainAccordsPercentage: {
      vanilla: '100%',
      whiteFloral: '88%',
      powdery: '85%',
      citrus: '76%',
      rose: '74%',
      musky: '73%',
      woody: '67%',
      floral: '62%',
      sweet: '57%',
      aromatic: '57%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.703,
      },
      {
        name: 'winter',
        score: 1.369,
      },
      {
        name: 'fall',
        score: 1.26,
      },
      {
        name: 'summer',
        score: 0.76,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.157,
      },
      {
        name: 'casual',
        score: 1.46,
      },
      {
        name: 'night out',
        score: 1.357,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Neroli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Neroli.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Grasse Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grasse%20Rose.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Tonka Bean',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tonka%20Bean.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/344357.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-joy-intense/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#344357',
  },
  {
    id: 11,
    Name: 'Dior Eau Fraiche',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-eau-fraiche.jpg',
    Gender: 'feminine',
    Price: '192.99',
    Longevity: '54.2%',
    Sillage: '57.0%',
    GeneralNotes: ['mandarin orange', 'petitgrain', 'patchouli'],
    MainAccords: ['citrus', 'woody', 'mossy', 'earthy', 'sweet'],
    MainAccordsPercentage: {
      citrus: '100%',
      woody: '65%',
      mossy: '64%',
      earthy: '54%',
      sweet: '44%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.017,
      },
      {
        name: 'summer',
        score: 1,
      },
      {
        name: 'spring',
        score: 0.9,
      },
      {
        name: 'winter',
        score: 0.455,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.255,
      },
      {
        name: 'casual',
        score: 1.164,
      },
      {
        name: 'night out',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Lemon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lemon.png',
        },
        {
          name: 'Mandarin Orange',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mandarin%20Orange.png',
        },
      ],
      Middle: [
        {
          name: 'Palisander Rosewood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Palisander%20Rosewood.png',
        },
      ],
      Base: [
        {
          name: 'Oakmoss',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Oakmoss.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/429005.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-eau-fraiche/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#429005',
  },
  {
    id: 12,
    Name: 'Miss Dior Originale',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/miss-dior-originale.jpg',
    Gender: 'feminine',
    Price: '180.99',
    Longevity: '68.4%',
    Sillage: '61.75%',
    GeneralNotes: ['jasmine sambac', 'patchouli', 'galbanum'],
    MainAccords: [
      'green',
      'patchouli',
      'white floral',
      'aromatic',
      'balsamic',
      'woody',
      'warm spicy',
      'earthy',
    ],
    MainAccordsPercentage: {
      green: '100%',
      patchouli: '75%',
      whiteFloral: '75%',
      aromatic: '65%',
      balsamic: '65%',
      woody: '57%',
      warmSpicy: '53%',
      earthy: '48%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 1.984,
      },
      {
        name: 'fall',
        score: 1.846,
      },
      {
        name: 'spring',
        score: 1.255,
      },
      {
        name: 'summer',
        score: 0.6,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.949,
      },
      {
        name: 'night out',
        score: 0.424,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Galbanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Galbanum.png',
        },
      ],
      Middle: [
        {
          name: 'Jasmine Sambac',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine%20Sambac.png',
        },
      ],
      Base: [
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/119677.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/miss-dior-originale/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#119677',
  },
  {
    id: 13,
    Name: 'Dior Sauvage Elixir',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-sauvage-elixir.jpg',
    Gender: 'masculine',
    Price: '259.99',
    Longevity: '89.8%',
    Sillage: '78.5%',
    GeneralNotes: [
      'Nutmeg',
      'Cinnamon',
      'Cardamom',
      'Grapefruit',
      'Lavender',
      'Licorice',
      'Sandalwood',
      'Amber',
      'Patchouli',
      'Haitian Vetiver',
    ],
    MainAccords: [
      'warm spicy',
      'fresh spicy',
      'woody',
      'aromatic',
      'lavender',
      'soft spicy',
      'cinnamon',
      'amber',
      'powdery',
      'balsamic',
    ],
    MainAccordsPercentage: {
      warmSpicy: '100%',
      freshSpicy: '81%',
      woody: '79%',
      aromatic: '77%',
      lavender: '75%',
      softSpicy: '68%',
      cinnamon: '62%',
      amber: '54%',
      powdery: '50%',
      balsamic: '48%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.321,
      },
      {
        name: 'fall',
        score: 2.051,
      },
      {
        name: 'spring',
        score: 0.539,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.623,
      },
      {
        name: 'night out',
        score: 1.34,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Nutmeg',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Nutmeg.png',
        },
        {
          name: 'Cinnamon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cinnamon.png',
        },
        {
          name: 'Cardamom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cardamom.png',
        },
        {
          name: 'Grapefruit',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grapefruit.png',
        },
      ],
      Middle: [
        {
          name: 'Lavender',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lavender.png',
        },
      ],
      Base: [
        {
          name: 'Licorice',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Licorice.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Haitian Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Haitian%20Vetiver.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/418286.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-sauvage-elixir/parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#418286',
  },
  {
    id: 14,
    Name: 'Dior Addict Eau Fraiche',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-addict-eau-fraiche.jpg',
    Gender: 'feminine',
    Price: '179.99',
    Longevity: '52.6%',
    Sillage: '50.5%',
    GeneralNotes: ['Bergamot', 'Freesia', 'Lily in the Valley', 'White Musk'],
    MainAccords: [
      'floral',
      'citrus',
      'musky',
      'fresh spicy',
      'white floral',
      'powdery',
      'green',
      'aromatic',
      'fresh',
    ],
    MainAccordsPercentage: {
      floral: '100%',
      citrus: '96%',
      musky: '62%',
      freshSpicy: '61%',
      whiteFloral: '61%',
      powdery: '52%',
      green: '51%',
      aromatic: '49%',
      fresh: '48%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 3.095,
      },
      {
        name: 'summer',
        score: 1.746,
      },
      {
        name: 'fall',
        score: 0.558,
      },
      {
        name: 'winter',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 2.044,
      },
      {
        name: 'professional',
        score: 2.029,
      },
      {
        name: 'night out',
        score: 0.558,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Calabrian bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Calabrian%20Bergamot.png',
        },
        {
          name: 'Grapefruit',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grapefruit.png',
        },
      ],
      Middle: [
        {
          name: 'Freesia',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Freesia.png',
        },
        {
          name: 'Lily-of-the-Valley',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lily-of-the-valley.png',
        },
      ],
      Base: [
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
        {
          name: 'Woodsy Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Woodsy%20Notes.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/229893.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/dior-addict-eau-fraiche/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#229893',
  },
  {
    id: 15,
    Name: 'Christian Dior Oud Ispahan',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/christian-dior-oud-ispahan.jpg',
    Gender: 'unisex',
    Price: '711.99',
    Longevity: '86.4%',
    Sillage: '78.5%',
    GeneralNotes: ['patchouli', 'saffron', 'cedar', 'sandalwood', 'agarwood'],
    MainAccords: [
      'oud',
      'rose',
      'woody',
      'amber',
      'warm spicy',
      'patchouli',
      'floral',
      'balsamic',
      'powdery',
    ],
    MainAccordsPercentage: {
      oud: '100%',
      rose: '98%',
      woody: '93%',
      amber: '64%',
      warmSpicy: '64%',
      patchouli: '54%',
      floral: '50%',
      balsamic: '50%',
      powdery: '47%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.585,
      },
      {
        name: 'fall',
        score: 2.367,
      },
      {
        name: 'spring',
        score: 0.5,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.152,
      },
      {
        name: 'professional',
        score: 0.933,
      },
      {
        name: 'casual',
        score: 0.35,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Labdanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Labdanum.png',
        },
      ],
      Middle: [
        {
          name: 'Rose',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Rose.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Saffron',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Saffron.png',
        },
      ],
      Base: [
        {
          name: 'Agarwood (Oud)',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Agarwood%20(oud).png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cedar.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/307765.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/christian-dior/christian-dior-oud-ispahan/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#307765',
  },
  {
    id: 16,
    Name: 'Forever And Ever Dior',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/forever-and-ever-dior.jpg',
    Gender: 'feminine',
    Price: '169.99',
    Longevity: '61.4%',
    Sillage: '62.25%',
    GeneralNotes: ['Freesia', 'Water jasmine', 'Ivy', 'Almond blossom', 'Rose'],
    MainAccords: [
      'floral',
      'rose',
      'white floral',
      'fresh spicy',
      'green',
      'vanilla',
      'fruity',
      'aromatic',
    ],
    MainAccordsPercentage: {
      floral: '100%',
      rose: '79%',
      whiteFloral: '48%',
      freshSpicy: '48%',
      green: '47%',
      vanilla: '47%',
      fruity: '46%',
      aromatic: '44%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.684,
      },
      {
        name: 'winter',
        score: 0.423,
      },
      {
        name: 'summer',
        score: 0.282,
      },
      {
        name: 'fall',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 0.863,
      },
      {
        name: 'casual',
        score: 0.7,
      },
      {
        name: 'night out',
        score: 0.329,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Freesia',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Freesia.png',
        },
        {
          name: 'Ivy',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ivy.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Middle: [
        {
          name: 'Rose Hip',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Rose%20Hip.png',
        },
        {
          name: 'Almond Blossom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Almond%20Blossom.png',
        },
        {
          name: 'Geranium',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Geranium.png',
        },
      ],
      Base: [
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/194678.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/forever-and-ever-dior/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#194678',
  },
  {
    id: 17,
    Name: 'Miss Dior Absolutely Blooming',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/miss-dior-absolutely-blooming.jpg',
    Gender: 'feminine',
    Price: '233.99',
    Longevity: '73.6%',
    Sillage: '66.5%',
    GeneralNotes: [
      'Pink Pepper',
      'Black Currant',
      'Pomegranate',
      'Raspberry',
      'Peony',
      'May Rose',
      'White Musk',
    ],
    MainAccords: [
      'fruity',
      'rose',
      'floral',
      'sweet',
      'woody',
      'musky',
      'soft spicy',
      'fresh',
    ],
    MainAccordsPercentage: {
      fruity: '100%',
      rose: '75%',
      floral: '64%',
      sweet: '62%',
      woody: '57%',
      musky: '55%',
      softSpicy: '51%',
      fresh: '45%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.09,
      },
      {
        name: 'fall',
        score: 1.008,
      },
      {
        name: 'summer',
        score: 0.45,
      },
      {
        name: 'winter',
        score: 0.399,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 1.27,
      },
      {
        name: 'night out',
        score: 0.495,
      },
      {
        name: 'professional',
        score: 0.399,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Raspberry',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Raspberry.png',
        },
        {
          name: 'Black Currant',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Black%20Currant.png',
        },
        {
          name: 'Pomegranate',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pomegranate.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
      ],
      Middle: [
        {
          name: 'May Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/May%20Rose.png',
        },
        {
          name: 'Peony',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peony.png',
        },
      ],
      Base: [
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/347598.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/miss-dior-absolutely-blooming/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#288897',
  },
  {
    id: 18,
    Name: 'Dior Sauvage Eau Forte',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/dior-sauvage-eau-forte.jpg',
    Gender: 'masculine',
    Price: '299.99',
    Longevity: '50.4%',
    Sillage: '39.75%',
    GeneralNotes: ['Elemi resin', 'Spices', 'Lavender', 'Musk', 'Woody Notes'],
    MainAccords: [
      'musky',
      'aromatic',
      'lavender',
      'woody',
      'powdery',
      'warm spicy',
      'fresh spicy',
      'balsamic',
      'conifer',
    ],
    MainAccordsPercentage: {
      musky: '100%',
      aromatic: '96%',
      lavender: '95%',
      woody: '68%',
      powdery: '65%',
      warmSpicy: '63%',
      freshSpicy: '60%',
      balsamic: '55%',
      conifer: '50%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.016,
      },
      {
        name: 'winter',
        score: 1.491,
      },
      {
        name: 'spring',
        score: 0.672,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.826,
      },
      {
        name: 'night out',
        score: 1.404,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Elemi resin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Elemi%20Resin.png',
        },
        {
          name: 'Spices',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Spices.png',
        },
      ],
      Middle: [
        {
          name: 'Lavender',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lavender.png',
        },
      ],
      Base: [
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Woody Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Woody%20Notes.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dw6415767e/Y0998025/Y0998025_C099800170_E01_GHC.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/christian-dior/dior-sauvage-eau-forte/parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#493915',
  },
  {
    id: 19,
    Name: "Miss Dior Rose N'Roses",
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/miss-dior-rose-nroses.jpg',
    Gender: 'feminine',
    Price: '86.99',
    Longevity: '61.4%',
    Sillage: '54.25%',
    GeneralNotes: [
      'Damask Rose',
      'Grasse Rose',
      'Geranium',
      'Italian Mandarin',
      'Bergamot',
    ],
    MainAccords: [
      'rose',
      'musky',
      'fresh spicy',
      'citrus',
      'aromatic',
      'powdery',
      'floral',
    ],
    MainAccordsPercentage: {
      rose: '100%',
      musky: '72%',
      freshSpicy: '67%',
      citrus: '64%',
      aromatic: '58%',
      powdery: '53%',
      floral: '49%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.472,
      },
      {
        name: 'fall',
        score: 0.648,
      },
      {
        name: 'summer',
        score: 0.64,
      },
      {
        name: 'winter',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.41,
      },
      {
        name: 'casual',
        score: 0.919,
      },
      {
        name: 'night out',
        score: 0.648,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Geranium',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Geranium.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Italian Mandarin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Italian%20Mandarin.png',
        },
      ],
      Middle: [
        {
          name: 'Grasse Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grasse%20Rose.png',
        },
        {
          name: 'Damask Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Damask%20Rose.png',
        },
      ],
      Base: [
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/408747.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/miss-dior-rose-nroses/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#355679',
  },
  {
    id: 20,
    Name: 'Miss Dior Blooming Bouquet',
    Brand: 'Christian Dior',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/miss-dior-blooming-bouquet.jpg',
    Gender: 'feminine',
    Price: '3.29',
    Longevity: '51.0%',
    Sillage: '45.25%',
    GeneralNotes: [
      'Sicilian Mandarin',
      'Peach',
      'Apricot',
      'Damask Rose',
      'Pink Peony',
      'White Musk',
    ],
    MainAccords: [
      'floral',
      'rose',
      'fresh',
      'fruity',
      'musky',
      'citrus',
      'powdery',
      'sweet',
    ],
    MainAccordsPercentage: {
      floral: '100%',
      rose: '99%',
      fresh: '76%',
      fruity: '62%',
      musky: '56%',
      citrus: '54%',
      powdery: '54%',
      sweet: '45%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 2.246,
      },
      {
        name: 'summer',
        score: 1.3,
      },
      {
        name: 'fall',
        score: 0.504,
      },
      {
        name: 'winter',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 2.216,
      },
      {
        name: 'professional',
        score: 0.756,
      },
      {
        name: 'night out',
        score: 0.504,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Sicilian Mandarin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sicilian%20Mandarin.png',
        },
      ],
      Middle: [
        {
          name: 'Pink Peony',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Peony.png',
        },
        {
          name: 'Damask Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Damask%20Rose.png',
        },
        {
          name: 'Apricot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Apricot.png',
        },
        {
          name: 'Peach',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peach.png',
        },
      ],
      Base: [
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/289010.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/christian-dior/miss-dior-blooming-bouquet/edt?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#214440',
  },
  {
    id: 21,
    Name: 'Xerjoff Gao',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-gao.jpg',
    Gender: 'unisex',
    Price: '277.99',
    Longevity: '83.0%',
    Sillage: '75.25%',
    GeneralNotes: ['gurjan balsam', 'juniper', 'patchouli', 'amber', 'saffron'],
    MainAccords: [
      'woody',
      'oud',
      'amber',
      'warm spicy',
      'earthy',
      'fresh spicy',
      'aromatic',
      'metallic',
      'balsamic',
      'leather',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      oud: '75%',
      amber: '74%',
      warmSpicy: '69%',
      earthy: '63%',
      freshSpicy: '61%',
      aromatic: '49%',
      metallic: '49%',
      balsamic: '49%',
      leather: '45%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.696,
      },
      {
        name: 'winter',
        score: 2.325,
      },
      {
        name: 'spring',
        score: 0.343,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.562,
      },
      {
        name: 'professional',
        score: 1.19,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [],
      Middle: [],
      Base: [],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345491.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-gao/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345491',
  },
  {
    id: 22,
    Name: 'Xerjoff Kobe',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-kobe.jpg',
    Gender: 'unisex',
    Price: '224.99',
    Longevity: '73.2%',
    Sillage: '64.75%',
    GeneralNotes: [
      'orange',
      'bergamot',
      'labdanum',
      'brazilian rosewood',
      'tonka bean',
    ],
    MainAccords: [
      'citrus',
      'amber',
      'white floral',
      'fresh spicy',
      'sweet',
      'woody',
      'aromatic',
      'balsamic',
      'green',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      amber: '70%',
      whiteFloral: '69%',
      freshSpicy: '53%',
      sweet: '52%',
      woody: '50%',
      aromatic: '50%',
      balsamic: '49%',
      green: '46%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.618,
      },
      {
        name: 'summer',
        score: 1.276,
      },
      {
        name: 'winter',
        score: 1.253,
      },
      {
        name: 'fall',
        score: 1.15,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.064,
      },
      {
        name: 'casual',
        score: 1.212,
      },
      {
        name: 'night out',
        score: 0.7,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Orange',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Orange.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Labdanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Labdanum.png',
        },
      ],
      Middle: [
        {
          name: 'Neroli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Neroli.png',
        },
        {
          name: 'Petitgrain',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Petitgrain.png',
        },
        {
          name: 'Orange Blossom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Orange%20Blossom.png',
        },
      ],
      Base: [
        {
          name: 'Brazilian Rosewood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Brazilian%20Rosewood.png',
        },
        {
          name: 'Benzoin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Benzoin.png',
        },
        {
          name: 'Tonka Bean',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tonka%20Bean.png',
        },
        {
          name: 'Ambergris',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ambergris.png',
        },
        {
          name: 'Agarwood (Oud)',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Agarwood%20(oud).png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Styrax',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Styrax.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345426.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-kobe/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345426',
  },
  {
    id: 23,
    Name: 'Xerjoff Ceylon',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-ceylon.jpg',
    Gender: 'unisex',
    Price: '419.99',
    Longevity: '89.2%',
    Sillage: '78.25%',
    GeneralNotes: ['honey', 'jasmine', 'agarwood', 'sandalwood', 'amber'],
    MainAccords: [
      'honey',
      'oud',
      'powdery',
      'sweet',
      'musky',
      'amber',
      'green',
      'floral',
      'white floral',
      'fresh spicy',
    ],
    MainAccordsPercentage: {
      honey: '100%',
      oud: '91%',
      powdery: '75%',
      sweet: '73%',
      musky: '63%',
      amber: '62%',
      green: '59%',
      floral: '59%',
      whiteFloral: '56%',
      freshSpicy: '56%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.187,
      },
      {
        name: 'spring',
        score: 1.062,
      },
      {
        name: 'winter',
        score: 0.496,
      },
      {
        name: 'summer',
        score: 0.354,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.187,
      },
      {
        name: 'professional',
        score: 0.981,
      },
      {
        name: 'casual',
        score: 0.851,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Honey',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Honey.png',
        },
        {
          name: 'Jasmine Sambac',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine%20Sambac.png',
        },
        {
          name: 'Calabrian bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Calabrian%20Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Agarwood (Oud)',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Agarwood%20(oud).png',
        },
        {
          name: 'Black Tea',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Black%20Tea.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
      ],
      Base: [
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Madagascar Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Madagascar%20Vanilla.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345497.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-ceylon/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345497',
  },
  {
    id: 24,
    Name: 'Xerjoff Zafar',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-zafar.jpg',
    Gender: 'unisex',
    Price: '283.99',
    Longevity: '76.8%',
    Sillage: '70.0%',
    GeneralNotes: ['black pepper', 'rose', 'green apple', 'musk', 'cedar'],
    MainAccords: [
      'oud',
      'fresh spicy',
      'woody',
      'musky',
      'amber',
      'warm spicy',
      'smoky',
      'fruity',
      'aromatic',
      'powdery',
    ],
    MainAccordsPercentage: {
      oud: '100%',
      freshSpicy: '77%',
      woody: '71%',
      musky: '57%',
      amber: '54%',
      warmSpicy: '52%',
      smoky: '52%',
      fruity: '50%',
      aromatic: '49%',
      powdery: '49%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.108,
      },
      {
        name: 'winter',
        score: 1.449,
      },
      {
        name: 'spring',
        score: 0.343,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.729,
      },
      {
        name: 'professional',
        score: 1.281,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [],
      Middle: [],
      Base: [],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345460.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-zafar/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345460',
  },
  {
    id: 25,
    Name: 'Xerjoff Muse',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-muse.jpg',
    Gender: 'unisex',
    Price: '264.99',
    Longevity: '80.0%',
    Sillage: '74.25%',
    GeneralNotes: ['leather', 'plum', 'patchouli', 'raspberry', 'amber'],
    MainAccords: [
      'fruity',
      'amber',
      'sweet',
      'white floral',
      'leather',
      'patchouli',
      'animalic',
      'warm spicy',
      'balsamic',
    ],
    MainAccordsPercentage: {
      fruity: '100%',
      amber: '73%',
      sweet: '73%',
      whiteFloral: '64%',
      leather: '50%',
      patchouli: '49%',
      animalic: '48%',
      warmSpicy: '48%',
      balsamic: '45%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 1.771,
      },
      {
        name: 'fall',
        score: 1.457,
      },
      {
        name: 'spring',
        score: 0,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.414,
      },
      {
        name: 'casual',
        score: 0.438,
      },
      {
        name: 'professional',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Plum',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Plum.png',
        },
        {
          name: 'Leather',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Leather.png',
        },
        {
          name: 'White Flowers',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Flowers.png',
        },
      ],
      Middle: [
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Davana',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Davana.png',
        },
        {
          name: 'Labdanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Labdanum.png',
        },
      ],
      Base: [
        {
          name: 'Raspberry',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Raspberry.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Benzoin',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Benzoin.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345376.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-muse/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345376',
  },
  {
    id: 26,
    Name: 'Xerjoff Soprano',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-soprano.jpg',
    Gender: 'unisex',
    Price: '238.99',
    Longevity: '77.2%',
    Sillage: '75.75%',
    GeneralNotes: ['litchi', 'freesia', 'osmanthus', 'patchouli', 'leather'],
    MainAccords: [
      'fruity',
      'rose',
      'floral',
      'oud',
      'patchouli',
      'lactonic',
      'sweet',
      'tropical',
      'leather',
      'woody',
    ],
    MainAccordsPercentage: {
      fruity: '100%',
      rose: '87%',
      floral: '74%',
      oud: '63%',
      patchouli: '55%',
      lactonic: '50%',
      sweet: '50%',
      tropical: '50%',
      leather: '48%',
      woody: '46%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 0.799,
      },
      {
        name: 'winter',
        score: 0.762,
      },
      {
        name: 'spring',
        score: 0.74,
      },
      {
        name: 'summer',
        score: 0.4,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 0.818,
      },
      {
        name: 'professional',
        score: 0.322,
      },
      {
        name: 'night out',
        score: 0.288,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Fruits',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Fruits.png',
        },
        {
          name: 'Litchi',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Litchi.png',
        },
        {
          name: 'Freesia',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Freesia.png',
        },
        {
          name: 'Calabrian bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Calabrian%20Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Bulgarian Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bulgarian%20Rose.png',
        },
        {
          name: 'Milk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Milk.png',
        },
        {
          name: 'Osmanthus',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Osmanthus.png',
        },
        {
          name: 'Egyptian Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Egyptian%20Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Agarwood (Oud)',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Agarwood%20(oud).png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Leather',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Leather.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/343859.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-soprano/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#343860',
  },
  {
    id: 27,
    Name: 'Xerjoff Fars',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-fars.jpg',
    Gender: 'unisex',
    Price: '269.99',
    Longevity: '78.4%',
    Sillage: '70.5%',
    GeneralNotes: ['lavender', 'juniper', 'patchouli', 'sandalwood', 'vetiver'],
    MainAccords: [
      'woody',
      'aromatic',
      'fresh spicy',
      'lavender',
      'amber',
      'earthy',
      'warm spicy',
      'patchouli',
      'herbal',
      'balsamic',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      aromatic: '95%',
      freshSpicy: '89%',
      lavender: '61%',
      amber: '60%',
      earthy: '56%',
      warmSpicy: '54%',
      patchouli: '50%',
      herbal: '50%',
      balsamic: '49%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.73,
      },
      {
        name: 'winter',
        score: 2.463,
      },
      {
        name: 'spring',
        score: 0.665,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.65,
      },
      {
        name: 'night out',
        score: 1.032,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Lavender',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lavender.png',
        },
        {
          name: 'Juniper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Juniper.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Geranium',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Geranium.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cedar.png',
        },
      ],
      Base: [
        {
          name: 'Ambergris',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ambergris.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Cypriol Oil or Nagarmotha',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cypriol%20Oil%20Or%20Nagarmotha.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345494.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-fars/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345494',
  },
  {
    id: 28,
    Name: 'Xerjoff Accento',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-accento.jpg',
    Gender: 'unisex',
    Price: '133.24',
    Longevity: '75.6%',
    Sillage: '65.25%',
    GeneralNotes: ['pink pepper', 'jasmine', 'amber', 'vanilla', 'musk'],
    MainAccords: [
      'musky',
      'powdery',
      'sweet',
      'fruity',
      'earthy',
      'floral',
      'iris',
      'woody',
      'green',
      'amber',
    ],
    MainAccordsPercentage: {
      musky: '100%',
      powdery: '97%',
      sweet: '92%',
      fruity: '81%',
      earthy: '77%',
      floral: '72%',
      iris: '70%',
      woody: '67%',
      green: '65%',
      amber: '61%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.729,
      },
      {
        name: 'spring',
        score: 1.24,
      },
      {
        name: 'winter',
        score: 0.957,
      },
      {
        name: 'summer',
        score: 0.39,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.636,
      },
      {
        name: 'night out',
        score: 1.51,
      },
      {
        name: 'casual',
        score: 1.056,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Pineapple',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pineapple.png',
        },
        {
          name: 'Hyacinth',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Hyacinth.png',
        },
      ],
      Middle: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/488592.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-accento/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#354681',
  },
  {
    id: 29,
    Name: 'Xerjoff Amabile',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-amabile.jpg',
    Gender: 'feminine',
    Price: '9.99',
    Longevity: '71.0%',
    Sillage: '61.5%',
    GeneralNotes: [
      'pink pepper',
      'musk',
      'patchouli',
      'mexican vanilla',
      'orange blossom',
    ],
    MainAccords: [
      'citrus',
      'warm spicy',
      'aromatic',
      'white floral',
      'woody',
      'vanilla',
      'fruity',
      'musky',
      'powdery',
      'fresh',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      warmSpicy: '73%',
      aromatic: '68%',
      whiteFloral: '67%',
      woody: '66%',
      vanilla: '65%',
      fruity: '64%',
      musky: '60%',
      powdery: '60%',
      fresh: '59%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.966,
      },
      {
        name: 'winter',
        score: 1.777,
      },
      {
        name: 'fall',
        score: 1.718,
      },
      {
        name: 'summer',
        score: 1.59,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.302,
      },
      {
        name: 'night out',
        score: 1.579,
      },
      {
        name: 'casual',
        score: 1.49,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Green Apple',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Green%20Apple.png',
        },
        {
          name: 'Amalfi Lemon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amalfi%20Lemon.png',
        },
        {
          name: 'Calabrian bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Calabrian%20Bergamot.png',
        },
        {
          name: 'Orange Blossom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Orange%20Blossom.png',
        },
      ],
      Middle: [
        {
          name: 'Guatemalan Cardamom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Guatemalan%20Cardamom.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Mexican Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Mexican%20Vanilla.png',
        },
        {
          name: 'Atlas Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Atlas%20Cedar.png',
        },
        {
          name: 'White Musk',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/White%20Musk.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/439742.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/xerjoff/xerjoff-amabile/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#439742',
  },
  {
    id: 30,
    Name: 'Xerjoff Xxy',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-xxy.jpg',
    Gender: 'unisex',
    Price: '335.99',
    Longevity: '84.0%',
    Sillage: '70.0%',
    GeneralNotes: ['peach', 'bergamot', 'grapefruit', 'musk', 'vetiver'],
    MainAccords: [
      'woody',
      'powdery',
      'citrus',
      'fresh spicy',
      'earthy',
      'iris',
      'warm spicy',
      'patchouli',
      'sweet',
      'aromatic',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      powdery: '81%',
      citrus: '75%',
      freshSpicy: '70%',
      earthy: '65%',
      iris: '62%',
      warmSpicy: '61%',
      patchouli: '60%',
      sweet: '58%',
      aromatic: '57%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 2.328,
      },
      {
        name: 'winter',
        score: 1.79,
      },
      {
        name: 'spring',
        score: 1.074,
      },
      {
        name: 'summer',
        score: 0.75,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.356,
      },
      {
        name: 'casual',
        score: 1.023,
      },
      {
        name: 'night out',
        score: 0.488,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Peach',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Peach.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Grapefruit',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Grapefruit.png',
        },
      ],
      Middle: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
        {
          name: 'Ylang-Ylang',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ylang-ylang.png',
        },
        {
          name: 'Black Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Black%20Pepper.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Labdanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Labdanum.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/378661.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-xxy/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#378659',
  },
  {
    id: 31,
    Name: 'Xerjoff Iriss',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-iriss.jpg',
    Gender: 'unisex',
    Price: '479.99',
    Longevity: '71.8%',
    Sillage: '62.5%',
    GeneralNotes: ['rose', 'iris', 'violet', 'jasmine', 'musk'],
    MainAccords: [
      'powdery',
      'violet',
      'iris',
      'woody',
      'musky',
      'floral',
      'earthy',
      'aromatic',
    ],
    MainAccordsPercentage: {
      powdery: '100%',
      violet: '68%',
      iris: '66%',
      woody: '62%',
      musky: '57%',
      floral: '53%',
      earthy: '52%',
      aromatic: '45%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.487,
      },
      {
        name: 'spring',
        score: 0.845,
      },
      {
        name: 'winter',
        score: 0.434,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.484,
      },
      {
        name: 'night out',
        score: 0.513,
      },
      {
        name: 'casual',
        score: 0.371,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Carrot Seeds',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Carrot%20Seeds.png',
        },
        {
          name: 'Carnation',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Carnation.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
        {
          name: 'Violet',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Violet.png',
        },
        {
          name: 'Rose',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Rose.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
      ],
      Base: [
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
        {
          name: 'Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cedar.png',
        },
        {
          name: 'Incense',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Incense.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/378667.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-iriss/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#378667',
  },
  {
    id: 32,
    Name: 'Xerjoff Laylati',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-laylati.jpg',
    Gender: 'unisex',
    Price: '234.99',
    Longevity: '79.4%',
    Sillage: '74.25%',
    GeneralNotes: ['cedar', 'patchouli', 'tobacco', 'musk', 'vanilla'],
    MainAccords: [
      'woody',
      'patchouli',
      'musky',
      'tobacco',
      'powdery',
      'vanilla',
      'sweet',
      'green',
      'warm spicy',
      'balsamic',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      patchouli: '70%',
      musky: '67%',
      tobacco: '67%',
      powdery: '66%',
      vanilla: '58%',
      sweet: '58%',
      green: '57%',
      warmSpicy: '50%',
      balsamic: '46%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.604,
      },
      {
        name: 'fall',
        score: 2.393,
      },
      {
        name: 'spring',
        score: 0.456,
      },
      {
        name: 'summer',
        score: 0.342,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.609,
      },
      {
        name: 'night out',
        score: 1.409,
      },
      {
        name: 'casual',
        score: 0.348,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Green Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Green%20Notes.png',
        },
      ],
      Middle: [
        {
          name: 'Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cedar.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
      Base: [
        {
          name: 'Tobacco',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tobacco.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345381.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-laylati/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345381',
  },
  {
    id: 33,
    Name: 'Xerjoff Damarose',
    Brand: 'Xerjoff',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-damarose.jpg',
    Gender: 'feminine',
    Price: '434.99',
    Longevity: '74.2%',
    Sillage: '62.0%',
    GeneralNotes: ['freesia', 'lime', 'bergamot', 'ylang-ylang', 'jasmine'],
    MainAccords: [
      'rose',
      'woody',
      'floral',
      'sweet',
      'fruity',
      'powdery',
      'amber',
      'white floral',
      'citrus',
      'fresh',
    ],
    MainAccordsPercentage: {
      rose: '100%',
      woody: '93%',
      floral: '83%',
      sweet: '75%',
      fruity: '69%',
      powdery: '69%',
      amber: '62%',
      whiteFloral: '62%',
      citrus: '59%',
      fresh: '56%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 1.921,
      },
      {
        name: 'fall',
        score: 1.457,
      },
      {
        name: 'summer',
        score: 1.15,
      },
      {
        name: 'winter',
        score: 1.147,
      },
    ],
    OccasionRanking: [
      {
        name: 'casual',
        score: 2.122,
      },
      {
        name: 'professional',
        score: 1.537,
      },
      {
        name: 'night out',
        score: 0.62,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Red Berries',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Red%20Berries.png',
        },
        {
          name: 'Freesia',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Freesia.png',
        },
        {
          name: 'Lime',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lime.png',
        },
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
      ],
      Middle: [
        {
          name: 'Turkish Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Turkish%20Rose.png',
        },
        {
          name: 'Ylang-Ylang',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ylang-ylang.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Lily-of-the-Valley',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lily-of-the-valley.png',
        },
        {
          name: 'Iris',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Iris.png',
        },
      ],
      Base: [
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Egyptian Rosewood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Egyptian%20Rosewood.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/378678.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/perfume/xerjoff/xerjoff-damarose/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#378678',
  },
  {
    id: 34,
    Name: 'Xerjoff Homme',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-homme.jpg',
    Gender: 'masculine',
    Price: '528.99',
    Longevity: '82.8%',
    Sillage: '74.5%',
    GeneralNotes: ['lavender', 'clove', 'ylang-ylang', 'vetiver', 'leather'],
    MainAccords: [
      'woody',
      'leather',
      'aromatic',
      'lavender',
      'citrus',
      'warm spicy',
      'animalic',
      'earthy',
      'yellow floral',
      'fresh spicy',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      leather: '77%',
      aromatic: '77%',
      lavender: '76%',
      citrus: '64%',
      warmSpicy: '62%',
      animalic: '54%',
      earthy: '53%',
      yellowFloral: '52%',
      freshSpicy: '51%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.82,
      },
      {
        name: 'winter',
        score: 1.32,
      },
      {
        name: 'spring',
        score: 1.115,
      },
      {
        name: 'summer',
        score: 0.64,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 1.982,
      },
      {
        name: 'night out',
        score: 0.958,
      },
      {
        name: 'casual',
        score: 0.576,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Citruses',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Citruses.png',
        },
        {
          name: 'Spices',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Spices.png',
        },
      ],
      Middle: [
        {
          name: 'Lavender',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lavender.png',
        },
        {
          name: 'Ylang-Ylang',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ylang-ylang.png',
        },
        {
          name: 'Clove',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Clove.png',
        },
      ],
      Base: [
        {
          name: 'Leather',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Leather.png',
        },
        {
          name: 'Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetiver.png',
        },
        {
          name: 'Woodsy Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Woodsy%20Notes.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/378670.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/cologne/xerjoff/xerjoff-homme/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#378670',
  },
  {
    id: 35,
    Name: 'Xerjoff Mamluk',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-mamluk.jpg',
    Gender: 'unisex',
    Price: '259.99',
    Longevity: '80.6%',
    Sillage: '73.0%',
    GeneralNotes: ['honey', 'jasmine', 'osmanthus', 'vanilla', 'amber'],
    MainAccords: [
      'honey',
      'sweet',
      'amber',
      'floral',
      'caramel',
      'oud',
      'vanilla',
      'white floral',
      'powdery',
      'musky',
    ],
    MainAccordsPercentage: {
      honey: '100%',
      sweet: '86%',
      amber: '74%',
      floral: '72%',
      caramel: '70%',
      oud: '65%',
      vanilla: '57%',
      whiteFloral: '54%',
      powdery: '51%',
      musky: '46%',
    },
    SeasonRanking: [
      {
        name: 'fall',
        score: 1.154,
      },
      {
        name: 'winter',
        score: 1.105,
      },
      {
        name: 'spring',
        score: 0.72,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.553,
      },
      {
        name: 'casual',
        score: 1.02,
      },
      {
        name: 'professional',
        score: 0.306,
      },
    ],
    Notes: {
      Top: [],
      Middle: [],
      Base: [],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345464.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-mamluk/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345464',
  },
  {
    id: 36,
    Name: 'Xerjoff Ouverture',
    Brand: 'Xerjoff',
    ImageURL:
      'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-ouverture.jpg',
    Gender: 'unisex',
    Price: '158.99',
    Longevity: '74.8%',
    Sillage: '62.0%',
    GeneralNotes: [
      'Indian jasmine',
      'vanilla',
      'cashmere wood',
      'amber',
      'sandalwood',
    ],
    MainAccords: [
      'woody',
      'amber',
      'warm spicy',
      'citrus',
      'green',
      'sweet',
      'vanilla',
      'powdery',
      'balsamic',
      'cinnamon',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      amber: '80%',
      warmSpicy: '70%',
      citrus: '65%',
      green: '64%',
      sweet: '61%',
      vanilla: '61%',
      powdery: '58%',
      balsamic: '56%',
      cinnamon: '56%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.981,
      },
      {
        name: 'fall',
        score: 2.26,
      },
      {
        name: 'spring',
        score: 1.097,
      },
      {
        name: 'summer',
        score: 1.034,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.144,
      },
      {
        name: 'night out',
        score: 1.787,
      },
      {
        name: 'casual',
        score: 0.951,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Fig Leaf',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Fig%20Leaf.png',
        },
        {
          name: 'Orange',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Orange.png',
        },
        {
          name: 'Magnolia',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Magnolia.png',
        },
      ],
      Middle: [
        {
          name: 'Cinnamon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cinnamon.png',
        },
        {
          name: 'Ylang-Ylang',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ylang-ylang.png',
        },
        {
          name: 'Indian Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Indian%20Jasmine.png',
        },
        {
          name: 'Bulgarian Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bulgarian%20Rose.png',
        },
      ],
      Base: [
        {
          name: 'Sandalwood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Sandalwood.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Cashmere Wood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cashmere%20Wood.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Incense',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Incense.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/494099.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-ouverture/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#366026',
  },
  {
    id: 37,
    Name: 'Xerjoff Opera',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-opera.jpg',
    Gender: 'unisex',
    Price: '178.79',
    Longevity: '80.2%',
    Sillage: '72.25%',
    GeneralNotes: [
      'Turkish rose',
      'amber',
      'ylang ylang',
      'vanilla',
      'patchouli',
    ],
    MainAccords: [
      'woody',
      'sweet',
      'fruity',
      'yellow floral',
      'fresh spicy',
      'powdery',
      'leather',
      'amber',
      'vanilla',
      'animalic',
    ],
    MainAccordsPercentage: {
      woody: '100%',
      sweet: '87%',
      fruity: '79%',
      yellowFloral: '77%',
      freshSpicy: '69%',
      powdery: '67%',
      leather: '67%',
      amber: '64%',
      vanilla: '63%',
      animalic: '59%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 1.779,
      },
      {
        name: 'fall',
        score: 1.54,
      },
      {
        name: 'spring',
        score: 0,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.483,
      },
      {
        name: 'professional',
        score: 1.102,
      },
      {
        name: 'casual',
        score: 0.522,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Fruits',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Fruits.png',
        },
        {
          name: 'Turkish Rose',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Turkish%20Rose.png',
        },
      ],
      Middle: [
        {
          name: 'Ylang-Ylang',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Ylang-ylang.png',
        },
        {
          name: 'Nutmeg',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Nutmeg.png',
        },
        {
          name: 'Leather',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Leather.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
      Base: [
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
        {
          name: 'Virginia Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Virginia%20Cedar.png',
        },
        {
          name: 'Haitian Vetiver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Haitian%20Vetiver.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/485230.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-opera/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345371',
  },
  {
    id: 38,
    Name: 'Xerjoff Malesia',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-malesia.jpg',
    Gender: 'unisex',
    Price: '244.99',
    Longevity: '78.8%',
    Sillage: '66.5%',
    GeneralNotes: [
      'lily-of-the-valley',
      'amber',
      'gurjan balsam',
      'laotian oud',
      'tolu balsam',
    ],
    MainAccords: [
      'amber',
      'woody',
      'oud',
      'powdery',
      'vanilla',
      'musky',
      'sweet',
      'animalic',
      'white floral',
      'balsamic',
    ],
    MainAccordsPercentage: {
      amber: '100%',
      woody: '67%',
      oud: '66%',
      powdery: '60%',
      vanilla: '55%',
      musky: '51%',
      sweet: '50%',
      animalic: '48%',
      whiteFloral: '46%',
      balsamic: '44%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.072,
      },
      {
        name: 'fall',
        score: 2.062,
      },
      {
        name: 'spring',
        score: 0,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 1.844,
      },
      {
        name: 'professional',
        score: 0.829,
      },
      {
        name: 'casual',
        score: 0.3,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Lily-of-the-Valley',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Lily-of-the-valley.png',
        },
      ],
      Middle: [
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
        {
          name: 'Gurjan balsam',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Gurjan%20Balsam.png',
        },
      ],
      Base: [
        {
          name: 'Laotian Oud',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Laotian%20Oud.png',
        },
        {
          name: 'Tolu Balsam',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tolu%20Balsam.png',
        },
        {
          name: 'Labdanum',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Labdanum.png',
        },
        {
          name: 'Vanilla',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vanilla.png',
        },
        {
          name: 'Tonka Bean',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tonka%20Bean.png',
        },
        {
          name: 'Musk',
          imageUrl: 'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Musk.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345468.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-malesia/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345468',
  },
  {
    id: 39,
    Name: 'Xerjoff Luxor',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-luxor.jpg',
    Gender: 'unisex',
    Price: '254.99',
    Longevity: '84.4%',
    Sillage: '73.5%',
    GeneralNotes: [
      'atlas cedar',
      'incense',
      'Thailand oud',
      'patchouli',
      'nagarmotha',
    ],
    MainAccords: [
      'warm spicy',
      'woody',
      'animalic',
      'amber',
      'oud',
      'tobacco',
      'cinnamon',
      'smoky',
      'leather',
      'balsamic',
    ],
    MainAccordsPercentage: {
      warmSpicy: '100%',
      woody: '83%',
      animalic: '80%',
      amber: '71%',
      oud: '63%',
      tobacco: '55%',
      cinnamon: '54%',
      smoky: '54%',
      leather: '53%',
      balsamic: '52%',
    },
    SeasonRanking: [
      {
        name: 'winter',
        score: 2.513,
      },
      {
        name: 'fall',
        score: 2.257,
      },
      {
        name: 'spring',
        score: 0,
      },
      {
        name: 'summer',
        score: 0,
      },
    ],
    OccasionRanking: [
      {
        name: 'night out',
        score: 2.098,
      },
      {
        name: 'professional',
        score: 0.581,
      },
      {
        name: 'casual',
        score: 0,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Cinnamon',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cinnamon.png',
        },
        {
          name: 'Leather',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Leather.png',
        },
        {
          name: 'Cardamom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cardamom.png',
        },
      ],
      Middle: [
        {
          name: 'Tobacco',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Tobacco.png',
        },
        {
          name: 'Myrhh',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Myrhh.png',
        },
        {
          name: 'Incense',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Incense.png',
        },
        {
          name: 'Atlas Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Atlas%20Cedar.png',
        },
      ],
      Base: [
        {
          name: 'Thailand Oud',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Thailand%20Oud.png',
        },
        {
          name: 'Cambodian Oud',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cambodian%20Oud.png',
        },
        {
          name: 'Cypriol Oil or Nagarmotha',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cypriol%20Oil%20Or%20Nagarmotha.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/369890.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-luxor/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#369890',
  },
  {
    id: 40,
    Name: 'Xerjoff Nio',
    Brand: 'Xerjoff',
    ImageURL: 'https://d2k6fvhyk5xgx.cloudfront.net/images/xerjoff-nio.jpg',
    Gender: 'unisex',
    Price: '244.99',
    Longevity: '70.8%',
    Sillage: '60.0%',
    GeneralNotes: ['jasmine', 'nutmeg', 'pink pepper', 'cardamom', 'amber'],
    MainAccords: [
      'citrus',
      'green',
      'aromatic',
      'woody',
      'fresh spicy',
      'white floral',
      'warm spicy',
      'floral',
      'earthy',
    ],
    MainAccordsPercentage: {
      citrus: '100%',
      green: '94%',
      aromatic: '77%',
      woody: '76%',
      freshSpicy: '74%',
      whiteFloral: '65%',
      warmSpicy: '52%',
      floral: '51%',
      earthy: '46%',
    },
    SeasonRanking: [
      {
        name: 'spring',
        score: 2.701,
      },
      {
        name: 'summer',
        score: 1.564,
      },
      {
        name: 'fall',
        score: 1.468,
      },
      {
        name: 'winter',
        score: 1.052,
      },
    ],
    OccasionRanking: [
      {
        name: 'professional',
        score: 2.948,
      },
      {
        name: 'casual',
        score: 1.257,
      },
      {
        name: 'night out',
        score: 0.416,
      },
    ],
    Notes: {
      Top: [
        {
          name: 'Bergamot',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Bergamot.png',
        },
        {
          name: 'Green Notes',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Green%20Notes.png',
        },
        {
          name: 'Neroli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Neroli.png',
        },
      ],
      Middle: [
        {
          name: 'Cardamom',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Cardamom.png',
        },
        {
          name: 'Pink Pepper',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Pink%20Pepper.png',
        },
        {
          name: 'Jasmine',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Jasmine.png',
        },
        {
          name: 'Nutmeg',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Nutmeg.png',
        },
      ],
      Base: [
        {
          name: 'Vetyver',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Vetyver.png',
        },
        {
          name: 'Virginia Cedar',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Virginia%20Cedar.png',
        },
        {
          name: 'Guaiac Wood',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Guaiac%20Wood.png',
        },
        {
          name: 'Patchouli',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Patchouli.png',
        },
        {
          name: 'Amber',
          imageUrl:
            'https://d2k6fvhyk5xgx.cloudfront.net/note_images/Amber.png',
        },
      ],
    },
    ImageFallbacks: [
      'https://cdn.fragrancenet.com/images/photos/600x600/345420.jpg',
    ],
    PurchaseURL:
      'https://www.fragrancenet.com/fragrances/xerjoff/xerjoff-nio/eau-de-parfum?mv_pc=LS&utm_campaign=MmJMBbLy6ow&utm_medium=Affiliate&utm_source=LS#345420',
  },
]
