import { Hero } from "../types/heroTypes";
import { MapProperties } from "./mapProperties";
const DVa: Hero = {
  name: "D.Va",
  role: "Tank",
  health: 700,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0,
        [MapProperties.MODE.ESCORT]: 0.75,
        [MapProperties.MODE.HYBRID]: 0.875,
        [MapProperties.MODE.PUSH]: 0.75,
        [MapProperties.MODE.CLASH]: 0.75,
        [MapProperties.MODE.FLASHPOINT]: 1.0,
      },
      weight: 0.95, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.75,
        [MapProperties.SIZE.LARGE]: 0.25,
      },
      weight: 1.45, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.75,
        [MapProperties.LAYOUT.OPEN]: 0.25,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0,
      },
      weight: 1.35, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75,
        [MapProperties.SIGHTLINES.LONG]: 0.25,
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.75,
        [MapProperties.VERTICALITY.LOW]: 0.5,
      },
      weight: 1.1, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 0.25,
        [MapProperties.COVER.MODERATE]: 0.75,
        [MapProperties.COVER.MINIMAL]: 1.0,
      },
      weight: 0.72, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.75,
      },
      weight: 0.35, // ✅ Auto-balanced
    },
  },
};

const Doomfist: Hero = {
  name: "Doomfist",
  role: "Tank",
  health: 450,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0,
        [MapProperties.MODE.ESCORT]: 0.5,
        [MapProperties.MODE.HYBRID]: 0.75, // Average of Control & Escort
        [MapProperties.MODE.PUSH]: 0.75,
        [MapProperties.MODE.CLASH]: 0.75,
        [MapProperties.MODE.FLASHPOINT]: 1.0,
      },
      weight: 0.9,  // Low-moderate importance
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.75,
        [MapProperties.SIZE.LARGE]: 0.25,
      },
      weight: 1.4,  // Very important
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0,
        [MapProperties.LAYOUT.OPEN]: 0.25,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0,
      },
      weight: 1.3,  // Essential for his playstyle
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75,
        [MapProperties.SIGHTLINES.LONG]: 0.25,
      },
      weight: 1.2,  // Important for avoiding poke
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.75,
        [MapProperties.VERTICALITY.LOW]: 0.25,
      },
      weight: 1.2,  // High importance
    },
    cover: {
      options: {
        [MapProperties.COVER.MINIMAL]: 0.75,
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.25,
      },
      weight: 1.0,  // Decent importance
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.75,
      },
      weight: 0.4,  // Least important
    },
  },
};


const Hazard: Hero = {
  name: "Hazard",
  role: "Tank",
  health: 450,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0,
        [MapProperties.MODE.ESCORT]: 0.75,
        [MapProperties.MODE.HYBRID]: 0.875, // Average of Control & Escort
        [MapProperties.MODE.PUSH]: 1.0,
        [MapProperties.MODE.CLASH]: 1.0,
        [MapProperties.MODE.FLASHPOINT]: 1.0,
      },
      weight: 0.9,  // Low-moderate importance
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.75,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.3,  // Very important
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.75,
        [MapProperties.LAYOUT.OPEN]: 0.5,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.75,
      },
      weight: 1.3,  // Essential for his playstyle
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75,
        [MapProperties.SIGHTLINES.LONG]: 0.5,
      },
      weight: 1.2,  // Important for avoiding poke
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75,
        [MapProperties.VERTICALITY.MEDIUM]: 1.0,
        [MapProperties.VERTICALITY.LOW]: 0.75,
      },
      weight: 1.1,  // Medium importance
    },
    cover: {
      options: {
        [MapProperties.COVER.MINIMAL]: 0.75,
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.5,
      },
      weight: 1.0,  // Decent importance
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.75,
      },
      weight: 0.4,  // Least important
    },
  },
};


const Ramattra: Hero = {
  name: "Ramattra",
  role: "Tank",
  health: 450,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can hold objectives well in Nemesis Form
        [MapProperties.MODE.ESCORT]: 0.75, // Can work but struggles with long-range poke
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced engagements allow both poke & brawl playstyles
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but needs proper support
        [MapProperties.MODE.CLASH]: 1.0, // Strong due to hybrid playstyle
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Chaotic fights may leave him exposed
      },
      weight: 1.23, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can feel too constrained
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for switching between poke & brawl
        [MapProperties.SIZE.LARGE]: 1.0, // Works if he can control fights effectively
      },
      weight: 1.05, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can use barriers & Nemesis Form to hold chokes
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Lacks high mobility to benefit from flanks
        [MapProperties.LAYOUT.OPEN]: 1.0, // Can poke effectively from range
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.75, // Can contest, but lacks mobility
      },
      weight: 1.31, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.75, // Can brawl well in Nemesis Form
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Ideal for poke and brawl transitions
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles against extreme poke
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Struggles to access high ground
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can contest, but needs to control space
        [MapProperties.VERTICALITY.LOW]: 0.75, // Works well on flat maps with strong positioning
      },
      weight: 0.88, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover well in Omnic Form
        [MapProperties.COVER.MODERATE]: 0.75, // Still viable
        [MapProperties.COVER.MINIMAL]: 0.5, // Can be exposed but has Nemesis Form to sustain
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable terrain to hold positions
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.25, // Struggles with knockbacks due to size
      },
      weight: 0.26, // ✅ Auto-balanced
    },
  },
};

const Sigma: Hero = {
  name: "Sigma",
  role: "Tank",
  health: 300,
  armor: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Can work but prefers structured fights over brawls
        [MapProperties.MODE.ESCORT]: 1.0, // Loves long sightlines and barrier control
        [MapProperties.MODE.HYBRID]: 1.0, // Can control space effectively in both attack and defense
        [MapProperties.MODE.PUSH]: 0.75, // Can work, but may struggle with aggressive dives
        [MapProperties.MODE.CLASH]: 1.0, // Can control space with barriers and poke damage
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less ideal due to fast-paced nature
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in tight spaces with limited range
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal for balancing cover and positioning
        [MapProperties.SIZE.LARGE]: 1.0, // Works well due to long-range poke
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Uses barriers well to hold chokes
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Struggles against flank-heavy maps
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives with long sightlines for poke
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Uses high ground effectively with barrier placement
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective at close range
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Ideal for controlling fights
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Works well for poking and controlling space
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Uses high ground well despite limited mobility
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can function effectively with some elevation control
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into purely flat fights
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to reposition and place barriers safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work but requires careful positioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for precise engagements
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes knock enemies off ledges with Accretion
      },
      weight: 0.39, // ✅ Auto-balanced
    },
  },
};

