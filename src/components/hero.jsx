// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" style={{ opacity: 1, willChange: 'opacity' }}></div>
      </div>
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60"></div>

      {/* Content */}
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 max-w-[980px]">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in">
              Defending your Digital Frontiers
            </h1>
            <div className="mt-6 md:mt-10 max-w-[700px] mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in animation-delay-100">
                Used by some of the reputed organisations, Cyber.soldiers empowers you with
                <span className="font-semibold text-foreground"> high-quality Cyber Services & Skilling </span>
                with the power of ecosystem.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10 animate-fade-in animation-delay-200">
            <Link to="/product">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                Product
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                Services
              </Button>
            </Link>
            <Link to="/training">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                Training
              </Button>
            </Link>
          </div>

          {/* Terminal Code */}
          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground animate-fade-in animation-delay-300">
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-md px-4 py-2">
              <Terminal className="h-4 w-4 mr-2 text-gray-500" />
              <code className="font-mono">get-cyber.soldiers@latest</code>
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

