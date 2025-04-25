
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    // Position and color arrays
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Positions - scattered in 3D space but more concentrated in middle
      posArray[i] = (Math.random() - 0.5) * 15; // x
      posArray[i + 1] = (Math.random() - 0.5) * 15; // y
      posArray[i + 2] = (Math.random() - 0.5) * 10; // z
      
      // Colors - mix of purple and blue
      if (Math.random() > 0.6) {
        // Purple
        colors[i] = 139/255;
        colors[i + 1] = 92/255;
        colors[i + 2] = 246/255;
      } else {
        // Blue
        colors[i] = 59/255;
        colors[i + 1] = 130/255;
        colors[i + 2] = 246/255;
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material with custom shaders for better glow effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 5;
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      
      // Rotate based on mouse position
      particlesMesh.rotation.x += 0.002;
      particlesMesh.rotation.y += 0.001;
      
      particlesMesh.rotation.x += (mouseY * 0.0008 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.0008 - particlesMesh.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 z-0" />;
};

export default Background3D;
