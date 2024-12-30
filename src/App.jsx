
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";

function App() {
  return (
      <div className="App">
        <Canvas camera={{ position: [0, 1, 5] }}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />

          <Experience />
        </Canvas>
        <Configurator />

      </div>
  );
}

export default App;