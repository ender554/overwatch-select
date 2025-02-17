// src/contexts/heroContext/types.ts
import { Hero } from "../../types/heroTypes";

export interface HeroContextProps {
  heroes: Hero[];
  selectedHeroes: string[];
  toggleHeroSelection: (heroName: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  allowedHeroes: Hero[];
  availableHeroes: Hero[];
}
