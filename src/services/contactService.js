/**
 * Service-layer seam for the contact form. There is no backend yet, so this
 * only simulates client-side handling and resolves locally. Replace the
 * implementation with a real API/email-service call later without changing
 * the ContactForm component's usage of `contactService.sendMessage`.
 */
export const contactService = {
  async sendMessage(formData) {
    // NOTE: No network request is made. This is intentional — there is no
    // backend/email service connected yet. The promise resolves so the UI
    // can show a clear, honest "received on this device" style message.
    return Promise.resolve({ received: true, data: formData });
  },
};
