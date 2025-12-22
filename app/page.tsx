import NewsletterSignup from "@/components/newsletter-signup"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/SnO7AUAxs25NXU0IPoLKLHyrCjo.webp"
          alt=""
          className="h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col justify-between">
        {/* Top: Newsletter */}
        <div className="p-6 md:p-12">
          <NewsletterSignup />
        </div>

        {/* Bottom: Logo */}
        <div className="w-full pb-8 md:pb-12">
          <img
            src="/vora-logo.svg"
            alt="Vora"
            className="
              pointer-events-none
              mx-auto
              w-full
              max-w-[1600px]
              px-6
              md:px-12
              opacity-90
            "
          />
        </div>
      </div>
    </main>
  )
}
