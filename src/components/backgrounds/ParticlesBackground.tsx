import Particles from "@/Particles";

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        particleCount={300}
        particleSpread={12}
        speed={0.2}
        particleColors={["#ffffff", "#3b82f6"]}
        moveParticlesOnHover={true}
        particleHoverFactor={1.2}
        alphaParticles={true}
        particleBaseSize={200}
        sizeRandomness={0.5}
        cameraDistance={25}
        disableRotation={false}
        className="h-full w-full"
      />
      {/* El degradado radial es clave para que las partículas se desvanezcan hacia los bordes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#00030a_100%)]" />
    </div>
  );
};

export default ParticlesBackground;