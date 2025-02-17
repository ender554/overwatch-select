import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroProvider from "./contexts/heroContext/HeroContext.tsx";
import { MapProvider } from "./contexts/mapContext/MapContext.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroProvider>
      <MapProvider>
        <App />
      </MapProvider>
    </HeroProvider>
  </StrictMode>
);
