export default function ContactPage() {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black" />
  
          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:py-28">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/55 sm:text-sm">
                Contact
              </p>
  
              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
                Let’s build
                <br />
                something that
                <br />
                actually works.
              </h1>
  
              <p className="mt-8 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
                Whether you need a stronger website, better CRM structure, cleaner automation,
                or more intentional creative, I’d love to hear what you’re working on.
              </p>
  
              <div className="mt-10 space-y-4 text-sm text-white/60 sm:text-base">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
                  Design, development, CRM strategy, and marketing systems aligned around clarity.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
                  Best for portfolio sites, brand systems, email marketing, HubSpot setup, and audience workflows.
                </div>
              </div>
            </div>
  
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6 lg:p-8">
              <form
                action="https://formspree.io/f/mlepkqzj"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New portfolio contact form submission" />
                <input type="hidden" name="source" value="nextjs-portfolio-contact-page" />
                <input type="hidden" name="page" value="contact" />
  
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
  
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/75">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-black/40"
                      placeholder="Your name"
                    />
                  </div>
  
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/75">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-black/40"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white/75">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-white/25 focus:bg-black/40"
                  >
                    <option value="" disabled className="text-black">
                      Select one
                    </option>
                    <option value="website" className="text-black">Website design / development</option>
                    <option value="branding" className="text-black">Branding / creative</option>
                    <option value="hubspot" className="text-black">HubSpot / CRM systems</option>
                    <option value="email-marketing" className="text-black">Email marketing / automation</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>
  
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/75">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-white/25 focus:bg-black/40"
                  >
                    <option value="" disabled className="text-black">
                      Select one
                    </option>
                    <option value="under-1k" className="text-black">Under $1k</option>
                    <option value="1k-3k" className="text-black">$1k–$3k</option>
                    <option value="3k-5k" className="text-black">$3k–$5k</option>
                    <option value="5k-plus" className="text-black">$5k+</option>
                  </select>
                </div>
  
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/75">
                    Tell me about the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    minLength={20}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-black/40"
                    placeholder="What are you building, what do you need help with, and what does success look like?"
                  />
                </div>
  
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-white/45">
                    Protected with Formspree, a hidden honeypot field, and native browser validation.
                  </p>
  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:text-base"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
  