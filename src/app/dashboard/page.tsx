import { PageShell } from "@/features/site/components/page-shell";
import { DashboardView } from "@/features/site/components/dashboard-view";
import { SectionHeading } from "@/features/site/components/section-heading";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Dashboard"
          title="Developer dashboard"
          description="A concise operational view of repositories, learning focus, and the current technology radar."
        />
        <div className="mt-12">
          <DashboardView />
        </div>
      </PageShell>
    </main>
  );
}
