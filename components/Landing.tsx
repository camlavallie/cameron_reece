export default function Landing() {
  const sections = [
    {
      eyebrow: 'Design',
      title: 'Design with intention.',
      description:
        'I create brand identities, campaigns, and digital experiences that communicate clearly, feel elevated, and support the message instead of distracting from it.',
      cta: 'View my work',
      theme: 'bg-[#0b0b0b] text-white',
      button: 'bg-white text-black hover:bg-white/90',
    },
    {
      eyebrow: 'Systems',
      title: 'Build systems that scale.',
      description:
        'From HubSpot CRM to email automation, segmentation, and marketing infrastructure, I build the systems that keep communication organized, intentional, and moving forward.',
      cta: 'See the systems',
      theme: 'bg-[#f5f2eb] text-black',
      button: 'bg-black text-white hover:bg-black/90',
    },
    {
      eyebrow: 'Performance',
      title: 'Turn attention into action.',
      description:
        'Every touchpoint is built with purpose—guiding people from first impression to deeper engagement, stronger response, and meaningful conversion.',
      cta: 'Start a project',
      theme: 'bg-[#111827] text-white',
      button: 'bg-white text-black hover:bg-white/90',
    },
  ];

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/7691632/"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-white/75 sm:text-sm">
              Creative • Systems • Strategy
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Design that performs.
              <br />
              Systems that scale.
              <br />
              Built with intention.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              I combine design, development, and marketing systems to build experiences
              that do more than look good—they create clarity, support growth, and move
              people to action.
            </p>

            <p className="mt-4 text-sm text-white/60">
              HubSpot • Automation • CRM Strategy • Email Marketing • Front-End Development
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#next"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:text-base"
              >
                Explore my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-white/70">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs">
              Scroll
            </span>
            <span className="h-10 w-px bg-white/40" />
          </div>
        </div>
      </section>

      <section
        id="next"
        className="relative z-10 -mt-10 px-4 pb-6 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md sm:grid-cols-3 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              DESIGN
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Clarity over clutter</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              I design brand systems, campaigns, and visual experiences that communicate
              clearly and elevate the message without unnecessary noise.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              MARKETING SYSTEMS
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Structure that scales</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              I build CRM and automation systems that organize audiences, improve follow-up,
              and create consistent communication across the customer journey.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              DEVELOPMENT
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Built to perform</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              I develop fast, responsive websites that are designed to support growth,
              engagement, and conversion—not just take up space online.
            </p>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`${section.theme} px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="flex flex-col justify-start">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] opacity-60">
                0{index + 1} / {section.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {section.title}
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-lg leading-8 opacity-75 sm:text-xl">
                {section.description}
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition ${section.button}`}
                >
                  {section.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        id="contact"
        className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">
            Final invitation
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let’s build something that actually works.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Design, development, and marketing systems aligned to create clarity,
            strengthen engagement, and turn attention into action.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90"
            >
              Checkout my recent work
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}