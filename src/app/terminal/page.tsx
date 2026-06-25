import { PageShell } from "@/features/site/components/page-shell";
import { FakeTerminal } from "@/features/site/components/fake-terminal";
import { SectionHeading } from "@/features/site/components/section-heading";

export const metadata = {
  title: "Terminal",
};

export default function TerminalPage() {
  return (
    <main className="py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Terminal"
          title="A fake terminal for fast exploration"
          description="Type commands like help, about, projects, resume, github, and contact to simulate a product-like command surface."
        />
        <div className="mt-12">
          <FakeTerminal />
        </div>
      </PageShell>
    </main>
  );
}
