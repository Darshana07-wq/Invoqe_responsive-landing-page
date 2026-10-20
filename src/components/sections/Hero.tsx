import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-70" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/30" />
        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-900/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-ink-950" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            Now with AI-assisted project planning
            <span className="text-brand-400">·</span>
            <span className="text-brand-500">v2.0</span>
          </div>

          <h1 className="animate-fade-up animate-delay-100 mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            Where teams move
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">faster, together.</span>
          </h1>

          <p className="animate-fade-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            Nimbus is the all-in-one workspace for modern teams. Plan, build, and ship —
            with docs, tasks, and realtime chat in one beautifully fast place.
          </p>

          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto">
              See how it works
            </a>
          </div>

          <div className="animate-fade-up animate-delay-400 mt-6 flex flex-col items-center justify-center gap-3 text-sm text-ink-500 dark:text-ink-400 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-500" /> Free 14-day trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-500" /> No credit card required
            </span>
            <span className="inline-flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
              ))}
              <span className="ml-1 font-medium">4.9/5</span>
            </span>
          </div>
        </div>

        {/* Product preview */}
        <div className="animate-fade-up animate-delay-500 mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-ink-200/60 bg-white p-2 shadow-[0_40px_80px_-30px_rgba(31,35,48,0.25)] dark:border-ink-800 dark:bg-ink-900">
            <div className="overflow-hidden rounded-xl border border-ink-100 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-ink-100 px-4 py-3 dark:border-ink-800">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1">
                  <div className="mx-auto max-w-xs rounded-md bg-white px-3 py-1 text-center text-xs text-ink-400 dark:bg-ink-800 dark:text-ink-500">
                    app.nimbus.io/workspace
                  </div>
                </div>
              </div>

              {/* App body */}
              <div className="grid grid-cols-12">
                {/* Sidebar */}
                <aside className="col-span-3 hidden flex-col gap-1 border-r border-ink-100 p-3 dark:border-ink-800 sm:flex">
                  <div className="mb-2 flex items-center gap-2 px-2">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-500 to-brand-700" />
                    <div className="h-2.5 w-16 rounded bg-ink-200 dark:bg-ink-700" />
                  </div>
                  {['Overview', 'Projects', 'Tasks', 'Docs', 'Inbox'].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs ${
                        i === 1
                          ? 'bg-brand-100 font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                          : 'text-ink-400'
                      }`}
                    >
                      <div className={`h-3 w-3 rounded ${i === 1 ? 'bg-brand-500' : 'bg-ink-200 dark:bg-ink-700'}`} />
                      {item}
                    </div>
                  ))}
                </aside>

                {/* Main */}
                <div className="col-span-12 p-4 sm:col-span-9 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="h-3 w-32 rounded bg-ink-200 dark:bg-ink-700" />
                      <div className="mt-2 h-2 w-48 rounded bg-ink-100 dark:bg-ink-800" />
                    </div>
                    <div className="flex -space-x-2">
                      {['bg-brand-400', 'bg-accent-400', 'bg-ink-400', 'bg-brand-600'].map((c) => (
                        <div key={c} className={`h-7 w-7 rounded-full border-2 border-white ${c} dark:border-ink-950`} />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: CheckCircle2, title: 'Ship v2.0 launch', tag: 'In progress', color: 'brand' },
                      { icon: MessageSquare, title: 'Customer feedback', tag: '18 new', color: 'accent' },
                      { icon: Sparkles, title: 'Q4 roadmap', tag: 'Planning', color: 'brand' },
                      { icon: CheckCircle2, title: 'Onboarding flow', tag: 'Review', color: 'accent' },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-ink-100 bg-white p-4 dark:border-ink-800 dark:bg-ink-900"
                      >
                        <div className="flex items-start justify-between">
                          <card.icon className="h-5 w-5 text-brand-500" />
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${card.color === 'brand' ? 'bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300' : 'bg-accent-100 text-accent-700 dark:bg-accent-950 dark:text-accent-300'}`}>
                            {card.tag}
                          </span>
                        </div>
                        <div className="mt-3 h-2.5 w-28 rounded bg-ink-200 dark:bg-ink-700" />
                        <div className="mt-2 flex gap-1.5">
                          <div className="h-1.5 flex-1 rounded bg-ink-100 dark:bg-ink-800" />
                          <div className="h-1.5 w-8 rounded bg-brand-300 dark:bg-brand-700" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accents */}
          <div className="absolute -left-4 top-1/3 hidden animate-float rounded-xl border border-ink-100 bg-white p-3 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:block">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <div className="h-2 w-20 rounded bg-ink-200 dark:bg-ink-700" />
                <div className="mt-1.5 h-1.5 w-14 rounded bg-ink-100 dark:bg-ink-800" />
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-2/3 hidden animate-float rounded-xl border border-ink-100 bg-white p-3 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:block" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent-100 text-accent-600 dark:bg-accent-950 dark:text-accent-400">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <div className="h-2 w-16 rounded bg-ink-200 dark:bg-ink-700" />
                <div className="mt-1.5 h-1.5 w-10 rounded bg-ink-100 dark:bg-ink-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-20 lg:mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
            Trusted by fast-moving teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 dark:opacity-50">
            {['Vertex', 'Lumen', 'Northwind', 'Cobalt', 'Stratus', 'Meridian'].map((name) => (
              <span key={name} className="font-display text-lg font-bold text-ink-500 dark:text-ink-400">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
