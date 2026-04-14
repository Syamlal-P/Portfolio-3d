import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;