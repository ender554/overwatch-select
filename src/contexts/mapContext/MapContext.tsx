import React, { createContext, useState, ReactNode } from "react";
import { overwatchMaps } from "../../data/overwatchMaps";

export interface MapContextProps {
  selectedMapName: string;
  setSelectedMapName: (mapName: string) => void;
  // If you’d like to control the role from here, you can include it:
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  maps: typeof overwatchMaps;
}

export const MapContext = createContext<MapContextProps | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [selectedMapName, setSelectedMapName] = useState<string>(
    overwatchMaps[0]?.name || ""
  );
  const [selectedRole, setSelectedRole] = useState<string>("All");

  return (
    <MapContext.Provider
      value={{
        selectedMapName,
        setSelectedMapName,
        selectedRole,
        setSelectedRole,
        maps: overwatchMaps,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
