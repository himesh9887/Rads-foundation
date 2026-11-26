import { initiateUpiPayment } from "../utils/payment";

/**
 * Service-layer seam for donations. Today this only wraps the frontend UPI
 * intent flow. When a backend + payment gateway is introduced, this is the
 * single place to change — e.g. call an API to create an order, redirect to
 * a gateway checkout, and poll/verify status server-side — without touching
 * the donation UI components.
 */
export const donationService = {
  async startDonation({ amount, note, reference }) {
    return initiateUpiPayment({ amount, note, reference });
  },

  /**
   * NOT IMPLEMENTED: real payment verification requires a backend that can
   * confirm the transaction with a bank or payment gateway. Intentionally
   * left unimplemented to avoid fabricating payment confirmation.
   */
  async verifyDonation() {
    throw new Error(
      "Payment verification is not implemented yet. This requires a backend/payment gateway integration."
    );
  },
};
