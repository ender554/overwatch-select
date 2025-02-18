// src/types/heroTypes.ts
import {
  Mode,
  Size,
  Layout,
  Sightline,
  Verticality,
  Cover,
  EnvironmentalHazards,
} from "../data/mapProperties";

export interface PropertyCategory<T extends string> {
  options: Record<T, number>;

  weight: number;
}

export interface PreferredProperties {
  // Allow any additional property keys, which may be undefined.
  [key: string]:
    | { options: Record<string, number>; weight: number }
    | undefined;

  // Explicitly defined keys:
  mode: PropertyCategory<Mode>;
  size: PropertyCategory<Size>;
  layout: PropertyCategory<Layout>;
  sightlines: PropertyCategory<Sightline>;
  verticality: PropertyCategory<Verticality>;
  cover: PropertyCategory<Cover>;
  environmentalHazards: PropertyCategory<EnvironmentalHazards>;
}

export interface Hero {
  name: string;
  role: string;
  health: number;
  armor?: number;
  preferredProperties: PreferredProperties;
  image?: string; // URL to the hero's image, if available
}
