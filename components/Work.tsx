import summitWealth from '@/assets/images/summit-wealth.jpg'
import honestPainting from '@/assets/images/honest-painting.jpg'
import toChaiFor from '@/assets/images/to-chai-for.jpg'
import blackgranite from '@/assets/images/blackgranitesite.png'
import lavallieRoastery from '@/assets/images/lavallie-roastery.jpg'
import erinBiller from '@/assets/images/erin-biller.png'

type Project = {
  title: string
  category: string
  href: string
  image: string
  summary: string
  details: string[]
}

const projects: Project[] = [
  {
    title: 'Summit Wealth',
    category: 'Brand Identity',
    href: 'https://www.summitwealthstrategies.com',
    image: summitWealth.src,
    summary:
      'Strategic logo development and brand direction for a polished financial brand.',
    details: ['Logo creation', 'Brand direction', 'Visual identity system'],
  },
  {
    title: 'The Honest Painting Co.',
    category: 'Web Development',
    href: 'https://www.thehonestpaintingco.com',
    image: honestPainting.src,
    summary:
      'A clean service-based site built to establish trust and drive inquiry.',
    details: ['Built with Nuxt / Vue', 'Responsive frontend', 'Lead-focused layout'],
  },
  {
    title: 'To Chai For',
    category: 'Ecommerce Build',
    href: 'https://tochaifortx.com',
    image: toChaiFor.src,
    summary:
      'A warm, modern food brand experience designed to support online growth.',
    details: ['Built with React / Next', 'Custom storefront', 'Mobile-first UX'],
  },
  {
    title: 'Black Granite Construction',
    category: 'Web Development',
    href: 'https://blackgraniteconstruction.netlify.app/',
    image: blackgranite.src,
    summary:
      'A strong, no-nonsense construction site built to establish credibility and convert visitors into qualified leads.',
    details: [
      'Built with Next.js',
      'Service-focused UX',
      'Lead-driven layout & structure',
    ],
  },
  {
    title: 'The Peace Gov',
    category: 'Ecommerce Experience',
    href: 'https://www.thepeacegov.com',
    image: lavallieRoastery.src,
    summary:
      'A brand-led ecommerce site built around specialty coffee and product storytelling.',
    details: ['Ecommerce site', 'Built with Nuxt', 'Brand + product design'],
  },
  {
    title: 'Author Erin Biller',
    category: 'Author Website',
    href: 'https://www.authorerinbiller.com',
    image: erinBiller.src,
    summary:
      'A simple, elegant site designed to support an author platform and book visibility.',
    details: ['Built with Nuxt', 'Author-focused UX', 'Clear content structure'],
  },
]

export default function Work() {
  return (
    <section className="bg-[#e9e4dc] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Projects built with clarity and intent.
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            A tighter showcase of branding, websites, and digital builds designed to
            feel strong at a glance and reveal more on hover.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block min-h-[460px] overflow-hidden rounded-[1.25rem] bg-black"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/55" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

              <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                <div className="translate-y-0 transition duration-500 group-hover:-translate-y-2">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    {project.category}
                  </p>

                  <h3 className="max-w-[12ch] text-3xl font-semibold uppercase tracking-tight text-white sm:text-[2.15rem]">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-6 group-hover:max-h-80 group-hover:opacity-100">
                  <p className="max-w-md text-base leading-7 text-white/90">
                    {project.summary}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-white/80">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    View project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}