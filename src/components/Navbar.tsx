import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/research", label: "Research" },
  { to: "/resume", label: "Resume" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-purple/20 bg-background/80 py-2 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "py-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link to="/" className="text-xl font-black tracking-tight">
          <span className="text-gradient">Dipon</span>
          <span className="text-foreground">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-purple" : "text-foreground/80 hover:text-purple"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-purple/15 ring-1 ring-purple/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-full border border-purple/40 bg-purple/10 px-3.5 py-2 text-sm font-semibold text-purple transition-all hover:-translate-y-0.5 hover:bg-purple/25 sm:inline-flex"
          >
            <AiOutlineStar aria-hidden /> Star
            <span className="h-4 w-px bg-purple/40" />
            <AiOutlineFork aria-hidden /> Fork
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-purple/40 text-purple lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CgClose aria-hidden /> : <CgMenuRight aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-purple/25 bg-popover/95 p-6 pt-24 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block rounded-xl px-4 py-3 font-semibold transition-colors ${
                      pathname === l.to
                        ? "bg-purple/15 text-purple"
                        : "text-foreground/85 hover:bg-purple/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
