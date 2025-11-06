import Link from "next/link";

const primaryCta = "https://rebrand.ly/asppsy2";

const schedule = [
  { region: "IST (India)", time: "07:00 PM" },
  { region: "GST (UAE)", time: "05:30 PM" },
  { region: "GMT (UK)", time: "01:30 PM" },
  { region: "EST (USA/Canada)", time: "09:30 AM" }
];

const learnings = [
  {
    title: "What is Tafakkur?",
    body:
      'Understand the profound meaning and timeless relevance of "The Sacred Pause."'
  },
  {
    title: "Healing Heedlessness",
    body:
      "Learn practical, faith-rooted techniques to overcome distraction with mindful awareness."
  },
  {
    title: "Inner Regulation & Gratitude",
    body:
      "Discover how contemplation soothes emotions and nurtures deep, authentic gratitude."
  },
  {
    title: "Anchoring the Heart",
    body:
      "Embrace simple daily rituals that root your heart in remembrance and purpose."
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-sand via-white to-sand">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-64 right-1/4 h-[32rem] w-[32rem] rounded-full bg-primary-dark/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-12">
        <header className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark shadow-sm shadow-primary/20">
              Live Webinar
            </p>
            <h1 className="font-display text-4xl leading-tight text-primary-dark sm:text-5xl lg:text-6xl">
              Find Calm &amp; Clarity: Master Tafakkur (The Sacred Pause) in
              Everyday Life
            </h1>
            <p className="text-lg leading-relaxed text-ink/70 sm:text-xl">
              Join our most-requested webinar to transform your daily routine
              into a journey of mindful awareness, inner peace, and profound
              spiritual connection.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={primaryCta}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark hover:shadow-xl hover:shadow-primary-dark/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Register Now
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <span className="text-sm uppercase tracking-[0.35em] text-primary-dark/60">
                Limited spots available
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white/70 p-8 shadow-xl shadow-primary/20 backdrop-blur">
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative space-y-4 text-ink/80">
              <h2 className="font-display text-2xl text-primary-dark">
                The Sacred Pause Awaits
              </h2>
              <p className="text-sm leading-relaxed text-ink/70">
                Slow down and breathe. Let your heart dwell on what matters.
                Tafakkur is the gateway to gratitude, presence, and a life
                anchored in remembrance. This immersive session helps you walk
                that path with intention.
              </p>
              <div className="grid gap-3 rounded-2xl bg-sand/70 p-4 text-sm text-primary-dark shadow-inner shadow-primary/10">
                <p className="font-semibold uppercase tracking-[0.3em] text-primary-dark/60">
                  Hosted by
                </p>
                <p className="text-lg font-semibold text-primary-dark">
                  Department of Psychology, Aspire College of Excellence
                </p>
                <p className="text-ink/70">
                  Bringing together modern psychological insight with timeless
                  Islamic wisdom.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-12 rounded-4xl border border-primary/10 bg-white/80 p-10 shadow-[0_30px_80px_-40px] shadow-primary-dark/40 backdrop-blur lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-primary-dark sm:text-4xl">
              Feeling Lost in the &lsquo;Gafla&rsquo; (Heedlessness) of Modern
              Life?
            </h2>
            <div className="space-y-4 text-lg text-ink/75">
              <p>
                In a world of constant notifications and endless distractions,
                It&apos;s easy to feel disconnected—from ourselves, our purpose,
                and our faith. This state of Gafla (heedlessness) can leave us
                feeling anxious, ungrateful, and spiritually adrift.
              </p>
              <p>
                But what if the solution wasn&apos;t to do more, but to pause?
              </p>
            </div>
          </div>
          <div className="space-y-4 text-lg text-ink/75">
            <p>
              This webinar introduces the profound practice of Tafakkur
              (Contemplation). It&apos;s a powerful, practical tool from the Islamic
              tradition, presented by the Department of Psychology, to help you
              find focus, peace, and presence in your busy life.
            </p>
            <Link
              href={primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-between rounded-3xl border border-primary/20 bg-primary/5 px-6 py-4 text-primary-dark transition hover:border-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span className="font-semibold uppercase tracking-[0.35em]">
                Step Into Stillness
              </span>
              <span aria-hidden className="text-2xl">
                →
              </span>
            </Link>
          </div>
        </section>

        <section className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-display text-3xl text-primary-dark sm:text-4xl">
              Discover Your Path to Mindful Awareness
            </h2>
            <p className="text-lg text-ink/70">
              In this transformative session, our expert faculty will guide you
              through:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {learnings.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-transparent bg-white/90 p-6 shadow-[0_25px_60px_-45px] shadow-primary-dark/60 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/30"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <h3 className="font-display text-xl text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 rounded-4xl border border-primary/10 bg-white/80 p-10 shadow-[0_30px_80px_-40px] shadow-primary-dark/40 backdrop-blur lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-primary-dark sm:text-4xl">
              Save Your Spot!
            </h2>
            <p className="text-lg text-ink/70">
              This is a live online webinar. A joining link will be sent to your
              email after registration.
            </p>
            <div className="rounded-3xl border border-primary/10 bg-sand/60 p-6 shadow-inner shadow-primary/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark/60">
                Date
              </p>
              <p className="text-xl font-semibold text-primary-dark">
                Saturday, 8th November 2025
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4 rounded-3xl border border-primary/10 bg-white/90 p-6 text-primary-dark">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark/60">
                Time Zones
              </p>
              <ul className="space-y-3 text-lg">
                {schedule.map((slot) => (
                  <li
                    key={slot.region}
                    className="flex items-center justify-between rounded-2xl bg-primary/5 px-4 py-3 text-primary-dark/80"
                  >
                    <span className="font-medium">{slot.region}</span>
                    <span className="font-semibold">{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-lg font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-accent/40 transition hover:bg-accent-dark hover:shadow-xl hover:shadow-accent-dark/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Claim Your Seat
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        <section className="grid gap-12 rounded-4xl border border-primary/10 bg-white/80 p-10 shadow-[0_30px_80px_-40px] shadow-primary-dark/40 backdrop-blur lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:p-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-primary-dark sm:text-4xl">
              Presented by Experts in Faith &amp; Psychology
            </h2>
            <p className="text-lg text-ink/75">
              This webinar is presented by the Department of Psychology at
              Aspire College of Excellence. You will be learning from expert
              faculty from the Diploma in Islamic Counseling Psychology &
              Personality Development, who specialize in bridging the gap
              between modern psychological science and timeless Islamic wisdom.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-primary/5 p-8 text-sm text-ink/70 shadow-xl shadow-primary/20">
            <div className="absolute -top-16 right-10 h-48 w-48 rounded-full bg-accent/10 blur-[90px]" />
            <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-primary/15 blur-[120px]" />
            <div className="relative space-y-4">
              <h3 className="font-display text-2xl text-primary-dark">
                Why This Matters
              </h3>
              <p>
                Mindful contemplation is more than a spiritual ideal—it is a
                well-researched pathway to resilience, emotional balance, and
                gratitude. Our faculty bring decades of combined experience
                guiding seekers to integrate faith and psychology with empathy
                and scientific rigor.
              </p>
              <p>
                Expect a warm, grounded, and deeply practical session that meets
                you where you are and helps you step into a life lived with
                presence.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-6 rounded-4xl border border-primary/10 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/95 p-12 text-center shadow-[0_35px_60px_-30px] shadow-primary-dark/70">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Ready to Begin Your Journey of Contemplation?
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80">
            This is one of our most requested topics, and spots are limited.
            Register now to secure your place and learn how to anchor your heart
            in a distracted world.
          </p>
          <Link
            href={primaryCta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-semibold uppercase tracking-[0.3em] text-primary-dark transition hover:bg-primary-light hover:text-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
          >
            Register For Free
            <span aria-hidden className="text-2xl">
              →
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}
