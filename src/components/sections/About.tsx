import { BarChart3, Globe2, Heart, Layers } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const STATS = [
  { value: '50k+', label: 'Teams onboard' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '120+', label: 'Countries' },
  { value: '4.9/5', label: 'Avg. rating' },
];

const VALUES = [
  {
    icon: Layers,
    title: 'Built for depth',
    desc: 'We obsess over the details others skip — keyboard shortcuts, undo everywhere, and APIs that feel like they were made for humans.',
  },
  {
    icon: Globe2,
    title: 'Made for everyone',
    desc: 'From indie makers to Fortune 500s, Nimbus adapts to how you work instead of forcing you into a rigid framework.',
  },
  {
    icon: Heart,
    title: 'Customer-obsessed',
    desc: 'We ship a new improvement every week, most of them directly from user feedback. Our roadmap is public, and so is our changelog.',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-100/40 blur-3xl dark:bg-accent-950/20" />
      </div>

      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: copy + stats */}
          <Reveal>
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> About Nimbus
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              We're rebuilding the way teams work, from first principles
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Nimbus started in 2021 when three engineers got tired of juggling six tools to
              ship one feature. We believed workspaces should feel like one product, not a
              dozen stitched together. Today, over 50,000 teams agree.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-soft dark:border-ink-800 dark:bg-ink-900"
                >
                  <div className="font-display text-2xl font-extrabold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-ink-500 dark:text-ink-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-5 dark:border-ink-800 dark:bg-ink-900/60">
              <BarChart3 className="hidden h-10 w-10 shrink-0 text-brand-500 sm:block" />
              <p className="text-sm text-ink-600 dark:text-ink-300">
                <span className="font-semibold text-ink-900 dark:text-white">3x faster delivery.</span>{' '}
                Teams switching to Nimbus report shipping features 3x faster within the first
                quarter, thanks to less context switching and built-in automation.
              </p>
            </div>
          </Reveal>

          {/* Right: values */}
          <div className="flex flex-col gap-4">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="group flex gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-800"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
