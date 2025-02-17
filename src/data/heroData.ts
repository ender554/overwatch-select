import { Hero } from "../types/heroTypes";
import { MapProperties } from "./mapProperties";
const DVa: Hero = {
  name: "D.Va",
  role: "Tank",
  health: 225,
  // D.Va excels in fast, close‐range brawls and protecting her team with mobility and projectile negation.
  preferredProperties: {
    mode: {
      // She thrives in game modes that force close engagements, such as Escort and Push.
      options: {
        [MapProperties.MODE.CONTROL]: 0.7,
        [MapProperties.MODE.ESCORT]: 1.0,
        [MapProperties.MODE.HYBRID]: 0.8,
        [MapProperties.MODE.PUSH]: 0.9,
      },
      weight: 1.0,
    },
    size: {
      // Smaller maps favor her need to engage at close range, while large maps can be less ideal.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts allow D.Va to use her Boosters and Defense Matrix to protect key routes.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8,
        [MapProperties.LAYOUT.OPEN]: 0.5,
      },
      weight: 1.0,
    },
    verticality: {
      // Moderate verticality gives her opportunities to dive and reposition, though extreme heights aren’t required.
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0,
        [MapProperties.VERTICALITY.HIGH]: 0.8,
        [MapProperties.VERTICALITY.LOW]: 0.6,
      },
      weight: 0.8,
    },
    cover: {
      // Moderate cover works best—enough to protect her pilot form without preventing her aggressive mech engagements.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.7,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 0.9,
    },
    sightlines: {
      // Short sightlines favor her close-range burst damage; long sightlines can hamper her ability to dive in.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.4,
      },
      weight: 1.0,
    },
  },
};

const Doomfist: Hero = {
  name: "Doomfist",
  role: "Tank",
  health: 375,
  preferredProperties: {
    mode: {
      // Doomfist excels when he’s forced into close-quarters combat
      options: {
        [MapProperties.MODE.ESCORT]: 0.9,
        [MapProperties.MODE.HYBRID]: 0.8,
        [MapProperties.MODE.PUSH]: 0.7,
        [MapProperties.MODE.CONTROL]: 0.6,
      },
      weight: 1.0,
    },
    size: {
      // Smaller maps favor his close-range, high-impact abilities
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts allow him to force close engagements
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8,
        [MapProperties.LAYOUT.OPEN]: 0.4,
      },
      weight: 1.2,
    },
    sightlines: {
      // Short sightlines maximize his close-range burst potential
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.6,
        [MapProperties.SIGHTLINES.LONG]: 0.3,
      },
      weight: 1.5,
    },
    verticality: {
      // Moderate verticality is best: enough for repositioning but not so high that fights become long-range
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0,
        [MapProperties.VERTICALITY.LOW]: 0.8,
        [MapProperties.VERTICALITY.HIGH]: 0.5,
      },
      weight: 1.0,
    },
    cover: {
      // Moderate cover gives him protection without overly hindering his mobility
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Predictable environments (i.e. few hazards) help him control engagements
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.5,
    },
  },
};

const Hazard: Hero = {
  name: "Hazard",
  role: "Tank",
  health: 275,
  armor: 225,
  preferredProperties: {
    mode: {
      // Hazard’s kit rewards aggressive, close-quarters dives with his mobility.
      options: {
        [MapProperties.MODE.ESCORT]: 0.8,
        [MapProperties.MODE.HYBRID]: 0.9,
        [MapProperties.MODE.PUSH]: 0.85,
        [MapProperties.MODE.CONTROL]: 0.5,
      },
      weight: 1.0,
    },
    size: {
      // Smaller maps favor his ability to engage quickly, while very large maps may limit his close-range impact.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.4,
      },
      weight: 1.0,
    },
    layout: {
      // Dynamic layouts with ample flank and high-ground opportunities help him use his Vault and leap-based abilities.
      options: {
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8,
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.7,
        [MapProperties.LAYOUT.OPEN]: 0.5,
      },
      weight: 1.0,
    },
    sightlines: {
      // His damage falls off at long range, so shorter sightlines are ideal.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.3,
      },
      weight: 1.2,
    },
    verticality: {
      // With Vault and Violent Leap, Hazard benefits from maps that offer moderate to high verticality.
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.8,
        [MapProperties.VERTICALITY.LOW]: 0.5,
      },
      weight: 1.0,
    },
    cover: {
      // While cover can help him mitigate damage with Spike Guard, too much may limit his mobility.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.MINIMAL]: 0.7,
        [MapProperties.COVER.HIGH]: 0.6,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Hazard’s abilities can benefit from areas with additional knockback or “boop potential.”
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 0.8,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 1.0,
      },
      weight: 0.5,
    },
  },
};

const Mauga: Hero = {
  name: "Mauga",
  role: "Tank",
  health: 425,
  armor: 150,
  preferredProperties: {
    mode: {
      // Mauga excels on maps that foster close-quarters brawls and sustained frontline engagements.
      options: {
        [MapProperties.MODE.ESCORT]: 0.8,
        [MapProperties.MODE.HYBRID]: 1.0,
        [MapProperties.MODE.PUSH]: 0.6,
        [MapProperties.MODE.CONTROL]: 0.8,
      },
      weight: 1.0,
    },
    size: {
      // Smaller and medium-sized maps are ideal for Mauga's in-your-face, brawler playstyle.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.9,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts favor his ability to trap enemies with Cage Fight and brawl in tight spaces.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.OPEN]: 0.7,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.6,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5,
      },
      weight: 1.2,
    },
    sightlines: {
      // Mauga thrives in close-range combat, so short sightlines maximize his damage output.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.3,
      },
      weight: 1.5,
    },
    verticality: {
      // Low verticality keeps engagements on a flat plane, suiting Mauga’s brawler style.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.3,
      },
      weight: 0.8,
    },
    cover: {
      // Moderate cover is useful so he can absorb incoming fire while brawling up close.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.7,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // A predictable environment lets Mauga focus on his aggressive, close-quarters play.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.5,
    },
  },
};

