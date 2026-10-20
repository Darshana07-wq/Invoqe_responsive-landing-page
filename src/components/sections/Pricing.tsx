import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/forever',
    desc: 'For individuals and small teams getting started.',
    features: ['Up to 5 members', '3 projects', 'Basic automations', 'Community support'],
    cta: 'Start for free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$12',
    cadence: '/user/mo',
    desc: 'For growing teams that need more power and control.',
    features: ['Unlimited members', 'Unlimited projects', 'Advanced automations', 'Version history', 'Priority support', 'SSO / SAML'],
    cta: 'Start 14-day trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    desc: 'For organizations with advanced security and scale needs.',
    features: ['Everything in Pro', 'Dedicated manager', 'Custom SLAs', 'Audit logs', 'On-prem option'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                p.highlight
                  ? 'border-brand-500 bg-white shadow-glow dark:border-brand-500 dark:bg-ink-900 lg:-translate-y-2'
                  : 'border-ink-100 bg-white shadow-soft hover:border-brand-200 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-800'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-ink-900 dark:text-white">{p.price}</span>
                <span className="text-sm text-ink-500 dark:text-ink-400">{p.cadence}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.highlight ? 'bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400' : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300'}`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 w-full ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}
              >
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
