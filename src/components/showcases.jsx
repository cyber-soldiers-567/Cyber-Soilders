export default function Showcases() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-up">
              Explore Our Showcases
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-slide-up animation-delay-100">
              Discover what you can build with Next.js through our curated showcases.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="/showcase-1" className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:bg-accent hover:shadow-lg animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="flex h-[200px] items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[0.98]">
              <span className="text-2xl font-bold">Showcase 1</span>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="font-semibold">Product</h3>
              <p className="text-sm text-muted-foreground">Experience the Ultimate Cyber Range</p>
            </div>
          </a>

          <a href="/showcase-2" className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:bg-accent hover:shadow-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex h-[200px] items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[0.98]">
              <span className="text-2xl font-bold">Showcase 2</span>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="font-semibold">Services</h3>
              <p className="text-sm text-muted-foreground">Maximum Security with Cyber Security Services</p>
            </div>
          </a>

          <a href="/showcase-3" className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:bg-accent hover:shadow-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex h-[200px] items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[0.98]">
              <span className="text-2xl font-bold">Showcase 3</span>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="font-semibold">Trainings</h3>
              <p className="text-sm text-muted-foreground">A Comprehensive Cybersecurity Framework</p>
            </div>
          </a>

          <a href="/showcase-4" className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:bg-accent hover:shadow-lg animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex h-[200px] items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[0.98]">
              <span className="text-2xl font-bold">Showcase 4</span>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="font-semibold">Resources</h3>
              <p className="text-sm text-muted-foreground">Educational videos and learning materials</p>
            </div>
          </a>

          <a href="/showcase-5" className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:bg-accent hover:shadow-lg animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="flex h-[200px] items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[0.98]">
              <span className="text-2xl font-bold">Showcase 5</span>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="font-semibold">About Us</h3>
              <p className="text-sm text-muted-foreground">Our mission, vision, and founder's journey</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
} 