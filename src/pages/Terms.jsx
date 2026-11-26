import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing this website, you agree to these general Terms of Use. This is placeholder content and should be reviewed with legal counsel before publishing binding terms.",
  },
  {
    title: "Use of This Website",
    body: "This website provides information about RADS Foundation's programs and offers a way to make voluntary donations. Content is provided in good faith, and illustrative figures (e.g. donation impact examples) are examples only, not guarantees.",
  },
  {
    title: "Donations",
    body: "Donations made via this website are voluntary and processed through third-party UPI payment applications. RADS does not currently operate an automated payment verification system; confirmation of successful payment may require manual follow-up.",
  },
  {
    title: "Intellectual Property",
    body: "All content, illustrations and branding on this website belong to RADS Foundation unless otherwise noted, and may not be reproduced without permission.",
  },
  {
    title: "Limitation of Liability",
    body: "RADS makes reasonable efforts to keep information on this site accurate and up to date, but does not guarantee completeness or accuracy at all times.",
  },
  {
    title: "Changes to These Terms",
    body: "These Terms of Use may be updated periodically. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Terms of use governing access to the RADS Foundation website and donation process."
        path="/terms"
      />
      <PageHero
        breadcrumb="Home / Terms"
        eyebrow="Legal"
        title="Terms of Use"
        description="Last updated: this is placeholder content pending legal review."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container width="narrow">
          <div className="flex flex-col gap-8">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-navy-900">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-navy-600">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
