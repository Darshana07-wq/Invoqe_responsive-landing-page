import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-px">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 px-8 py-14 text-center shadow-glow sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-accent-400/30 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to move faster, together?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
              Join 50,000+ teams already shipping with Nimbus. Free for 14 days, no credit card needed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn w-full bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5 sm:w-auto">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn w-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto">
                Book a demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
