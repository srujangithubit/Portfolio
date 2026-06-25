import Link from "next/link";
import { PageShell } from "@/features/site/components/page-shell";
import { ContactForm } from "@/features/site/components/contact-form";
import { SectionHeading } from "@/features/site/components/section-heading";
import { socialLinks } from "@/features/site/data";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Contact"
          title="Beautiful, direct, and ready for collaboration"
          description="Use this page for hiring conversations, partnership ideas, or project inquiries."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#101010] p-6">
            <div className="text-sm text-white/55">Availability</div>
            <div className="text-2xl font-semibold text-white">
              Open to select opportunities
            </div>
            <div className="grid gap-3 pt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </PageShell>
    </main>
  );
}