const WreckingBall: Hero = {
  name: "Wrecking Ball",
  role: "Tank",
  health: 600,
  armor: 100,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Loves fast-paced, contestable fights
        [MapProperties.MODE.ESCORT]: 0.5, // Struggles against long-range poke
        [MapProperties.MODE.HYBRID]: 1.0, // Can effectively disrupt enemy setups
        [MapProperties.MODE.PUSH]: 1.0, // Excellent at contesting and backline disruption
        [MapProperties.MODE.CLASH]: 0.75, // Somewhat viable depending on map layout
        [MapProperties.MODE.FLASHPOINT]: 1.0, // Strong due to constant engagement opportunities
      },
      weight: 1.31, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can feel too constrained
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal balance of space and engagement areas
        [MapProperties.SIZE.LARGE]: 1.0, // Prefers large maps for rolling movement options
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5, // Struggles in narrow chokes due to needing space
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves multiple routes and angles of attack
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives with high-speed movement options
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Uses high ground well for engagements
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.75, // Can brawl well but prefers engaging and disengaging
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Best for creating disruption across fights
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles against long-range poke-heavy teams
      },
      weight: 0.87, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Uses vertical movement to its fullest potential
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Still highly mobile and effective
        [MapProperties.VERTICALITY.LOW]: 0.5, // Limited playmaking ability if forced into flat fights
      },
      weight: 1.22, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 0.75, // Can benefit but relies more on movement
        [MapProperties.COVER.MODERATE]: 1.0, // Best balance for keeping engagements dynamic
        [MapProperties.COVER.MINIMAL]: 0.5, // Can work, but forces him to use mobility constantly
      },
      weight: 0.79, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for optimal engagement options
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can get value from environmental kills
      },
      weight: 0.26, // ✅ Auto-balanced
    },
  },
};

const Mauga: Hero = {
  name: "Mauga",
  role: "Tank",
  health: 500,
  armor: 150,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Loves brawly fights on objectives
        [MapProperties.MODE.ESCORT]: 0.75, // Can work, but struggles with long-range poke
        [MapProperties.MODE.HYBRID]: 1.0, // Can hold space effectively on both attack and defense
        [MapProperties.MODE.PUSH]: 1.0, // Strong due to brawly, sustained fights
        [MapProperties.MODE.CLASH]: 1.0, // Thrives in heavy engagements
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can struggle due to chaotic engagements with less control
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can feel too constrained
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal for brawly engagements
        [MapProperties.SIZE.LARGE]: 1.0, // Can hold and contest space well
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can sustain and block space effectively
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.75, // Can work, but prefers direct fights
        [MapProperties.LAYOUT.OPEN]: 0.5, // Struggles without cover to mitigate damage
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can contest well but needs help getting up
      },
      weight: 1.31, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for his close-range sustain fights
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Works as long as he can get into position
        [MapProperties.SIGHTLINES.LONG]: 0.25, // Struggles if forced to fight at range
      },
      weight: 0.88, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Limited ability to contest high ground
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can function but needs smart positioning
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers grounded fights with strong brawling control
      },
      weight: 0.88, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to approach safely and sustain
        [MapProperties.COVER.MODERATE]: 0.75, // Can work, but makes him more vulnerable to poke
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles without natural cover
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for brawling
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use environmental hazards situationally
      },
      weight: 0.26, // ✅ Auto-balanced
    },
  },
};

const Reaper: Hero = {
  name: "Reaper",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Loves brawly fights on objectives
        [MapProperties.MODE.ESCORT]: 0.75, // Can work but may struggle on open maps
        [MapProperties.MODE.HYBRID]: 1.0, // Can set up strong engagements
        [MapProperties.MODE.PUSH]: 1.0, // Strong due to close-range engagements
        [MapProperties.MODE.CLASH]: 0.75, // Decent, but depends on map layout
        [MapProperties.MODE.FLASHPOINT]: 1.0, // Strong due to constant fights and quick engagements
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Prefers tight spaces for close-range engagements
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal balance for flanks and fights
        [MapProperties.SIZE.LARGE]: 0.5, // Can struggle on large maps without cover
      },
      weight: 1.05, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can thrive by breaking through chokes
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves finding routes to surprise enemies
        [MapProperties.LAYOUT.OPEN]: 0.5, // Struggles without cover to engage safely
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.75, // Can work if he has teleport options
      },
      weight: 1.31, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for Reaper’s close-range fights
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Can work if he closes distance quickly
        [MapProperties.SIGHTLINES.LONG]: 0.25, // Weak—vulnerable to poke and long-range engagements
      },
      weight: 0.88, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Struggles to engage effectively from high ground
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can work as long as he has flank routes
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers grounded fights with access to cover
      },
      weight: 0.88, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to approach fights safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work, but requires careful positioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles without natural cover to break sightlines
      },
      weight: 1.14, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground to control engagements
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use boops to his advantage
      },
      weight: 0.35, // ✅ Auto-balanced
    },
  },
};

const Ashe: Hero = {
  name: "Ashe",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Can work, but fights can be too brawly
        [MapProperties.MODE.ESCORT]: 1.0, // Loves long sightlines and high ground
        [MapProperties.MODE.HYBRID]: 1.0, // Can hold angles effectively on both attack and defense
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but can struggle without clear sightlines
        [MapProperties.MODE.CLASH]: 0.75, // Can be effective depending on map layout
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Chaotic fights make her positioning harder
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle if fights are too close-quarters
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal for mid-range combat
        [MapProperties.SIZE.LARGE]: 1.0, // Gives her long sightlines and positioning options
      },
      weight: 1.08, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can hold angles but needs space to reposition
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can use off-angles effectively
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives with good sightlines
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves controlling high ground for sight advantage
      },
      weight: 1.25, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Struggles in close-range fights
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Best for her mid-range strength
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Effective as long as she has cover and good positioning
      },
      weight: 1.33, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Uses high ground well for poke and safety
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can work in flexible engagements
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced to fight on low ground only
      },
      weight: 1.0, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to safely play sightlines
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but makes her vulnerable
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 0.83, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for good positioning
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use Coach Gun to knock enemies into hazards
      },
      weight: 0.33, // ✅ Auto-balanced
    },
  },
};

const Mei: Hero = {
  name: "Mei",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Strong in tight, objective-based fights
        [MapProperties.MODE.ESCORT]: 0.75, // Can work, but struggles on open payload phases
        [MapProperties.MODE.HYBRID]: 1.0, // Can hold chokes well with Ice Wall
        [MapProperties.MODE.PUSH]: 1.0, // Strong due to brawly, sustained fights
        [MapProperties.MODE.CLASH]: 1.0, // Thrives in heavy engagements
        [MapProperties.MODE.FLASHPOINT]: 0.75, // Decent but can struggle without structured cover
      },
      weight: 1.25, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Best for close-range fights and controlling space
        [MapProperties.SIZE.MEDIUM]: 1.0, // Works well with wall placement
        [MapProperties.SIZE.LARGE]: 0.5, // Can struggle on large, open maps
      },
      weight: 1.08, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Uses walls effectively to divide enemies
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.75, // Can work but prefers structured fights
        [MapProperties.LAYOUT.OPEN]: 0.5, // Struggles without cover or walls to manipulate fights
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use high ground but not ideal
      },
      weight: 1.33, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for Mei’s close-range playstyle
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Works as long as she has cover
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Less effective against long-range poke
      },
      weight: 1.0, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Limited mobility for high ground access
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can function well in varied elevation maps
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers grounded fights where she can wall off enemies
      },
      weight: 0.83, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to approach fights safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but requires good positioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles without natural cover
      },
      weight: 1.08, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for structured fights
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use walls to push enemies into hazards
      },
      weight: 0.42, // ✅ Auto-balanced
    },
  },
};

