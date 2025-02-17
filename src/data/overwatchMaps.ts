import { MapProperties } from "./mapProperties";

export const overwatchMaps = [
  {
    name: "Antarctic Peninsula",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.FLANK_FRIENDLY,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [
        MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL,
      ],
    },
  },
  {
    name: "Busan",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Ilios",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.SMALL],
      layout: [MapProperties.LAYOUT.OPEN, MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Lijiang Tower",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Nepal",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Oasis",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Samoa",
    compProperties: {
      mode: [MapProperties.MODE.CONTROL],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [
        MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL,
      ],
    },
  },
  {
    name: "Circuit Royal",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
        MapProperties.LAYOUT.OPEN,
      ],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [
        MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL,
      ],
    },
  },
  {
    name: "Dorado",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [
        MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL,
      ],
    },
  },
  {
    name: "Havana",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Junkertown",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.CHOKE_HEAVY,
        MapProperties.LAYOUT.FLANK_FRIENDLY,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Rialto",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
        MapProperties.LAYOUT.OPEN,
      ],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Route 66",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.CHOKE_HEAVY,
        MapProperties.LAYOUT.FLANK_FRIENDLY,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [
        MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL,
      ],
    },
  },
  {
    name: "Shambali Monastery",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.CHOKE_HEAVY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Watchpoint: Gibraltar",
    compProperties: {
      mode: [MapProperties.MODE.ESCORT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Blizzard World",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Eichenwalde",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.CHOKE_HEAVY,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Hollywood",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "King's Row",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.CHOKE_HEAVY,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Midtown",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Numbani",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.OPEN,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.LONG],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Paraíso",
    compProperties: {
      mode: [MapProperties.MODE.HYBRID],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN, MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Colosseo",
    compProperties: {
      mode: [MapProperties.MODE.PUSH],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.CHOKE_HEAVY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Esperança",
    compProperties: {
      mode: [MapProperties.MODE.PUSH],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "New Queen Street",
    compProperties: {
      mode: [MapProperties.MODE.PUSH],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Runasapi",
    compProperties: {
      mode: [MapProperties.MODE.PUSH],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN, MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "New Junk City",
    compProperties: {
      mode: [MapProperties.MODE.FLASHPOINT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Suravasa",
    compProperties: {
      mode: [MapProperties.MODE.FLASHPOINT],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [MapProperties.LAYOUT.OPEN, MapProperties.LAYOUT.FLANK_FRIENDLY],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Hanaoka",
    compProperties: {
      mode: [MapProperties.MODE.CLASH],
      size: [MapProperties.SIZE.SMALL],
      layout: [MapProperties.LAYOUT.CHOKE_HEAVY],
      sightlines: [MapProperties.SIGHTLINES.SHORT],
      verticality: [MapProperties.VERTICALITY.MEDIUM],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
  {
    name: "Throne of Anubis",
    compProperties: {
      mode: [MapProperties.MODE.CLASH],
      size: [MapProperties.SIZE.MEDIUM],
      layout: [
        MapProperties.LAYOUT.CHOKE_HEAVY,
        MapProperties.LAYOUT.HIGH_GROUND_FOCUSED,
      ],
      sightlines: [MapProperties.SIGHTLINES.MEDIUM],
      verticality: [MapProperties.VERTICALITY.HIGH],
      cover: [MapProperties.COVER.MODERATE],
      environmentalHazards: [MapProperties.ENVIRONMENTAL_HAZARDS.NONE],
    },
  },
];
