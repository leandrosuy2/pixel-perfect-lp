import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: false,
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          color: { value: ["#d946ef", "#a855f7", "#ec4899"] },
          links: {
            color: "#a855f7",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true },
            value: 80,
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
