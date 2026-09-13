import { createFileRoute } from "@tanstack/react-router";
import { PageSection, Reveal } from "@/components/Reveal";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dipon De" },
      {
        name: "description",
        content:
          "Machine learning and deep learning projects by Dipon De: kidney stone detection, real-time anomaly detection, BioGPT fine-tuning and Bitcoin forecasting.",
      },
      { property: "og:title", content: "Projects — Dipon De" },
      {
        property: "og:description",
        content: "Medical AI, computer vision, LLM and time-series projects with full case studies.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageSection>
      <Reveal>
        <h1 className="text-4xl font-black sm:text-5xl">
          My recent <span className="text-gradient">work</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Filter by area, then open any card for the full case study, tech stack and links.
        </p>
      </Reveal>
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </PageSection>
  );
}
