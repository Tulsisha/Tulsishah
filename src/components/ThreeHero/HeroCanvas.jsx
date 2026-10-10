import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Check WebGL support synchronously
 */
const checkWebGLSupported = () => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

/**
 * HeroCanvas - Premium Three.js interactive 3D Hero background.
 * Features:
 * - Ambient floating particle constellation with depth
 * - Rotating abstract geometric core (wireframe icosahedron + orbiting rings)
 * - Mouse parallax & smooth damped movement (lerp)
 * - Dynamic lighting with subtle blue/cyan accents
 * - Responsive viewport resizing with pixel ratio clamping
 * - Performance degradation prevention (low particle count on mobile)
 * - Prefers-reduced-motion check
 * - Complete resource disposal on unmount to prevent memory leaks
 * - WebGL fallback state
 */
export default function HeroCanvas() {
  const mountRef = useRef(null);
  const [hasWebGL] = useState(checkWebGLSupported);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || !hasWebGL) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;
    const isMobile = window.innerWidth < 768;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07152b, 0.0018);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 32 : 26;
    camera.position.y = 1;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0); // Transparent to blend with CSS gradient
    container.appendChild(renderer.domElement);

    // 4. Floating Particle Constellation
    const particleCount = isMobile ? 500 : 1400;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    const radius = 35;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * radius * 1.8;
      positions[i3 + 1] = (Math.random() - 0.5) * radius * 1.2;
      positions[i3 + 2] = (Math.random() - 0.5) * radius * 1.4;
      particleScales[i] = Math.random() * 0.8 + 0.4;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(particleScales, 1)
    );

    // Custom circle particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, "rgba(79, 140, 255, 0.8)");
      grad.addColorStop(1, "rgba(79, 140, 255, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: isMobile ? 0.35 : 0.45,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Abstract 3D Central Geometric Group
    const coreGroup = new THREE.Group();
    // Offset core slightly to the right on desktop to leave room for hero text
    coreGroup.position.set(isMobile ? 0 : 7, isMobile ? -3 : 0, 0);
    scene.add(coreGroup);

    // Inner Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(isMobile ? 3.8 : 5.2, 1);
    const icoWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f8cff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoWireMaterial);
    coreGroup.add(icoMesh);

    // Inner solid core with soft glow
    const innerGeometry = new THREE.IcosahedronGeometry(isMobile ? 2.6 : 3.6, 0);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x0f2a4a,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.25,
      shininess: 80,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // Outer Orbital Ring 1
    const ring1Geometry = new THREE.TorusGeometry(isMobile ? 5.2 : 7.2, 0.04, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Outer Orbital Ring 2
    const ring2Geometry = new THREE.TorusGeometry(isMobile ? 6.2 : 8.4, 0.03, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Small orbiting nodes
    const nodeGeometry = new THREE.SphereGeometry(0.16, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const nodes = [];
    for (let i = 0; i < 4; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      coreGroup.add(node);
      nodes.push({
        mesh: node,
        radius: (isMobile ? 5.2 : 7.2) + (i % 2 === 0 ? 0 : 1.2),
        speed: (0.8 + i * 0.2) * (i % 2 === 0 ? 1 : -1),
        offset: (i * Math.PI) / 2,
      });
    }

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x4f8cff, 1.8);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 40);
    pointLight.position.set(-8, -5, 8);
    scene.add(pointLight);

    // 7. Mouse Interactivity & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2;
      targetY = y * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Slow rotation for geometric core
        icoMesh.rotation.y = elapsedTime * 0.15;
        icoMesh.rotation.x = elapsedTime * 0.1;

        innerMesh.rotation.y = -elapsedTime * 0.12;
        innerMesh.rotation.z = elapsedTime * 0.08;

        ring1.rotation.z = elapsedTime * 0.18;
        ring2.rotation.z = -elapsedTime * 0.14;

        // Animate orbiting nodes
        nodes.forEach((item) => {
          const angle = elapsedTime * item.speed + item.offset;
          item.mesh.position.x = Math.cos(angle) * item.radius;
          item.mesh.position.y = Math.sin(angle) * (item.radius * 0.6);
          item.mesh.position.z = Math.sin(angle) * (item.radius * 0.4);
        });

        // Subtle particle drift
        particles.rotation.y = elapsedTime * 0.02 + mouseX * 0.1;
        particles.rotation.x = elapsedTime * 0.01 - mouseY * 0.1;

        // Interactive core group tilt
        coreGroup.rotation.y = mouseX * 0.4;
        coreGroup.rotation.x = -mouseY * 0.4;

        // Camera gentle parallax
        camera.position.x = mouseX * 1.8;
        camera.position.y = 1 - mouseY * 1.5;
        camera.lookAt(coreGroup.position.x * 0.3, coreGroup.position.y * 0.3, 0);
      } else {
        // Static frame for reduced motion
        camera.position.x = 0;
        camera.position.y = 1;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js objects
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeometry.dispose();
      icoWireMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [hasWebGL]);

  return (
    <div
      ref={mountRef}
      className="hero-three-container"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {!hasWebGL && (
        <div className="three-fallback-gradient" />
      )}
    </div>
  );
}
