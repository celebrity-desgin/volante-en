import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import HomeOverlay from '../overlays/HomeOverlay';

const Particles = () => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={
            new Float32Array(
              Array.from({ length: 1500 }, () => (Math.random() - 0.5) * 10)
            )
          }
          count={500}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#FFFFFF" size={0.01} />
    </points>
  );
};

const Home = () => {
  return (
    <section className="home" id="home">
      <Canvas
        antialias="true"
        powerPreference="high-performance"
        dpr={[1, 2]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Particles />
      </Canvas>
      <HomeOverlay />
    </section>
  );
};

export default Home;
