import React, { useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LionModel = () => {
  // Use the dedicated useGLTF hook for .glb files
  const { scene } = useGLTF('/octopus.glb');

  // This effect runs after the model is loaded to override its materials.
  useLayoutEffect(() => {
    if (scene) {
      // Create a new pink material. You can change the hex code to any color.
      const pinkMaterial = new THREE.MeshStandardMaterial({
        color: '#FF69B4', // A nice hot pink color
        metalness: 0.3,
        roughness: 0.6,
      });

      // Traverse the scene graph and apply the new material to every mesh.
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = pinkMaterial;
        }
      });
    }
  }, [scene]); // This ensures the effect runs when the scene is loaded.

  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} />
      <Bounds fit clip observe margin={1.2}>
        {scene && (
          <primitive 
            object={scene}
            // GLB files usually have the correct orientation. Resetting to a clean state.
            rotation={[0, 0, 0]} 
            scale={1.2} // Make the model smaller
          />
        )}
      </Bounds>
      <OrbitControls 
        makeDefault
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default LionModel;