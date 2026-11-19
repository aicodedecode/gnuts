"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function LabelTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 1024; c.height = 512;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#f4efe4";
    ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = "#2e1d10";
    ctx.fillRect(0, 44, 1024, 10);
    ctx.fillRect(0, 458, 1024, 10);
    ctx.fillStyle = "#2e1d10";
    ctx.textAlign = "center";
    ctx.font = "700 190px system-ui, sans-serif";
    ctx.fillText("GNUTS", 512, 250);
    ctx.font = "400 54px system-ui, sans-serif";
    ctx.fillText("PEANUT BUTTER  ·  MEERUT", 512, 340);
    ctx.font = "400 40px system-ui, sans-serif";
    ctx.fillStyle = "#6b4a2f";
    ctx.fillText("[250 g]  NET WT", 512, 412);
    const tex = new THREE.CanvasTexture(c);
    tex.anisotropy = 4;
    return tex;
  }, []);
}

/**
 * Placeholder jar built from primitives so the page works before a GLB exists.
 * Swap in the real asset by dropping gnuts-jar.glb (under 5 MB) into
 * /public/media and replacing the meshes with drei's useGLTF.
 */
function Jar() {
  const label = LabelTexture();
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.004 + state.pointer.x * 0.002;
    group.current.rotation.x += (-state.pointer.y * 0.15 - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      {/* glass body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 1.5, 48, 1, true]} />
        <meshPhysicalMaterial transmission={0.92} thickness={0.6} roughness={0.08} color="#e9e2d4" transparent opacity={0.55} />
      </mesh>
      {/* glass base */}
      <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.72, 48]} />
        <meshPhysicalMaterial transmission={0.9} roughness={0.08} color="#e9e2d4" transparent opacity={0.5} />
      </mesh>
      {/* peanut butter fill */}
      <mesh position={[0, -0.36, 0]}>
        <cylinderGeometry args={[0.68, 0.68, 0.78, 48]} />
        <meshStandardMaterial color="#a5713c" roughness={0.42} />
      </mesh>
      {/* swirl top */}
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.68, 48]} />
        <meshStandardMaterial color="#b07a41" roughness={0.5} />
      </mesh>
      {/* label wrap */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.735, 0.735, 0.62, 48, 1, true]} />
        <meshStandardMaterial map={label} roughness={0.85} />
      </mesh>
      {/* lid */}
      <mesh position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.74, 0.74, 0.16, 48]} />
        <meshStandardMaterial color="#8a4f1d" roughness={0.4} metalness={0.35} />
      </mesh>
    </group>
  );
}

export default function JarScene() {
  return (
    <div className="jar-canvas">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.4, 3.6], fov: 38 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 3]} intensity={1.6} color="#ffe9cf" />
        <directionalLight position={[-3, -1, -3]} intensity={0.5} color="#b8a88f" />
        <Jar />
      </Canvas>
    </div>
  );
}
