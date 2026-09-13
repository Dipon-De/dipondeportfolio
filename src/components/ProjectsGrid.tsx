import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { ImNewTab } from "react-icons/im";
import { projectFilters, projects, type Project } from "@/data/portfolio";

export function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
              filter === f
                ? "border-purple bg-purple/25 text-purple"
                : "border-purple/25 text-foreground/75 hover:border-purple/60 hover:text-purple"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <article className="glass-card flex h-full flex-col overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project cover`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-purple/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-purple"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button type="button" className="btn-purple text-sm" onClick={() => setActive(p)}>
                      Case study
                    </button>
                    <a
                      href={p.github}
                      target={p.github === "#" ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      className="btn-purple text-sm"
                    >
                      <AiFillGithub aria-hidden /> GitHub
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-purple text-sm"
                      >
                        <ImNewTab aria-hidden /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card max-h-[88vh] w-full max-w-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={active.image}
                  alt={`${active.title} project cover`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-52 w-full rounded-t-2xl object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close case study"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-purple"
                >
                  <CgClose aria-hidden />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black">{active.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.full}</p>
                <h4 className="mt-6 text-sm font-bold uppercase tracking-wide text-purple">
                  Tech stack
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-purple/30 px-3 py-1 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={active.github}
                    target={active.github === "#" ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="btn-purple text-sm"
                  >
                    <AiFillGithub aria-hidden /> GitHub
                  </a>
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn-purple text-sm"
                    >
                      <ImNewTab aria-hidden /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
