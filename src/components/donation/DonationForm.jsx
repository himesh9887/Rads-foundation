const FIELDS = [
  { key: "name", label: "Full Name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { key: "mobile", label: "Mobile Number", type: "tel", placeholder: "10-digit mobile number", autoComplete: "tel" },
  { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com", autoComplete: "email" },
];

export default function DonationForm({ donor, errors, onChange }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-navy-800">
        Donor details <span className="font-normal text-navy-400">(optional)</span>
      </p>
      <div className="grid gap-3.5">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`donor-${field.key}`}
              className="mb-1.5 block text-sm font-semibold text-navy-700"
            >
              {field.label}
            </label>
            <input
              id={`donor-${field.key}`}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={donor[field.key]}
              onChange={(event) => onChange(field.key, event.target.value)}
              className="w-full min-h-[48px] rounded-xl border-2 border-navy-100 bg-white px-4 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-orange-500"
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={errors[field.key] ? `donor-${field.key}-error` : undefined}
            />
            {errors[field.key] && (
              <p
                id={`donor-${field.key}-error`}
                role="alert"
                className="mt-1.5 text-sm font-medium text-red-600"
              >
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
