'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Vision from '@/assets/images/VisionLogo.png'
import Vision2 from '@/assets/images/VW_RECTANGLE_2(White Background).png'
import dynamicedgesolutions from '@/assets/images/dynamicedgesolutions.png'
import thepeacegov from '@/assets/images/thepeacegovlogo2.png'
import pgbag from '@/assets/images/pgbags.jpg'
import powerandlove2 from '@/assets/images/BUFFALO_1Week.png'
import thejourney from '@/assets/images/The_Journey_Slide.png'
import powerandlove4 from '@/assets/images/FortWorth_P+L_BOGO_IG_Post.png'
import bevan from '@/assets/images/Breaking Silence Front Cover.jpg'
import coffee1 from '@/assets/images/Coffee.png'
import coffee2 from '@/assets/images/The Peace Gov BAGS 32OZ PRINTdevo.png'
import encounter2 from '@/assets/images/Encounter_Nightdevo.png'
import ekballo1 from '@/assets/images/Ekballo Squaredevo.png'

type Project = {
  title: string
  category: string
  image: string
  fit?: 'cover' | 'contain'
  tone?: 'dark' | 'light'
}

const projects: Project[] = [
  {
    title: 'Logo Design',
    category: 'Brand Identity',
    image: Vision.src,
    fit: 'contain',
    tone: 'light',
  },
  {
    title: 'Logo Design',
    category: 'Brand Identity',
    image: Vision2.src,
    fit: 'contain',
    tone: 'light',
  },
  {
    title: 'Logo Design',
    category: 'Brand Identity | Logo',
    image: dynamicedgesolutions.src,
    fit: 'contain',
    tone: 'dark',
  },
  {
    title: 'Logo | Web | Print | Packaging Design',
    category: 'Brand Identity',
    image: thepeacegov.src,
    fit: 'cover',
    tone: 'dark',
  },
  {
    title: 'Coffee Layout Design',
    category: 'Brand Identity',
    image: coffee2.src,
    fit: 'contain',
    tone: 'light',
  },
  {
    title: 'Production Bag Design',
    category: 'Brand Identity',
    image: pgbag.src,
    fit: 'cover',
    tone: 'light',
  },
  {
    title: 'IG Post',
    category: 'Brand Identity',
    image: powerandlove2.src,
    fit: 'cover',
    tone: 'light',
  },
  {
    title: 'Training Program Brand Design',
    category: 'Brand Identity',
    image: thejourney.src,
    fit: 'cover',
    tone: 'dark',
  },
  {
    title: 'Book Cover Design',
    category: 'Brand Identity',
    image: bevan.src,
    fit: 'cover',
    tone: 'dark',
  },
  {
    title: 'IG Post',
    category: 'Brand Identity | Social Graphic',
    image: powerandlove4.src,
    fit: 'cover',
    tone: 'dark',
  },
  {
    title: 'Coffee Sticker Design',
    category: 'Brand Identity',
    image: coffee1.src,
    fit: 'cover',
    tone: 'light',
  },
  {
    title: 'Event Opt-In Graphic',
    category: 'Brand Identity',
    image: encounter2.src,
    fit: 'cover',
    tone: 'dark',
  },
  {
    title: 'Email Header Design',
    category: 'Brand Identity',
    image: ekballo1.src,
    fit: 'cover',
    tone: 'dark',
  },
]

function GalleryGrid({
  items,
  onSelect,
}: {
  items: Project[]
  onSelect: (index: number) => void
}) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
      {items.map((project, index) => {
        const isContain = project.fit === 'contain'
        const isLight = project.tone === 'light'

        return (
          <button
            key={`${project.title}-${index}`}
            type="button"
            onClick={() => onSelect(index)}
            className="group mb-5 block w-full break-inside-avoid text-left"
          >
            <article className="overflow-hidden rounded-[1.5rem] bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-300 group-hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              <div
                className={[
                  'relative overflow-hidden',
                  isContain ? 'bg-[#f4efe8]' : isLight ? 'bg-[#f4efe8]' : 'bg-black',
                ].join(' ')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={[
                    'block w-full transition duration-500 group-hover:scale-[1.02]',
                    isContain ? 'h-auto object-contain' : 'h-auto object-cover',
                  ].join(' ')}
                />

                <div
                  className={[
                    'absolute inset-0 transition duration-300',
                    isLight ? 'bg-black/5 group-hover:bg-black/10' : 'bg-black/10 group-hover:bg-black/20',
                  ].join(' ')}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 sm:p-5">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    {project.category}
                  </p>
                  <h2 className="text-base font-semibold uppercase tracking-tight text-white sm:text-lg">
                    {project.title}
                  </h2>
                </div>
              </div>
            </article>
          </button>
        )
      })}
    </div>
  )
}

export default function GraphicWork() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeProject = activeIndex !== null ? projects[activeIndex] : null
  const isLight = activeProject?.tone === 'light'

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight' && activeIndex !== null) {
        setActiveIndex((activeIndex + 1) % projects.length)
      }
      if (event.key === 'ArrowLeft' && activeIndex !== null) {
        setActiveIndex((activeIndex - 1 + projects.length) % projects.length)
      }
    }

    if (activeProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, activeIndex])

  const showPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length)
  }

  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % projects.length)
  }

  return (
    <>
      <section className="bg-[#e9e4dc] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
              Graphic Work
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              My portfolio, arranged like a Pinterest board.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
              A visual gallery of branding and graphic work. Click any image to view the
              full graphic.
            </p>
          </div>

          <GalleryGrid items={projects} onSelect={setActiveIndex} />

          <div className="mt-20 rounded-[2rem] border border-black/10 bg-white/70 px-6 py-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
              Interested in working together?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Need branding, design, or a site that feels more intentional?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
              I build thoughtful brand visuals, digital experiences, and creative systems
              that help ideas feel clear, cohesive, and alive.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/90 sm:text-base"
              >
                Start a project
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-black/5 sm:text-base"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black/80"
              aria-label="Close lightbox"
            >
              ×
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black/80"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black/80"
              aria-label="Next image"
            >
              ›
            </button>

            <div
              className={[
                'overflow-hidden rounded-[1.75rem] shadow-2xl',
                isLight ? 'bg-white' : 'bg-[#111]',
              ].join(' ')}
            >
              <div className="relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className={[
                    'max-h-[85vh] w-full object-contain',
                    isLight ? 'bg-white' : 'bg-[#111]',
                  ].join(' ')}
                />

                <div
                  className={[
                    'absolute inset-x-0 bottom-0 p-6 sm:p-8',
                    isLight
                      ? 'bg-gradient-to-t from-white/90 via-white/40 to-transparent'
                      : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
                  ].join(' ')}
                >
                  <p
                    className={[
                      'mb-2 text-xs font-semibold uppercase tracking-[0.26em]',
                      isLight ? 'text-black/60' : 'text-white/65',
                    ].join(' ')}
                  >
                    {activeProject.category}
                  </p>

                  <h3
                    className={[
                      'text-2xl font-semibold tracking-tight sm:text-3xl',
                      isLight ? 'text-black' : 'text-white',
                    ].join(' ')}
                  >
                    {activeProject.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}