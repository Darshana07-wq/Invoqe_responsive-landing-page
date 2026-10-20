import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const TESTIMONIALS = [
  {
    quote:
      "Nimbus replaced four tools for us. Our team finally has one home for everything, and shipping feels effortless again. It's the rare software that gets out of your way.",
    name: 'Maya Chen',
    role: 'Head of Product, Vertex',
    avatar: 'MC',
    color: 'from-brand-400 to-brand-600',
  },
  {
    quote:
      'The realtime collaboration is unreal. We stopped scheduling status meetings because everyone can just see progress as it happens. That alone saved us 6 hours a week.',
    name: 'Daniel Okafor',
    role: 'Engineering Lead, Lumen',
    avatar: 'DO',
    color: 'from-accent-400 to-accent-600',
  },
  {
    quote:
      "I've tried every project management tool out there. Nimbus is the first one my whole team actually enjoys using. The keyboard shortcuts alone won me over.",
    name: 'Sofia Rossi',
    role: 'Founder, Stratus',
    avatar: 'SR',
    color: 'from-ink-400 to-ink-600',
  },
  {
    quote:
      'We onboarded 200 people in a weekend. The learning curve is nearly flat, and the automations let us retire a pile of manual spreadsheets. ROI was immediate.',
    name: 'James Whitfield',
    role: 'COO, Northwind',
    avatar: 'JW',
    color: 'from-brand-500 to-accent-500',
  },
  {
    quote:
      'Security review passed on the first try. SOC 2, SAML, granular roles — everything our compliance team needed was already there. That never happens.',
    name: 'Priya Nair',
    role: 'VP Engineering, Cobalt',
    avatar: 'PN',
    color: 'from-brand-600 to-ink-600',
  },
  {
    quote:
      'Nimbus feels like it was designed by people who actually do the work. Every detail, from undo to inline comments, shows they get it. It is a joy to use.',
    name: 'Tom Becker',
    role: 'Design Director, Meridian',
    avatar: 'TB',
    color: 'from-accent-500 to-brand-500',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 dot-pattern opacity-50" />
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
            Loved by teams who ship
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Don't take our word for it. Here's what teams say after switching to Nimbus.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100} className="break-inside-avoid">
              <figure className="group card hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow dark:hover:border-brand-800">
                <Quote className="h-8 w-8 text-brand-200 transition-colors group-hover:text-brand-400 dark:text-brand-800" />
                <blockquote className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-ink-500 dark:text-ink-400">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
