// src/components/matchResults/MatchResults.tsx
import React, { useContext, useMemo } from "react";
import { computeMatchScore } from "../../computeMatchScore";
import { MapContext } from "../../contexts/mapContext/MapContext";
import { HeroContext } from "../../contexts/heroContext/HeroContext";
import "./MatchResults.css";

const MatchResults: React.FC = () => {
  const mapContext = useContext(MapContext);
  if (!mapContext) {
    throw new Error("MatchResults must be used within a MapProvider");
  }
  const { selectedMapName, maps } = mapContext;

  const heroContext = useContext(HeroContext);
  if (!heroContext) {
    throw new Error("MatchResults must be used within a HeroProvider");
  }
  const { allowedHeroes } = heroContext;

  const selectedMap = useMemo(
    () => maps.find((m) => m.name === selectedMapName),
    [maps, selectedMapName]
  );

  const results = useMemo(() => {
    if (!selectedMap) return [];
    return allowedHeroes
      .map((hero) => ({
        hero,
        result: computeMatchScore(selectedMap, hero),
      }))
      .sort((a, b) => b.result.percentage - a.result.percentage);
  }, [allowedHeroes, selectedMap]);

  if (!selectedMap) {
    return <div>No map selected</div>;
  }

  return (
    <div className="match-results">
      <h2>Selected Map: {selectedMap.name}</h2>
      {results.length === 0 ? (
        <p>No heroes selected for match scoring.</p>
      ) : (
        results.map(({ hero, result }) => (
          <div key={hero.name} className="hero-match">
            <h3>
              {hero.name} Match Score: {result.percentage.toFixed(2)}%
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MatchResults;
