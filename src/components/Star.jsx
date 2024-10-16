import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 1;

    // Create stars
    const starCount = 2000; // Reduced star count for optimization
    const starsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3); // x, y, z for each star

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2; // Z
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.002 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.001; // Rotate the stars for effect
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      starsGeometry.dispose(); // Dispose of geometry
      starsMaterial.dispose(); // Dispose of material
      renderer.dispose();      // Dispose of renderer
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full fixed inset-0 z-[1]" />;
};

export default StarsCanvas;
