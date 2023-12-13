// index.js
import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { Physics } from '@react-three/cannon';

// Use createRoot to render the app
createRoot(document.getElementById("root")).render(
  // Use Canvas from @react-three/fiber
  <Canvas>
    <Physics broadphase='SAP' gravity={[0,-2.6,0]}>
      <Scene />
    </Physics>
  </Canvas>
);
