export default function InstantFeedback() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 animate-slide-up">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white dark:bg-white dark:text-black">
              Fast Refresh
            </div>
            <h3 className="text-2xl font-bold">Instant Feedback</h3>
            <p className="text-muted-foreground">
              Fast Refresh gives you instantaneous feedback on edits made to your React components.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-slide-up animation-delay-100">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <img
                alt="Fast Refresh Demo"
                loading="lazy"
                width="500"
                height="300"
                decoding="async"
                data-nimg="1"
                className="object-cover"
                src="/placeholder.svg?height=300&width=500"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 