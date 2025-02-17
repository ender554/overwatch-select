// src/App.tsx
import { useContext } from "react";
import Controls from "./components/controls/Controls";
import HeroSelect from "./components/heroSelect/HeroSelect";
import MatchResults from "./components/matchResults/MatchResults";
import { MapContext } from "./contexts/mapContext/MapContext";
import "./App.css";

function App() {
  // Get map state from MapContext.
  const mapContext = useContext(MapContext);
  if (!mapContext) {
    throw new Error("MapContext must be used within a MapProvider");
  }

  // Find the currently selected map.

  return (
    <div className="App">
      <header className="app-header">
        <h1>Welcome to Hero Select</h1>
      </header>
      <div className="app-container">
        <aside className="hero-select-container">
          <Controls />
          <HeroSelect />
        </aside>
        <main className="results-container">
          <MatchResults />
        </main>
      </div>
    </div>
  );
}

export default App;
