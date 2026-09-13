import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin /*, AiFillInstagram */ } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import heroImage from "@/assets/hero-illustration.png";
import { PageSection, Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dipon De — Machine Learning & LLM Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Dipon De, a Machine Learning, Deep Learning and LLM engineer from Kolkata building medical AI, real-time detection and GenAI systems.",
      },
      { property: "og:title", content: "Dipon De — Machine Learning & LLM Engineer" },
      {
        property: "og:description",
        content:
          "Medical AI, real-time anomaly detection and LLM fine-tuning projects by Dipon De.",
      },
    ],
  }),
  component: Home,
});

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const delay = deleting ? 45 : 90;
    const timer = setTimeout(() => {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === word) setTimeout(() => setDeleting(true), 1200);
      if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-purple align-middle" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}

function Home() {
  return (
    <PageSection>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-muted-foreground"
          >
            Hi there! <span className="wave">👋🏻</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-3 text-4xl font-black leading-tight sm:text-6xl"
          >
            I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 min-h-[2.2rem] text-xl font-bold sm:text-2xl"
          >
            <Typewriter words={profile.roles} />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/projects" className="btn-purple">
              View projects
            </Link>
            <Link to="/resume" className="btn-purple">
              See my resume
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-first lg:order-last"
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false} scale={1.02}>
            <img
              src={heroImage}
              alt="Illustration of Dipon De coding at a laptop surrounded by AI symbols"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-sm drop-shadow-[0_20px_60px_rgba(199,112,240,0.25)]"
            />
          </Tilt>
        </motion.div>
      </div>

      <Reveal className="mt-24">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Let me <span className="text-gradient">introduce</span> myself
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Deep learning for healthcare",
              body: "Attention-guided models for ultrasound diagnostics, with explainability built in via Grad-CAM.",
            },
            {
              title: "LLMs that fit real hardware",
              body: "LoRA fine-tuning of BioGPT for biomedical QA — 40% better performance with 75% less VRAM.",
            },
            {
              title: "Systems that run in real time",
              body: "Lightweight MobileNetV2 + LSTM pipelines built for live CCTV surveillance and alerting.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass-card h-full p-6">
                <h3 className="text-lg font-bold text-purple">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-20 text-center">
        <h2 className="text-2xl font-black">
          Find me <span className="text-gradient">online</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Feel free to <span className="text-purple">connect</span> with me.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-12 w-12 place-items-center rounded-full border border-purple/40 text-xl text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
          >
            <AiFillGithub aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-12 w-12 place-items-center rounded-full border border-purple/40 text-xl text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
          >
            <AiFillLinkedin aria-hidden />
          </a>
          {/*
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram profile"
            className="grid h-12 w-12 place-items-center rounded-full border border-purple/40 text-xl text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
          >
            <AiFillInstagram aria-hidden />
          </a>
          */}
        </div>
      </Reveal>
    </PageSection>
  );
}
