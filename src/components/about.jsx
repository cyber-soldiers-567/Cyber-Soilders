import { useEffect, useRef, useState } from "react"
import { Award, Lightbulb, Shield, Users, ChevronRight, ArrowRight } from "lucide-react"
import FounderImage from '../xw15xsaurabhwithlogo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in all our products, services, and training programs.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Innovation",
    description: "We continuously innovate to stay ahead of evolving cyber threats.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Integrity",
    description: "We operate with the highest standards of integrity and ethical conduct.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration to solve complex security challenges.",
    icon: <Users className="h-6 w-6" />,
  }
]

// Shortened timeline to only include 2023-2025
const timeline = [
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to 10+ countries, serving over 2000 learners worldwide.",
    stat: "2000+",
    statLabel: "Learners"
  },
  {
    year: "2024",
    title: "Innovation Award",
    description: "Recognized for innovative cyber range technology and training methodologies.",
    stat: "2",
    statLabel: "New products"
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Setting new standards in cyber security with cutting-edge products and services.",
  }
]

export default function About() {
  // Refs for animations and sections
  const sectionRefs = useRef([]);
  const gridRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const founderRef = useRef(null);
  const timelineItemsRef = useRef([]);
  
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);

  // Counter animation function
  const animateCounter = (targetValue, id) => {
    if (!targetValue) return;
    
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage = targetValue.toString().includes('%');
    const numericValue = parseInt(targetValue.toString().replace(/\D/g, ''));
    
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

  // Initialize GSAP animations
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;
    
    // Safety check for GSAP
    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not available");
      return;
    }
    
    // Grid animation with GSAP
    if (gridRef.current) {
      try {
        // Create animated grid effect
        const ctx = gsap.context(() => {
          // Animate the grid on scroll - simpler animation
          gsap.to(gridRef.current, {
            backgroundSize: "30px 30px",
            opacity: 0.7,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.5
            }
          });
          
          // Simpler particle animations to avoid performance issues
          const particles = document.querySelectorAll('.particle');
          particles.forEach((particle, i) => {
            // Use CSS animations for particles instead of GSAP
            particle.style.animationDelay = `${i * 0.5}s`;
          });
          
          // Simplified hero animations
          gsap.fromTo(".hero-title", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
          );
          
          gsap.fromTo(".hero-stat", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power1.out", delay: 0.3 }
          );
          
          // Basic animations for sections
          // Mission cards
          ScrollTrigger.create({
            trigger: missionRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(".mission-card", {
                opacity: 1, 
                y: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: "power1.out"
              });
            },
            once: true
          });
          
          // Values cards with simpler animation
          ScrollTrigger.create({
            trigger: valuesRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(".value-card", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power1.out"
              });
            },
            once: true
          });
          
          // Timeline items - simpler animation
          timelineItemsRef.current.forEach((item, index) => {
            if (!item) return;
            
            ScrollTrigger.create({
              trigger: item,
              start: "top 85%",
              onEnter: () => {
                gsap.to(item, {
                  opacity: 1,
                  x: 0,
                  duration: 0.5,
                  ease: "power1.out",
                  onComplete: () => setActiveTimelineIndex(index)
                });
              },
              once: true
            });
          });
          
          // Founder image simple fade in
          ScrollTrigger.create({
            trigger: ".founder-image",
            start: "top 85%",
            onEnter: () => {
              gsap.to(".founder-image", {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out"
              });
            },
            once: true
          });
        });
        
        return () => ctx.revert(); // Clean up animations
      } catch (error) {
        console.error("Error setting up animations:", error);
      }
    }
  }, []);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Add timeline items to refs
  const addToTimelineRefs = (el, index) => {
    if (el) {
      timelineItemsRef.current[index] = el;
    }
  };

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative w-full py-16 md:py-28 lg:py-36 bg-white dark:bg-black"
      >
        {/* Enhanced animated grid background */}
        <div 
          ref={gridRef}
          className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] transition-all duration-1000"
        >
          {/* Dynamic floating particles */}
          <div className="absolute particle size-2 rounded-full bg-blue-500/20 top-1/4 left-1/4"></div>
          <div className="absolute particle size-3 rounded-full bg-purple-500/20 top-1/3 right-1/3"></div>
          <div className="absolute particle size-4 rounded-full bg-green-500/20 bottom-1/4 right-1/4"></div>
          <div className="absolute particle size-2 rounded-full bg-yellow-500/20 bottom-1/3 left-1/5"></div>
          <div className="absolute particle size-3 rounded-full bg-red-500/20 top-2/5 right-1/5"></div>
          <div className="absolute particle size-2 rounded-full bg-indigo-500/20 bottom-2/5 left-1/3"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-[1]"></div>
        
        {/* Animated gradient orbs with parallax effect */}
        <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl parallax-bg-slow"></div>
        <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/20 to-green-500/20 blur-3xl parallax-bg-fast"></div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 bg-gray-100 px-3 py-1 text-sm mb-6 animate-pulse border border-gray-200 dark:border-blue-800/50 shadow-sm">
              About Us
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                About Cyber.Soldiers
              </h1>
            </div>
            <div className="overflow-hidden pt-2">
              <p className="hero-title mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[800px]">
                Leading the way in cyber security products, services, and training.
              </p>
            </div>
            
            {/* Animated stats */}
            <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl">
              <div className="hero-stat flex flex-col items-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="hero-stat flex flex-col items-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="hero-stat flex flex-col items-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">2000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Learners</div>
              </div>
              <div className="hero-stat flex flex-col items-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">97%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef} 
        className="w-full py-16 md:py-24"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{opacity: 0, transform: 'translateY(20px)'}}
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">01</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-100">Our Aim</h2>
              <p className="text-gray-600 dark:text-gray-400">To empower organizations with cutting-edge cybersecurity products, expert services, and industry-leading skilling programs.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">02</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">To strengthen cyber resilience, mitigate risks, and build a safer digital future.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">03</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">To be among the global leaders in Cyber Security, driving innovation and excellence.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef} 
        className="w-full py-16 md:py-24 relative overflow-hidden bg-white dark:bg-black"
      >
        {/* Animated background elements - reduced opacity */}
        <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/5 to-green-500/5 blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/5 to-blue-500/5 blur-3xl"></div>
        
        {/* Animated particles - reduced number and opacity */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 size-2 rounded-full bg-blue-500/10"></div>
          <div className="absolute top-2/3 left-1/2 size-3 rounded-full bg-green-500/10"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              Core Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Our Values</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-[600px]">The principles that guide everything we do at Cyber.Soldiers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{opacity: 0, transform: 'translateY(20px)'}}
                className="value-card group p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-6 p-3 size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
                  <div className="relative z-10">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                
                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Journey Section */}
      <section 
        ref={founderRef} 
        className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
      >
        {/* Enhanced animated background elements */}
        <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl parallax-bg-slow"></div>
        <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl parallax-bg-fast"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute particle top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30"></div>
          <div className="absolute particle top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30"></div>
          <div className="absolute particle top-1/3 left-3/4 size-2 rounded-full bg-green-500/30"></div>
          <div className="absolute particle top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-block rounded-lg bg-gray-100 bg-gray-100 px-3 py-1 text-sm mb-6 animate-pulse border border-gray-100 dark:border-blue-800/50 shadow-sm">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px]">The journey of innovation and excellence in cyber security.</p>
          </div>
          
          {/* Journey Timeline with enhanced animation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-10 flex items-center">
              <span className="mr-2">Founder's Journey</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800"></div>
            </h3>
            <div className="relative">
              <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-blue-400 to-gray-200 dark:from-gray-800 dark:via-blue-500 dark:to-gray-800 transform md:translate-x-[-50%]"></div>
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    ref={(el) => addToTimelineRefs(el, index)}
                    data-index={index}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 group timeline-item`}
                style={{opacity: 0, transform: index % 2 === 0 ? 'translateX(30px)' : 'translateX(-30px)'}}
                  >
                    <div className="absolute left-0 md:left-[50%] w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800 transform translate-x-[-50%] z-10 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-all duration-300"></div>
                    <div className={`ml-8 md:ml-0 md:w-[45%] p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all duration-500 ${activeTimelineIndex === index ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105 shadow-lg' : ''} group-hover:translate-y-[-8px]`}>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/0 to-blue-50/0 dark:from-blue-900/0 dark:to-blue-900/0 group-hover:from-blue-50/50 dark:group-hover:from-blue-900/10 transition-all duration-500 rounded-lg"></div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2.5 py-1 rounded-full">{item.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700"></div>
                      </div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
                        {item.stat && (
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {counterValues[`timeline-${index}`] || item.stat}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{item.statLabel}</div>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 relative z-10">{item.description}</p>
                    </div>
                    <div className="hidden md:block md:w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Founder Image with enhanced animation */}
          <div className="flex flex-col items-center">
            <div 
              className="founder-image aspect-square relative rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 mx-auto max-w-[250px] group hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500"
              style={{opacity: 0, transform: 'scale(0.9)'}}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 z-10"></div>
              <img
                alt="Founder"
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700"                     
                src={FounderImage}
              />
              
              {/* Animated elements around the image */}
              <div className="absolute particle top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl"></div>
              <div className="absolute particle bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl"></div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold">Saurabh Agrawal</h3>
              <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-3 max-w-md">
              With over 15 years of experience in cyber security, Saurabh has led the way in developing innovative solutions to complex security challenges.
            </p>
          </div>
        </div>
      </section>

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
        
        /* Enhanced grid animation */
        @keyframes gridPulse {
          0% {
            opacity: 0.5;
            background-size: 24px 24px;
          }
          50% {
            opacity: 0.8;
            background-size: 28px 28px;
          }
          100% {
            opacity: 0.5;
            background-size: 24px 24px;
          }
        }
        
        /* Floating particles animation */
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .particle {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
