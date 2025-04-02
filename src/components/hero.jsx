import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SubtleHero() {
  // Refs for intersection observer animations
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState({});

  // Parallax scroll effect - more subtle values
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 50]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  // Counter animation with smoother progression
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2500; // Slightly longer for smoother effect
    const startTime = Date.now();
    const isPercentage = typeof targetValue === 'string' && targetValue.includes('%');
    const numericValue = parseInt(isPercentage ? targetValue.replace(/\D/g, '') : targetValue);
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        // Using easeOutQuad for a more natural feel
        const progress = 1 - Math.pow(1 - elapsedTime / duration, 2);
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Stagger counter animations slightly
          setTimeout(() => animateCounter("250", "projects"), 0);
          setTimeout(() => animateCounter("95", "satisfaction"), 200);
          setTimeout(() => animateCounter("20", "countries"), 400);
          setTimeout(() => animateCounter("50", "experts"), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Staggered transitions for content elements
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={sectionRef} className="w-full min-h-screen relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"
          style={{ y: backgroundY, opacity: backgroundOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(var(--primary),0.05),transparent_60%)]" />
      </div>

      {/* Subtle Floating Elements - lower opacity and slower animation */}
      <motion.div
        className="absolute -z-10 top-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/5 to-green-500/5 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Content */}
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Badge with subtle entrance */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium"
          >
            <Shield className="mr-2 h-4 w-4" />
            Digital Innovation
          </motion.div>

          {/* Main Title with staggered entrance */}
          <div className="space-y-4 max-w-[980px]">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
            >
              Transform Your Digital Experience
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto"
            >
              Empowering businesses with
              <span className="font-semibold text-foreground"> elegant solutions </span>
              that blend innovation and simplicity.
            </motion.p>
          </div>

          {/* Stats Section with staggered counter animations */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 w-full max-w-3xl"
          >
            {[
              { id: "projects", label: "Projects Delivered", value: counterValues.projects || "0" },
              { id: "satisfaction", label: "Client Satisfaction", value: `${counterValues.satisfaction || "0"}%` },
              { id: "countries", label: "Global Reach", value: `${counterValues.countries || "0"}+` },
              { id: "experts", label: "Team Experts", value: `${counterValues.experts || "0"}+` },
            ].map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with subtle hover effects */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            {[
              { to: "/solutions", label: "Solutions", variant: "default" },
              { to: "/about", label: "About Us", variant: "outline" },
              { to: "/contact", label: "Get Started", variant: "default" },
            ].map((button) => (
              <Link key={button.to} to={button.to}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant={button.variant}
                    className={`group ${
                      button.variant === "default"
                        ? "bg-primary hover:bg-primary/90"
                        : "border-primary/20 hover:border-primary/30"
                    }`}
                  >
                    <span className="relative z-10">{button.label}</span>
                    {button.variant === "default" && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    )}
                  </Button>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Terminal Section with subtle blinking cursor */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center bg-black/80 dark:bg-white/5 rounded-lg px-6 py-3 space-x-4"
            >
              <Terminal className="h-5 w-5 text-primary" />
              <code className="font-mono text-sm text-primary">connect@yourcompany.io</code>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-sm text-muted-foreground mb-2">Discover more</div>
          <div className="w-5 h-9 border border-primary/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}