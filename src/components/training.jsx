import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import NextjsBackground from './NextjsBackground'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

const courses = [
  {
    title: "Cyber Security Fundamentals",
    description: "Learn the basics of cyber security, including threat detection, prevention, and response strategies.",
    duration: "8 weeks",
    level: "Beginner",
    icon: <GraduationCap className="h-6 w-6" />,
    stat: "2000+",
    statLabel: "Graduates"
  },
  {
    title: "Advanced Penetration Testing",
    description: "Master advanced penetration testing techniques and tools used by security professionals.",
    duration: "12 weeks",
    level: "Advanced",
    icon: <BookOpen className="h-6 w-6" />,
    stat: "97%",
    statLabel: "Success rate"
  },
  {
    title: "Security Operations Center (SOC)",
    description: "Comprehensive training on SOC operations, incident response, and threat hunting.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Users className="h-6 w-6" />,
    stat: "94%",
    statLabel: "Job placement"
  },
  {
    title: "Cloud Security Professional",
    description: "Specialized training in securing cloud infrastructure and applications.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Award className="h-6 w-6" />,
    stat: "4.9",
    statLabel: "Rating"
  }
]

const benefits = [
  "Industry-recognized certification",
  "Hands-on practical training",
  "Expert instructors with real-world experience",
  "Flexible learning options",
  "Job placement assistance",
  "Post-training support"
]

