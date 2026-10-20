import { Cloud, Github, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/Logo';

const COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'API reference', 'Community', 'Status', 'Security'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'DPA', 'SOC 2'],
  },
];

const SOCIALS = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/50 dark:border-ink-800 dark:bg-ink-950">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              The all-in-one workspace where modern teams plan, build, and ship — together, in real time.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 text-ink-500 transition-all hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-ink-700 dark:text-ink-400 dark:hover:border-brand-700 dark:hover:bg-brand-950 dark:hover:text-brand-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-900 dark:text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#home" className="text-sm text-ink-500 transition-colors hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-400">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 dark:border-ink-800 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400">
            <Cloud className="h-4 w-4 text-brand-500" />
            © {new Date().getFullYear()} Nimbus Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