const Ramattra: Hero = {
  name: "Ramattra",
  role: "Tank",
  health: 500,
  preferredProperties: {
    mode: {
      // Ramattra thrives in maps with sustained close engagements.
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Ideal for continuous team fights.
        [MapProperties.MODE.HYBRID]: 0.9, // Also favorable.
        [MapProperties.MODE.PUSH]: 0.7, // Acceptable, though less optimal.
        [MapProperties.MODE.CONTROL]: 0.4, // Least preferred due to long-range disengagement.
      },
      weight: 1.0,
    },
    size: {
      // Medium maps allow for balanced engagements.
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0,
        [MapProperties.SIZE.LARGE]: 0.8,
        [MapProperties.SIZE.SMALL]: 0.6,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts favor his melee Nemesis form.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8,
        [MapProperties.LAYOUT.OPEN]: 0.5,
      },
      weight: 1.2,
    },
    sightlines: {
      // Shorter sightlines maximize his close-combat potential.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.4,
      },
      weight: 1.5,
    },
    verticality: {
      // Lower verticality helps ensure engagements stay close.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.4,
      },
      weight: 0.8,
    },
    cover: {
      // Moderate cover is ideal—enough to shield him but not hinder his melee approach.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Extra hazards can disrupt his ability to engage effectively.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.5,
    },
  },
};

const Sigma: Hero = {
  name: "Sigma",
  role: "Tank",
  health: 625,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.9, // Works well on Escort maps
        [MapProperties.MODE.HYBRID]: 1.0, // Ideal for balanced, open engagements
        [MapProperties.MODE.PUSH]: 0.8, // Acceptable if the pace is steady
        [MapProperties.MODE.CONTROL]: 0.6, // Less optimal due to tighter spaces
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.LARGE]: 1.0, // Large maps favor his projectile play
        [MapProperties.SIZE.MEDIUM]: 0.9,
        [MapProperties.SIZE.SMALL]: 0.4, // Too confined spaces hinder his kit
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts let his projectiles bounce and his flux work effectively
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7,
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.4, // Chokes restrict his long-range abilities
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Long sightlines maximize his range poke
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.SHORT]: 0.5,
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.8,
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Balanced verticality lets him control space well
        [MapProperties.VERTICALITY.LOW]: 0.6,
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MINIMAL]: 1.0, // Minimal cover favors his projectile arc and open-fire play
        [MapProperties.COVER.MODERATE]: 0.8,
        [MapProperties.COVER.HIGH]: 0.5, // Too much cover can block his abilities
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // No hazards is best to avoid interference
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4,
      },
      weight: 0.7,
    },
  },
};

const WreckingBall: Hero = {
  name: "Wrecking Ball",
  role: "Tank",
  health: 775,
  preferredProperties: {
    // Wrecking Ball thrives in maps that allow him to use his mobility and disruption
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.7, // He can contest payloads, but sometimes gets too exposed.
        [MapProperties.MODE.HYBRID]: 0.9, // Balanced engagements work well with his kit.
        [MapProperties.MODE.PUSH]: 1.0, // Ideal for aggressive, close-quarters brawls.
        [MapProperties.MODE.CONTROL]: 0.6, // Choke points help him, but very tight areas might limit his mobility.
      },
      weight: 1.0,
    },
    // Wrecking Ball’s disruptive play is best in medium to small maps where he can quickly traverse and disrupt enemies.
    size: {
      options: {
        [MapProperties.SIZE.LARGE]: 0.6, // On very large maps, his close-range tools are less impactful.
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal for his hit-and-run, disruptive style.
        [MapProperties.SIZE.SMALL]: 1.0, // Tight spaces favor his mobility and area denial.
      },
      weight: 1.0,
    },
    // Maps with natural chokepoints or confined spaces let him use his grappling, Piledriver, and Minefield more effectively.
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 0.6, // Open layouts can expose him to long-range damage.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Ideal for close engagements and disruptive plays.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7, // Some verticality can help but too many high places may work against him.
      },
      weight: 1.0,
    },
    // His abilities work best when engagements are at close-to-mid range.
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 0.4, // Long sightlines reduce his effectiveness.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Short sightlines maximize his disruptive, close-range impact.
      },
      weight: 1.2,
    },
    // Verticality gives him opportunities to use his grappling and Piledriver; however, very high verticality might be a double-edged sword.
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.8,
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Balanced verticality is ideal.
        [MapProperties.VERTICALITY.LOW]: 1.0,
      },
      weight: 1.0,
    },
    // Moderate cover is best; too much cover can limit his mobility, but some cover helps him avoid open fire.
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 0.7, // Excessive cover can impede his movement.
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.MINIMAL]: 0.9, // Slightly less ideal if there's no cover at all.
      },
      weight: 1.0,
    },
    // Wrecking Ball can sometimes use environmental hazards to his advantage (for example, bouncing off surfaces), so a bit of "boop potential" is acceptable.
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 0.8,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 1.0,
      },
      weight: 0.8,
    },
  },
};

