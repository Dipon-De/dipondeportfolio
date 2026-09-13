import { createFileRoute, Link } from "@tanstack/react-router";
import { PageSection } from "@/components/Reveal";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found — Dipon De" },
      { name: "description", content: "This page does not exist on Dipon De's portfolio." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <PageSection className="flex min-h-[70vh] items-center justify-center text-center">
      <div className="glass-card mx-auto max-w-md p-10">
        <p className="text-7xl font-black text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold">This page wandered off</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The link may be broken or the page may have moved.
        </p>
        <Link to="/" className="btn-purple mt-6">
          Back home
        </Link>
      </div>
    </PageSection>
  );
}
