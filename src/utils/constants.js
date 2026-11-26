/**
 * Central, editable configuration for foundation identity, contact details
 * and donation settings. Update these values as real information becomes
 * available — components should never hardcode this data directly.
 */

export const FOUNDATION = {
  name: "Rural Area Development Society",
  shortName: "RADS",
  tagline: "Empower Rural Lives, Through Hope & Support",
  description:
    "We are dedicated to helping underprivileged families through education, healthcare, food distribution, women empowerment, and community development programs across rural areas.",
  foundedYear: 2012,
};

export const CONTACT = {
  address: "Community Trust Building, Near Gram Panchayat Office, Kolhapur District, Maharashtra, India — 416001",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "contact@radsfoundation.org",
  officeHours: "Monday – Saturday, 9:30 AM – 6:00 PM IST",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Kolhapur,Maharashtra,India&output=embed",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
};

/**
 * IMPORTANT — Payment configuration:
 * This is a FRONTEND-ONLY donation experience. Setting a UPI ID here only
 * prepares a UPI intent link; it does NOT verify or confirm payment.
 *
 * SOURCE OF TRUTH: these values are decoded directly from the official
 * donation QR image at src/assets/donation/rads-donation-qr.png. Decoding
 * the supplied image with jsQR yielded exactly:
 *   upi://pay?pa=radsrj@sbi&pn=RURAL%20AREA%20DEVELOPMENT%20SOCIETY
 *   &mc=8641&tr=&tn=&am=&cu=INR&url=&mode=02&purpose=00&orgid=180102&sign=...
 *
 * This is a signed NPCI merchant QR (it carries orgid + sign), and mc=8641
 * is the "Civic, Social & Fraternal Associations" merchant category — i.e.
 * a registered merchant account, unlike the earlier personal test VPA.
 *
 * `upiId` and `payeeName` MUST always match whatever VPA/name the current
 * QR image actually encodes — if the QR image is ever replaced, re-decode
 * it and update these values to match. Do not edit these independently of
 * the QR image.
 *
 * `merchantCategoryCode` is recorded here only as a faithful record of what
 * the QR encodes. It is intentionally NOT sent in the Pay Now UPI intent,
 * because the QR is a *signed* QR: its `sign` covers the QR payload (which
 * carries an empty `am`), so it cannot be reused for an intent that adds a
 * donor-chosen amount. Pay Now therefore sends the plain, unsigned intent
 * form (pa/pn/am/cu) — see buildUpiIntentUrl in src/utils/payment.js.
 */
export const PAYMENT_CONFIG = {
  upiId: "radsrj@sbi",
  payeeName: "RURAL AREA DEVELOPMENT SOCIETY",
  merchantCategoryCode: "8641",
  currency: "INR",
  transactionNote: "Donation to RADS Foundation",
};

export const DONATION_PRESET_AMOUNTS = [100, 500, 1000, 2500, 5000];

export const DONATION_MIN_AMOUNT = 1;
export const DONATION_MAX_AMOUNT = 500000;

export const DONATION_IMPACT_EXAMPLES = [
  {
    amount: 100,
    description: "Can help support basic food needs for a family for a day.",
  },
  {
    amount: 500,
    description: "Can help provide educational materials for a child.",
  },
  {
    amount: 1000,
    description:
      "Can help contribute toward healthcare or community support initiatives.",
  },
];