const Reaper: Hero = {
  name: "Reaper",
  role: "Damage",
  health: 300,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.CLASH]: 1.0, // Reaper excels in maps that force close combat.
        [MapProperties.MODE.ESCORT]: 0.7, // Escort maps are acceptable but less ideal.
        [MapProperties.MODE.HYBRID]: 0.5, // Hybrid maps are the least preferred for him.
      },
      weight: 1.0, // This category is quite important.
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Reaper thrives on small, confined maps.
        [MapProperties.SIZE.MEDIUM]: 0.7,
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Choke-heavy layouts suit his short-range ambush style.
        [MapProperties.LAYOUT.OPEN]: 0.6,
      },
      weight: 1.2,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Short sightlines maximize his effectiveness at close range.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Moderate verticality is preferable for his flanking.
        [MapProperties.VERTICALITY.HIGH]: 0.6,
      },
      weight: 0.7,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover is ideal – enough protection without hindering his mobility.
        [MapProperties.COVER.MINIMAL]: 0.8,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // He prefers maps without extra hazards.
      },
      weight: 0.6,
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
        [MapProperties.MODE.ESCORT]: 1.0, // Ashe thrives on Escort maps
        [MapProperties.MODE.HYBRID]: 0.8, // Hybrid maps are acceptable too
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium-sized maps suit her long-range play
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps are less optimal
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts favor her sniping ADS mode
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // High ground offers good vantage but can be risky
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Long sightlines maximize her precision shots
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // High verticality helps her find elevated sniping positions
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover allows her to reposition safely without obstructing sightlines
        [MapProperties.COVER.HIGH]: 0.6,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // She prefers maps without extra hazards
      },
      weight: 0.7,
    },
  },
};

const Bastion: Hero = {
  name: "Bastion",
  role: "Damage",
  health: 350,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Escort maps allow him to set up behind cover near the payload.
        [MapProperties.MODE.HYBRID]: 0.8, // Balanced engagements are acceptable.
        [MapProperties.MODE.PUSH]: 0.5, // Push maps tend to be more open and expose his low mobility.
        [MapProperties.MODE.CONTROL]: 0.4, // Control maps, with their open spaces, are less ideal.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps are ideal for his stationary turret play.
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps may leave him isolated.
        [MapProperties.SIZE.SMALL]: 0.5, // Very small maps force too-close engagements.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Choke-heavy layouts help Bastion set up in a narrow field.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7, // Some high ground can be beneficial if it provides cover.
        [MapProperties.LAYOUT.OPEN]: 0.4, // Open layouts expose him to flanking.
      },
      weight: 1.2,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are optimal for his turret mode.
        [MapProperties.SIGHTLINES.SHORT]: 0.8, // Slightly shorter sightlines are acceptable.
        [MapProperties.SIGHTLINES.LONG]: 0.4, // Long sightlines can reduce his effectiveness.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Low verticality helps keep engagements at a range he can handle.
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.4, // High verticality may force him into unfavorable angles.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover is ideal so he can hide his vulnerable flank.
        [MapProperties.COVER.HIGH]: 0.8, // High cover is acceptable if it doesn’t obstruct his firing line.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him too exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments let him focus on dealing damage.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazards can disrupt his stationary play.
      },
      weight: 0.5,
    },
  },
};

const Cassidy: Hero = {
  name: "Cassidy",
  role: "Damage",
  health: 275,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.8, // Escort maps offer cover and balanced engagements.
        [MapProperties.MODE.HYBRID]: 1.0, // Hybrid maps are ideal for his medium-range duels.
        [MapProperties.MODE.PUSH]: 0.6, // Push maps may expose him due to open terrain.
        [MapProperties.MODE.CONTROL]: 0.5, // Control maps, with extended range, are less favorable.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps allow balanced engagements.
        [MapProperties.SIZE.SMALL]: 0.8, // Small maps can favor his burst damage if he can close in.
        [MapProperties.SIZE.LARGE]: 0.5, // Large maps are too open for his limited mobility.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 0.8, // Open layouts provide clear lines of sight but offer little cover.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy layouts restrict movement, but can offer ambush opportunities.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7, // High ground can be beneficial if it provides vantage without overexposure.
      },
      weight: 1.1,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are optimal for his hitscan accuracy.
        [MapProperties.SIGHTLINES.SHORT]: 0.8, // Short sightlines work well, though too close can hinder his aim.
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Long sightlines are less effective due to damage falloff.
      },
      weight: 1.3,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Low verticality ensures engagements remain in his optimal range.
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.4, // High verticality forces unfavorable angles.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover is ideal for Cassidy to find safe firing positions.
        [MapProperties.COVER.HIGH]: 0.7, // Excessive cover may obstruct his line of sight.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments are best for his straightforward engagement style.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazards can disrupt his positioning.
      },
      weight: 0.5,
    },
  },
};

