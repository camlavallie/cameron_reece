import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import mailchimpUnsubs from "@/assets/images/mailchimp_unsubscribs.png";
import hubspotLastFiscal from "@/assets/images/hubspot-unsubs-fiscal.png";
import hubspotLastTwelve from "@/assets/images/hubspot-unsubs-twelve-months.png";
import hubspotLastTwo from "@/assets/images/hubspot-unsubs-two-months.png";

type PipelineStep = {
  step: string;
  title: string;
  category: string;
  description: string;
  outcome?: string;
  image: StaticImageData;
};

const pipelineSteps: PipelineStep[] = [
  {
    step: "01",
    category: "Problem",
    title: "Oversaturation was burning the list",
    description:
      "The previous email approach was over-sending broad communications to large audiences, leading to heavy unsubscribe loss and declining audience health.",
    outcome:
      "Thousands of contacts were being lost through unsubscribes and list fatigue.",
    image: mailchimpUnsubs,
  },
  {
    step: "02",
    category: "Strategy",
    title: "Segmentation became the reset",
    description:
      "I brought our audience to Hubspot from MailChimp. Reworked the communication strategy around more intentional segmentation, cleaner audience targeting, and a more restrained send cadence.",
    outcome:
      "The goal shifted from volume to relevance, meaning fewer emails and better fit for each audience.",
    image: hubspotLastFiscal,
  },
  {
    step: "03",
    category: "Optimization",
    title: "Audience health started trending down in unsubscribes",
    description:
      "With more meaningful content and better audience separation, unsubscribe activity began moving out of inflated ranges and into healthier single- and double-digit patterns.",
    outcome:
      "Performance stabilized and unsubscribe rates began consistently improving over time.",
    image: hubspotLastTwelve,
  },
  {
    step: "04",
    category: "Result",
    title: "Sustained improvement through smarter sends",
    description:
      "As the strategy matured, unsubscribe counts continued dropping, showing the impact of more thoughtful segmentation, reduced saturation, and clearer communication intent.",
    outcome:
      "Recent performance reflects a much healthier send environment and stronger retention.",
    image: hubspotLastTwo,
  },
];

export default function AudienceRecoveryPipeline() {
  return (
    <section className="bg-stone-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-400">
            CRM Strategy & Automation
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Audience recovery pipeline
          </h2>

          <p className="mt-6 text-base leading-7 text-stone-300 md:text-lg">
            A look at how I helped reduce unsubscribe loss through better
            segmentation, healthier email cadence, and automation that supported
            cleaner communication paths.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {pipelineSteps.map((item, index) => (
            <div key={item.title} className="relative">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative border-b border-white/10 bg-black/20 lg:border-b-0 lg:border-r">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                        {item.category}
                      </span>
                      <span className="text-sm font-medium text-stone-500">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-stone-300 md:text-lg">
                      {item.description}
                    </p>

                    {item.outcome ? (
                      <div
                        className={`mt-8 rounded-2xl px-5 py-4 ${
                          index === 0
                            ? "border border-red-400/20 bg-red-400/10"
                            : "border border-emerald-400/20 bg-emerald-400/10"
                        }`}
                      >
                        <p
                          className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                            index === 0 ? "text-red-300" : "text-emerald-300"
                          }`}
                        >
                          Outcome
                        </p>
                        <p className="mt-2 text-base leading-7 text-stone-200">
                          {item.outcome}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>

              {index !== pipelineSteps.length - 1 ? (
                <div className="flex justify-center py-4">
                  <div className="flex flex-col items-center gap-2 text-stone-500">
                    <div className="h-8 w-px bg-white/15" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg">
                      ↓
                    </div>
                    <div className="h-8 w-px bg-white/15" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
  <div className="mx-auto h-px w-16 bg-white/20" />

  <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
    Want results like this?
  </h3>

  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-300 md:text-lg">
    If your email list is struggling with engagement, unsubscribes, or lack of
    structure, I can help build a system that supports growth.
  </p>

  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:text-base"
    >
      Start a project
    </Link>

    <Link
      href="/services"
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
    >
      View more services
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}