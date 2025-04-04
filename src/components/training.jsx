import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Star, ChevronRight, Shield, Target } from "lucide-react"

const courses = [
  {
    title: "Cyber Security Fundamentals",
    description: "Learn the basics of cyber security, including threat detection, prevention, and response strategies.",
    duration: "8 weeks",
    level: "Beginner",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "text-blue-500",
    stats: { students: "500+", rating: "4.9" },
    features: ["Live Sessions", "Hands-on Labs", "Industry Projects", "Certification"]
  },
  {
    title: "Advanced Penetration Testing",
    description: "Master advanced penetration testing techniques and tools used by security professionals.",
    duration: "12 weeks",
    level: "Advanced",
    icon: <Target className="h-6 w-6" />,
    color: "text-red-500",
    stats: { students: "300+", rating: "4.8" },
    features: ["Real-world Scenarios", "CTF Challenges", "Tool Mastery", "Expert Mentoring"]
  },
  {
    title: "Security Operations Center (SOC)",
    description: "Comprehensive training on SOC operations, incident response, and threat hunting.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Shield className="h-6 w-6" />,
    color: "text-green-500",
    stats: { students: "400+", rating: "4.7" },
    features: ["Live SOC Environment", "Incident Response", "Threat Hunting", "Team Collaboration"]
  },
  {
    title: "Cloud Security Professional",
    description: "Specialized training in securing cloud infrastructure and applications.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Award className="h-6 w-6" />,
    color: "text-yellow-500",
    stats: { students: "350+", rating: "4.8" },
    features: ["Multi-Cloud Security", "DevSecOps", "Compliance", "Best Practices"]
  }
]

export default function Training() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].title)
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

  // Animation for counters
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const numericValue = parseInt(targetValue.replace(/\D/g, ''));
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const currentValue = Math.floor(progress * numericValue);
        setCounterValues(prev => ({
          ...prev,
          [id]: `${currentValue}+`
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
            courses.forEach(course => {
              animateCounter(course.stats.students, `${course.title}-students`);
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
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Professional Training
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
                >
                  Cyber Security Training
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground"
                >
                  Comprehensive training programs designed to build your cyber security expertise.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Enroll Now
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
                  alt="Training Programs"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-2xl font-bold mb-2">4.8/5.0</div>
                  <div className="text-sm opacity-80">Student Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Section */}
        <section 
          ref={addToRefs}
          className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Star className="mr-2 h-4 w-4" />
                Knowledge Partner
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
              >
                Our Knowledge Partner
              </motion.h2>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  alt="IIT Madras Logo"
                  width="300"
                  height="100"
                  className="relative z-10 object-contain"
                  src="/placeholder.svg?height=100&width=300"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-[600px]"
              >
                IIT Madras brings world-class expertise and research to our cybersecurity training programs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section 
          ref={addToRefs}
          id="stats-section"
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
                Available Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400">
                Choose Your Learning Path
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Select from our comprehensive range of cyber security training programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${course.color}`}
                      >
                        {course.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.level}</span>
                        </div>
                      </div>
                    </motion.div>

                    <p className="text-muted-foreground">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {course.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                          <span className="text-sm group-hover:text-primary transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-2xl font-bold">
                            {counterValues[`${course.title}-students`] || course.stats.students}
                          </div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold flex items-center gap-1">
                            {course.stats.rating}
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                        </div>
                      </div>
                      
                      <Button className="group relative overflow-hidden">
                        <span className="relative z-10 flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.75, ease: "easeInOut" }}
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Hover overlay with gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{
                      background: hoveredCard === course.title
                        ? "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.3))"
                        : "linear-gradient(to bottom right, rgba(var(--primary), 0), rgba(var(--primary), 0.2))"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={addToRefs}
          className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce-subtle"
              >
                Start Learning
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
              >
                Ready to Start Your Journey?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-[600px]"
              >
                Join our comprehensive training programs and become a certified cyber security professional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base group">
                    View Course Details
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
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