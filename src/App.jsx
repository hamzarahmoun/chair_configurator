import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import './index.css'
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
    
      <Canvas  camera={{ position: [1, 1, 3], fov: 50 }} shadows>
      <OrbitControls />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;