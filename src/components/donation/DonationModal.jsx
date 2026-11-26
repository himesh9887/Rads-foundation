import { useEffect } from "react";
import Modal from "../ui/Modal";
import DonationAmountSelector from "./DonationAmountSelector";
import DonationForm from "./DonationForm";
import PaymentMethod, { DonationPayButton } from "./PaymentMethod";
import { useDonationFlow } from "../../hooks/useDonationFlow";
import { useDonationModal } from "../../context/DonationModalContext";

export default function DonationModal() {
  const { isOpen, closeDonationModal } = useDonationModal();
  const flow = useDonationFlow();

  useEffect(() => {
    if (!isOpen) flow.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeDonationModal} title="Make a Donation" maxWidth="max-w-xl">
      <div className="flex flex-col gap-6">
        <p className="text-sm text-navy-500">
          Your support directly funds food relief, education, healthcare and
          rural development programs. Every amount makes a difference.
        </p>

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
          showAction={false}
        />

        {/*
          The modal body is much taller than the dialog (~1350px of content in
          a ~650px box), so an inline action sat ~600px below the fold and
          read as "the button never appears". This pins it to the bottom of
          the dialog's scroll area, mirroring the sticky header Modal already
          renders.

          It must be a DIRECT child of this tall flex container: `position:
          sticky` is constrained by its own parent's box, so nesting it inside
          PaymentMethod (whose box also starts below the fold) would not pin
          it. Negative margins cancel the modal body padding
          (px-5 py-5 / sm:px-6 sm:py-6) so the bar spans the full width.
        */}
        <div className="sticky bottom-0 z-10 -mx-5 -mb-5 border-t border-navy-100 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-6 sm:-mb-6 sm:px-6">
          <DonationPayButton
            isSubmitting={flow.isSubmitting}
            onPayNow={flow.submitPayment}
          />
        </div>
      </div>
    </Modal>
  );
}
