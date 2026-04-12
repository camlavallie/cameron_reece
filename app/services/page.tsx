import Link from 'next/link';

type Service = {
  title: string;
  category: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    title: 'Website Design & Development',
    category: 'Web',
    description:
      'Custom websites built to feel polished, clear, and conversion-focused from the first scroll to the final call to action.',
    bullets: [
      'Custom portfolio and business websites',
      'Next.js / React builds with Tailwind CSS',
      'Responsive layouts with strong visual hierarchy',
    ],
  },
  {
    title: 'Branding & Visual Identity',
    category: 'Creative',
    description:
      'Identity systems and visual direction that create consistency across digital, print, and campaign touchpoints.',
    bullets: [
      'Logo and brand identity design',
      'Campaign visuals and social graphics',
      'Print pieces, signage, and branded collateral',
    ],
  },
  {
    title: 'HubSpot CRM Setup & Optimization',
    category: 'CRM',
    description:
      'Structured CRM work that helps clean up contact data, improve segmentation, and create better communication paths.',
    bullets: [
      'Contact property planning and cleanup',
      'List segmentation and audience organization',
      'Marketing contact and subscription setup',
    ],
  },
  {
    title: 'Email Marketing & Automation',
    category: 'Automation',
    description:
      'Intentional email systems built around healthy cadence, better targeting, and stronger lifecycle communication.',
    bullets: [
      'Email design and campaign builds',
      'Automated workflows and follow-up sequences',
      'Audience nurturing and engagement strategy',
    ],
  },
  {
    title: 'Landing Pages & Campaign Systems',
    category: 'Marketing',
    description:
      'Focused landing pages and campaign structures designed to guide visitors toward a clear next step.',
    bullets: [
      'Campaign landing page design',
      'Form strategy and lead capture',
      'Messaging aligned to conversion goals',
    ],
  },
  {
    title: 'Creative Direction & Content Support',
    category: 'Strategy',
    description:
      'Creative support that brings design, messaging, and structure together so the work feels intentional and aligned.',
    bullets: [
      'Visual direction across campaigns',
      'Content layout and presentation support',
      'Creative systems that scale across channels',
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-stone-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-400">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Design, systems, and strategy built to move things forward
          </h2>

          <p className="mt-6 text-base leading-7 text-stone-300 md:text-lg">
            I help brands, businesses, and teams create clearer websites, stronger brand systems,
            cleaner CRM structure, and more intentional marketing that actually supports growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                  {service.category}
                </span>
                <span className="text-sm font-medium text-stone-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-stone-300">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-stone-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6">
                <div className="h-px w-full bg-white/10 transition duration-300 group-hover:bg-white/20" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center backdrop-blur-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-400">
            Let’s build something with clarity
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Need design, development, CRM help, or a better system behind the work?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
            Whether you need a website, a stronger brand presence, cleaner audience segmentation,
            or more intentional automation, I’d love to hear what you’re building.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:text-base"
            >
              Start a project
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
