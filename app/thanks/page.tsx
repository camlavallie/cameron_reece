// app/thank-you/page.tsx

export default function ThankYouPage() {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/50">
            Message Sent
          </p>
  
          {/* Title */}
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            Thanks for reaching out.
          </h1>
  
          {/* Subtext */}
          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            Your message came through successfully. I appreciate you taking the time to connect, 
            and I’ll get back to you as soon as I can.
          </p>
  
          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-16 bg-white/20" />
  
          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:text-base"
            >
              Back to home
            </a>
  
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              View my work
            </a>
          </div>
        </div>
      </main>
    );
  }