export default function Training() {
  const [scrollY, setScrollY] = useState(0)
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  const [hoveredCourse, setHoveredCourse] = useState(null)
  
  // Refs for animations
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const partnerRef = useRef(null)
  const coursesRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)
  const courseCardsRef = useRef([])
  const benefitItemsRef = useRef([])
  
  // Refs for intersection observer animations
  const sectionRefs = useRef([])
  
  // Add to course refs
  const addToCourseRefs = (el, index) => {
    if (el) {
      courseCardsRef.current[index] = el
    }
  }
  
  // Add to benefit refs
  const addToBenefitRefs = (el, index) => {
    if (el) {
      benefitItemsRef.current[index] = el
    }
  }
  
  // Counter animation function
  const animateCounter = (targetValue, id) => {
    if (!targetValue) return
    
    let startValue = 0
    const duration = 2000
    const startTime = Date.now()
    const isPercentage = targetValue.toString().includes('%')
    const isRating = !isPercentage && !targetValue.toString().includes('+') && parseFloat(targetValue) < 10
    const numericValue = parseFloat(targetValue.toString().replace(/[^0-9.]/g, ''))
    
    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        let currentValue
        
        if (isRating) {
          // For ratings, show one decimal place
          currentValue = (progress * numericValue).toFixed(1)
        } else {
          currentValue = Math.floor(progress * numericValue)
        }
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : (targetValue.includes('+') ? `${currentValue}+` : currentValue)
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

  // Initialize GSAP animations
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return
    
    // Safety check for GSAP
    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not available")
      return
    }
    
    try {
      // Create a GSAP context
      const ctx = gsap.context(() => {
        // Enhanced grid background animation
        if (gridRef.current) {
          gsap.to(gridRef.current, {
            backgroundSize: "30px 30px",
            opacity: 0.7,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.5
            }
          })
        }
        
        // Animate hero section
        const heroTimeline = gsap.timeline()
        heroTimeline.from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        })
        .from(".hero-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.3")
        .from(".hero-description", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4")
        .from(".hero-button", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out"
        }, "-=0.2")
        
        // Animate floating elements
        const particles = document.querySelectorAll('.floating-particle')
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-15, 15)",
            x: "random(-15, 15)",
            duration: "random(3, 6)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.2
          })
        })
        
        // Gradient orbs parallax
        gsap.to(".parallax-slow", {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        })
        
        gsap.to(".parallax-fast", {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        })
        
        // Partner section animation
        ScrollTrigger.create({
          trigger: partnerRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".partner-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".partner-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            gsap.fromTo(".partner-logo", 
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
            )
          },
          once: true
        })
        
        // Courses section animation
        ScrollTrigger.create({
          trigger: coursesRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".courses-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".courses-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for course cards
            courseCardsRef.current.forEach((card, index) => {
              if (!card) return
              
              gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.7,
                  delay: 0.1 + (index * 0.15),
                  ease: "power2.out",
                  onComplete: () => {
                    if (index === 0 && !isCounterStarted) {
                      setIsCounterStarted(true)
                      courses.forEach((course, i) => {
                        setTimeout(() => {
                          animateCounter(course.stat, `course-${i}`)
                        }, i * 200)
                      })
                    }
                  }
                }
              )
            })
          },
          once: true
        })
        
        // Benefits section animation
        ScrollTrigger.create({
          trigger: benefitsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".benefits-title", 
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".benefits-description", 
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for benefit items
            benefitItemsRef.current.forEach((item, index) => {
              if (!item) return
              
              gsap.fromTo(item,
                { x: -30, opacity: 0 },
                { 
                  x: 0, 
                  opacity: 1, 
                  duration: 0.5,
                  delay: 0.3 + (index * 0.1),
                  ease: "power2.out"
                }
              )
            })
            
            gsap.fromTo(".benefits-button", 
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: "power2.out" }
            )
            
            // Image animation
            gsap.fromTo(".benefits-image", 
              { scale: 0.9, opacity: 0.5 },
              { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" }
            )
          },
          once: true
        })
        
        // Image parallax effect on scroll
        ScrollTrigger.create({
          trigger: benefitsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress
            gsap.to(".benefits-image", {
              y: progress * 40,
              rotationY: progress * 5,
              duration: 0,
              ease: "none"
            })
          }
        })
        
        // CTA section animation
        ScrollTrigger.create({
          trigger: ctaRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".cta-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-buttons", 
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-card", 
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
            )
          },
          once: true
        })
        
        // Animated glow effect for the CTA card
        gsap.to(".cta-glow", {
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      }, containerRef)
      
      return () => ctx.revert() // Clean up animations
    } catch (error) {
      console.error("Error setting up GSAP animations:", error)
    }
  }, [isCounterStarted])

  useEffect(() => {
    // Intersection Observer for legacy animation support
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
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
  }, [])

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <main className="flex-1" ref={containerRef}>
      {/* NextJS-style background animation */}
      <NextjsBackground />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
        >
          <div 
            ref={gridRef}
            className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          {/* Enhanced animated background elements */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl parallax-slow"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl parallax-fast"></div>
          
          {/* Animated particles */}
          <div className="absolute -z-10 inset-0">
            <div className="floating-particle absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30"></div>
            <div className="floating-particle absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30"></div>
            <div className="floating-particle absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30"></div>
            <div className="floating-particle absolute top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30"></div>
            <div className="floating-particle absolute top-1/2 left-1/2 size-1 rounded-full bg-red-500/30"></div>
          </div>
          
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-4 max-w-[600px]">
                <div className="overflow-hidden">
                  <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Professional Training
                  </div>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-600">
                    Cyber Security Training
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <p className="hero-description text-xl text-muted-foreground">
                    Comprehensive training programs designed to build your cyber security expertise.
                  </p>
                </div>
              </div>
              <div className="hero-button">
                <Button size="lg" className="h-12 px-8 text-base group transition-all duration-300 hover:scale-105">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section 
          ref={partnerRef}
          className="w-full py-12 md:py-24 bg-white dark:bg-black relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-green-500/10 blur-3xl parallax-slow"></div>
          <div className="absolute left-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/10 to-blue-500/10 blur-3xl parallax-fast"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <h2 className="partner-title text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Our Knowledge Partner</h2>
                </div>
                <div className="partner-logo relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 relative transform hover:scale-[1.01] transition-all duration-500">
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
                <div className="overflow-hidden">
                  <p className="partner-description text-xl text-muted-foreground max-w-[600px] mx-auto">
                    IIT Madras brings world-class expertise and research to our cybersecurity training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section 
          ref={coursesRef}
          id="courses-section"
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl parallax-slow"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl parallax-fast"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="overflow-hidden">
                <h2 className="courses-title text-3xl font-bold tracking-tighter mb-4 text-gray-100">Available Courses</h2>
              </div>
              <div className="overflow-hidden">
                <p className="courses-description text-gray-100 text-muted-foreground max-w-[600px] mx-auto">
                  Choose from our comprehensive range of cyber security training programs
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={course.title}
                  ref={(el) => addToCourseRefs(el, index)}
                  className="course-card group relative overflow-hidden rounded-lg border bg-gray-100 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCourse(course.title)}
                  onMouseLeave={() => setHoveredCourse(null)}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-primary p-3 rounded-full w-14 h-14 bg-gray-100 dark:bg-gray-200 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-100 group-hover:scale-110 transition-all duration-500">
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{course.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" style={{animationDelay: '0.5s'}} />
                            {course.level}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-gray-100 group-hover:text-gray-900 transition-colors duration-300">{course.description}</p>
                    
                    {/* Stats */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-primary">
                          {counterValues[`course-${index}`] || course.stat}
                        </div>
                        <div className="text-xs text-gray-100">{course.statLabel}</div>
                      </div>
                      
                      <Button className="group relative overflow-hidden">
                        <span className="relative z-10 flex items-center">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                    
                    <Button className="w-full mt-4 group hover:scale-105 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div 
                    className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 ${hoveredCourse === course.title ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Animated corner decoration */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          ref={benefitsRef}
          className="w-full py-12 md:py-24 bg-white dark:bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="floating-particle absolute top-1/5 left-1/4 size-2 rounded-full bg-blue-500/30"></div>
            <div className="floating-particle absolute top-2/3 left-1/2 size-3 rounded-full bg-green-500/30"></div>
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h2 className="benefits-title text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600 dark:from-gray-100 dark:to-gray-400">Why Choose Our Training?</h2>
                </div>
                <div className="overflow-hidden">
                  <p className="benefits-description text-xl text-muted-foreground">
                    Our training programs are designed to provide you with the skills and knowledge you need to succeed in the cyber security industry.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      ref={(el) => addToBenefitRefs(el, index)}
                      className="benefit-item text-gray-100 flex items-start gap-2 text-sm"
                    > 
                      <CheckCircle className="h-5 w-5 text-gray-100 mt-0.5 animate-pulse-slow" style={{animationDelay: `${index * 0.2}s`}} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 overflow-hidden">
                  <Button className="benefits-button group">
                    View All Benefits <ArrowRight className="ml-2 h-4 w-4 text-gray-100 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="benefits-image relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  alt="Cyber Security Training"
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  src="/placeholder.svg?height=600&width=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white text-xl font-bold mb-2">Industry-Leading Instructors</div>
                    <p className="text-gray-300 text-sm mb-4">Learn from experts with years of real-world experience</p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-5 h-5 text-yellow-500">★</div>
                      ))}
                      <span className="ml-2 text-white">(320+ reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Interactive graphic elements overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 size-20 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-[40%] left-[20%] size-6 border border-white/40 rounded-full"></div>
                  <div className="absolute top-[30%] right-[30%] size-4 border border-white/30 rounded-full"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-1/3 text-white/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,70 Q50,40 100,70 L100,100 L0,100 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
        >
          <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl cta-glow"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="overflow-hidden">
                <h2 className="cta-title text-3xl font-bold tracking-tighter text-gray-100">Ready to Start Your Journey?</h2>
              </div>
              <div className="overflow-hidden max-w-[600px]">
                <p className="cta-description text-xl text-gray-100 text-muted-foreground">
                  Join our comprehensive training programs and become a certified cyber security professional. Enhance your skills and advance your career.
                </p>
              </div>
              <div className="cta-buttons flex flex-wrap gap-4 justify-center mt-6">
                <Button size="lg" className="h-12 px-8 text-base group transition-all duration-300 hover:scale-105">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base transition-all duration-300 hover:bg-accent/50">
                  View Course Details
                </Button>
              </div>
              {/* <div className="pt-12 w-full">
                <div className="cta-card p-6 border rounded-xl relative bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"></div>
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-3 text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-100">Upcoming Batch: May 15, 2025</h3>
                      <p className="text-gray-100 text-muted-foreground">Limited seats available. Reserve your spot today!</p>
                    </div>
                    <Button className="w-full md:w-auto transition-all duration-300 hover:scale-105">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      
      {/* CSS for animations */}
      <style>{`
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
        
        /* New enhanced animations */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 2s infinite;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ripple::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          border: 2px solid currentColor;
          animation: ripple 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
      `}</style>
    </main>
  )
}
