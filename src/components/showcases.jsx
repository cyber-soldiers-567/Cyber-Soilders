import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Star, Trophy, Award, Users, ArrowRight, ExternalLink, Code, Globe, Zap } from "lucide-react"

const showcases = [
  {
    title: "Enterprise Security",
    description: "Protecting Fortune 500 companies with advanced cybersecurity solutions",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Shield className="h-6 w-6" />,
    stats: { value: "500+", label: "Protected Companies" },
    tags: ["SOC", "Threat Detection", "Incident Response"]
  },
  {
    title: "Government Defense",
    description: "Securing critical infrastructure and government agencies",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Trophy className="h-6 w-6" />,
    stats: { value: "100%", label: "Success Rate" },
    tags: ["Zero Trust", "Compliance", "24/7 Monitoring"]
  },
  {
    title: "Financial Security",
    description: "Protecting financial institutions from cyber threats",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Star className="h-6 w-6" />,
    stats: { value: "$0", label: "Loss Prevention" },
    tags: ["Fraud Detection", "Risk Management", "Compliance"]
  }
]

export default function Showcases() {
  const containerRef = useRef(null);
  const [activeShowcase, setActiveShowcase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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
    <section 
      ref={containerRef}
      className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
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

      <div className="container px-4 md:px-6 max-w-[1400px] mx-auto relative z-10">
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
            <Trophy className="mr-2 h-4 w-4" />
            Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400 mb-4"
          >
            Our Showcase Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-[800px] mx-auto"
          >
            Discover how we've helped organizations strengthen their security posture
          </motion.p>
        </motion.div>

        {/* Showcases Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setActiveShowcase(index)}
              onHoverEnd={() => setActiveShowcase(null)}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={showcase.image}
                  alt={showcase.title}
                  className="object-cover w-full h-full transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Overlay Content */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: activeShowcase === index ? 1 : 0
                  }}
                  className="absolute inset-0 bg-primary/10 flex items-center justify-center"
                >
                  <Button
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-lg bg-primary/10 text-primary`}
                  >
                    {showcase.icon}
                  </motion.div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {showcase.stats.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {showcase.stats.label}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {showcase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {showcase.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {showcase.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  background: activeShowcase === index
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
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg"
          >
            <span className="relative z-10 flex items-center">
              View All Case Studies
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
    </section>
  );
} 