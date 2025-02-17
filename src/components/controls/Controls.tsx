// src/components/controls/Controls.tsx
import React, { useContext } from "react";
import { MapContext } from "../../contexts/mapContext/MapContext";
import { HeroContext } from "../../contexts/heroContext/HeroContext";
import "./Controls.css";

const Controls: React.FC = () => {
  const mapContext = useContext(MapContext);
  if (!mapContext) {
    throw new Error("Controls must be used within a MapProvider");
  }
  const { selectedMapName, setSelectedMapName, maps } = mapContext;

  const heroContext = useContext(HeroContext);
  if (!heroContext) {
    throw new Error("Controls must be used within a HeroProvider");
  }
  const { selectedRole, setSelectedRole } = heroContext;

  return (
    <div className="controls">
      <select
        value={selectedMapName}
        onChange={(e) => setSelectedMapName(e.target.value)}
      >
        {maps.map((map) => (
          <option key={map.name} value={map.name}>
            {map.name}
          </option>
        ))}
      </select>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="All">All Roles</option>
        <option value="Damage">Damage</option>
        <option value="Tank">Tank</option>
        <option value="Support">Support</option>
      </select>
    </div>
  );
};

export default Controls;
