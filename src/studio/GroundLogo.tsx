import { Text, Text3D } from "@react-three/drei";
import React, { Suspense } from "react";

export default function GroundLogo() {
  const offset = 2;

  return (
    <group position={[0, 0, offset]}>
      <group scale={[0.3, 0.3, 0.3]} position={[2.8, 0.01, -0.5]}>
        <mesh
          scale={1}
          position={[1, 0, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial
            color="white"
            roughness={0.75}
            emissive={"red"}
            emissiveIntensity={3}
          />
        </mesh>
        <mesh
          scale={1}
          position={[-0.6, 0, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="red" roughness={0.75} />
        </mesh>
      </group>
      <Suspense fallback={null}>
        <Text
          position={[0, 0.01, 0]}
          fontSize={1}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          TestText
        </Text>
      </Suspense>
    </group>
  );
}