const Echo: Hero = {
  name: "Echo",
  role: "Damage",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.7, // Escort maps might constrain her flight and adaptability.
        [MapProperties.MODE.HYBRID]: 1.0, // Hybrid maps provide balanced engagements for her versatile kit.
        [MapProperties.MODE.PUSH]: 0.8, // Push maps allow her to utilize her speed but can be too open.
        [MapProperties.MODE.CONTROL]: 0.5, // Control maps are less ideal due to confined spaces.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps offer a balanced arena for her mobility.
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps can expose her despite her agility.
        [MapProperties.SIZE.SMALL]: 0.8, // Small maps promote quick repositioning but may be cluttered.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts maximize her ability to fly and strike from unexpected angles.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy layouts might limit her maneuverability.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // Elevated positions offer good vantage without overexposing her.
      },
      weight: 1.2,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.8, // Short sightlines support rapid, close engagements.
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are optimal for abilities like Focusing Beam.
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Long sightlines reduce the burst potential of her kit.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 0.7, // Low verticality limits her aerial advantage.
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Medium verticality provides balanced engagement opportunities.
        [MapProperties.VERTICALITY.HIGH]: 0.8, // High verticality can be advantageous, though it carries some risk.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover gives her opportunities to reposition without obstructing her view.
        [MapProperties.COVER.HIGH]: 0.8, // High cover might block her line of sight for key abilities.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves her exposed despite her mobility.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free maps let her focus on offensive maneuvers.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazards can disrupt her adaptive flight.
      },
      weight: 0.5,
    },
  },
};

const Genji: Hero = {
  name: "Genji",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.8, // Escort maps favor flanking opportunities for his agile kit.
        [MapProperties.MODE.HYBRID]: 1.0, // Hybrid maps provide balanced conditions for his mix of ranged and melee.
        [MapProperties.MODE.PUSH]: 0.7, // Push maps can leave him more exposed.
        [MapProperties.MODE.CONTROL]: 0.5, // Control maps may restrict his mobility.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Small maps favor his speed and vertical mobility.
        [MapProperties.SIZE.MEDIUM]: 0.8, // Medium maps are generally balanced for him.
        [MapProperties.SIZE.LARGE]: 0.6, // Large maps might diminish his impact due to increased distances.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts allow him to use his mobility fully.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy layouts can limit his movement options.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // High ground can benefit his vertical agility.
      },
      weight: 1.2,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.8, // Short sightlines suit his close-range burst potential.
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are optimal for his shuriken range.
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Long sightlines reduce his effectiveness.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 0.7, // Low verticality limits his aerial advantage.
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Medium verticality is ideal for his mix of aerial and ground engagements.
        [MapProperties.VERTICALITY.HIGH]: 0.8, // High verticality offers opportunities but can also overexpose him.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover works well with his hit-and-run tactics.
        [MapProperties.COVER.HIGH]: 0.8, // High cover might block his line of sight for projectiles.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him vulnerable despite his mobility.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free maps let him focus on offense.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazards can disrupt his quick movements.
      },
      weight: 0.5,
    },
  },
};

const Hanzo: Hero = {
  name: "Hanzo",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.9, // Escort maps can offer flank opportunities but also expose him if enemies cluster.
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced maps suit his mix of long-range sniping and mobility.
        [MapProperties.MODE.PUSH]: 0.7, // Push maps might force him into unfavorable close encounters.
        [MapProperties.MODE.CONTROL]: 0.5, // Control maps may restrict his ability to charge his Storm Bow.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Smaller maps favor his mobility and quick repositioning.
        [MapProperties.SIZE.MEDIUM]: 0.8, // Medium maps are generally balanced for him.
        [MapProperties.SIZE.LARGE]: 0.6, // Large maps can diminish his effectiveness at long range.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts allow him to fully utilize his long-range abilities.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.6, // Choke-heavy areas may limit his mobility and arrow trajectory.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // High ground offers verticality for his wall climb.
      },
      weight: 1.2,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.6, // Short sightlines can limit the travel time for his arrows.
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Medium sightlines are ideal for his Storm Bow and Sonic Arrow.
        [MapProperties.SIGHTLINES.LONG]: 0.7, // Long sightlines slightly reduce his projectile impact.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 0.7, // Less vertical maps reduce his wall-climbing and lunge opportunities.
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Medium verticality is optimal for his kit.
        [MapProperties.VERTICALITY.HIGH]: 0.8, // Excessive verticality might expose him too much.
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover helps him reposition and aim his arrows.
        [MapProperties.COVER.HIGH]: 0.8, // High cover can block his line of sight.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him more exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments let him focus on his sniping.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4, // Hazards can disrupt his arrow flight and mobility.
      },
      weight: 0.5,
    },
  },
};

const Junkrat: Hero = {
  name: "Junkrat",
  role: "Damage",
  health: 250,
  // These properties indicate which types of maps or environments best suit Junkrat’s kit
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.8, // In Escort maps, his area-denial can be very disruptive.
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced maps suit his mix of indirect fire and trap-based play.
        [MapProperties.MODE.PUSH]: 1.0, // Push maps favor his explosive clearing potential.
        [MapProperties.MODE.CONTROL]: 0.7, // Control maps, which often reward precision, may be less ideal.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Smaller maps allow him to quickly saturate areas with traps and explosives.
        [MapProperties.SIZE.MEDIUM]: 0.9,
        [MapProperties.SIZE.LARGE]: 0.7, // In larger maps his slower projectile speed can be a drawback.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 0.8, // Open layouts make his bouncing grenades a bit less predictable.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0, // Choke points favor his trap and mine setups.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.6, // High verticality can limit his effective range.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Short sightlines allow his indirect fire to better control small areas.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.LONG]: 0.5, // Long sightlines may hinder his ability to land bouncing projectiles.
      },
      weight: 1.2,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Junkrat’s explosives are best used on flat terrain.
        [MapProperties.VERTICALITY.MEDIUM]: 0.8,
        [MapProperties.VERTICALITY.HIGH]: 0.6,
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover helps him set traps and control choke points.
        [MapProperties.COVER.HIGH]: 0.7, // Excessive cover can block his indirect fire.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves him exposed to enemy counterattacks.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments allow him to roam and set up traps.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4, // Areas with lots of hazards can disrupt his bouncing projectiles.
      },
      weight: 0.5,
    },
  },
};

