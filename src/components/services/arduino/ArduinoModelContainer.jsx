import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { ArduinoModel } from "./ArduinoModel";

const ArduinoModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={10}>
          <ArduinoModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ArduinoModelContainer;
