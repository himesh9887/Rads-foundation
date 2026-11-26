import SEO from "../components/common/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import DonationAmountSelector from "../components/donation/DonationAmountSelector";
import DonationForm from "../components/donation/DonationForm";
import PaymentMethod from "../components/donation/PaymentMethod";
import { useDonationFlow } from "../hooks/useDonationFlow";
import { DONATION_IMPACT_EXAMPLES } from "../utils/constants";
import { formatCurrency } from "../utils/payment";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export default function Donate() {
  const flow = useDonationFlow();

  return (
    <>
      <SEO
        title="Donate"
        description="Make a donation to RADS Foundation via UPI to support food relief, education, healthcare, women empowerment and rural development programs."
        path="/donate"
      />
      <PageHero
        breadcrumb="Home / Donate"
        eyebrow="Make a Difference"
        title="Donate to RADS Foundation"
        description="Your contribution directly funds food relief, education, healthcare and rural development programs for families who need it most."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="flex flex-col gap-7 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
              <DonationAmountSelector
                selectedPreset={flow.selectedPreset}
                isCustom={flow.isCustom}
                customAmount={flow.customAmount}
                onSelectPreset={flow.selectPreset}
                onSelectCustom={flow.selectCustom}
                error={flow.amountError}
              />
              <DonationForm donor={flow.donor} errors={flow.errors} onChange={flow.updateDonor} />
              <PaymentMethod
                amount={flow.amount}
                status={flow.status}
                isSubmitting={flow.isSubmitting}
                onPayNow={flow.submitPayment}
              />
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-3xl bg-navy-900 p-6 text-white sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                  <HeartHandshake size={22} />
                </span>
                <h2 className="mt-5 text-xl font-bold">How Your Donation Helps</h2>
                <div className="mt-5 flex flex-col gap-4">
                  {DONATION_IMPACT_EXAMPLES.map((example) => (
                    <div key={example.amount} className="border-t border-white/10 pt-4 first:border-0 first:pt-0">
                      <p className="text-lg font-extrabold text-orange-400">
                        {formatCurrency(example.amount)}
                      </p>
                      <p className="mt-1 text-sm text-navy-200">{example.description}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-navy-400">
                  * Illustrative examples only, not a guarantee of exact fund allocation.
                </p>
              </div>

              <div className="flex gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                <ShieldCheck className="mt-0.5 shrink-0 text-orange-500" size={22} />
                <p className="text-sm leading-relaxed text-navy-500">
                  RADS does not store your payment details. Payments are
                  initiated directly through your chosen UPI app. Full
                  automated payment verification will be available once our
                  payment gateway integration is complete.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
