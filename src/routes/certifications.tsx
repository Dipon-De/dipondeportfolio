import { createFileRoute } from "@tanstack/react-router";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { PageSection, Reveal } from "@/components/Reveal";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Dipon De" },
      {
        name: "description",
        content:
          "Oracle Cloud Infrastructure 2025 Professional certifications in Generative AI, Development, Data Science, Networking and AI Vector Search held by Dipon De.",
      },
      { property: "og:title", content: "Certifications — Dipon De" },
      {
        property: "og:description",
        content: "Five Oracle Certified Professional credentials across AI, cloud and data science.",
      },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <PageSection>
      <Reveal>
        <h1 className="text-4xl font-black sm:text-5xl">
          My <span className="text-gradient">certifications</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Oracle Certified Professional credentials across generative AI, cloud development, data
          science and networking.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <li className="glass-card flex h-full flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple/15 text-lg font-black text-purple">
                  {c.issuer.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-bold">{c.issuer}</p>
                  <p className="text-xs text-muted-foreground">{c.date}</p>
                </div>
              </div>
              <h2 className="mt-4 flex-1 text-base font-bold leading-snug">{c.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2 self-start">
                {c.pdf && (
                  <a href={c.pdf} target="_blank" rel="noreferrer noopener" className="btn-purple text-sm">
                    <AiOutlineFilePdf aria-hidden /> View
                  </a>
                )}
                <a
                  href={c.verify}
                  target={c.verify === "#" ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="btn-purple text-sm"
                >
                  <BsPatchCheckFill aria-hidden /> Verify
                </a>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </PageSection>
  );
}