const Mei: Hero = {
  name: "Mei",
  role: "Damage",
  health: 300,
  preferredProperties: {
    mode: {
      // Mei excels in maps that force close engagements, where she can maximize her slowing and zone control.
      options: {
        [MapProperties.MODE.HYBRID]: 1.0, // Ideal: Hybrid maps with tight corridors
        [MapProperties.MODE.CONTROL]: 0.7, // Also works well, though slightly less optimal
        [MapProperties.MODE.ESCORT]: 0.5, // Least preferred for her kit
      },
      weight: 1.0,
    },
    size: {
      // Smaller maps favor her close-range, defensive style.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.7,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts give Mei the confined spaces to leverage her Ice Wall and slowing beam.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.5,
        [MapProperties.LAYOUT.OPEN]: 0.3,
      },
      weight: 1.5,
    },
    sightlines: {
      // Shorter sightlines maximize her damage output and make it easier to land her icicles.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.3,
      },
      weight: 1.5,
    },
    verticality: {
      // Lower verticality is preferable for a hero that thrives in close combat.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.3,
      },
      weight: 1.0,
    },
    cover: {
      // Moderate cover lets her both engage and retreat safely.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.7,
        [MapProperties.COVER.MINIMAL]: 0.3,
      },
      weight: 0.8,
    },
    environmentalHazards: {
      // Mei prefers maps without additional hazards that might disrupt her abilities.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.2,
    },
  },
};

const Pharah: Hero = {
  name: "Pharah",
  role: "Damage",
  health: 225,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Ideal for payload maps that allow her aerial assault.
        [MapProperties.MODE.HYBRID]: 0.9, // Balanced engagements work well.
        [MapProperties.MODE.PUSH]: 0.8, // Open pushes are viable though more exposing.
        [MapProperties.MODE.CONTROL]: 0.4, // Control maps restrict her aerial mobility.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.LARGE]: 0.8, // Large maps can be too open.
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps offer the best balance.
        [MapProperties.SIZE.SMALL]: 0.6, // Small maps force close engagements.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts let her use her jet mobility fully.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.9, // Elevated positions offer good vantage.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5, // Choke points restrict her flight and positioning.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 0.8, // Long sightlines are useful, but she’s vulnerable to hitscan.
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0, // Optimal for her rocket-based damage.
        [MapProperties.SIGHTLINES.SHORT]: 0.5, // Short sightlines reduce her ability to land long-range shots.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Maximizes her aerial advantage.
        [MapProperties.VERTICALITY.MEDIUM]: 0.8, // Balanced verticality is acceptable.
        [MapProperties.VERTICALITY.LOW]: 0.4, // Low verticality undermines her flight potential.
      },
      weight: 1.0,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Offers protection without obstructing her rockets.
        [MapProperties.COVER.HIGH]: 0.8, // Too much cover can limit her line of sight.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves her exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // No hazards let her focus on offense.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Hazards can disrupt her aerial maneuvers.
      },
      weight: 0.5,
    },
  },
};

const Sojourn: Hero = {
  name: "Sojourn",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.8, // Escort maps provide ample opportunities for mid‐range engagements.
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced maps are ideal for her versatile kit.
        [MapProperties.MODE.PUSH]: 0.7, // Push maps can work, though they might expose her to long-range pressure.
        [MapProperties.MODE.CONTROL]: 0.5, // Control maps tend to restrict her railgun’s full potential.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.LARGE]: 0.7, // Large maps can feel too open for her precision shots.
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps provide the best balance for her mid‐range artillery.
        [MapProperties.SIZE.SMALL]: 0.6, // Small maps may force overly close engagements.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts let her railgun fire freely.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.9, // Elevated positions offer extra vantage without over-cluttering.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5, // Choke-heavy layouts can limit her ability to maneuver and line up shots.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Long sightlines maximize her potential for high-powered shots.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8, // Medium sightlines are optimal for her balanced fire.
        [MapProperties.SIGHTLINES.SHORT]: 0.4, // Short sightlines reduce her effectiveness at range.
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 0.8, // High verticality offers great aerial mobility, though too much may overexpose her.
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Balanced verticality complements her power slide and railgun precision.
        [MapProperties.VERTICALITY.LOW]: 0.5, // Low verticality limits her ability to leverage high-ground advantages.
      },
      weight: 1.0,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover provides protection without obstructing her firing lanes.
        [MapProperties.COVER.HIGH]: 0.7, // Excessive cover might block her line of sight.
        [MapProperties.COVER.MINIMAL]: 0.5, // Minimal cover leaves her exposed.
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free environments let her focus on precision.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3, // Extra hazards can disrupt her railgun shots.
      },
      weight: 0.5,
    },
  },
};

const Soldier76: Hero = {
  name: "Soldier: 76",
  role: "Damage",
  health: 250,
  preferredProperties: {
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 1.0, // Ideal for sustained engagements and team pushes.
        [MapProperties.MODE.HYBRID]: 0.9, // Versatile for balanced map types.
        [MapProperties.MODE.PUSH]: 0.7, // Open maps can expose him but still work with his kit.
        [MapProperties.MODE.CONTROL]: 0.6, // Control maps may restrict his optimal firing range.
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps balance spacing and cover.
        [MapProperties.SIZE.SMALL]: 0.9, // Smaller maps favor closer engagements.
        [MapProperties.SIZE.LARGE]: 0.6, // Large maps may leave him exposed to long-range fire.
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 0.9, // Open layouts maximize his hitscan potential.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // High ground offers extra vantage yet moderate cover.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.7, // Choke-heavy areas provide cover but may limit mobility.
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Long sightlines enhance his precise, hitscan shots.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.SHORT]: 0.5,
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Limited vertical mobility makes lower verticality preferable.
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.4,
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Moderate cover offers protection without obstructing sightlines.
        [MapProperties.COVER.HIGH]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.6,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Hazard-free areas let him focus on damage output.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4, // Extra hazards can disrupt his steady firing.
      },
      weight: 0.5,
    },
  },
};

