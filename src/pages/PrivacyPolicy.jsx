import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";

const SECTIONS = [
  {
    title: "Overview",
    body: "This Privacy Policy outlines general principles for how Rural Area Development Society (RADS) approaches visitor and donor privacy on this website. This is placeholder/general content and should be reviewed and finalised with legal counsel before publishing specific, binding commitments.",
  },
  {
    title: "Information We May Collect",
    body: "When you use our contact form or donation flow, you may voluntarily provide information such as your name, email address, phone number and donation amount. This website does not currently have a backend, so form submissions are not transmitted to a server — this will change once backend/email integration is added.",
  },
  {
    title: "How Information May Be Used",
    body: "Any information collected in the future would be used solely to respond to enquiries, process donations and provide updates about our programs, in accordance with applicable law.",
  },
  {
    title: "Payment Information",
    body: "Donations are initiated via UPI deep links to third-party payment apps installed on your device. RADS does not collect or store your banking or UPI credentials through this website.",
  },
  {
    title: "Cookies & Analytics",
    body: "This website does not currently use tracking cookies or third-party analytics. Should this change, this policy will be updated accordingly.",
  },
  {
    title: "Contact",
    body: "For any privacy-related questions, please reach out via our Contact page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="RADS Foundation's privacy policy covering information collection, usage and donation-related data handling."
        path="/privacy-policy"
      />
      <PageHero
        breadcrumb="Home / Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
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
