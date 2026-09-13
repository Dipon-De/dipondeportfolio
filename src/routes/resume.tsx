import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { PageSection, Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Dipon De" },
      {
        name: "description",
        content:
          "View and download the CV of Dipon De, Machine Learning and LLM engineer based in Kolkata, India.",
      },
      { property: "og:title", content: "Resume — Dipon De" },
      { property: "og:description", content: "Download the latest CV of Dipon De." },
    ],
  }),
  component: ResumePage,
});

function PdfViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-purple/25 bg-background/40">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-purple/10 to-transparent" />
      )}
      <iframe
        src={profile.resumePath}
        title="Resume of Dipon De"
        className="h-full w-full"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function ResumePage() {
  return (
    <PageSection>
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black sm:text-5xl">
            My <span className="text-gradient">resume</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Read it here or grab a PDF copy for later.
          </p>
        </div>
        <a href={profile.resumePath} download className="btn-purple">
          <AiOutlineDownload aria-hidden /> Download CV
        </a>
      </Reveal>

      <div className="mt-8">
        <ClientOnly
          fallback={
            <div className="h-[80vh] w-full animate-pulse rounded-2xl border border-purple/25 bg-purple/5" />
          }
        >
          <PdfViewer />
        </ClientOnly>
      </div>
    </PageSection>
  );
}
