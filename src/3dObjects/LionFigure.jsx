import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const LionModel = () => {
  const geom = useLoader(STLLoader, '/lion4.obj');
  const meshRef = useRef();

  useEffect(() => {
    if (geom) {
      geom.center();
    }
  }, [geom]);

  return (
    <Canvas camera={{ position: [0, 0, 200], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {geom && (
        <mesh 
          ref={meshRef} 
          geometry={geom}
          rotation={[-Math.PI / 2, 0, 0]} 
          scale={2.5}
        >
          <meshStandardMaterial color={'white'} metalness={0.5} roughness={0.6} />
        </mesh>
      )}

      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={1.0}
      />
    </Canvas>
  );
};

export default LionModel;