import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@nimbus.io' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0123' },
  { icon: MapPin, label: 'Office', value: '548 Market St, San Francisco' },
  { icon: MessageSquare, label: 'Live chat', value: 'Available 24/7 in-app' },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-950/30" />
      </div>

      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <Reveal>
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Contact
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              Let's talk about your team
            </h2>
            <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
              Whether you're evaluating Nimbus or need a custom plan, we're here to help.
              Reach out and we'll get back within one business day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 transition-colors hover:border-brand-200 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-800"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">{c.label}</div>
                    <div className="text-sm font-semibold text-ink-900 dark:text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-glow">
              <h3 className="font-display text-lg font-bold">Prefer a live demo?</h3>
              <p className="mt-1.5 text-sm text-brand-100">
                Book a 30-minute walkthrough with a product specialist and see Nimbus on your use case.
              </p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-transform hover:scale-105">
                Book a demo
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="card p-8">
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="relative">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-300" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink-900 dark:text-white">Message sent!</h3>
                  <p className="mt-2 max-w-xs text-sm text-ink-600 dark:text-ink-300">
                    Thanks {form.name || 'there'} — we'll be in touch within one business day.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', message: '' }); }} className="btn-secondary mt-6">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input id="name" required value={form.name} onChange={update('name')} placeholder="Jane Doe" className={inputCls} />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" className={inputCls} />
                    </Field>
                  </div>
                  <Field label="Company" htmlFor="company">
                    <input id="company" value={form.company} onChange={update('company')} placeholder="Company name (optional)" className={inputCls} />
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea id="message" required value={form.message} onChange={update('message')} rows={5} placeholder="Tell us what you're looking for…" className={`${inputCls} resize-none`} />
                  </Field>
                  <button type="submit" className="btn-primary w-full">
                    Send message
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-ink-400 dark:text-ink-500">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:placeholder:text-ink-600 dark:focus:border-brand-500 dark:focus:ring-brand-950';

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">{label}</span>
      {children}
    </label>
  );
}
