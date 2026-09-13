import type { Engine } from "@tsparticles/engine";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  return (
    <ParticlesProvider init={init}>
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
    </ParticlesProvider>
  );
}
