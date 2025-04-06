import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Target, Users, Zap, Briefcase, GraduationCap, Globe, Heart, ArrowRight, ChevronRight } from "lucide-react"
import cyberTeamImage from '../istockphoto-1435605327-612x612.jpg';

const positions = [
  {
    title: "Security Operations Engineer",
    department: "Security Operations",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Join our elite security operations team to protect organizations from cyber threats.",
    requirements: ["5+ years of experience", "SOC experience", "SIEM expertise", "Incident response"],
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Penetration Tester",
    department: "Offensive Security",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Conduct advanced penetration testing and vulnerability assessments.",
    requirements: ["3+ years of experience", "OSCP/CEH certification", "Web app testing", "Network security"],
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Security Trainer",
    department: "Training",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Train the next generation of cybersecurity professionals.",
    requirements: ["5+ years of experience", "Training experience", "Technical expertise", "Communication skills"],
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Threat Intelligence Analyst",
    department: "Intelligence",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Analyze and track emerging cyber threats and trends.",
    requirements: ["3+ years of experience", "Threat intel experience", "OSINT skills", "Analytical mindset"],
    icon: <Globe className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Remote Work",
    description: "Flexible work from anywhere policy",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Learning & Growth",
    description: "Continuous learning and certification support",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health and wellness coverage",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Team Culture",
    description: "Inclusive and collaborative environment",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Career Growth",
    description: "Clear career progression path",
    icon: <Briefcase className="h-6 w-6" />
  }
]

export default function Careers() {
  // Refs for intersection observer animations
  const sectionRefs = useRef([]);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);

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
    // Intersection Observer for section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Start counter animations for the stats section
          if (entry.target.id === 'stats-section' && !isCounterStarted) {
            setIsCounterStarted(true);
            
            animateCounter(100, 'positions-filled');
            animateCounter(500, 'applications');
            animateCounter(98, 'satisfaction');
            animateCounter(25, 'countries');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, [isCounterStarted]);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section 
          ref={addToRefs}
          className="relative w-full py-16 md:py-28 lg:py-32 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="container relative z-10 px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-100 text-sm font-medium animate-pulse">
                <Shield className="mr-2 h-4 w-4" />
                Join Our Elite Team
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 animate-slide-up">
                  Become a Cyber.Soldier
                </h1>
              </div>
              <div className="overflow-hidden pt-2">
                <p className="text-xl text-muted-foreground max-w-[600px] animate-slide-up-delayed">
                  Join our mission to protect the digital world. We're looking for talented individuals who want to make a difference.
                </p>
              </div>

              {/* Animated stats */}
              <div id="stats-section" ref={addToRefs} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['positions-filled'] || "100+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Positions Filled</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['applications'] || "500+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Applications</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['satisfaction'] || "98%"}
                  </div>
                  <div className="text-sm text-muted-foreground">Team Satisfaction</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '600ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['countries'] || "25+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated background gradient orbs */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-float"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl animate-float-delayed"></div>
        </section>

        {/* Mission Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                  Our Purpose
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  At Cyber.Soldiers, we're not just building a company - we're building a movement. Our mission is to create a safer digital world by developing the next generation of cybersecurity professionals.
                </p>
                <p className="text-xl text-muted-foreground">
                  We believe in the power of teamwork, innovation, and continuous learning. As a Cyber.Soldier, you'll be part of an elite team that's making a real difference in the fight against cyber threats.
                </p>
                <div className="pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 hover:bg-primary/10 transition-colors duration-300">
                    <span>Learn about our culture</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
              <div 
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:border-primary/40"
                style={{transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`}}
              >
                <img
                  alt="Cyber Security Team"
                  loading="lazy"
                  decoding="async"
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  src={cyberTeamImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Join Our Elite Team</h3>
                  <p className="text-white/80">Be part of something bigger</p>
                </div>
                
                {/* Animated elements around the image */}
                <div className="absolute top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl animate-float"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-reverse"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">Why Join Us?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                We offer more than just a job - we offer a career path with purpose.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="mb-6 p-3 size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-primary/0 group-hover:from-blue-800 group-hover:to-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                  
                  {/* Animated arrow on hover */}
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="mr-2 text-sm">Learn more</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Opportunities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Join our elite team of cybersecurity professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <div
                  key={position.title}
                  className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-100 text-primary group-hover:bg-gray-300 group-hover:scale-110 transition-all duration-300">{position.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{position.title}</h3>
                      <p className="text-sm text-muted-foreground">{position.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{position.location}</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{position.type}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="group-hover:translate-x-1 transition-transform duration-300 delay-75">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6 group overflow-hidden relative">
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_50%)]"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                Join Us Today
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Ready to Join Our Mission?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Take the first step towards a rewarding career in cybersecurity.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                  <span className="relative z-10">View All Positions</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  <div className="absolute right-full top-0 h-full w-full bg-primary/0 group-hover:bg-primary/20 group-hover:right-0 transition-all duration-500"></div>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                  <span className="relative z-10">Contact Recruiting</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
                </Button>
              </div>
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
        
        .animate-float-delayed {
          animation: float 7s ease-in-out 1s infinite;
        }
        
        .animate-float-reverse {
          animation: float 8s ease-in-out 0.5s infinite reverse;
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
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s forwards;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 0.8s 0.2s forwards;
        }
      `}</style>
    </main>
  )
}
