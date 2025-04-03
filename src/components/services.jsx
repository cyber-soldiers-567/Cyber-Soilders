import { useEffect, useRef, useState } from "react"
import { ArrowRight, Shield, Zap, Users, Target, Lock, Cloud, Database, Key, Network, Bug, FileCheck, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const [selectedService, setSelectedService] = useState("Managed SOC")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  
  // Refs for intersection observer animations
  const sectionRefs = useRef([])

  const services = [
    {
      id: "Managed SOC",
      title: "Managed SOC",
      description: "Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and incident response to protect your organization from evolving cyber threats. Staffed by experienced security analysts using cutting-edge technology, our Managed SOC delivers enterprise-grade security without the overhead of building and maintaining your own security operations center.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Shield className="h-8 w-8" />,
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Real-time Alerts"],
      stat: "99.9%",
      statLabel: "Detection rate"
    },
    {
      id: "Vulnerability & Penetration Testing",
      title: "Vulnerability & Penetration Testing",
      description: "Comprehensive security assessment services that identify and address vulnerabilities in your systems, applications, and infrastructure. Our expert team conducts thorough penetration testing to ensure your organization's security posture is robust and resilient.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Bug className="h-8 w-8" />,
      features: ["System Assessment", "Application Testing", "Infrastructure Analysis", "Security Reports"],
      stat: "95%",
      statLabel: "Success rate"
    },
    {
      id: "Risk Assessment & Audit Compliance",
      title: "Risk Assessment & Audit Compliance",
      description: "Detailed risk analysis and compliance auditing services to help your organization meet regulatory requirements and industry standards. We provide actionable insights and recommendations to strengthen your security framework.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <FileCheck className="h-8 w-8" />,
      features: ["Risk Analysis", "Compliance Auditing", "Policy Review", "Security Framework"],
      stat: "100%",
      statLabel: "Compliance"
    },
    {
      id: "Incident Response",
      title: "Incident Response",
      description: "Rapid and effective incident response services to help your organization recover from security incidents. Our team provides immediate support, investigation, and remediation to minimize impact and prevent future occurrences.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <AlertTriangle className="h-8 w-8" />,
      features: ["Rapid Response", "Investigation", "Remediation", "Prevention"],
      stat: "4h",
      statLabel: "Avg. response time"
    }
  ]

  const securityCards = [
    {
      title: "Network Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Network className="h-6 w-6" />
    },
    {
      title: "Cloud Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Application Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Endpoint Protection",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Identity & Access Management",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Data Protection",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Database className="h-6 w-6" />
    }
  ]
  
  // Counter animation function
  const animateCounter = (targetValue, id) => {
    let startValue = 0
    const duration = 2000
    const startTime = Date.now()
    const isPercentage = targetValue.toString().includes('%')
    const isHour = targetValue.toString().includes('h')
    const numericValue = parseInt(targetValue.toString().replace(/\D/g, ''))
    
    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentValue = Math.floor(progress * numericValue)
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : (isHour ? `${currentValue}h` : currentValue)
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
          
          // Start counter animations for the services section
          if (entry.target.id === 'services-section' && !isCounterStarted) {
            setIsCounterStarted(true)
            
            services.forEach((service, index) => {
              setTimeout(() => {
                animateCounter(service.stat, `service-${index}`)
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
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 opacity-0 animate-fade-in"
              style={{animationDelay: '200ms', animationFillMode: 'forwards'}}
            >
              <div className="space-y-4 max-w-[600px]">
                <div className="overflow-hidden">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-300 text-sm font-medium animate-slide-up">
                    <Shield className="mr-2 h-4 w-4" />
                    Enterprise-Grade Security
                  </div>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-slide-up">
                    Cyber Security Services
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xl text-muted-foreground animate-slide-up-delayed">
                    Comprehensive security solutions to protect your organization from evolving cyber threats.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                <Button size="lg" className="h-12 px-8 text-base group transition-all duration-300 hover:scale-105">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

        {/* Security Cards Section */}
        <section 
          ref={addToRefs}
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-green-500/10 blur-3xl animate-float"></div>
          <div className="absolute left-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/10 to-blue-500/10 blur-3xl animate-float-delayed"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
              <div className="overflow-hidden">
                <h2 className="text-3xl text-gray-300 font-bold tracking-tighter mb-4 animate-slide-up">Maximum Security with Cyber Security Services</h2>
              </div>
              <div className="overflow-hidden">
                <p className="text-muted-foreground max-w-[600px] mx-auto animate-slide-up-delayed">
                  Comprehensive security solutions designed to protect your organization's assets and data
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {securityCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                  onMouseEnter={() => setHoveredCard(card.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="aspect-video relative">
                    <img
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      src={card.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <div className="text-white">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                      </div>
                    </div>
                    <div 
                      className={`absolute inset-0 bg-primary/10 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === card.title ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Button 
                        variant="secondary" 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Selection Section */}
        <section 
          ref={addToRefs}
          id="services-section"
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl animate-float"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-reverse"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
              <div className="overflow-hidden">
                <h2 className="text-3xl text-gray-300 font-bold tracking-tighter mb-4 animate-slide-up">Select Your Needs</h2>
              </div>
              <div className="overflow-hidden">
                <p className="text-muted-foreground max-w-[600px] mx-auto animate-slide-up-delayed">
                  Choose from our comprehensive range of security services tailored to your organization
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-12">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`group p-6 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in ${selectedService === service.id ? 'border-primary bg-gray-100' : 'hover:bg-accent/50'}`}
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="text-primary mb-4 p-3 rounded-full w-16 h-16 bg-gray-100 dark:bg-gray-100 flex items-center justify-center group-hover:bg-gray-300 dark:group-hover:bg-gray-300 transition-all duration-500 hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">{service.title}</h3>
                  
                  {/* Stats */}
                  <div className="mt-4 flex justify-end">
                    <div className="flex flex-col items-end">
                      <div className="text-xl font-bold text-primary">
                        {counterValues[`service-${index}`] || service.stat}
                      </div>
                      <div className="text-s mb-2 transition-colors duration-300">{service.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center opacity-0 animate-fade-in-up"
              style={{animationDelay: '400ms', animationFillMode: 'forwards'}}
            >
              <div 
                className="space-y-6"
                style={{transform: `translateY(${scrollY * -0.02}px)`}}
              >
                <div className="overflow-hidden">
                  <div className="flex items-center gap-3 animate-slide-right">
                    <div className="text-primary">
                      {services.find(s => s.id === selectedService)?.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-300">
                      {services.find(s => s.id === selectedService)?.title}
                    </h3>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground text-lg animate-slide-right-delayed">
                    {services.find(s => s.id === selectedService)?.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                  {services.find(s => s.id === selectedService)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-4 overflow-hidden">
                  <Button className="group animate-slide-right-delayed-more">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div 
                className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105"
                style={{ 
                  transform: `translateY(${scrollY * 0.03}px) perspective(1000px) rotateY(${Math.sin(scrollY * 0.001) * 3}deg)`
                }}
              >
                <img
                  alt={services.find(s => s.id === selectedService)?.title}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  src={services.find(s => s.id === selectedService)?.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section - Added to match the product.jsx structure */}
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
                Trusted by Industry Leaders
              </h2>
              <div className="flex flex-wrap gap-8 justify-center mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 relative transform hover:scale-[1.01]">
                      <img
                        alt={`Partner ${i}`}
                        loading="lazy"
                        width="150"
                        height="50"
                        decoding="async"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        src="/placeholder.svg?height=50&width=150"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Leading organizations trust our security services to protect their critical assets.
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