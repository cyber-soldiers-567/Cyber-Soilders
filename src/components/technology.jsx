import { Atom, Box, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Technology() {
  return (
    <section className="w-full py-12 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on a technology driven platform, Cyber.soldiers services are in demand</h2>
          <div className="inline-block px-4 py-2 bg-muted rounded-md">
            <p className="text-sm font-medium">Powered By</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300" style={{ opacity: 1, willChange: 'opacity, transform', transform: 'none' }}>
            <div className="flex items-center gap-2 mb-4">
              <Atom className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">React</h3>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </div>
            <p className="text-sm text-muted-foreground">The library for web and native user interfaces, built on the latest React features, including Server Components and Actions.</p>
          </div>

          <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300" style={{ opacity: 1, willChange: 'opacity, transform', transform: 'none' }}>
            <div className="flex items-center gap-2 mb-4">
              <Box className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold">Turbopack</h3>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </div>
            <p className="text-sm text-muted-foreground">An incremental bundler optimized for JavaScript and TypeScript, written in Rust and built into Next.js.</p>
          </div>

          <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300" style={{ opacity: 1, willChange: 'opacity, transform', transform: 'none' }}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-semibold">Speedy Web Compiler</h3>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </div>
            <p className="text-sm text-muted-foreground">An extensible Rust-based platform for the next generation of fast developer tools, and can be used for both compilation and minification.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent dark:from-primary/10 dark:via-primary/10 rounded-3xl"></div>
          <div className="relative p-8 md:p-12 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-6">Get started</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">WAFT</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">SOC</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">Threat Modeling</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">Attack Surface</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">MFA</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">Zero Trust</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground">IAM</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-[600px]">
              CyberSoldiers is your ultimate partner in cybersecurity—empowering skill development, resilience building, and compliance assurance. Strengthen your digital infrastructure today with expert solutions from CyberSoldiers.
            </p>
            <a href="/contact">
              <Button className="group">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 