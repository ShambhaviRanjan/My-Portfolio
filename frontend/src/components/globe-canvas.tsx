"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";

function GlobeCore() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={1.1} floatIntensity={1.6}>
                <mesh>
                    <icosahedronGeometry args={[1.7, 1]} />
                    <meshStandardMaterial
                        color="#d4af7a"
                        emissive="#a86b3d"
                        emissiveIntensity={0.75}
                        metalness={0.7}
                        roughness={0.25}
                    />
                </mesh>
            </Float>

            <mesh rotation={[0.6, 1.2, 0]}>
                <torusGeometry args={[2.3, 0.05, 14, 120]} />
                <meshStandardMaterial color="#7dd3fc" emissive="#22d3ee" emissiveIntensity={0.8} />
            </mesh>

            <mesh rotation={[1.1, 0.8, 0.6]}>
                <torusGeometry args={[2.7, 0.03, 14, 120]} />
                <meshStandardMaterial color="#c084fc" emissive="#8b5cf6" emissiveIntensity={0.7} />
            </mesh>

            <Sparkles count={45} scale={[5.5, 5.5, 5.5]} size={2.5} color="#f8d59f" speed={0.75} />
        </>
    );
}

export function GlobeCanvas() {
    return (
        <div className="relative h-[360px] w-full overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-950/80 shadow-[0_0_40px_rgba(212,175,122,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,122,0.18),_transparent_55%)]" />
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <color attach="background" args={["#0b0f17"]} />
                <ambientLight intensity={1.7} />
                <directionalLight position={[3, 3, 3]} intensity={2} color="#fff4d6" />
                <pointLight position={[-3, -1, 2]} color="#7dd3fc" intensity={1.8} />
                <Stars radius={40} depth={20} count={1800} factor={3.5} saturation={0} fade speed={1.4} />
                <GlobeCore />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.4} />
            </Canvas>
        </div>
    );
}