const Bastion: Hero = {
  name: "Bastion",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Can work, but setup time may be an issue
        [MapProperties.MODE.ESCORT]: 1.0, // Loves long sightlines and strong defensive setups
        [MapProperties.MODE.HYBRID]: 1.0, // Can hold angles well for both attack and defense
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but can struggle with constant movement
        [MapProperties.MODE.CLASH]: 1.0, // Can control space effectively with his firepower
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less ideal due to fast-paced, chaotic nature
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle with limited space to reposition
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal for balancing cover and firing angles
        [MapProperties.SIZE.LARGE]: 1.0, // Works well due to long-range opportunities
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can hold chokes well with turret fire
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Struggles against flank-heavy maps
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives with good sightlines
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves high ground to maximize effectiveness
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective at close range
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Ideal for consistent damage output
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Works well for suppressive fire and poke damage
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Can use high ground well but lacks mobility
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can still function effectively with good positioning
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into purely grounded fights
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to safely reposition and reload
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work but requires awareness
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground to control fights
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use artillery to force movement into hazards
      },
      weight: 0.31, // ✅ Auto-balanced
    },
  },
};

const Cassidy: Hero = {
  name: "Cassidy",
  role: "Damage",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Thrives in objective-based fights with solid angles
        [MapProperties.MODE.ESCORT]: 1.0, // Can take advantage of payload cover and long sightlines
        [MapProperties.MODE.HYBRID]: 1.0, // Can control space effectively on both attack and defense
        [MapProperties.MODE.PUSH]: 0.75, // Can work but struggles against high-mobility compositions
        [MapProperties.MODE.CLASH]: 1.0, // Can hold ground effectively in structured fights
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less ideal due to chaotic nature and constant movement
      },
      weight: 1.11, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in extremely tight spaces
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for structured mid-range fights
        [MapProperties.SIZE.LARGE]: 1.0, // Can work well if he has good cover to play around
      },
      weight: 1.03, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can control chokes well with accurate mid-range shots
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can hold angles but must be aware of dive threats
        [MapProperties.LAYOUT.OPEN]: 0.75, // Can work but is vulnerable to snipers and dive
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves high ground for better sightlines
      },
      weight: 1.19, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Struggles in pure close-range fights without cover
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Ideal range for landing consistent damage
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Can function but is outclassed by snipers at extreme range
      },
      weight: 1.27, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75, // Can be strong if he gets high ground but lacks mobility
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can play effectively with moderate elevation shifts
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers grounded fights where he can control engagements
      },
      weight: 0.95, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to peek and engage safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work but makes him more vulnerable
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 1.03, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers structured fights over environmental play
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use grenade to displace enemies
      },
      weight: 0.4, // ✅ Auto-balanced
    },
  },
};

const Echo: Hero = {
  name: "Echo",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Can work, but depends on map verticality
        [MapProperties.MODE.ESCORT]: 1.0, // Loves open areas and strong sightlines
        [MapProperties.MODE.HYBRID]: 1.0, // Can take advantage of flexible engagements
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but can struggle without cover
        [MapProperties.MODE.CLASH]: 1.0, // Can poke and dive effectively
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less ideal due to unpredictable fights
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle if fights are too close-quarters
        [MapProperties.SIZE.MEDIUM]: 1.0, // Ideal for balancing poke and mobility
        [MapProperties.SIZE.LARGE]: 1.0, // Works well due to flight capabilities
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can work, but prefers more open spaces
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Uses off-angles and mobility to great effect
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives in open spaces where she can poke and dive
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves high ground for safety and pressure
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective in close-range fights
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Ideal for consistent poke
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Works well as long as she has room to reposition
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Absolute best-case scenario for Echo
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Still allows for effective repositioning
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into purely grounded fights
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Allows her to poke and retreat safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but requires active movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground to control fights
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use flight to push enemies into hazards
      },
      weight: 0.39, // ✅ Auto-balanced
    },
  },
};

const Genji: Hero = {
  name: "Genji",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Works well in chaotic fights where he can capitalize on low-health enemies
        [MapProperties.MODE.ESCORT]: 0.75, // Can work, but needs good cover to avoid long-range threats
        [MapProperties.MODE.HYBRID]: 1.0, // Can flank well and engage/disengage effectively
        [MapProperties.MODE.PUSH]: 1.0, // Strong pick due to the extended fights and open layouts
        [MapProperties.MODE.CLASH]: 1.0, // Thrives in fast-paced engagements with team follow-up
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less ideal due to unpredictable fights and frequent resets
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in extremely confined areas
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for allowing mobility without too much open space
        [MapProperties.SIZE.LARGE]: 1.0, // Works well as long as there are opportunities to flank
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can work, but prefers more flank-heavy options
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves maps where he can take alternate angles
        [MapProperties.LAYOUT.OPEN]: 1.0, // Works well due to mobility and shuriken range
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves maps where he can reposition easily
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for his close-range burst potential
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Still effective for poke damage and engages
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles against long-range threats
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Absolute best-case scenario for Genji
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can still be strong with his wall climb and dashes
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into purely grounded fights
      },
      weight: 1.32, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Allows him to poke and find angles safely
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but requires careful movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground to control fights
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use dashes and movement to force enemies into hazards
      },
      weight: 0.39, // ✅ Auto-balanced
    },
  },
};

const Hanzo: Hero = {
  name: "Hanzo",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Can work but requires careful positioning
        [MapProperties.MODE.ESCORT]: 1.0, // Thrives in long-range engagements
        [MapProperties.MODE.HYBRID]: 1.0, // Can hold strong positions both offensively and defensively
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but less effective in brawly fights
        [MapProperties.MODE.CLASH]: 1.0, // Strong at disrupting fights with his range and damage
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Struggles due to chaotic close-range fights
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in extremely tight spaces
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for finding effective angles
        [MapProperties.SIZE.LARGE]: 1.0, // Works well if he has space to reposition
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can hold chokes well but prefers off-angles
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can use walls to create off-angle pressure
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives in open spaces with clear sightlines
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves high ground for safety and better angles
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective in close-range fights
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Strong at consistent mid-range pressure
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Ideal for long-range picks and pressure
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Absolute best-case scenario for Hanzo
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can still function well
        [MapProperties.VERTICALITY.LOW]: 0.5, // Less effective without vertical options
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to avoid dive threats
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but requires constant repositioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if exposed for too long
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers structured fights and stable ground
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes force movement with Sonic Arrow
      },
      weight: 0.31, // ✅ Auto-balanced
    },
  },
};

