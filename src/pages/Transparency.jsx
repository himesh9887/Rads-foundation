import { ShieldCheck, FileText, PieChart, ClipboardList, FolderLock } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";

const SECTIONS = [
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    body: "We are committed to full transparency in how contributions are received, managed and used. As our reporting systems are finalised, this page will be updated with verified information.",
  },
  {
    icon: PieChart,
    title: "How Contributions Help",
    body: "Contributions support our active programs — food & relief, education, healthcare, women empowerment, rural and community development. Detailed, itemised fund allocation reporting will be published here as it becomes available.",
  },
  {
    icon: FileText,
    title: "Financial Transparency",
    body: "Information will be published here.",
  },
  {
    icon: ClipboardList,
    title: "Annual Reports",
    body: "Information will be published here.",
  },
  {
    icon: FolderLock,
    title: "Registration & Documents",
    body: "Information will be published here.",
  },
];

export default function Transparency() {
  return (
    <>
      <SEO
        title="Transparency"
        description="RADS Foundation's commitment to transparency, financial accountability and impact reporting."
        path="/transparency"
      />
      <PageHero
        breadcrumb="Home / Transparency"
        eyebrow="Accountability"
        title="Transparency & Accountability"
        description="We believe donors and communities deserve clarity on how contributions are used. This page will grow as our reporting infrastructure is finalised."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container width="narrow">
          <div className="flex flex-col gap-6">
            {SECTIONS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-navy-900">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-dashed border-navy-200 bg-navy-50/60 p-6 text-center">
            <p className="text-sm font-semibold text-navy-500">
              Impact reports, certificates and financial statements will be
              made available for download here once published.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
