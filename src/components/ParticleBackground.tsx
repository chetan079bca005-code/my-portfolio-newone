import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function Particles({ count = 200, mousePosition }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);

  const [positions, velocities, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      // Cyan, white, and occasional red particles
      const colorType = Math.random();
      if (colorType > 0.95) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 0.25;
      } else if (colorType > 0.7) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      } else {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.94;
        colors[i * 3 + 2] = 1;
      }
    }

    return [positions, velocities, colors];
  }, [count]);

  const linePositions = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, [count]);

  const lineColors = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Update positions with velocity
      positionArray[i3] += velocities[i3];
      positionArray[i3 + 1] += velocities[i3 + 1];
      positionArray[i3 + 2] += velocities[i3 + 2];

      // Add subtle floating motion
      positionArray[i3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;

      // Mouse repulsion
      const mouseX = (mousePosition.current.x / window.innerWidth) * 2 - 1;
      const mouseY = -(mousePosition.current.y / window.innerHeight) * 2 + 1;
      const dx = positionArray[i3] - mouseX * 10;
      const dy = positionArray[i3 + 1] - mouseY * 10;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 3) {
        const force = (3 - dist) / 3;
        positionArray[i3] += (dx / dist) * force * 0.05;
        positionArray[i3 + 1] += (dy / dist) * force * 0.05;
      }

      // Boundary wrap
      if (positionArray[i3] > 10) positionArray[i3] = -10;
      if (positionArray[i3] < -10) positionArray[i3] = 10;
      if (positionArray[i3 + 1] > 10) positionArray[i3 + 1] = -10;
      if (positionArray[i3 + 1] < -10) positionArray[i3 + 1] = 10;
      if (positionArray[i3 + 2] > 5) positionArray[i3 + 2] = -5;
      if (positionArray[i3 + 2] < -5) positionArray[i3 + 2] = 5;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Update connection lines
    if (linesMesh.current) {
      let lineIndex = 0;
      const linePos = linesMesh.current.geometry.attributes.position.array as Float32Array;
      const lineCol = linesMesh.current.geometry.attributes.color.array as Float32Array;

      for (let i = 0; i < count; i++) {
        let connections = 0;
        for (let j = i + 1; j < count && connections < 3; j++) {
          const dx = positionArray[i * 3] - positionArray[j * 3];
          const dy = positionArray[i * 3 + 1] - positionArray[j * 3 + 1];
          const dz = positionArray[i * 3 + 2] - positionArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 2.5) {
            const alpha = 1 - dist / 2.5;

            linePos[lineIndex * 6] = positionArray[i * 3];
            linePos[lineIndex * 6 + 1] = positionArray[i * 3 + 1];
            linePos[lineIndex * 6 + 2] = positionArray[i * 3 + 2];
            linePos[lineIndex * 6 + 3] = positionArray[j * 3];
            linePos[lineIndex * 6 + 4] = positionArray[j * 3 + 1];
            linePos[lineIndex * 6 + 5] = positionArray[j * 3 + 2];

            lineCol[lineIndex * 6] = 0;
            lineCol[lineIndex * 6 + 1] = 0.94 * alpha;
            lineCol[lineIndex * 6 + 2] = 1 * alpha;
            lineCol[lineIndex * 6 + 3] = 0;
            lineCol[lineIndex * 6 + 4] = 0.94 * alpha;
            lineCol[lineIndex * 6 + 5] = 1 * alpha;

            lineIndex++;
            connections++;
          }
        }
      }

      // Clear remaining lines
      for (let i = lineIndex * 6; i < linePositions.length; i++) {
        linePos[i] = 0;
      }

      linesMesh.current.geometry.attributes.position.needsUpdate = true;
      linesMesh.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  const positionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(positions, 3);
  }, [positions]);

  const colorAttribute = useMemo(() => {
    return new THREE.BufferAttribute(colors, 3);
  }, [colors]);

  const linePositionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(linePositions, 3);
  }, [linePositions]);

  const lineColorAttribute = useMemo(() => {
    return new THREE.BufferAttribute(lineColors, 3);
  }, [lineColors]);

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <primitive object={positionAttribute} attach="attributes-position" />
          <primitive object={colorAttribute} attach="attributes-color" />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesMesh}>
        <bufferGeometry>
          <primitive object={linePositionAttribute} attach="attributes-position" />
          <primitive object={lineColorAttribute} attach="attributes-color" />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleBackground() {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={150} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
