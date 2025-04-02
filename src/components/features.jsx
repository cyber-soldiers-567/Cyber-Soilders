import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Zap, Lock, Globe, Server, Code, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Advanced Threat Protection",
    description: "Real-time monitoring and protection against sophisticated cyber threats",
    icon: <Shield className="h-6 w-6" />,
    stats: { value: "99.9%", label: "Threat Detection" }
  },
  {
    title: "Rapid Incident Response",
    description: "Swift action and resolution for security incidents",
    icon: <Zap className="h-6 w-6" />,
    stats: { value: "15min", label: "Response Time" }
  },
  {
    title: "Zero Trust Security",
    description: "Comprehensive security model for modern enterprises",
    icon: <Lock className="h-6 w-6" />,
    stats: { value: "100%", label: "Access Control" }
  },
  {
    title: "Global Security Network",
    description: "Worldwide protection and threat intelligence",
    icon: <Globe className="h-6 w-6" />,
    stats: { value: "24/7", label: "Monitoring" }
  },
  {
    title: "Secure Infrastructure",
    description: "Hardened infrastructure and compliance standards",
    icon: <Server className="h-6 w-6" />,
    stats: { value: "ISO", label: "Certified" }
  },
  {
    title: "Secure Development",
    description: "Security-first approach to software development",
    icon: <Code className="h-6 w-6" />,
    stats: { value: "0", label: "Vulnerabilities" }
  },
  {
    title: "Data Protection",
    description: "Enterprise-grade encryption and data security",
    icon: <Database className="h-6 w-6" />,
    stats: { value: "AES", label: "256-bit" }
  },
  {
    title: "Cloud Security",
    description: "Comprehensive cloud infrastructure protection",
    icon: <Cloud className="h-6 w-6" />,
    stats: { value: "Multi", label: "Cloud" }
  }
]

export default function Features() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
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

      {/* Content */}
      <div className="container px-4 md:px-6 max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Shield className="mr-2 h-4 w-4" />
            Enterprise Security Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400 mb-4"
          >
            Comprehensive Security Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-[800px] mx-auto"
          >
            Protect your digital assets with our advanced security features and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Feature Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {feature.stats.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {feature.stats.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      scale: activeFeature === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-2 w-2 rounded-full bg-primary"
                  />
                </div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  background: activeFeature === index
                    ? "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.2))"
                    : "linear-gradient(to bottom right, rgba(var(--primary), 0), rgba(var(--primary), 0.1))"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg"
          >
            <span className="relative z-10">Explore All Features</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="text-sm text-muted-foreground mb-2">Discover More</div>
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

