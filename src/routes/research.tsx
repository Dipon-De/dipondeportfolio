import { createFileRoute } from "@tanstack/react-router";
import { ImNewTab } from "react-icons/im";
import { PageSection, Reveal } from "@/components/Reveal";
import { publications } from "@/data/portfolio";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Publications — Dipon De" },
      {
        name: "description",
        content:
          "Peer-reviewed research by Dipon De, including an IEEE paper on deep learning based automated violence detection for video surveillance.",
      },
      { property: "og:title", content: "Research & Publications — Dipon De" },
      {
        property: "og:description",
        content: "IEEE publication on automated violence detection for video surveillance.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <PageSection>
      <Reveal>
        <h1 className="text-4xl font-black sm:text-5xl">
          Research <span className="text-gradient">papers</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Peer-reviewed work in deep learning and computer vision.
        </p>
      </Reveal>

      <ul className="mt-10 space-y-6">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <li className="glass-card p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-purple">
                {p.venue} · {p.date}
              </p>
              <h2 className="mt-2 text-lg font-bold leading-snug">{p.title}</h2>
              <p className="mt-2 text-sm italic text-muted-foreground">
                {p.authors}. &ldquo;{p.title}&rdquo;. {p.venue}, {p.date}.
              </p>
              <a
                href={p.link}
                target={p.link === "#" ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="btn-purple mt-5 text-sm"
              >
                <ImNewTab aria-hidden /> View paper
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </PageSection>
  );
}
