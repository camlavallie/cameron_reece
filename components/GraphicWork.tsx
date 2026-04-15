'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Vision from '@/assets/images/VISION_WASHING_WHITE_WITH_NAME.png'
import dynamicedgesolutions from '@/assets/images/dynamicedgesolutions.png'
import thepeacegov from '@/assets/images/thepeacegovlogo2.png'
import powerandlove1 from '@/assets/images/BUFFALO_Story_1.png'
import powerandlove2 from '@/assets/images/BUFFALO_1Week.png'
import powerandlove3 from '@/assets/images/SIOUXFALLS_Story_1.png'
import powerandlove4 from '@/assets/images/FortWorth_P+L_BOGO_IG_Post.png'
import bevan from '@/assets/images/Breaking Silence Front Cover.jpg'
import coffee1 from '@/assets/images/Coffee.png'

type Project = {
  title: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Logo Design',
    category: 'Brand Identity',
    image: Vision.src,
  },
  {
    title: 'Dynamic Edge Solutions',
    category: 'Brand Identity | Logo',
    image: dynamicedgesolutions.src,
  },
  {
    title: 'The Peace Gov | Coffee Roasters',
    category: 'Brand Identity',
    image: thepeacegov.src,
  },
  {
    title: 'Power + Love',
    category: 'Brand Identity',
    image: powerandlove1.src,
  },
  {
    title: 'Buffalo Week Away',
    category: 'Brand Identity',
    image: powerandlove2.src,
  },
  {
    title: 'Fort Worth Story',
    category: 'Brand Identity',
    image: powerandlove3.src,
  },
  {
    title: 'Book Cover Design',
    category: 'Brand Identity',
    image: bevan.src,
  },
  {
    title: 'IG Post',
    category: 'Brand Identity | Social Graphic',
    image: powerandlove4.src,
  },
  {
    title: 'Coffee Sticker Design',
    category: 'Brand Identity',
    image: coffee1.src,
  },
]

type GalleryGridProps = {
  items: Project[]
  offset?: number
  onSelect: (index: number) => void
}

function GalleryGrid({ items, offset = 0, onSelect }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
      {items.map((project, index) => {
        const actualIndex = index + offset

        return (
          <button
            key={`${project.title}-${actualIndex}`}
            type="button"
            onClick={() => onSelect(actualIndex)}
            className="group mb-5 block w-full break-inside-avoid text-left"
          >
            <article className="overflow-hidden rounded-[1.5rem] bg-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 sm:p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                    {project.category}
                  </p>
                  <h2 className="text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
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

  const firstHalf = useMemo(() => projects.slice(0, 5), [])
  const secondHalf = useMemo(() => projects.slice(5), [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }

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
      <section className="bg-[#e9e4dc] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
              Graphic Work
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              A visual board built to feel immersive and alive.
            </h1>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              A curated gallery of branding and graphic work presented in a more visual,
              image-first format.
            </p>
          </div>

          <GalleryGrid items={firstHalf} onSelect={setActiveIndex} />

          <div className="my-16 rounded-[2rem] border border-black/10 bg-white/60 px-6 py-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
              Interested in working together?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Need branding, design, or a site that feels more intentional?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
              I help build clear brands, stronger digital experiences, and thoughtful
              systems that support real growth.
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

          <GalleryGrid
            items={secondHalf}
            offset={firstHalf.length}
            onSelect={setActiveIndex}
          />
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

            <div className="overflow-hidden rounded-[1.75rem] bg-[#111] shadow-2xl">
              <div className="relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="max-h-[85vh] w-full object-contain bg-[#111]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/65">
                    {activeProject.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
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