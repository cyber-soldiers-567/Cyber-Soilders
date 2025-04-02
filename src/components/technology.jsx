import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Atom, Box, Zap, ArrowRight, Shield, Code, Server, Database, Cloud, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const technologies = [
  {
    title: "React",
    icon: <Atom className="w-6 h-6" />,
    color: "text-blue-500",
    description: "The library for web and native user interfaces, built on the latest React features, including Server Components and Actions.",
    stats: { value: "18.2M", label: "Downloads/week" }
  },
  {
    title: "Turbopack",
    icon: <Box className="w-6 h-6" />,
    color: "text-red-500",
    description: "An incremental bundler optimized for JavaScript and TypeScript, written in Rust and built into Next.js.",
    stats: { value: "700x", label: "Faster Updates" }
  },
  {
    title: "Speedy Web Compiler",
    icon: <Zap className="w-6 h-6" />,
    color: "text-yellow-500",
    description: "An extensible Rust-based platform for the next generation of fast developer tools, and can be used for both compilation and minification.",
    stats: { value: "20x", label: "Faster Builds" }
  },
  {
    title: "Next.js",
    icon: <Code className="w-6 h-6" />,
    color: "text-green-500",
    description: "The React Framework for Production, offering hybrid static & server rendering, TypeScript support, and smart bundling.",
    stats: { value: "4.4M", label: "Weekly Downloads" }
  },
  {
    title: "Tailwind CSS",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-cyan-500",
    description: "A utility-first CSS framework for rapid UI development, with built-in dark mode and responsive design.",
    stats: { value: "3.2M", label: "Weekly Downloads" }
  },
  {
    title: "TypeScript",
    icon: <Server className="w-6 h-6" />,
    color: "text-blue-600",
    description: "A typed superset of JavaScript that compiles to plain JavaScript, adding optional types, classes, and modules.",
    stats: { value: "9.1M", label: "Weekly Downloads" }
  }
]

export default function Technology() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
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

  return (
    <section ref={containerRef} className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
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
        className="absolute -z-10 top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
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
        className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl"
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

      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Shield className="mr-2 h-4 w-4" />
            Powered By Advanced Technology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
          >
            Built on a technology driven platform, Cyber.soldiers services are in demand
          </motion.h2>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              onHoverStart={() => setActiveTech(index)}
              onHoverEnd={() => setActiveTech(null)}
              className="group relative p-6 rounded-xl border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <motion.div
                  className={`flex items-center gap-2 mb-4 ${tech.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeTech === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{tech.title}</h3>
                  <motion.div
                    animate={{
                      x: activeTech === index ? [0, 5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </motion.div>
                </motion.div>
                <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {tech.stats.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tech.stats.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      scale: activeTech === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-2 w-2 rounded-full bg-primary"
                  />
                </div>
              </div>

              {/* Hover Effect Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  background: activeTech === index
                    ? "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.2))"
                    : "linear-gradient(to bottom right, rgba(var(--primary), 0), rgba(var(--primary), 0.1))"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Get Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent dark:from-primary/10 dark:via-primary/10 rounded-3xl" />
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative p-8 md:p-12 rounded-3xl border backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Get started</h3>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["WAFT", "SOC", "Threat Modeling", "Attack Surface", "MFA", "Zero Trust", "IAM"].map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-muted-foreground mb-8 max-w-[600px]">
              CyberSoldiers is your ultimate partner in cybersecurity—empowering skill development, resilience building, and compliance assurance. Strengthen your digital infrastructure today with expert solutions from CyberSoldiers.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="group relative overflow-hidden">
                <span className="relative z-10">Enquire Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                />
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 