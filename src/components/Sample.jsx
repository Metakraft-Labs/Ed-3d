// import { Stats, OrbitControls, Circle } from '@react-three/drei'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
// import slide3 from "../assets/slide3.glb";

// export default function App() {
//   const gltf = useLoader(GLTFLoader, slide3)

//   return (
//     <Canvas camera={{ position: [-0.5, 1, 2] }} shadows style={{height: "600px"}}>
//       <directionalLight
//         position={[3.3, 1.0, 4.4]}
//         castShadow
//         intensity={Math.PI * 2}
//       />
//       <primitive
//         object={gltf.scene}
//         position={[0, 1, 0]}
//         children-0-castShadow
//       />
//       <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
//         <meshStandardMaterial />
//       </Circle>
//       <OrbitControls target={[0, 1, 0]} />
//       <axesHelper args={[5]} />
//       <Stats />
//     </Canvas>
//   )
// }
