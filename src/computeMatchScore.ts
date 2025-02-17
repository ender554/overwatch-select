// computeMatchScore.ts
export function computeMatchScore(
  map: { name: string; compProperties: { [key: string]: string[] } },
  hero: {
    name: string;
    // Allow the preferredProperties values to be undefined
    preferredProperties: {
      [key: string]:
        | { options: { [key: string]: number }; weight: number }
        | undefined;
    };
  }
) {
  let totalScore = 0;
  let totalPossible = 0;
  const matches: Array<{
    category: string;
    value: string;
    optionWeight: number;
    catWeight: number;
  }> = [];

  // Iterate over each category in the hero's preferences.
  for (const category in hero.preferredProperties) {
    // Get the property; if it's undefined, skip it.
    const property = hero.preferredProperties[category];
    if (!property) continue;

    const { options, weight: catWeight } = property;
    totalPossible += catWeight; // Sum the weights only for defined categories.
    const mapOptions = map.compProperties[category] || [];
    let bestOptionWeight = 0;
    let bestOptionValue = "";

    // Check each option in the category.
    for (const option in options) {
      if (mapOptions.includes(option) && options[option] > bestOptionWeight) {
        bestOptionWeight = options[option];
        bestOptionValue = option;
      }
    }

    totalScore += catWeight * bestOptionWeight;
    if (bestOptionWeight > 0) {
      matches.push({
        category,
        value: bestOptionValue,
        optionWeight: bestOptionWeight,
        catWeight,
      });
    }
  }

  // Normalize the score using the totalPossible.
  const normalizedScore = totalPossible ? totalScore / totalPossible : 0;
  const percentage = normalizedScore * 100;
  return { totalScore, totalPossible, normalizedScore, percentage, matches };
}
