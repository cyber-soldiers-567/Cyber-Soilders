import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users, Target, Lock, Cloud, Database, Key, Network, Bug, FileCheck, AlertTriangle, Star, ChevronRight } from "lucide-react"

export default function Services() {
  const [selectedService, setSelectedService] = useState("Managed SOC")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const containerRef = useRef(null)
  const sectionRefs = useRef([])
  const { scrollY } = useScroll()

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  const services = [
    {
      id: "Managed SOC",
      title: "Managed SOC",
      description: "Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and incident response to protect your organization from evolving cyber threats. Staffed by experienced security analysts using cutting-edge technology, our Managed SOC delivers enterprise-grade security without the overhead of building and maintaining your own security operations center.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Shield className="h-8 w-8" />,
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Real-time Alerts"],
      color: "text-blue-500"
    },
    {
      id: "Vulnerability & Penetration Testing",
      title: "Vulnerability & Penetration Testing",
      description: "Comprehensive security assessment services that identify and address vulnerabilities in your systems, applications, and infrastructure. Our expert team conducts thorough penetration testing to ensure your organization's security posture is robust and resilient.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Bug className="h-8 w-8" />,
      features: ["System Assessment", "Application Testing", "Infrastructure Analysis", "Security Reports"],
      color: "text-red-500"
    },
    {
      id: "Risk Assessment & Audit Compliance",
      title: "Risk Assessment & Audit Compliance",
      description: "Detailed risk analysis and compliance auditing services to help your organization meet regulatory requirements and industry standards. We provide actionable insights and recommendations to strengthen your security framework.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <FileCheck className="h-8 w-8" />,
      features: ["Risk Analysis", "Compliance Auditing", "Policy Review", "Security Framework"],
      color: "text-green-500"
    },
    {
      id: "Incident Response",
      title: "Incident Response",
      description: "Rapid and effective incident response services to help your organization recover from security incidents. Our team provides immediate support, investigation, and remediation to minimize impact and prevent future occurrences.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <AlertTriangle className="h-8 w-8" />,
      features: ["Rapid Response", "Investigation", "Remediation", "Prevention"],
      color: "text-yellow-500"
    }
  ]

  const securityCards = [
    {
      title: "Network Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Network className="h-6 w-6" />,
      stats: { value: "99.9%", label: "Uptime" }
    },
    {
      title: "Cloud Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Cloud className="h-6 w-6" />,
      stats: { value: "24/7", label: "Monitoring" }
    },
    {
      title: "Application Security",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Lock className="h-6 w-6" />,
      stats: { value: "100%", label: "Coverage" }
    },
    {
      title: "Endpoint Protection",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Target className="h-6 w-6" />,
      stats: { value: "500+", label: "Endpoints" }
    },
    {
      title: "Identity & Access Management",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Key className="h-6 w-6" />,
      stats: { value: "2FA", label: "Enabled" }
    },
    {
      title: "Data Protection",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Database className="h-6 w-6" />,
      stats: { value: "256bit", label: "Encryption" }
    }
  ]

  // Animation for counters
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage = typeof targetValue === 'string' && targetValue.includes('%');
    const numericValue = parseInt(isPercentage ? targetValue.replace(/\D/g, '') : targetValue);
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const currentValue = Math.floor(progress * numericValue);
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : currentValue
        }));
        
        requestAnimationFrame(updateCounter);
      } else {
        setCounterValues(prev => ({
          ...prev,
          [id]: targetValue
        }));
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setIsVisible(true);
          
          if (entry.target.id === 'stats-section' && !isCounterStarted) {
            setIsCounterStarted(true);
            securityCards.forEach(card => {
              if (card.stats && card.stats.value) {
                animateCounter(card.stats.value, `${card.title}-stats`);
              }
            });
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, [isCounterStarted]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="flex-1" ref={containerRef}>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <motion.div
              style={{ y, opacity }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute -z-10 top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 blur-3xl"
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-primary/10 blur-3xl"
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="space-y-6 max-w-[600px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce-subtle"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Enterprise-Grade Security
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
                >
                  Cyber Security Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground"
                >
                  Comprehensive security solutions to protect your organization from evolving cyber threats.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                    />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Security Services"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Security Operations</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Security Cards Section */}
        <section 
          ref={addToRefs}
          id="stats-section" 
          className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400">
                Maximum Security with Cyber Security Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Comprehensive security solutions designed to protect your organization's assets and data
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video relative">
                    <img
                      alt={card.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      src={card.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-white/10 text-white backdrop-blur-sm">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between text-white"
                      >
                        <div>
                          <div className="text-2xl font-bold">
                            {counterValues[`${card.title}-stats`] || card.stats.value}
                          </div>
                          <div className="text-sm opacity-80">{card.stats.label}</div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          className="text-white hover:text-primary hover:bg-white/10 transition-colors"
                        >
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Hover overlay with gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{
                        background: hoveredCard === card.title
                          ? "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.3))"
                          : "linear-gradient(to bottom right, rgba(var(--primary), 0), rgba(var(--primary), 0.2))"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Selection Section */}
        <section 
          ref={addToRefs}
          className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden opacity-0 translate-y-4 duration-700 ease-out"
        >
          {/* Background gradient and particles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Tailored Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400">
                Select Your Security Needs
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Choose from our comprehensive range of security services tailored to your organization
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant={selectedService === service.id ? "default" : "outline"}
                    className={`h-auto py-3 px-6 text-base group relative overflow-hidden ${
                      selectedService === service.id ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <span className="relative z-10 flex items-center">
                      <motion.div
                        whileHover={{ rotate: 12 }}
                        className={service.color}
                      >
                        {service.icon}
                      </motion.div>
                      <span className="ml-2">{service.title}</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                    />
                  </Button>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${
                        services.find(s => s.id === selectedService)?.color
                      }`}
                    >
                      {services.find(s => s.id === selectedService)?.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400">
                      {services.find(s => s.id === selectedService)?.title}
                    </h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-muted-foreground"
                  >
                    {services.find(s => s.id === selectedService)?.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {services.find(s => s.id === selectedService)?.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 group"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                        <span className="text-base group-hover:text-primary transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button className="group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                      />
                    </Button>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group"
                >
                  <img
                    alt={services.find(s => s.id === selectedService)?.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    src={services.find(s => s.id === selectedService)?.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.3))"
                    }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
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
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
} 