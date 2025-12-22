import NewsletterSignup from "@/components/newsletter-signup"
import DecorativeGraphic from "@/components/decorative-graphic"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/dandelions-blowing-seeds-blue-sky-natural-outdoor-.jpg" alt="" className="h-full w-full object-cover blur-sm" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Newsletter Signup Form - Top Left */}
        <div className="absolute left-6 top-6 md:left-12 md:top-12">
          <NewsletterSignup />
        </div>

        {/* Main Heading and Graphic - Center Bottom */}
        <div className="flex min-h-screen flex-col items-center justify-end pb-16 md:pb-24">
          <div className="relative">
            {/* Decorative Graphic */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 md:-top-48">
              <DecorativeGraphic />
            </div>

            {/* Main Heading */}
            <h1 className="text-center font-bold uppercase leading-none tracking-tight text-white">
              <span className="block text-[clamp(4rem,20vw,12rem)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_40%)]">
                vora
              </span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}
