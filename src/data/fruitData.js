// Month numbers are 1 (January) through 12 (December).
// `seasons[regionId]` lists the months a fruit is in season for that region.
// A region missing from `seasons` means the fruit isn't a local seasonal crop there.

export const regions = [
  {
    id: "bay-area",
    name: "SF Bay Area, CA",
    blurb: "Mediterranean climate: mild winters, dry summers, long growing season.",
  },
  {
    id: "upper-midwest",
    name: "Upper Midwest (e.g. Minnesota)",
    blurb: "Cold winters, short summer growing season — far fewer months in season.",
  },
];

export const fruits = [
  {
    id: "strawberry",
    name: "Strawberries",
    emoji: "🍓",
    howToUse: "Eat fresh, hull and slice over yogurt or oatmeal, or macerate with a little sugar for shortcake.",
    seasons: {
      "bay-area": [4, 5, 6, 7, 8],
      "upper-midwest": [6],
    },
  },
  {
    id: "cherry",
    name: "Cherries",
    emoji: "🍒",
    howToUse: "Best eaten fresh and cold. Pit and freeze extras for smoothies or baking later in the year.",
    seasons: {
      "bay-area": [5, 6],
      "upper-midwest": [7],
    },
  },
  {
    id: "apricot",
    name: "Apricots",
    emoji: "🍑",
    howToUse: "Halve and grill or roast to concentrate the flavor; also great dried or in jam.",
    seasons: {
      "bay-area": [5, 6, 7],
    },
  },
  {
    id: "peach",
    name: "Peaches",
    emoji: "🍑",
    howToUse: "Ripen at room temperature, then eat fresh, grill, or bake into a cobbler.",
    seasons: {
      "bay-area": [6, 7, 8],
      "upper-midwest": [8],
    },
  },
  {
    id: "blackberry",
    name: "Blackberries",
    emoji: "🫐",
    howToUse: "Toss into salads, blend into smoothies, or cook down into a quick compote.",
    seasons: {
      "bay-area": [6, 7, 8],
    },
  },
  {
    id: "blueberry",
    name: "Blueberries",
    emoji: "🫐",
    howToUse: "Freeze in a single layer for smoothies year-round, or bake into muffins.",
    seasons: {
      "upper-midwest": [7, 8],
    },
  },
  {
    id: "fig",
    name: "Figs",
    emoji: "🍈",
    howToUse: "Eat fresh with cheese and honey, or roast to bring out their sweetness.",
    seasons: {
      "bay-area": [6, 8, 9, 10],
    },
  },
  {
    id: "grape",
    name: "Table Grapes",
    emoji: "🍇",
    howToUse: "Snack fresh, freeze for a cold treat, or roast to serve with cheese.",
    seasons: {
      "bay-area": [8, 9, 10],
      "upper-midwest": [9],
    },
  },
  {
    id: "apple",
    name: "Apples",
    emoji: "🍎",
    howToUse: "Great raw, baked into pies, or sliced into a fall salad with walnuts and blue cheese.",
    seasons: {
      "bay-area": [9, 10, 11],
      "upper-midwest": [9, 10],
    },
  },
  {
    id: "pear",
    name: "Bartlett Pears",
    emoji: "🍐",
    howToUse: "Let ripen at room temp until the neck gives slightly, then eat fresh or poach.",
    seasons: {
      "bay-area": [8, 9, 10],
      "upper-midwest": [9],
    },
  },
  {
    id: "persimmon",
    name: "Persimmons",
    emoji: "🟠",
    howToUse: "Fuyu persimmons are crisp — eat like an apple. Hachiya must be fully soft before eating.",
    seasons: {
      "bay-area": [10, 11, 12],
    },
  },
  {
    id: "pomegranate",
    name: "Pomegranates",
    emoji: "🔴",
    howToUse: "Score and break apart under water so the arils sink and the pith floats. Sprinkle on salads.",
    seasons: {
      "bay-area": [9, 10, 11, 12],
    },
  },
  {
    id: "citrus",
    name: "Mandarins & Oranges",
    emoji: "🍊",
    howToUse: "Peel and eat fresh, or segment into a winter salad with fennel and olive oil.",
    seasons: {
      "bay-area": [12, 1, 2, 3],
    },
  },
  {
    id: "meyer-lemon",
    name: "Meyer Lemons",
    emoji: "🍋",
    howToUse: "Sweeter than regular lemons — use zest and juice in dressings, or make preserved lemons.",
    seasons: {
      "bay-area": [11, 12, 1, 2, 3],
    },
  },
  {
    id: "avocado",
    name: "Avocados (Hass)",
    emoji: "🥑",
    howToUse: "Mash onto toast, slice into salads, or blend into a smoothie for creaminess.",
    seasons: {
      "bay-area": [2, 3, 4, 5, 6, 7, 8],
    },
  },
];

export function fruitsInSeason(regionId, month) {
  return fruits.filter((fruit) => fruit.seasons[regionId]?.includes(month));
}
