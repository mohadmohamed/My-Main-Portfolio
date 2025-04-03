'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function GlowingSphere({ position, color, size = 1, intensity = 1 }: { position: [number, number, number], color: string, size?: number, intensity?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const floatSpeed = Math.random() * 0.002 + 0.001;
  const timeOffset = Math.random() * Math.PI * 2;

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + timeOffset;
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={intensity}
          transparent
          opacity={0.7}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[size * 1.2, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {/* Purple orb */}
        <GlowingSphere position={[-8, 2, -5]} color="#BF5AF2" size={3} intensity={1.5} />
        
        {/* Blue orb */}
        <GlowingSphere position={[8, -2, -8]} color="#0A84FF" size={4} intensity={1.2} />
        
        {/* Small accent orbs */}
        <GlowingSphere position={[4, 4, -3]} color="#BF5AF2" size={1.5} intensity={1} />
        <GlowingSphere position={[-3, -4, -2]} color="#0A84FF" size={1.2} intensity={0.8} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 