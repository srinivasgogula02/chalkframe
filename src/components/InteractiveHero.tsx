"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate random particles
    const [sphere] = useState(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Random point in sphere
            const r = 1.5 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotation
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;

            // Mouse influence
            const mouseX = state.mouse.x * 0.2;
            const mouseY = state.mouse.y * 0.2;

            ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
            ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Violet-500
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function Fog() {
    return <fog attach="fog" args={['#0f172a', 1, 3.5]} /> // Slate-900 background compatible
}

export default function InteractiveHero() {
    return (
        <div className="absolute inset-0 z-0 bg-slate-900">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Fog />
                <ParticleField />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/50 to-slate-900 pointer-events-none"></div>
        </div>
    );
}
