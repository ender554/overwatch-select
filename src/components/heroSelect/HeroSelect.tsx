// src/components/heroSelect/HeroSelect.tsx
import React, { useContext } from "react";
import "./HeroSelect.css";
import { heroImages } from "../../assets/heroImages";
import HeroImage from "./HeroImage";
import { HeroContext } from "../../contexts/heroContext/HeroContext";

const HeroSelect: React.FC = () => {
  const heroContext = useContext(HeroContext);
  if (!heroContext) {
    throw new Error("HeroSelect must be used within a HeroProvider");
  }
  const { availableHeroes, selectedHeroes, toggleHeroSelection } = heroContext;

  return (
    <ul className="hero-select-list">
      {availableHeroes.map((hero) => {
        const isSelected = selectedHeroes.includes(hero.name);
        const heroImage = hero.image || heroImages[hero.name];
        return (
          <li
            key={hero.name}
            className={`hero-select-item ${isSelected ? "selected" : ""}`}
            onClick={() => toggleHeroSelection(hero.name)}
          >
            {heroImage ? (
              <HeroImage src={heroImage} alt={hero.name} />
            ) : (
              <div className="hero-thumb hero-fallback">{hero.name}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default HeroSelect;
