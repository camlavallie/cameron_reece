import Link from 'next/link'

type Integration = {
  label: string
  title: string
  description: string
  bullets: string[]
}

const integrations: Integration[] = [
  {
    label: 'Next.js → CRM',
    title: 'Websites that feed your CRM directly',
    description:
      'Forms, landing pages, and lead capture built in Next.js that send clean, structured data straight into your CRM—no copy-paste, no lost leads.',
    bullets: [
      'Custom forms posting through Next.js API routes and server actions',
      'Contacts, deals, opportunities, and tags created automatically',
      'UTM and source attribution captured on every lead',
      'Server-side API keys, validation, and spam protection',
    ],
  },
  {
    label: 'Apps → CRM',
    title: 'Apps and internal tools connected to your CRM data',
    description:
      'Dashboards, internal tools, and custom apps that read from and write to your CRM, so your team works from one source of truth.',
    bullets: [
      'REST API and webhook integrations that sync events both ways',
      'Internal dashboards for managing inquiries and pipelines',
      'Reporting views built on live CRM data',
      'Custom fields and properties mapped to how your team works',
    ],
  },
  {
    label: 'Automation',
    title: 'Automations that follow up for you',
    description:
      'Once a lead lands, the system takes over—routing, nurturing, and notifying the right people at the right time.',
    bullets: [
      'Automated follow-up funnels, workflows, and email sequences',
      'Instant internal notifications when new leads come in',
      'Lead routing, scoring, and lifecycle stage updates',
      'Journeys built around segmentation and healthy send cadence',
    ],
  },
]

const flow = ['Website or app', 'Next.js API', 'CRM', 'Automations', 'Follow-up + team alerts']

const platforms = ['HubSpot', 'GoHighLevel', 'Braze', 'Mailchimp', 'Shopify', 'Webflow']

const proof = [
  {
    project: 'Lifestyle Christianity Venue',
    result:
      'Venue site and internal dashboard integrated with GoHighLevel via API—new inquiries route into an automated follow-up funnel and notify the internal team.',
    href: 'https://venue.lifestylechristianity.com/',
  },
  {
    project: 'Train With Dan Mohler',
    result:
      'Next.js event landing page with HubSpot CRM integration and UTM attribution for registration tracking.',
    href: 'https://trainwithdanmohler.com/',
  },
]

export default function CrmIntegrations() {
  return (
    <section id="integrations" className="bg-[#f5f2eb] px-4 py-20 text-neutral-950 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
            CRM Integrations & Automation
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Your site and apps, wired straight into your CRM.
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-700 md:text-lg">
            I build Next.js websites and custom apps that connect directly to your CRM, then set up
            the automations that turn every new lead into a timely, organized follow-up.
          </p>
        </div>

        {/* Flow */}
        <ol className="mx-auto mt-14 flex max-w-5xl flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-center">
          {flow.map((step, index) => (
            <li key={step} className="flex flex-col items-center gap-3 md:flex-row">
              <span className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:w-auto md:whitespace-nowrap">
                {step}
              </span>
              {index !== flow.length - 1 ? (
                <span aria-hidden className="text-neutral-400">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {integrations.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                {item.label}
              </span>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{item.title}</h3>

              <p className="mt-4 text-base leading-7 text-neutral-700">{item.description}</p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-neutral-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Platforms + proof */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Platforms I work in
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-black/10 bg-[#f5f2eb] px-4 py-2 text-sm font-semibold text-neutral-800"
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-neutral-600">
              Using a different CRM? If it has an API or webhooks, it can usually be connected.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0b0b0b] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              In practice
            </p>
            <div className="mt-6 space-y-6">
              {proof.map((item) => (
                <a
                  key={item.project}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                >
                  <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                    {item.project}
                    <span className="text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/75">{item.result}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/90 sm:text-base"
          >
            Connect my CRM
          </Link>
          <Link
            href="/services#integrations"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-black/5 sm:text-base"
          >
            See integration services
          </Link>
        </div>
      </div>
    </section>
  )
}
