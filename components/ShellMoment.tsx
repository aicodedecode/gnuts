"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const EASE_P = (p: number) => p * p * (3 - 2 * p);

function ShellHalf({ side, progress }: { side: 1 | -1; progress: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    const p = EASE_P(Math.min(1, Math.max(0, progress.current)));
    // split apart, tip outward
    ref.current.position.x = side * (0.15 + p * 1.35);
    ref.current.position.y = p * 0.35;
    ref.current.rotation.z = side * p * 0.55;
  });

  return (
    <group ref={ref}>
      {/* half-pod: dome shell */}
      <mesh rotation={[0, 0, side > 0 ? 0 : Math.PI]}>
        <sphereGeometry args={[0.85, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#8a5a33" roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      {/* constricted waist nub */}
      <mesh position={[side * 0.55, -0.12, 0]} scale={[0.5, 0.38, 0.45]}>
        <sphereGeometry args={[0.85, 24, 16]} />
        <meshStandardMaterial color="#7d5029" roughness={0.85} />
      </mesh>
    </group>
  );
}

function Kernels({ progress }: { progress: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    const p = EASE_P(progress.current);
    const s = Math.min(1, Math.max(0, (p - 0.45) / 0.55));
    ref.current.scale.setScalar(0.2 + s * 0.8);
    ref.current.rotation.y = p * 0.6;
  });
  const kernel = (x: number, y: number) => (
    <mesh key={`${x}-${y}`} position={[x, y, 0]} scale={[0.62, 0.9, 0.62]}>
      <sphereGeometry args={[0.3, 24, 16]} />
      <meshStandardMaterial color="#d8a468" roughness={0.6} />
    </mesh>
  );
  return <group ref={ref}>{kernel(-0.28, 0.1)}{kernel(0.28, 0.1)}{kernel(0, -0.32)}</group>;
}

function Rig({ progress }: { progress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += (state.pointer.x * 0.3 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-state.pointer.y * 0.2 - group.current.rotation.x) * 0.04;
  });
  return (
    <group ref={group}>
      <ShellHalf side={-1} progress={progress} />
      <ShellHalf side={1} progress={progress} />
      <Kernels progress={progress} />
    </group>
  );
}

export default function ShellMoment() {
  const progress = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progress.current = 1; // show the opened shell statically
      return;
    }
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=120%",
      pin: true,
      scrub: true,
      onUpdate: (self) => { progress.current = self.progress; },
    });
    return () => { st.kill(); };
  }, []);

  return (
    <section ref={sectionRef} className="shell-stage" id="stage-shelling-moment">
      <div className="shell-canvas">
        <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.2], fov: 40 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 3, 4]} intensity={1.4} color="#ffe9cf" />
          <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#c8b9a6" />
          <Rig progress={progress} />
        </Canvas>
      </div>
      <div className="shell-copy">
        <h2 className="stage-name">The split</h2>
        <p className="shell-hint">Keep scrolling</p>
      </div>
    </section>
  );
}