const Junkrat: Hero = {
  name: "Junkrat",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Strong in brawly fights where spam can control space
        [MapProperties.MODE.ESCORT]: 0.75, // Decent but struggles in open areas
        [MapProperties.MODE.HYBRID]: 1.0, // Strong in chokes on both attack and defense
        [MapProperties.MODE.PUSH]: 1.0, // Works well due to extended fights and enclosed zones
        [MapProperties.MODE.CLASH]: 1.0, // Thrives in high-action fights with explosive damage
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can be difficult to maintain value due to frequent resets
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Best for controlling tight spaces with spam
        [MapProperties.SIZE.MEDIUM]: 1.0, // Can work well with moderate sightlines and choke points
        [MapProperties.SIZE.LARGE]: 0.5, // Struggles on large, open maps with long sightlines
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Controls chokes effectively with spam and traps
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can take advantage of hidden trap placements
        [MapProperties.LAYOUT.OPEN]: 0.5, // Struggles if there’s no structure for spamming
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.75, // Can use mines to reposition but isn't ideal
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Works best for close-range spam and burst damage
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Can still work effectively with lobbed grenades
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles to contest snipers and open spaces
      },
      weight: 0.86, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75, // Can work but requires good mine usage for mobility
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can operate effectively with slight elevation shifts
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers grounded fights where he can predict enemy movement
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Allows him to spam safely from behind obstacles
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work but requires active movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 0.75, // Can work without hazards but loses some trap value
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 1.0, // Loves maps with knockback potential for mine plays
      },
      weight: 0.7, // ✅ Auto-balanced
    },
  },
};

const Pharah: Hero = {
  name: "Pharah",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Strong in maps where she can control space from above
        [MapProperties.MODE.ESCORT]: 1.0, // Can poke effectively and control payload zones
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at breaking defenses and holding high ground
        [MapProperties.MODE.PUSH]: 0.75, // Can work but may struggle with chaotic engagements
        [MapProperties.MODE.CLASH]: 1.0, // Thrives in high-action fights with splash damage
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can be difficult to maintain value due to frequent resets
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle with tight spaces limiting her flight
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for allowing air control without too much restriction
        [MapProperties.SIZE.LARGE]: 1.0, // Works well since she has space to stay airborne
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can spam chokes but may struggle with heavy shields
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can use vertical flanks to pressure backlines
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives in open spaces with air dominance
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves maps where she can maintain aerial superiority
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Struggles if forced into close-range engagements
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Effective for splash damage and safe positioning
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Maximizes long-range rocket spam and off-angles
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Absolute best-case scenario for Pharah
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can still function effectively
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles without vertical options
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover to avoid long-range hitscans
        [MapProperties.COVER.MODERATE]: 0.75, // Can still work but requires active movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed against hitscans
      },
      weight: 0.78, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers structured fights over boop plays
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use Concussive Blast for environmental kills
      },
      weight: 0.31, // ✅ Auto-balanced
    },
  },
};

const Sojourn: Hero = {
  name: "Sojourn",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can thrive in chaotic fights with proper positioning
        [MapProperties.MODE.ESCORT]: 1.0, // Can poke and pick targets effectively with railgun charge
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at controlling fights and charging ultimates
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but needs strong team coordination
        [MapProperties.MODE.CLASH]: 1.0, // Strong in structured fights with her high burst potential
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can struggle due to constant movement and unpredictability
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in tight spaces where she lacks room to maneuver
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for allowing mobility and control of engagements
        [MapProperties.SIZE.LARGE]: 1.0, // Works well as long as she has sufficient cover
      },
      weight: 0.99, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can work, but prefers more open fights
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves maps where she can take alternate angles
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives in open spaces with room to maneuver and shoot
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use her mobility to take superior positions
      },
      weight: 1.32, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective in close-range brawls
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Strong at consistent railgun charge and poke
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Can compete well at long range with accurate railgun shots
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Can use Power Slide for dynamic movement
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Still works well with quick repositioning
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into purely grounded fights
      },
      weight: 1.07, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover effectively to manage engagements
        [MapProperties.COVER.MODERATE]: 0.75, // Works but requires active movement to avoid damage
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 0.82, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground over environmental plays
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use Disruptor Shot in certain scenarios
      },
      weight: 0.33, // ✅ Auto-balanced
    },
  },
};

const Soldier76: Hero = {
  name: "Soldier: 76",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can thrive in chaotic fights with proper positioning
        [MapProperties.MODE.ESCORT]: 1.0, // Can poke and hold angles effectively
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at controlling fights and pushing objectives
        [MapProperties.MODE.PUSH]: 0.75, // Decent but requires sustained damage output
        [MapProperties.MODE.CLASH]: 1.0, // Strong in structured fights due to healing sustain and consistent damage
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can struggle with frequent resets and unpredictable fights
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle with lack of repositioning space
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for allowing mobility and maintaining range
        [MapProperties.SIZE.LARGE]: 1.0, // Works well as long as there are good sightlines
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can work, but prefers open fights
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Can take alternate angles to pressure enemies
        [MapProperties.LAYOUT.OPEN]: 1.0, // Thrives in open spaces with controlled sightlines
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use his sprint to reposition effectively
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Less effective in close-range brawls
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Strong at sustained poke and mid-range fights
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Can take advantage of long sightlines to apply pressure
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75, // Can work, but not always necessary
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Ideal for cover-based fights and repositioning
        [MapProperties.VERTICALITY.LOW]: 1.0, // Still effective if he has solid positioning
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover effectively to heal and reposition
        [MapProperties.COVER.MODERATE]: 0.75, // Can work but requires active movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers structured fights over environmental plays
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use high ground to force enemies into bad positions
      },
      weight: 0.47, // ✅ Auto-balanced
    },
  },
};

const Sombra: Hero = {
  name: "Sombra",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can thrive in chaotic fights with proper stealth positioning
        [MapProperties.MODE.ESCORT]: 1.0, // Can harass enemy backlines and control health packs
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at delaying and disrupting fights
        [MapProperties.MODE.PUSH]: 0.75, // Decent but needs solid coordination for sustained impact
        [MapProperties.MODE.CLASH]: 1.0, // Strong at assassinating high-value targets in structured fights
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Struggles in fights with constant chaos and movement
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in confined spaces with limited escape routes
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for controlled hacking and harassing enemies
        [MapProperties.SIZE.LARGE]: 1.0, // Works well if she has space to reposition effectively
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can use chokes to disable key targets
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves maps with alternative routes for backline access
        [MapProperties.LAYOUT.OPEN]: 1.0, // Works well if she has translocator setups ready
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use high ground to hack safely
      },
      weight: 1.32, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.75, // Can work but struggles against brawlers up close
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Strong at setting up hacks and controlling enemies
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles in long-range fights without cover
      },
      weight: 0.86, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Can use translocator to maneuver to high ground safely
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Still works well with quick hacks and repositioning
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into flat fights with no escape routes
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover to break line of sight and reposition
        [MapProperties.COVER.MODERATE]: 0.75, // Works but requires smart positioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if caught in open space
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground over environmental eliminations
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can occasionally use knockback for opportunistic kills
      },
      weight: 0.47, // ✅ Auto-balanced
    },
  },
};

