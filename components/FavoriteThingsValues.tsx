import Link from 'next/link'

type FavoriteThing = {
  title: string
  description: string
  category: string
}

const favoriteThings: FavoriteThing[] = [
  {
    title: 'ReactJS',
    category: 'Frontend',
    description:
      'A go-to library for modern component-driven interfaces that scale well across custom builds.',
  },
  {
    title: 'NextJS',
    category: 'Framework',
    description:
      'Ideal for polished frontends, strong page performance, and production-ready React development.',
  },
  {
    title: 'HubSpot',
    category: 'CRM Marketing',
    description:
      'A streamlined CRM and email system designed for organized data, clear segmentation, and manageable automation workflows.',
  },
  {
    title: 'MailChimp',
    category: 'Email Marketing',
    description:
      'A platform I enjoy using for email campaigns, audience communication, and polished marketing sends.',
  },
  {
    title: 'Shopify',
    category: 'Ecommerce',
    description:
      'A strong ecommerce platform for storefronts that need to feel polished, clear, and easy to manage.',
  },
  {
    title: 'NuxtJS',
    category: 'Framework',
    description:
      'A favorite for structured Vue builds with clean routing, strong organization, and smooth performance.',
  },
  {
    title: 'Adobe Illustrator',
    category: 'Design',
    description:
      'My preferred tool for logos, vector work, and building visual identity systems with precision.',
  },
  {
    title: 'Adobe Photoshop',
    category: 'Design',
    description:
      'Essential for image editing, compositing, mockups, and refining visuals with detail and depth.',
  },
  {
    title: 'Figma',
    category: 'Design',
    description: 'Creating clean layouts and interfaces in Figma.',
  },
  {
    title: 'Tailwind CSS',
    category: 'Styling',
    description:
      'One of my favorite ways to build clean, responsive layouts quickly without sacrificing control.',
  },
  {
    title: 'Styled Components',
    category: 'Styling',
    description:
      'Helpful for keeping styles close to components and creating reusable design systems in React.',
  },
]

export default function FavoriteThings() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Tools & Platforms
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Tools I use to build strong creative and digital work
          </h2>

          <p className="mt-6 text-base leading-7 text-stone-600 md:text-lg">
            A curated look at the platforms, frameworks, and creative tools I use
            across web design, branding, CRM, email marketing, and ecommerce.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteThings.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-stone-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                    {item.category}
                  </span>
                  <span className="text-sm text-stone-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="h-px w-full bg-stone-200 transition duration-300 group-hover:bg-stone-300" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-stone-200 bg-white px-6 py-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Need help bringing it all together?
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            From design to systems, I build with clarity and intention.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Whether you need a polished website, stronger branding, cleaner CRM
            structure, or more intentional automation, I’d love to hear what
            you’re building.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 sm:text-base"
            >
              Start a project
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 sm:text-base"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}