const Sombra: Hero = {
  name: "Sombra",
  role: "Damage",
  health: 225,
  preferredProperties: {
    mode: {
      // Sombra thrives in maps that offer plenty of opportunities to infiltrate and flank.
      options: {
        [MapProperties.MODE.ESCORT]: 0.8,
        [MapProperties.MODE.HYBRID]: 1.0,
        [MapProperties.MODE.PUSH]: 0.7,
        [MapProperties.MODE.CONTROL]: 0.6,
      },
      weight: 1.0,
    },
    size: {
      // Compact maps help Sombra close in on targets quickly.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy and flank-friendly layouts favor her stealth and hacking playstyle.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.9,
        [MapProperties.LAYOUT.OPEN]: 0.6,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.5,
      },
      weight: 1.2,
    },
    sightlines: {
      // Shorter sightlines improve her ability to pick off targets at close range.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.4,
      },
      weight: 1.5,
    },
    verticality: {
      // Low verticality is ideal for her stealth and backline penetration.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.3,
      },
      weight: 0.8,
    },
    cover: {
      // High cover is key for Sombra to remain hidden while setting up hacks.
      options: {
        [MapProperties.COVER.HIGH]: 1.0,
        [MapProperties.COVER.MODERATE]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Predictable, hazard-free environments help her focus on hacking without extra interference.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4,
      },
      weight: 0.5,
    },
  },
};

const Torbjorn: Hero = {
  name: "Torbjörn",
  role: "Damage",
  health: 225,
  armor: 75,
  preferredProperties: {
    mode: {
      // Torbjörn thrives on defensive setups where his turret can control key choke points.
      options: {
        [MapProperties.MODE.ESCORT]: 1.0,
        [MapProperties.MODE.HYBRID]: 0.8,
        [MapProperties.MODE.PUSH]: 0.6,
        [MapProperties.MODE.CONTROL]: 0.9,
      },
      weight: 1.2,
    },
    size: {
      // Smaller to medium maps allow for optimal turret placement and defensive positioning.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.9,
        [MapProperties.SIZE.LARGE]: 0.4,
      },
      weight: 1.0,
    },
    layout: {
      // Choke-heavy layouts benefit Torbjörn’s turret zoning and his own defensive fire.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.OPEN]: 0.5,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.7,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.4,
      },
      weight: 1.2,
    },
    sightlines: {
      // Medium-range sightlines favor his long-ranged Rivet Gun while keeping engagements in his turret’s zone.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5,
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0,
        [MapProperties.SIGHTLINES.LONG]: 0.7,
      },
      weight: 1.0,
    },
    verticality: {
      // Low verticality maps keep engagements on a flat plane, ideal for stationary turret setups.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.8,
        [MapProperties.VERTICALITY.HIGH]: 0.4,
      },
      weight: 0.8,
    },
    cover: {
      // Moderate cover is best for Torbjörn so that his turret can be shielded while he himself remains relatively safe.
      options: {
        [MapProperties.COVER.MODERATE]: 1.0,
        [MapProperties.COVER.HIGH]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.5,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Predictable, hazard-free environments let Torbjörn focus on precise turret placement.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.3,
      },
      weight: 0.5,
    },
  },
};

const Tracer: Hero = {
  name: "Tracer",
  role: "Damage",
  health: 175,
  preferredProperties: {
    mode: {
      // Tracer excels on fast-paced, open maps that reward mobility and quick engagements.
      options: {
        [MapProperties.MODE.PUSH]: 1.0,
        [MapProperties.MODE.ESCORT]: 0.9,
        [MapProperties.MODE.HYBRID]: 0.8,
        [MapProperties.MODE.CONTROL]: 0.6,
      },
      weight: 1.1,
    },
    size: {
      // Smaller maps favor Tracer's Blink and Recall, allowing her to quickly traverse and flank.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.5,
      },
      weight: 1.0,
    },
    layout: {
      // Open layouts with few choke points let Tracer use her mobility to full effect.
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.9,
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5,
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.6,
      },
      weight: 1.0,
    },
    sightlines: {
      // Medium-to-long sightlines allow Tracer to pick off targets at close range while avoiding danger.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 0.5,
        [MapProperties.SIGHTLINES.MEDIUM]: 1.0,
        [MapProperties.SIGHTLINES.LONG]: 0.8,
      },
      weight: 0.9,
    },
    verticality: {
      // Tracer’s limited vertical mobility makes low-verticality maps ideal.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.6,
        [MapProperties.VERTICALITY.HIGH]: 0.3,
      },
      weight: 0.8,
    },
    cover: {
      // While cover can be useful, Tracer prefers minimal cover to maximize her ability to engage and disengage.
      options: {
        [MapProperties.COVER.MINIMAL]: 1.0,
        [MapProperties.COVER.MODERATE]: 0.7,
        [MapProperties.COVER.HIGH]: 0.4,
      },
      weight: 1.0,
    },
    environmentalHazards: {
      // Tracer’s speed lets her dodge hazards, so predictable environments are best.
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0,
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.6,
      },
      weight: 0.7,
    },
  },
};