const Torbjorn: Hero = {
  name: "Torbjörn",
  role: "Damage",
  health: 200,
  armor: 50,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can set up turrets in strategic spots for contesting points
        [MapProperties.MODE.ESCORT]: 1.0, // Can hold strong defensive positions around payloads
        [MapProperties.MODE.HYBRID]: 1.0, // Effective in both attack and defense phases
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but struggles if forced into extended open fights
        [MapProperties.MODE.CLASH]: 1.0, // Strong at area denial and structured team fights
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Struggles with frequent resets and turret positioning
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in tight spaces with limited turret placements
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for controlled turret placement and defensive setups
        [MapProperties.SIZE.LARGE]: 1.0, // Works well if he has solid turret angles
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Best case scenario for turret defense
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.75, // Can be effective but requires good turret positioning
        [MapProperties.LAYOUT.OPEN]: 0.5, // Struggles in maps without clear defensive zones
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use high ground to place turrets effectively
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.75, // Can work but prefers some range for turret efficiency
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Strong at setting up turret-controlled zones
        [MapProperties.SIGHTLINES.LONG]: 0.75, // Can work but requires precise turret placement
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75, // Can use turret on high ground but isn't a must-have
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Ideal for keeping turret in strategic spots
        [MapProperties.VERTICALITY.LOW]: 1.0, // Can still function well with turret positioning
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover to protect turret and himself
        [MapProperties.COVER.MODERATE]: 1.0, // Works fine with well-placed turrets
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed to enemy fire
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers structured fights with stable turret placements
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use knockback for eliminations
      },
      weight: 0.54, // ✅ Auto-balanced
    },
  },
};

const Tracer: Hero = {
  name: "Tracer",
  role: "Damage",
  health: 150,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Can thrive in chaotic fights with proper Blink and Recall usage
        [MapProperties.MODE.ESCORT]: 1.0, // Can harass enemy backlines and pick off stragglers
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at delaying and disrupting fights
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but struggles in extended engagements
        [MapProperties.MODE.CLASH]: 1.0, // Strong in structured fights with good target priority
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Less effective due to constant movement and team collapses
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Small maps favor her close-range engagements
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for balanced mobility and engagement control
        [MapProperties.SIZE.LARGE]: 0.5, // Large maps may limit her ability to effectively engage
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can be risky but manageable with Blinks
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves maps with alternative routes for backline access
        [MapProperties.LAYOUT.OPEN]: 0.75, // Can work if there’s sufficient cover
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use high ground to set up dives and rotations
      },
      weight: 1.32, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for Tracer’s damage potential
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Still effective but requires careful positioning
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles against snipers and long-range threats
      },
      weight: 0.78, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Can use terrain for aggressive engagements
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Good for movement control and escape routes
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into a predictable movement pattern
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover effectively to reset fights
        [MapProperties.COVER.MODERATE]: 0.75, // Works fine but requires smart movement
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if left exposed for too long
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable engagements rather than relying on boop kills
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can sometimes use Pulse Bomb to knock enemies into hazards
      },
      weight: 0.62, // ✅ Auto-balanced
    },
  },
};

const Venture: Hero = {
  name: "Venture",
  role: "Damage",
  health: 200,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Thrives in chaotic fights with strong mobility
        [MapProperties.MODE.ESCORT]: 1.0, // Can dive enemy backlines and pick off key targets
        [MapProperties.MODE.HYBRID]: 1.0, // Effective at engaging and disengaging fights
        [MapProperties.MODE.PUSH]: 0.75, // Decent, but requires strong team coordination
        [MapProperties.MODE.CLASH]: 1.0, // Strong in structured fights with good engagement timing
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Can struggle with the fast-paced, unpredictable nature
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.75, // Can work, but needs careful movement
        [MapProperties.SIZE.MEDIUM]: 1.0, // Best for quick rotations and dive opportunities
        [MapProperties.SIZE.LARGE]: 1.0, // Works well if they have space to maneuver
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can be risky, but works with strong positioning
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves maps with side routes to dive targets
        [MapProperties.LAYOUT.OPEN]: 1.0, // Can utilize mobility to control engagements
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Can use movement to reach better angles
      },
      weight: 1.24, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Best for burst damage potential
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Still effective but requires smart movement
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Struggles against long-range poke
      },
      weight: 0.86, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Can use movement to control high ground fights
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Works well with mobility-based engages
        [MapProperties.VERTICALITY.LOW]: 0.5, // Less effective when forced into flat fights
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover to reset fights and disengage
        [MapProperties.COVER.MODERATE]: 0.75, // Works but requires smart positioning
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if exposed for too long
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable fights over relying on knockback plays
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can use certain abilities to displace enemies
      },
      weight: 0.54, // ✅ Auto-balanced
    },
  },
};

const Widowmaker: Hero = {
  name: "Widowmaker",
  role: "Damage",
  health: 175,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.5, // Struggles with chaotic fights and close-quarters engagements
        [MapProperties.MODE.ESCORT]: 1.0, // Can position effectively to control payload routes
        [MapProperties.MODE.HYBRID]: 1.0, // Strong in defensive phases where she can hold long sightlines
        [MapProperties.MODE.PUSH]: 0.5, // Not ideal due to the constant movement and chaotic engagements
        [MapProperties.MODE.CLASH]: 1.0, // Can control key angles in structured fights
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Struggles due to frequent resets and contested areas
      },
      weight: 1.09, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Can struggle in confined spaces with limited escape routes
        [MapProperties.SIZE.MEDIUM]: 1.0, // Provides enough space for positioning without being too open
        [MapProperties.SIZE.LARGE]: 1.0, // Best case scenario for long-range sniper duels
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can work, but requires careful positioning
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Less ideal due to potential close-range threats
        [MapProperties.LAYOUT.OPEN]: 1.0, // Best for setting up long-range shots
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves maps with strong high ground positions
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.25, // Weak in close-range brawls
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Can work but is not ideal
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Essential for her sniper playstyle
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Best for finding strong sniper perches
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Still allows for solid positioning
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles when forced into flat ground engagements
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Can use cover to reposition and avoid getting dove
        [MapProperties.COVER.MODERATE]: 0.75, // Works but requires strong positioning awareness
        [MapProperties.COVER.MINIMAL]: 0.5, // Struggles if caught in open areas
      },
      weight: 1.01, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable engagements rather than relying on knockbacks
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.25, // Can occasionally take advantage but isn't reliant on it
      },
      weight: 0.31, // ✅ Auto-balanced
    },
  },
};

