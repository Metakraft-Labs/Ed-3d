import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export default function Scene({ scene }) {
  const gltf = useLoader(GLTFLoader, scene);

  return (
    <Canvas
      camera={{ position: [-0.5, 1, 2] }}
      shadows
      style={{ height: "600px" }}
    >
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
        scale={2}
      />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  );
}