const Venture: Hero = {
  name: "Venture",
  role: "Damage",
  health: 250,
  // As an agile, combo‐oriented, close‐range damage dealer, Venture excels on maps that force
  // close engagements and reward mobility.
  preferredProperties: {
    mode: {
      // Venture thrives in modes where teams frequently contest areas and engage at close range.
      options: {
        [MapProperties.MODE.ESCORT]: 1.0,
        [MapProperties.MODE.PUSH]: 0.9,
        [MapProperties.MODE.HYBRID]: 0.8,
        [MapProperties.MODE.CONTROL]: 0.6,
      },
      weight: 1.0,
    },
    size: {
      // Smaller maps favor Venture’s aggressive, close-quarters combat style.
      options: {
        [MapProperties.SIZE.SMALL]: 1.0,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 0.4,
      },
      weight: 1.0,
    },
    layout: {
      // Choke points and flanking opportunities allow Venture to maximize the impact of abilities
      // like Burrow and Drill Dash.
      options: {
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.9,
        [MapProperties.LAYOUT.OPEN]: 0.7,
      },
      weight: 1.0,
    },
    verticality: {
      // Low verticality helps keep encounters on a single plane so Venture can reliably engage.
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.HIGH]: 0.4,
      },
      weight: 0.8,
    },
    cover: {
      // While cover is useful, Venture benefits from relatively open areas to use their mobility,
      // though some moderate cover can allow for safe burrow transitions.
      options: {
        [MapProperties.COVER.MINIMAL]: 1.0,
        [MapProperties.COVER.MODERATE]: 0.8,
        [MapProperties.COVER.HIGH]: 0.5,
      },
      weight: 0.9,
    },
    sightlines: {
      // Short sightlines are ideal for Venture, who excels in close-range skirmishes.
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
        [MapProperties.SIGHTLINES.LONG]: 0.3,
      },
      weight: 0.9,
    },
  },
};

const Widowmaker: Hero = {
  name: "Widowmaker",
  role: "Damage",
  health: 200,
  // As a long-range sniper and assassin, Widowmaker thrives on maps with extended sightlines and open, vertical environments.
  preferredProperties: {
    mode: {
      // Widowmaker excels in modes that reward static positioning and long-distance engagements.
      options: {
        [MapProperties.MODE.CONTROL]: 1.0,
        [MapProperties.MODE.ESCORT]: 0.8,
        [MapProperties.MODE.HYBRID]: 0.7,
        [MapProperties.MODE.PUSH]: 0.6,
      },
      weight: 1.0,
    },
    size: {
      // Large maps with long corridors and open spaces allow her sniper to shine.
      options: {
        [MapProperties.SIZE.SMALL]: 0.3,
        [MapProperties.SIZE.MEDIUM]: 0.8,
        [MapProperties.SIZE.LARGE]: 1.0,
      },
      weight: 1.0,
    },
    layout: {
      // Open layouts with unobstructed sightlines are ideal for Widowmaker.
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0,
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 0.8,
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.5,
      },
      weight: 1.0,
    },
    verticality: {
      // High verticality provides ample high-ground sniping opportunities.
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0,
        [MapProperties.VERTICALITY.MEDIUM]: 0.7,
        [MapProperties.VERTICALITY.LOW]: 0.3,
      },
      weight: 0.8,
    },
    cover: {
      // Minimal cover in enemy sightlines favors her long-range precision, though moderate cover can help her reposition.
      options: {
        [MapProperties.COVER.MINIMAL]: 1.0,
        [MapProperties.COVER.MODERATE]: 0.5,
        [MapProperties.COVER.HIGH]: 0.2,
      },
      weight: 0.9,
    },
    sightlines: {
      // Widowmaker relies on long, unobstructed sightlines to maximize her damage potential.
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0,
        [MapProperties.SIGHTLINES.MEDIUM]: 0.6,
        [MapProperties.SIGHTLINES.SHORT]: 0.2,
      },
      weight: 1.0,
    },
  },
};