const Ana: Hero = {
  name: "Ana",
  role: "Support",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.5, // Less effective in close-quarters fights
        [MapProperties.MODE.ESCORT]: 1.0, // Thrives on long-range sightlines
        [MapProperties.MODE.HYBRID]: 0.75, // Balanced engagements allow her to utilize both healing and damage
        [MapProperties.MODE.PUSH]: 0.5, // Push is often too fast-paced for Ana
        [MapProperties.MODE.CLASH]: 0.75, // Somewhat viable, but not ideal
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Harder to maintain safe positioning
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Struggles in tight, close fights
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal for long-range healing & safe positioning
        [MapProperties.SIZE.LARGE]: 0.75, // Can work if she finds safe spots
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can land anti-nades and sleep darts easily
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Vulnerable to being flanked
        [MapProperties.LAYOUT.OPEN]: 0.75, // Can work if there’s cover, but risky
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Loves high ground positioning
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.25, // Struggles in short-range brawls
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Can work but not ideal
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Best for her playstyle
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Prefers high ground, but needs help getting there
        [MapProperties.VERTICALITY.MEDIUM]: 0.75, // Still viable but less of an advantage
        [MapProperties.VERTICALITY.LOW]: 0.5, // Can work but lacks mobility to reposition
      },
      weight: 1.12, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs strong cover to be effective
        [MapProperties.COVER.MODERATE]: 0.75, // Still usable but not ideal
        [MapProperties.COVER.MINIMAL]: 0.25, // Struggles without cover
      },
      weight: 0.75, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable ground for safe positioning
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can be knocked off but not a huge issue
      },
      weight: 0.47, // ✅ Auto-balanced
    },
  },
};

const Juno: Hero = {
  name: "Juno",
  role: "Support",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Loves high-mobility fights & contesting objectives
        [MapProperties.MODE.ESCORT]: 0.5, // Struggles in long-range poke maps
        [MapProperties.MODE.HYBRID]: 1.0, // Can flex between healing & engagement
        [MapProperties.MODE.PUSH]: 0.75, // Strong, but depends on map
        [MapProperties.MODE.CLASH]: 1.0, // Can reposition quickly to support teammates
        [MapProperties.MODE.FLASHPOINT]: 1.0, // High mobility makes her great in chaotic fights
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Struggles if enclosed too much
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal balance of movement & sightlines
        [MapProperties.SIZE.LARGE]: 1.0, // Large maps let her **use verticality well**
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.75, // Can push through chokes with **Hyper Ring & Orbital Ray**
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Loves engaging from **multiple angles**
        [MapProperties.LAYOUT.OPEN]: 0.5, // Needs cover but can work with mobility
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // **Loves playing vertically**
      },
      weight: 1.4, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Struggles against dive-heavy comps
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Can **position well** and land shots effectively
        [MapProperties.SIGHTLINES.LONG]: 0.75, // Decent, as long as she stays covered
      },
      weight: 0.93, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // **Loves high ground engagements**
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can move freely and reposition
        [MapProperties.VERTICALITY.LOW]: 0.5, // Struggles if forced into flat fights
      },
      weight: 1.12, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // **Needs cover** to survive poke damage
        [MapProperties.COVER.MODERATE]: 0.75, // Acceptable but can be risky
        [MapProperties.COVER.MINIMAL]: 0.5, // Vulnerable to snipers & flankers
      },
      weight: 0.75, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers **safe, stable ground**
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can be booped, but **mobility helps her recover**
      },
      weight: 0.47, // ✅ Auto-balanced
    },
  },
};

const Zenyatta: Hero = {
  name: "Zenyatta",
  role: "Support",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 0.75, // Decent, but can struggle against dive
        [MapProperties.MODE.ESCORT]: 1.0, // Thrives with good sightlines
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced engagement benefits him
        [MapProperties.MODE.PUSH]: 0.75, // Strong if he gets good positioning
        [MapProperties.MODE.CLASH]: 0.5, // Can work, but not ideal
        [MapProperties.MODE.FLASHPOINT]: 0.5, // Chaotic fights make him vulnerable
      },
      weight: 1.25, // ✅ Auto-balanced
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.5, // Struggles if fights are too close-quarters
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal balance of cover & sightlines
        [MapProperties.SIZE.LARGE]: 1.0, // Gives him good positioning & range
      },
      weight: 1.0, // ✅ Auto-balanced
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Can punish grouped enemies with Discord
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Vulnerable to flankers
        [MapProperties.LAYOUT.OPEN]: 1.0, // Loves open areas for better Discord usage
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.75, // Can hold high ground but lacks escape tools
      },
      weight: 1.17, // ✅ Auto-balanced
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.25, // Weak—struggles in close-range brawls
        [MapProperties.SIGHTLINES.MEDIUM]: 0.75, // Acceptable, but prefers longer sightlines
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Ideal for his ranged orbs & Discord
      },
      weight: 1.33, // ✅ Auto-balanced
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.75, // Can hold high ground but lacks movement to reposition
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Can adapt well in mid-level maps
        [MapProperties.VERTICALITY.LOW]: 0.5, // Can still work, but limits his options
      },
      weight: 0.83, // ✅ Auto-balanced
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Needs cover to survive against dive threats
        [MapProperties.COVER.MODERATE]: 0.75, // Can still be effective with good awareness
        [MapProperties.COVER.MINIMAL]: 0.25, // Very vulnerable without protection
      },
      weight: 1.0, // ✅ Auto-balanced
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers stable terrain for good positioning
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5, // Can be knocked off, but positioning helps avoid it
      },
      weight: 0.42, // ✅ Auto-balanced
    },
  },
};

const Baptiste: Hero = {
  name: "Baptiste",
  role: "Support",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.HYBRID]: 1.0, // Baptiste thrives in balanced engagements that let him alternate between healing and damage
        [MapProperties.MODE.ESCORT]: 0.9, // Escort maps allow sustained team fights where his healing and damage can both shine
        [MapProperties.MODE.PUSH]: 0.7, // Push maps are acceptable but may leave him more isolated
        [MapProperties.MODE.CONTROL]: 0.6, // Control maps tend to be too confined for his projectile-based kit
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps offer a good balance for his range and mobility
        [MapProperties.SIZE.LARGE]: 0.8, // Large maps might leave him too far from his team
        [MapProperties.SIZE.SMALL]: 0.6, // Very small maps force close engagements that can be risky for him
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.9, // Choke-heavy layouts can let him control space with his Immortality Field and Regenerative Burst
        [MapProperties.LAYOUT.OPEN]: 0.8, // Open areas allow his projectiles to travel, though may expose him
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7, // High ground can be useful, but may isolate him from his teammates
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.6, // Flank-friendly maps are less optimal given his relatively fixed positioning
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines help him both heal teammates and land his burst fire
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Longer lines favor his hitscan primary fire—but not so long as to make targeting teammates difficult
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Very short sightlines are not ideal for his kit
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Medium verticality complements his Exo Boots and jump mobility
        [MapProperties.VERTICALITY.HIGH]: 0.7, // Very high verticality may expose him to flanking and make his projectiles easier to dodge
        [MapProperties.VERTICALITY.LOW]: 0.8, // Low verticality is acceptable but can limit escape options
      },
      weight: 0.9,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover is key for Baptiste to safely reload and use his abilities
        [MapProperties.COVER.HIGH]: 0.9, // High cover is useful when available
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him vulnerable given his reliance on positioning
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // He prefers predictable environments where he can accurately deploy his abilities
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4,
      },
      weight: 0.7,
    },
  },
};

