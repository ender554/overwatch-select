// src/contexts/heroContext/HeroProvider.tsx
import React, { createContext, useState, useMemo, ReactNode } from "react";
import * as Heroes from "../../data/heroData";
import { Hero } from "../../types/heroTypes";
import { HeroContextProps } from "./types";

export const HeroContext = createContext<HeroContextProps | undefined>(
  undefined
);

interface HeroProviderProps {
  children: ReactNode;
}

const HeroProvider: React.FC<HeroProviderProps> = ({ children }) => {
  const heroes: Hero[] = useMemo(() => {
    return Object.values(Heroes).map((hero) => {
      const heroHealth = "health" in hero ? hero.health : 100;
      return { ...hero, health: heroHealth };
    });
  }, []);

  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("All");

  const toggleHeroSelection = (heroName: string) => {
    setSelectedHeroes((prev) =>
      prev.includes(heroName)
        ? prev.filter((name) => name !== heroName)
        : [...prev, heroName]
    );
  };

  // Helper: get heroes that are both selected and match the current role.
  const allowedHeroes = useMemo(() => {
    return heroes.filter((hero) => {
      const roleMatches = selectedRole === "All" || hero.role === selectedRole;
      const isSelected = selectedHeroes.includes(hero.name);
      return roleMatches && isSelected;
    });
  }, [heroes, selectedHeroes, selectedRole]);

  // Also compute available heroes (those that can be selected) based on the role.
  const availableHeroes = useMemo(() => {
    return selectedRole === "All"
      ? heroes
      : heroes.filter((hero) => hero.role === selectedRole);
  }, [heroes, selectedRole]);

  return (
    <HeroContext.Provider
      value={{
        heroes,
        selectedHeroes,
        toggleHeroSelection,
        selectedRole,
        setSelectedRole,
        allowedHeroes,
        availableHeroes,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
