import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { contactService } from "../../services/contactService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim() || !EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.phone.trim() && !MOBILE_REGEX.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!form.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "Please enter a message of at least 10 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    await contactService.sendMessage(form);
    setStatus("success");
    setForm(initialForm);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border-2 border-orange-200 bg-orange-50 p-8 text-center"
      >
        <CheckCircle2 className="text-orange-500" size={40} />
        <p className="text-lg font-bold text-navy-900">Message received</p>
        <p className="max-w-sm text-sm text-navy-600">
          Thank you for reaching out. Your message has been recorded on this
          device. Since a backend/email service isn't connected yet, our team
          will follow up once that integration is live — for urgent matters,
          please call or email us directly.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={form.name}
          error={errors.name}
          onChange={(v) => handleChange("name", v)}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(v) => handleChange("email", v)}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label="Phone (optional)"
          type="tel"
          value={form.phone}
          error={errors.phone}
          onChange={(v) => handleChange("phone", v)}
          autoComplete="tel"
        />
        <Field
          id="subject"
          label="Subject"
          value={form.subject}
          error={errors.subject}
          onChange={(v) => handleChange("subject", v)}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="w-full rounded-xl border-2 border-navy-100 bg-white px-4 py-3 text-base text-navy-900 outline-none transition-colors focus:border-orange-500"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" icon={Send} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({ id, label, value, error, onChange, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-h-[48px] rounded-xl border-2 border-navy-100 bg-white px-4 py-2.5 text-base text-navy-900 outline-none transition-colors focus:border-orange-500"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
