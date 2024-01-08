import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import slide3 from '../assets/slide3.glb';

const Sample = () => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return; // Check if ref is null

    // Create Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // Load the GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      slide3,
      (gltf) => {
        scene.add(gltf.scene);
        animate();
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean-up
    return () => {
      window.removeEventListener('resize', handleResize);
      ref.current.removeChild(renderer.domElement);
      scene.dispose(); // Dispose of the scene
      renderer.dispose(); // Dispose of the renderer
      // Also consider disposing of other resources like textures or geometries
    };
  }, []);

  return <div ref={ref}></div>;
};

export default Sample;

