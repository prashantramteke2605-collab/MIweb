import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CONTACT } from "../lib/content";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    source: "",
    challenge: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.challenge) {
      toast.error("Name, email and challenge are required");
      return;
    }
    const subject = `Dangerous question from ${form.name}${form.company ? " at " + form.company : ""}`;
    const body = `Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Role: ${form.role}
Heard about us from: ${form.source}

Most pressing challenge:
${form.challenge}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
  };

  return (
    <article
      className="relative bg-[#06060A] pt-36 pb-28 min-h-screen overflow-hidden"
      data-testid="contact-page"
    >
      <div className="absolute top-20 -right-40 w-[700px] h-[700px] orb orb--lime opacity-40" />
      <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] orb orb--ember opacity-30" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow mb-4">Contact</div>
              <h1 className="display-xxl leading-[0.95]">
                Let's build something <span className="text-lime">dangerous.</span>
              </h1>
              <p className="font-editorial text-xl md:text-2xl text-white/75 mt-8 leading-[1.3]">
                {CONTACT.body}
              </p>

              <div className="mt-14 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-display text-3xl text-lime link-underline"
                    data-testid="contact-email"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                    Our rooms
                  </div>
                  <div className="text-white/80">
                    R&D Heads · Marketing VPs · CEOs at Fortune 500 FMCG
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-white/[0.02] p-8 md:p-10 space-y-7"
              data-testid="contact-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  testId="contact-input-name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  testId="contact-input-email"
                />
                <Field
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  testId="contact-input-company"
                />
                <Field
                  label="Your role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  testId="contact-input-role"
                />
              </div>
              <Field
                label="How did you hear about us?"
                name="source"
                value={form.source}
                onChange={handleChange}
                testId="contact-input-source"
              />
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/50 block mb-2">
                  Your most pressing challenge <span className="text-ember">*</span>
                </label>
                <textarea
                  name="challenge"
                  value={form.challenge}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell us what's keeping you up at night…"
                  className="mn-input cursor-hover"
                  data-testid="contact-input-challenge"
                />
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  className="btn-pill btn-pill--lime cursor-hover"
                  data-testid="contact-submit"
                >
                  Send it. We're listening. →
                </button>
                <p className="text-white/40 text-xs">
                  We'll open your email client with the message pre-filled.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </article>
  );
}

function Field({ label, name, value, onChange, type = "text", required, testId }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-white/50 block mb-2">
        {label}
        {required && <span className="text-ember"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mn-input cursor-hover"
        data-testid={testId}
      />
    </div>
  );
}
