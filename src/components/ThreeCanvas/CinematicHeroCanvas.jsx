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
 * CinematicHeroCanvas
 * 
 * Features:
 * - Premium abstract 3D sculptural object with elegant blue lighting & realistic physical depth
 * - Positioned predominantly on the right on desktop to ensure ZERO text overlap & 100% readability
 * - Cinematic 3-point lighting: Key cyan specular light, striking edge rim light, and inner core point light
 * - Hypnotic smooth organic rotation & responsive mouse parallax with lerping
 * - Natural scroll exit transition: Sculpture ascends and recedes as user scrolls toward the About section
 * - 100% responsive (desktop, tablet, mobile) with prefers-reduced-motion check & auto memory disposal
 */
export default function CinematicHeroCanvas() {
  const mountRef = useRef(null);
  const [hasWebGL] = useState(checkWebGLSupported);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || !hasWebGL) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    let isMobile = width < 768;
    let isTablet = width >= 768 && width < 1024;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 4. Cinematic Lighting Setup
    // Key Directional Light (bright cyan-blue gleam)
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.6);
    keyLight.position.set(12, 14, 10);
    scene.add(keyLight);

    // Rim / Back Light (striking edge backlight that separates sculpture from dark navy)
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 3.4);
    rimLight.position.set(-14, -8, -10);
    scene.add(rimLight);

    // Ambient Fill Light (preserves rich dark navy tones)
    const ambientLight = new THREE.AmbientLight(0x07152b, 1.2);
    scene.add(ambientLight);

    // 5. Abstract 3D Sculptural Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Compute base position based on viewport
    const updateSculpturePosition = () => {
      if (isMobile) {
        // Center on mobile and push slightly behind
        sculptureGroup.position.set(0, 1.2, -4.5);
        sculptureGroup.scale.set(0.68, 0.68, 0.68);
      } else if (isTablet) {
        // Shift right on tablet with moderate scale
        sculptureGroup.position.set(3.2, 0.0, -1.5);
        sculptureGroup.scale.set(0.82, 0.82, 0.82);
      } else {
        // Desktop: Positioned primarily to the right side (x = 4.8) with full majestic scale
        sculptureGroup.position.set(4.8, 0.2, 0);
        sculptureGroup.scale.set(1.0, 1.0, 1.0);
      }
    };
    updateSculpturePosition();

    // 5A. Sculptural Outer Shell: Smooth Parametric Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(3.6, 0.85, 160, 36, 2, 3);
    knotGeometry.computeVertexNormals();

    const sculptureMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0f2b5c),       // Deep royal sapphire navy
      emissive: new THREE.Color(0x071a38),    // Subtle inner navy glow
      metalness: 0.28,                        // Glossy metallic luster
      roughness: 0.16,                        // Sharp specular highlights
      clearcoat: 0.95,                        // Lustrous automotive clearcoat
      clearcoatRoughness: 0.08,               // Mirror-smooth reflection
      reflectivity: 0.85,
      flatShading: false,
    });

    const sculptureMesh = new THREE.Mesh(knotGeometry, sculptureMaterial);
    sculptureGroup.add(sculptureMesh);

    // 5B. Inner Crystalline Gem Nestled Within the Folds
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1d4ed8),
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.6,
      metalness: 0.15,
      roughness: 0.1,
      transmission: 0.55,
      thickness: 1.2,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    sculptureGroup.add(coreMesh);

    // 5C. Internal Glow Point Light (illuminates inner cavity with soft cyan-indigo aura)
    const internalPointLight = new THREE.PointLight(0x38bdf8, 2.4, 20);
    internalPointLight.position.set(0, 0, 0);
    sculptureGroup.add(internalPointLight);

    // 5D. Dual Sleek Orbital Halo Rings
    const halo1Geo = new THREE.TorusGeometry(5.6, 0.032, 16, 120);
    const halo1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7,
    });
    const halo1 = new THREE.Mesh(halo1Geo, halo1Mat);
    halo1.rotation.x = Math.PI / 3;
    sculptureGroup.add(halo1);

    const halo2Geo = new THREE.TorusGeometry(6.6, 0.024, 16, 120);
    const halo2Mat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.55,
    });
    const halo2 = new THREE.Mesh(halo2Geo, halo2Mat);
    halo2.rotation.y = Math.PI / 3.5;
    halo2.rotation.x = -Math.PI / 5;
    sculptureGroup.add(halo2);

    // 5E. Orbital Micro Light Beads
    const beadGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const beadMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const beads = [];
    for (let i = 0; i < 4; i++) {
      const bead = new THREE.Mesh(beadGeo, beadMat);
      sculptureGroup.add(bead);
      beads.push({
        mesh: bead,
        radius: 5.6 + (i % 2 === 0 ? 0 : 1.0),
        speed: (0.6 + i * 0.15) * (i % 2 === 0 ? 1 : -1),
        offset: (i * Math.PI) / 2,
      });
    }

    // 6. Sparse Cinematic Atmospheric Motes (only 55 tiny motes far in background)
    const moteCount = 55;
    const moteGeo = new THREE.BufferGeometry();
    const motePositions = new Float32Array(moteCount * 3);

    for (let i = 0; i < moteCount; i++) {
      const i3 = i * 3;
      motePositions[i3] = (Math.random() - 0.5) * 45;
      motePositions[i3 + 1] = (Math.random() - 0.5) * 30;
      motePositions[i3 + 2] = -12 - Math.random() * 20; // Placed far back in depth
    }

    moteGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(motePositions, 3)
    );

    const moteTexture = (() => {
      const cvs = document.createElement("canvas");
      cvs.width = 32;
      cvs.height = 32;
      const ctx = cvs.getContext("2d");
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      grad.addColorStop(0.4, "rgba(56, 189, 248, 0.4)");
      grad.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(cvs);
    })();

    const moteMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.35,
      map: moteTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });

    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);

    // 7. Interactive Mouse Coordinates with Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Scroll Transition Tracker
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      targetScrollProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 9. Resize Handler
    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      isMobile = width < 768;
      isTablet = width >= 768 && width < 1024;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      updateSculpturePosition();
    };

    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth scroll lerp
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      // When user has scrolled well past the hero into the next sections, skip render
      if (scrollProgress > 1.3) {
        container.style.opacity = "0";
        return;
      }

      // Smooth fade-out of hero canvas as user scrolls into About section
      container.style.opacity = String(Math.max(1 - scrollProgress * 1.25, 0));

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous organic rotation of the sculpture
        sculptureMesh.rotation.x = elapsedTime * 0.12 + mouseY * 0.25;
        sculptureMesh.rotation.y = elapsedTime * 0.18 + mouseX * 0.35;
        sculptureMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.15;

        // Counter-rotation of core gem
        coreMesh.rotation.y = -elapsedTime * 0.22;
        coreMesh.rotation.z = elapsedTime * 0.14;

        // Counter-rotation of orbital halos
        halo1.rotation.z = -elapsedTime * 0.15;
        halo2.rotation.y = elapsedTime * 0.18;

        // Orbiting light beads
        beads.forEach((item) => {
          const angle = elapsedTime * item.speed + item.offset;
          item.mesh.position.x = Math.cos(angle) * item.radius;
          item.mesh.position.y = Math.sin(angle) * (item.radius * 0.65);
          item.mesh.position.z = Math.sin(angle) * (item.radius * 0.4);
        });

        // Atmospheric motes subtle drift
        motes.rotation.y = elapsedTime * 0.01 + mouseX * 0.04;

        // Scroll transition: Sculpture ascends and recedes gracefully toward About transition
        const baseY = isMobile ? 1.2 : 0.2;
        const baseZ = isMobile ? -4.5 : 0;
        sculptureGroup.position.y = baseY + scrollProgress * 7;
        sculptureGroup.position.z = baseZ - scrollProgress * 5;
        sculptureGroup.rotation.y = mouseX * 0.2 + scrollProgress * 0.8;

        // Slight camera tilt for realistic cinematic depth
        camera.position.x = mouseX * 0.8;
        camera.position.y = -mouseY * 0.8;
        camera.lookAt(0, 0, 0);
      } else {
        // Static positioning for reduced motion
        sculptureGroup.position.y = (isMobile ? 1.2 : 0.2) + scrollProgress * 5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 11. Resource Disposal Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      knotGeometry.dispose();
      sculptureMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      halo1Geo.dispose();
      halo1Mat.dispose();
      halo2Geo.dispose();
      halo2Mat.dispose();
      beadGeo.dispose();
      beadMat.dispose();
      moteGeo.dispose();
      moteMat.dispose();
      moteTexture.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [hasWebGL]);

  return (
    <div
      ref={mountRef}
      className="hero-cinematic-canvas-wrap"
      aria-hidden="true"
    >
      {!hasWebGL && <div className="hero-fallback-gradient" />}
    </div>
  );
}
