import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Shield, Zap, Users, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Advanced Training Environment",
      description: "Our state-of-the-art cyber range simulates real-world attack scenarios for hands-on training."
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Real-time Attack Simulation",
      description: "Experience realistic cyber attacks in a controlled environment."
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Comprehensive Analytics",
      description: "Get detailed insights into your team's performance and security posture."
    }
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "State-of-the-art protection against evolving cyber threats"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Instant detection and response to security incidents"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless coordination between security teams"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Training",
      description: "Targeted exercises for specific security scenarios"
    }
  ]

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Experience the Ultimate Cyber Range
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-[800px]">
                Real-world attacks, hands-on training, unmatched Cyber Resilience.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="h-12 px-8 text-base">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Watch Demo <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Interactive Training Environment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0">
                  <img
                    alt={slides[currentSlide].title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full"
                    src={slides[currentSlide].image}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 gap-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary" : "bg-primary/30"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
                <p className="text-muted-foreground">{slides[currentSlide].description}</p>
                <div className="pt-4">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Our Knowledge Partner</h2>
              <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  alt="IIT Madras Logo"
                  loading="lazy"
                  width="300"
                  height="100"
                  decoding="async"
                  className="object-contain"
                  src="/placeholder.svg?height=100&width=300"
                />
              </div>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                IIT Madras brings world-class expertise and research to our cybersecurity solutions.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 