import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: { onClick: { enable: true, mode: "push" } },
          modes: { push: { quantity: 3 } },
        },
        particles: {
          number: { value: 155, density: { enable: true } },
          color: { value: "#c770f0" },
          links: { enable: false },
          opacity: {
            value: { min: 0.05, max: 0.35 },
            animation: { enable: true, speed: 0.6, sync: false },
          },
          size: { value: { min: 0.6, max: 1.8 } },
          move: {
            enable: true,
            direction: "right",
            speed: 0.22,
            straight: false,
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}
