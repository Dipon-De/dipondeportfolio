import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ImPointRight } from "react-icons/im";
import Tilt from "react-parallax-tilt";
import avatar from "@/assets/about-avatar.png";
import { PageSection, Reveal } from "@/components/Reveal";
import { SkillGrid } from "@/components/SkillGrid";
import { coursework, education, experience, profile } from "@/data/portfolio";

const GitHubCalendar = lazy(() => import("react-github-calendar").then((m) => ({ default: m.GitHubCalendar })));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dipon De" },
      {
        name: "description",
        content:
          "About Dipon De: CSE student at B.P. Poddar Institute, LLM intern at NITTTR Kolkata, with a skill set spanning PyTorch, TensorFlow, Hugging Face and Oracle Cloud.",
      },
      { property: "og:title", content: "About — Dipon De" },
      {
        property: "og:description",
        content: "Education, experience, skills and GitHub activity of Dipon De.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageSection>
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <h1 className="text-4xl font-black sm:text-5xl">
            Know who <span className="text-gradient">I&apos;m</span>
          </h1>
          <div className="glass-card mt-6 p-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Hi everyone, I am <span className="font-bold text-purple">{profile.name}</span> from{" "}
              <span className="font-bold text-purple">{profile.location}</span>.
            </p>
            <p className="mt-3">
              I am a Computer Science and Engineering graduate, focused on Machine Learning, Deep Learning, and Large
              Language Models.
            </p>
            <p className="mt-3">Apart from coding, some other activities that I love to do:</p>
            <ul className="mt-3 space-y-1.5">
              {["Playing cricket & volleyball", "Reading books", "Travelling"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ImPointRight aria-hidden className="text-purple" /> {item}
                </li>
              ))}
            </ul>
            <blockquote className="mt-5 border-l-2 border-purple pl-4 italic text-purple">
              &ldquo; My code has bugs. My curiosity doesn't. &rdquo;
              <footer className="mt-1 text-xs not-italic text-muted-foreground">— DEV</footer>
            </blockquote>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
            <img
              src={avatar}
              alt="Illustrated avatar of Dipon De wearing headphones"
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-xs drop-shadow-[0_20px_60px_rgba(199,112,240,0.25)]"
            />
          </Tilt>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <h2 className="text-3xl font-black">
          Education &amp; <span className="text-gradient">experience</span>
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <article className="glass-card relative p-6 pl-8">
                <span className="absolute left-3 top-8 h-2.5 w-2.5 rounded-full bg-purple" />
                <p className="text-xs font-bold uppercase tracking-wide text-purple">{e.period}</p>
                <h3 className="mt-1 text-lg font-bold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <ImPointRight aria-hidden className="mt-1 shrink-0 text-purple" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {e.pdfs && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.pdfs.map((doc) => (
                      <a
                        key={doc.url}
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-purple text-xs"
                      >
                        <AiOutlineFilePdf aria-hidden /> {doc.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="space-y-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <article className="glass-card relative p-6 pl-8">
                <span className="absolute left-3 top-8 h-2.5 w-2.5 rounded-full bg-purple" />
                <p className="text-xs font-bold uppercase tracking-wide text-purple">{e.period}</p>
                <h3 className="mt-1 text-base font-bold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-2 text-sm font-semibold text-purple">{e.detail}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <div className="glass-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-purple">Relevant coursework</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="rounded-full border border-purple/30 px-3 py-1 text-xs font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20">
        <h2 className="text-3xl font-black">
          Skills &amp; <span className="text-gradient">tools</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Hover or focus any skill to see where I&apos;ve used it.</p>
      </Reveal>
      <div className="mt-8">
        <SkillGrid />
      </div>

      <Reveal className="mt-20">
        <h2 className="text-3xl font-black">
          Days I <span className="text-gradient">code</span>
        </h2>
        <div className="glass-card mt-6 overflow-x-auto p-6">
          <ClientOnly fallback={<div className="h-32 w-full animate-pulse rounded-xl bg-purple/10" />}>
            <Suspense fallback={<div className="h-32 w-full animate-pulse rounded-xl bg-purple/10" />}>
              <GitHubCalendar username={profile.githubUser} colorScheme="dark" />
            </Suspense>
          </ClientOnly>
        </div>
      </Reveal>
    </PageSection>
  );
}
