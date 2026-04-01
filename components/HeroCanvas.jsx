import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function NetworkOrb() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#60a5fa" wireframe emissive="#3730a3" emissiveIntensity={0.7} />
        </mesh>
      </Float>
      <mesh>
        <torusGeometry args={[1.8, 0.02, 16, 120]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
      <mesh rotation={[0.8, 0.2, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 120]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 55 }} dpr={[1, 1.5]}>
      <color attach="background" args={['#0b1120']} />
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 2, 3]} intensity={2} color="#60a5fa" />
      <pointLight position={[-2, -1, -2]} intensity={1.2} color="#a855f7" />
      <NetworkOrb />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