const Ana: Hero = {
  name: "Ana",
  role: "Support",
  health: 250,
  preferredProperties: {
    // Mode: Ana thrives when she can safely snipe and support from long range,
    // but she’s vulnerable if forced into close-quarters.
    mode: {
      options: {
        [MapProperties.MODE.ESCORT]: 0.8, // Payloads offer open sightlines, but can leave her exposed.
        [MapProperties.MODE.HYBRID]: 1.0, // Balanced engagements let her utilize both healing and damage.
        [MapProperties.MODE.CONTROL]: 0.6, // Tight, contested spaces may force her into dangerous positions.
        [MapProperties.MODE.PUSH]: 0.7, // Some push maps work if there’s ample cover.
      },
      weight: 1.0,
    },
    // Size: Medium maps provide enough space for long-range sniping yet are not so large that she’s isolated.
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 0.7, // Very small maps can force close encounters.
        [MapProperties.SIZE.MEDIUM]: 1.0, // Optimal for maintaining safe distance while offering good sightlines.
        [MapProperties.SIZE.LARGE]: 0.8, // Large maps offer long sightlines, though may be too open at times.
      },
      weight: 1.0,
    },
    // Layout: Maps with high ground and open areas work best for her sniping, but she also needs cover.
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 0.7, // Open areas give good visibility but little protection.
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.8, // Some choke points help with cover, yet may restrict her view.
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 1.0, // High ground is ideal for long-range support.
      },
      weight: 1.0,
    },
    // Sightlines: As a sniper support, Ana benefits from long sightlines to make her scoped shots count.
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Maximizes her scoped, hitscan effectiveness.
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.SHORT]: 0.4, // Close quarters reduce her ability to snipe safely.
      },
      weight: 1.2,
    },
    // Verticality: High ground is key for a sniper—allowing her to find secure positions.
    verticality: {
      options: {
        [MapProperties.VERTICALITY.HIGH]: 1.0, // Ideal for finding elevated sniping spots.
        [MapProperties.VERTICALITY.MEDIUM]: 0.9,
        [MapProperties.VERTICALITY.LOW]: 0.5, // Low verticality may force her into exposed positions.
      },
      weight: 1.0,
    },
    // Cover: Adequate cover is essential for a support with low mobility.
    cover: {
      options: {
        [MapProperties.COVER.HIGH]: 1.0, // Ample cover helps hide her position.
        [MapProperties.COVER.MODERATE]: 0.8,
        [MapProperties.COVER.MINIMAL]: 0.4, // Minimal cover leaves her vulnerable.
      },
      weight: 1.0,
    },
    // Environmental Hazards: Unlike some aggressive heroes, Ana prefers predictable environments.
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // No hazards allow her to focus on healing and sniping.
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.5,
      },
      weight: 0.5,
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
        [MapProperties.MODE.FLASHPOINT]: 1.0, // Best for fast, multi-point fights
        [MapProperties.MODE.HYBRID]: 0.9, // Also works well
        [MapProperties.MODE.CONTROL]: 0.7, // Less ideal for her aggressive play
      },
      weight: 0.8, // Moderately important; she favors dynamic, aggressive modes.
    },
    size: {
      options: {
        [MapProperties.SIZE.SMALL]: 1.0, // Optimal for dive-friendly, close engagements
        [MapProperties.SIZE.MEDIUM]: 0.8, // Acceptable, though slightly less ideal
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.FLANK_FRIENDLY]: 1.0, // Ideal for her quick rotations and flanking
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.6, // Less ideal, may force more static play
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.SHORT]: 1.0, // Maximizes her effectiveness in close-range fights
        [MapProperties.SIGHTLINES.MEDIUM]: 0.7,
      },
      weight: 1.5, // Very important for her aggressive engagements.
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.LOW]: 1.0, // Prefers lower verticality for quicker, grounded play
        [MapProperties.VERTICALITY.MEDIUM]: 0.8,
      },
      weight: 0.7,
    },
    cover: {
      options: {
        [MapProperties.COVER.MODERATE]: 1.0, // Best balance: enough protection without hindering mobility
        [MapProperties.COVER.HIGH]: 0.5,
      },
      weight: 1.2,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers hazard-free maps for her aggressive style
      },
      weight: 0.8,
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
        [MapProperties.MODE.ESCORT]: 0.9, // Escort maps suit his long-range poke and sustained pressure
        [MapProperties.MODE.HYBRID]: 1.0, // Ideal for balanced engagements where his orbs shine
        [MapProperties.MODE.CONTROL]: 0.6, // Less optimal due to tighter, enclosed spaces
      },
      weight: 1.0,
    },
    size: {
      options: {
        [MapProperties.SIZE.MEDIUM]: 1.0, // Medium maps offer a good balance between range and cover
        [MapProperties.SIZE.LARGE]: 0.8, // Large maps work, but can sometimes leave him exposed
        [MapProperties.SIZE.SMALL]: 0.4, // Small maps tend to be too confined for his long-range abilities
      },
      weight: 1.0,
    },
    layout: {
      options: {
        [MapProperties.LAYOUT.OPEN]: 1.0, // Open layouts let his orbs fly freely
        [MapProperties.LAYOUT.HIGH_GROUND_FOCUSED]: 0.8, // Elevated positions can be advantageous
        [MapProperties.LAYOUT.CHOKE_HEAVY]: 0.4, // Chokes may block his clear lines of sight
      },
      weight: 1.0,
    },
    sightlines: {
      options: {
        [MapProperties.SIGHTLINES.LONG]: 1.0, // Long sightlines maximize his hitscan potential
        [MapProperties.SIGHTLINES.MEDIUM]: 0.8,
        [MapProperties.SIGHTLINES.SHORT]: 0.5,
      },
      weight: 1.5,
    },
    verticality: {
      options: {
        [MapProperties.VERTICALITY.MEDIUM]: 1.0, // Balanced verticality is best for his orbs and positioning
        [MapProperties.VERTICALITY.HIGH]: 0.8,
        [MapProperties.VERTICALITY.LOW]: 0.6,
      },
      weight: 0.8,
    },
    cover: {
      options: {
        [MapProperties.COVER.MINIMAL]: 1.0, // Minimal cover favors his projectile arc and unobstructed shots
        [MapProperties.COVER.MODERATE]: 0.8,
        [MapProperties.COVER.HIGH]: 0.5, // Too much cover can block his abilities
      },
      weight: 1.0,
    },
    environmentalHazards: {
      options: {
        [MapProperties.ENVIRONMENTAL_HAZARDS.NONE]: 1.0, // Prefers maps without extra hazards
        [MapProperties.ENVIRONMENTAL_HAZARDS.BOOP_POTENTIAL]: 0.4,
      },
      weight: 0.7,
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

// This module defines the map preferences for Lúcio based on his kit and playstyle.

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

// Mercy.js
// This module defines Mercy's map preferences based on her healing-focused, mobile support playstyle.

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
