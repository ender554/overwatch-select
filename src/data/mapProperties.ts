// mapProperties.ts (example)
export const MapProperties = {
  MODE: {
    CONTROL: "CONTROL",
    ESCORT: "ESCORT",
    HYBRID: "HYBRID",
    PUSH: "PUSH",
    CLASH: "CLASH",
    FLASHPOINT: "FLASHPOINT",
    // etc.
  },
  SIZE: {
    SMALL: "SMALL",
    MEDIUM: "MEDIUM",
    LARGE: "LARGE",
  },
  LAYOUT: {
    CHOKE_HEAVY: "CHOKE_HEAVY",
    FLANK_FRIENDLY: "FLANK_FRIENDLY",
    OPEN: "OPEN",
    HIGH_GROUND_FOCUSED: "HIGH_GROUND_FOCUSED",
  },
  SIGHTLINES: {
    SHORT: "SHORT",
    MEDIUM: "MEDIUM",
    LONG: "LONG",
  },
  VERTICALITY: {
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
  },
  COVER: {
    MINIMAL: "MINIMAL",
    MODERATE: "MODERATE",
    HIGH: "HIGH",
  },
  ENVIRONMENTAL_HAZARDS: {
    NONE: "NONE",
    BOOP_POTENTIAL: "BOOP_POTENTIAL",
  },
} as const;

// Define types based on the MapProperties keys.
export type Mode = (typeof MapProperties.MODE)[keyof typeof MapProperties.MODE];
export type Size = (typeof MapProperties.SIZE)[keyof typeof MapProperties.SIZE];
export type Layout =
  (typeof MapProperties.LAYOUT)[keyof typeof MapProperties.LAYOUT];
export type Sightline =
  (typeof MapProperties.SIGHTLINES)[keyof typeof MapProperties.SIGHTLINES];
export type Verticality =
  (typeof MapProperties.VERTICALITY)[keyof typeof MapProperties.VERTICALITY];
export type Cover =
  (typeof MapProperties.COVER)[keyof typeof MapProperties.COVER];
export type EnvironmentalHazards =
  (typeof MapProperties.ENVIRONMENTAL_HAZARDS)[keyof typeof MapProperties.ENVIRONMENTAL_HAZARDS];
