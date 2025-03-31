import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users, Target, Lock, Cloud, Database, Key, Network, Bug, FileCheck, AlertTriangle } from "lucide-react"

export default function Services() {
  const [selectedService, setSelectedService] = useState("Managed SOC")
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: "Managed SOC",
      title: "Managed SOC",
      description: "Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and incident response to protect your organization from evolving cyber threats. Staffed by experienced security analysts using cutting-edge technology, our Managed SOC delivers enterprise-grade security without the overhead of building and maintaining your own security operations center.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Shield className="h-8 w-8" />,
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Real-time Alerts"]
    },
    {
      id: "Vulnerability & Penetration Testing",
      title: "Vulnerability & Penetration Testing",
      description: "Comprehensive security assessment services that identify and address vulnerabilities in your systems, applications, and infrastructure. Our expert team conducts thorough penetration testing to ensure your organization's security posture is robust and resilient.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Bug className="h-8 w-8" />,
      features: ["System Assessment", "Application Testing", "Infrastructure Analysis", "Security Reports"]
    },
    {
      id: "Risk Assessment & Audit Compliance",
      title: "Risk Assessment & Audit Compliance",
      description: "Detailed risk analysis and compliance auditing services to help your organization meet regulatory requirements and industry standards. We provide actionable insights and recommendations to strengthen your security framework.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <FileCheck className="h-8 w-8" />,
      features: ["Risk Analysis", "Compliance Auditing", "Policy Review", "Security Framework"]
    },
    {
      id: "Incident Response",
      title: "Incident Response",
      description: "Rapid and effective incident response services to help your organization recover from security incidents. Our team provides immediate support, investigation, and remediation to minimize impact and prevent future occurrences.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <AlertTriangle className="h-8 w-8" />,
      features: ["Rapid Response", "Investigation", "Remediation", "Prevention"]
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

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="space-y-4 max-w-[600px]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Enterprise-Grade Security
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Cyber Security Services
                </h1>
                <p className="text-xl text-muted-foreground">
                  Comprehensive security solutions to protect your organization from evolving cyber threats.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button size="lg" className="h-12 px-8 text-base group">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Security Cards Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Maximum Security with Cyber Security Services</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Comprehensive security solutions designed to protect your organization's assets and data
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {securityCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(card.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
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
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === card.title ? 1 : 0 }}
                      className="absolute inset-0 bg-primary/10 flex items-center justify-center"
                    >
                      <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Selection Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Select Your Needs</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Choose from our comprehensive range of security services tailored to your organization
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedService === service.id ? "default" : "outline"}
                    className="h-auto py-2 px-4 text-base group"
                    onClick={() => setSelectedService(service.id)}
                  >
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
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
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {services.find(s => s.id === selectedService)?.icon}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {services.find(s => s.id === selectedService)?.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {services.find(s => s.id === selectedService)?.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {services.find(s => s.id === selectedService)?.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button className="group">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
                <motion.div 
                  className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    alt={services.find(s => s.id === selectedService)?.title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover"
                    src={services.find(s => s.id === selectedService)?.image}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  )
} 