const Brigitte: Hero = {
  name: "Brigitte",
  role: "Support",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Escort maps favor close-quarters engagements
        [MapProperties.MODE.HYBRID]: 0.9, // Hybrid maps are also good for team fights where she can get in close
        [MapProperties.MODE.CONTROL]: 0.7, // Control maps may be a bit too open for her melee-oriented kit
        [MapProperties.MODE.PUSH]: 0.6, // Push maps force rapid engagements that can expose her vulnerability
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Small maps let her stay in the thick of the action
        [MapProperties.SIZE.MEDIUM]: 0.9, // Medium maps work well, too
        [MapProperties.SIZE.LARGE]: 0.6, // Large maps might force her too far from her team
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Choke-heavy layouts suit her close-range combat
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // High ground can help, but may limit her mobility
        [MapProperties.LAYOUT.OPEN]: 0.7, // Open areas work, though they may expose her to ranged attacks
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5, // Flank-friendly maps are less ideal given her limited mobility
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Short sightlines favor her melee and close-range abilities
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7, // Medium sightlines are acceptable
        [MapProperties.SIGHTLINES.LONG]: 0.4, // Long sightlines are less ideal for a hero built for up-close action
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Low verticality helps keep engagements close and manageable
        [MapProperties.VERTICALITY.MEDIUM]: 0.6,
        [MapProperties.VERTICALITY.HIGH]: 0.4, // High verticality can expose her to flankers and long-range damage
      },
      weight: 0.9,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover is key to give her protection while she gets in range
        [MapProperties.COVER.HIGH]: 0.8, // High cover is useful but may limit her ability to press the attack
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover makes her more vulnerable
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers predictable environments where she can reliably engage
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.7,
    },
  },
};

const Illari: Hero = {
  name: "Illari",
  role: "Support",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.HYBRID]: 1.0, // Illari thrives in balanced, mid-range engagements
        [MapProperties.MODE.CONTROL]: 0.9, // Control maps work well for her auto-charging rifle
        [MapProperties.MODE.ESCORT]: 0.8, // Escort maps can allow for grouped team fights for her pylon to shine
        [MapProperties.MODE.PUSH]: 0.7, // Push maps may be acceptable but less ideal
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps help keep Illari within range of her allies
        [MapProperties.SIZE.SMALL]: 0.9, // Small maps work well for coordinated team play
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps may stretch her healing and damage potential too thin
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open areas let her Solar Rifle hit targets and provide clear lines for her healing beam
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // Some high ground can be useful, though it may limit her pylon’s placement
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.7, // Flank-friendly maps are acceptable if she can use Outburst to reposition
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5, // Choke-heavy maps may restrict her mobility and pylon deployment
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are optimal for her healing beam (15.3 m range) and auto fire
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Long sightlines can boost her primary damage but may isolate her healing
        [MapProperties.SIGHTLINES.SHORT]: 0.6, // Too-short sightlines may force her into risky close combat
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Moderate verticality supports her Outburst mobility and pylon placement
        [MapProperties.VERTICALITY.LOW]: 0.8, // Low verticality is acceptable
        [MapProperties.VERTICALITY.HIGH]: 0.5, // High verticality can hinder her ability to support teammates effectively
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover provides protection without completely obstructing her abilities
        [MapProperties.COVER.HIGH]: 0.8, // High cover can be good but might block her healing beam or pylon line of sight
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover makes her vulnerable
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Illari benefits from predictable environments where her abilities aren’t unexpectedly interrupted
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.6,
    },
  },
};

const Kiriko: Hero = {
  name: "Kiriko",
  role: "Support",
  health: 225,
  preferredProperties: {
    mode: {
      // Kiriko’s kit—combining long‐range healing with high mobility—
      // works best in balanced maps where teammates can cluster but
      // also have space to reposition.
      options: {
        [MapProperties.MODE.HYBRID]: 1.0, // Optimal for balanced engagements.
        [MapProperties.MODE.ESCORT]: 0.9, // Favors grouped team fights.
        [MapProperties.MODE.PUSH]: 0.8, // Acceptable; supports aggressive pushes.
        [MapProperties.MODE.CONTROL]: 0.7, // Less ideal if long-range standoffs isolate her.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Smaller maps let her rapid mobility shine.
        [MapProperties.SIZE.MEDIUM]: 0.9, // Medium maps are also good for her healing beam range.
        [MapProperties.SIZE.LARGE]: 0.6, // Large maps may stretch her support too thin.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Her teleport (Swift Step) and wall climb excel in flanking areas.
        [MapProperties.LAYOUT.OPEN]: 0.9, // Open areas offer clear lines for her healing beam.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7, // Some high ground is acceptable if teammates can support her.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5, // Choke maps may restrict her mobility.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines work well for both her kunai and healing beam.
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Long sightlines are useful but might isolate her from teammates.
        [MapProperties.SIGHTLINES.SHORT]: 0.7, // Too-short lines force her into unfavorable close combat.
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Moderate verticality supports her wall climb and teleport mechanics.
        [MapProperties.VERTICALITY.LOW]: 0.9,
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Excessive verticality may hamper her ability to quickly rejoin teammates.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover helps her avoid enemy fire without obstructing her healing beam.
        [MapProperties.COVER.HIGH]: 0.8, // High cover might block her projectiles if too dense.
        [MapProperties.COVER.MINIMAL]: 0.6, // Minimal cover leaves her exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Predictable terrain is ideal.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.6,
    },
  },
};

const Lifeweaver: Hero = {
  name: "Lifeweaver",
  role: "Support",
  health: 275,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Escort maps favor grouped team fights, maximizing his healing and utility.
        [MapProperties.MODE.CONTROL]: 0.95, // Control maps allow for steady, continuous healing opportunities.
        [MapProperties.MODE.PUSH]: 0.85, // Push maps work if the team stays together, though they can spread out.
        [MapProperties.MODE.HYBRID]: 0.8, // Hybrid modes are acceptable but less optimal.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Smaller maps promote concentrated team fights.
        [MapProperties.SIZE.MEDIUM]: 0.9, // Medium maps are also effective for keeping allies close.
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps can dilute his healing impact.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // High ground is key for his Petal Platform and repositioning.
        [MapProperties.LAYOUT.OPEN]: 0.9, // Open areas offer clear sightlines for his auto-targeting healing.
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8, // Flank-friendly maps are workable if he can quickly reposition.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy layouts can hinder his platform deployment.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines balance exposure and effective targeting for healing.
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Long sightlines may expose him to enemy fire.
        [MapProperties.SIGHTLINES.SHORT]: 0.7, // Too-short sightlines may limit his targeting range.
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // High verticality boosts his ability to leverage platforms and vertical mobility.
        [MapProperties.VERTICALITY.MEDIUM]: 0.9,
        [MapProperties.VERTICALITY.LOW]: 0.6, // Low verticality limits the value of his platform-based abilities.
      },
      weight: 1.0,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover offers protection while still allowing his abilities to connect.
        [MapProperties.COVER.HIGH]: 0.8, // Excessive cover might block his healing beams or platform deployment.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him too exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Predictable, hazard-free maps let him focus on healing and repositioning.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazardous areas can interrupt his abilities.
      },
      weight: 0.6,
    },
  },
};

