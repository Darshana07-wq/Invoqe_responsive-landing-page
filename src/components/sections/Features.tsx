import {
  Bolt,
  GitBranch,
  LayoutGrid,
  MessagesSquare,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const FEATURES = [
  {
    icon: LayoutGrid,
    title: 'Unified workspace',
    desc: 'Docs, tasks, and chat live side by side. No more tab-switching or lost context — everything your team needs in one view.',
  },
  {
    icon: Workflow,
    title: 'Smart automations',
    desc: 'Automate repetitive work with no-code rules. Trigger updates, assign owners, and move projects forward on autopilot.',
  },
  {
    icon: MessagesSquare,
    title: 'Realtime collaboration',
    desc: 'See changes as they happen. Comment inline, mention teammates, and resolve threads without leaving the page.',
  },
  {
    icon: GitBranch,
    title: 'Built-in versioning',
    desc: 'Every edit is tracked. Roll back docs, restore tasks, and audit who changed what — down to the line.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 Type II, SSO/SAML, granular permissions, and encryption at rest and in transit. Your data stays yours.',
  },
  {
    icon: Bolt,
    title: 'Blazing fast',
    desc: 'Built on a realtime engine that syncs in milliseconds. Nimbus loads instantly, even with thousands of items.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Everything your team needs, nothing it doesn't
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Powerful building blocks that scale from a two-person startup to a global org —
            without the bloat of legacy tools.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="group card hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-glow dark:hover:border-brand-800">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                <f.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
