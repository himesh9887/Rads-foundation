import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ContactForm from "../components/contact/ContactForm";
import { CONTACT } from "../utils/constants";

const DETAILS = [
  { icon: MapPin, label: "Our Address", value: CONTACT.address },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: "Office Hours", value: CONTACT.officeHours },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with RADS Foundation — office address, phone, email and a contact form for queries and partnerships."
        path="/contact"
      />
      <PageHero
        breadcrumb="Home / Contact"
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question, partnership idea, or want to volunteer? We'd love to hear from you."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-navy-400">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block text-sm font-semibold text-navy-800 hover:text-orange-600">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-navy-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
                <iframe
                  title="RADS Foundation location map"
                  src={CONTACT.mapEmbedUrl}
                  className="h-64 w-full grayscale sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-bold text-navy-900">Send Us a Message</h2>
              <p className="mt-1.5 text-sm text-navy-500">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