const Lucio: Hero = {
  name: "Lúcio",
  role: "Support",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CONTROL]: 1.0, // Control maps allow for continuous team fights that let his healing aura shine.
        [MapProperties.MODE.ESCORT]: 0.95, // Escort maps favor grouped engagements, which work well with his mobility.
        [MapProperties.MODE.HYBRID]: 0.9, // Hybrid modes are good if teams stay together.
        [MapProperties.MODE.PUSH]: 0.8, // Push maps may be less ideal due to dispersed team positions.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.9, // Smaller maps keep allies close, maximizing his healing reach.
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium-sized maps offer a good balance between space and team cohesion.
        [MapProperties.SIZE.LARGE]: 0.8, // Larger maps can spread out teammates, limiting his aura’s effectiveness.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // Abundant walls and verticality enhance his Wall Ride and repositioning.
        [MapProperties.LAYOUT.OPEN]: 0.9, // Open areas allow clear lines for his Sonic Amplifier and healing aura.
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8, // Flank-friendly maps are viable if he can quickly reposition.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy layouts may restrict his mobility and line-of-sight.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines ensure his healing aura reaches allies while keeping exposure moderate.
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Long sightlines might expose him to enemy fire.
        [MapProperties.SIGHTLINES.SHORT]: 0.7, // Too-short sightlines could limit the effectiveness of his projectile-based damage.
      },
      weight: 1.0,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // High verticality maximizes his Wall Ride potential and access to elevated positions.
        [MapProperties.VERTICALITY.MEDIUM]: 0.9,
        [MapProperties.VERTICALITY.LOW]: 0.7, // Low verticality reduces his mobility options.
      },
      weight: 1.0,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover provides protection without blocking his healing aura.
        [MapProperties.COVER.HIGH]: 0.8, // Excessive cover might obstruct his line-of-sight for Crossfade.
        [MapProperties.COVER.MINIMAL]: 0.7, // Minimal cover leaves him overly exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments let him focus on healing and mobility.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazardous areas can disrupt his precise positioning.
      },
      weight: 0.8,
    },
  },
};

const Mercy = {
  name: "Mercy",
  role: "Support",
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Escort maps favor close-quarters team fighting, ideal for her Resurrect and Guardian Angel.
        [MapProperties.MODE.HYBRID]: 0.95, // Hybrid modes provide balanced engagements where Mercy can both heal and reposition.
        [MapProperties.MODE.CONTROL]: 0.9, // Control maps work well if teammates stick together.
        [MapProperties.MODE.PUSH]: 0.85, // Push maps may leave Mercy vulnerable if teammates are too spread out.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps offer the best balance between distance and team cohesion.
        [MapProperties.SIZE.LARGE]: 0.9, // Large maps can allow Mercy to stay safe, but risk isolating her.
        [MapProperties.SIZE.SMALL]: 0.8, // Small maps may force Mercy into cramped, high-threat situations.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open areas support long-range beam connections.
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.9, // Flank-friendly layouts help her quickly use Guardian Angel.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // Some high ground is useful for repositioning, though it might block beam line-of-sight.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.7, // Choke-heavy maps can force Mercy into dangerous positions.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines help maintain stable beam connections.
        [MapProperties.SIGHTLINES.SHORT]: 0.8, // Short sightlines are acceptable if teammates are nearby.
        [MapProperties.SIGHTLINES.LONG]: 0.7, // Very long sightlines may expose Mercy to enemy fire.
      },
      weight: 1.0,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Moderate verticality aids in using Guardian Angel effectively.
        [MapProperties.VERTICALITY.HIGH]: 0.9, // High verticality can provide cover but may sometimes separate teammates.
        [MapProperties.VERTICALITY.LOW]: 0.8, // Low verticality limits options for repositioning.
      },
      weight: 1.0,
    },
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Ample cover is critical to keep Mercy safe while she heals.
        [MapProperties.COVER.MODERATE]: 0.9, // Moderate cover is ideal for balancing safety and beam connectivity.
        [MapProperties.COVER.MINIMAL]: 0.7, // Minimal cover leaves Mercy highly vulnerable.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free zones let Mercy focus on healing without interruption.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4, // Hazardous areas can disrupt her precise positioning.
      },
      weight: 0.8,
    },
  },
};

const Moira = {
  name: "Moira",
  role: "Support",
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Escort maps allow for sustained, close-quarter team fights ideal for her AoE healing/damage.
        [MapProperties.MODE.CONTROL]: 0.8, // Control maps favor grouped engagements where her abilities shine.
        [MapProperties.MODE.PUSH]: 0.6, // Push maps tend to be more open, which can reduce the effectiveness of her bouncing orbs.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Smaller maps benefit her short-range healing and orb bounce mechanics.
        [MapProperties.SIZE.MEDIUM]: 0.9,
        [MapProperties.SIZE.LARGE]: 0.5, // Large maps can disperse teams, making her healing less efficient.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Choke points favor her sustained AoE healing and damage.
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8, // Provides opportunities for using Fade to reposition.
        [MapProperties.LAYOUT.OPEN]: 0.6, // Open layouts can be less ideal for her orb mechanics.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Short sightlines suit her Biotic Grasp's close-range effectiveness.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Long sightlines may force her too far from teammates.
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Low verticality helps her orb bouncing and ability management.
        [MapProperties.VERTICALITY.MEDIUM]: 0.8,
        [MapProperties.VERTICALITY.HIGH]: 0.5, // Excessive verticality can disrupt her line-of-sight for healing.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover lets her safely heal without fully obstructing her abilities.
        [MapProperties.COVER.HIGH]: 0.7, // Too much cover may block her healing beams.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves her exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Predictable, hazard-free environments suit her channeling abilities.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazardous maps risk interrupting her abilities.
      },
      weight: 0.6,
    },
  },
};

export {
  Ramattra,
  Sigma,
  WreckingBall,
  Mei,
  Reaper,
  Ashe,
  Ana,
  Juno,
  Zenyatta,
  Baptiste,
  Brigitte,
  Illari,
  Kiriko,
  Lifeweaver,
  Moira,
  Lucio,
  Mercy,
  Bastion,
  Cassidy,
  Hazard,
  Doomfist,
  DVa,
  Widowmaker,
  Venture,
  Tracer,
  Torbjorn,
  Sombra,
  Soldier76,
  Sojourn,
  Pharah,
  Junkrat,
  Hanzo,
  Genji,
  Echo,
  Mauga,
};
