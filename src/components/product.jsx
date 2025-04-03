import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, Shield, Zap, Users, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  
  // Refs for intersection observer animations
  const sectionRefs = useRef([])
  
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
      description: "State-of-the-art protection against evolving cyber threats",
      stat: "99.9%",
      statLabel: "Protection rate"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Instant detection and response to security incidents",
      stat: "24/7",
      statLabel: "Availability"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless coordination between security teams",
      stat: "100%",
      statLabel: "Team coverage"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Training",
      description: "Targeted exercises for specific security scenarios",
      stat: "95%",
      statLabel: "Success rate"
    }
  ]
  
  // Counter animation function
  const animateCounter = (targetValue, id) => {
    let startValue = 0
    const duration = 2000
    const startTime = Date.now()
    const isPercentage = targetValue.toString().includes('%')
    const numericValue = parseInt(targetValue.toString().replace(/\D/g, ''))
    
    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentValue = Math.floor(progress * numericValue)
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : currentValue
        }))
        
        requestAnimationFrame(updateCounter)
      } else {
        setCounterValues(prev => ({
          ...prev,
          [id]: targetValue
        }))
      }
    }
    
    requestAnimationFrame(updateCounter)
  }

  useEffect(() => {
    // Intersection Observer for section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          
          // Start counter animations for the features section
          if (entry.target.id === 'features-section' && !isCounterStarted) {
            setIsCounterStarted(true)
            
            features.forEach((feature, index) => {
              setTimeout(() => {
                animateCounter(feature.stat, `feature-${index}`)
              }, index * 200)
            })
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section)
    })
    
    // Handle scroll for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section)
      })
      
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isCounterStarted])

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section 
          ref={addToRefs}
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 opacity-0 translate-y-4 duration-700 ease-out overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-float"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl animate-float-delayed"></div>
          
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <div 
              className="flex flex-col items-center text-center space-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '200ms', animationFillMode: 'forwards'}}
            >
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-slide-up">
                  Experience the Ultimate Cyber Range
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="mt-4 text-xl md:text-2xl text-gray-300 text-muted-foreground max-w-[800px] animate-slide-up-delayed">
                  Real-world attacks, hands-on training, unmatched Cyber Resilience.
                </p>
              </div>
              <div className="mt-8 flex gap-4 animate-fade-in" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                <Button size="lg" className="h-12 px-8 text-base group transition-all duration-300 hover:scale-105">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base group transition-all duration-300 hover:bg-muted">
                  Watch Demo <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Animated particles */}
          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          </div>
        </section>

        {/* Features Grid */}
        <section 
          ref={addToRefs}
          id="features-section"
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-green-500/10 blur-3xl animate-float"></div>
          <div className="absolute left-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/10 to-blue-500/10 blur-3xl animate-float-delayed"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="text-primary mb-4 p-3 rounded-full w-16 h-16 bg-gray-100 dark:bg-gray-100 flex items-center justify-center group-hover:bg-gray-300 dark:group-hover:bg-gray-300 group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-s mb-2 group-hover:text-primary transition-colors duration-300 ">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className="mt-4 flex justify-end">
                    <div className="flex flex-col items-end">
                      <div className="text-xl font-bold text-primary">
                        {counterValues[`feature-${index}`] || feature.stat}
                      </div>
                      <div className="text-s mb-2 group-hover:text-primary transition-colors duration-300">{feature.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section 
          ref={addToRefs}
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl animate-float"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-reverse"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Interactive Training Environment
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div 
                className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105"
                style={{ 
                  transform: `translateY(${scrollY * 0.03}px) perspective(1000px) rotateY(${Math.sin(scrollY * 0.001) * 3}deg)`
                }}
              >
                <div className="absolute inset-0">
                  <img
                    alt={slides[currentSlide].title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    src={slides[currentSlide].image}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-transform duration-300 hover:scale-110"
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-transform duration-300 hover:scale-110"
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
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-primary scale-150" : "bg-primary/30"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div 
                className="space-y-4"
                style={{transform: `translateY(${scrollY * -0.02}px)`}}
              >
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-bold animate-slide-right text-gray-300">{slides[currentSlide].title}</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xl text-muted-foreground animate-slide-right-delayed">{slides[currentSlide].description}</p>
                </div>
                <div className="pt-4 overflow-hidden">
                  <Button variant="outline" className="group animate-slide-right-delayed-more">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section 
          ref={addToRefs}
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/5 left-1/4 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-2/3 left-1/2 size-3 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div 
              className="flex flex-col items-center text-center space-y-4 opacity-0 animate-fade-in"
              style={{animationDelay: '200ms', animationFillMode: 'forwards'}}
            >
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                Our Knowledge Partner
              </h2>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 relative transform hover:scale-[1.01]">
                  <img
                    alt="IIT Madras Logo"
                    loading="lazy"
                    width="300"
                    height="100"
                    decoding="async"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    src="/placeholder.svg?height=100&width=300"
                  />
                </div>
              </div>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                IIT Madras brings world-class expertise and research to our cybersecurity solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* CSS for animations */}
      <style jsx global>{`
        .animate-in {
          animation: animateIn 0.8s ease forwards;
        }
        
        @keyframes animateIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        .animate-float-reverse {
          animation: float 6s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-bounce-subtle {
          animation: bounceTiny 2s infinite;
        }
        
        @keyframes bounceTiny {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          transform: translateY(100%);
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-delayed {
          transform: translateY(100%);
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-right {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out forwards;
        }
        
        .animate-slide-right-delayed {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-right-delayed-more {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out 0.4s forwards;
        }
        
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .feature-active {
          animation: featureActive 0.5s ease forwards;
        }
        
        @keyframes featureActive {
          from {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
          to {
            box-shadow: 0 0 20px 2px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </main>
  )
}