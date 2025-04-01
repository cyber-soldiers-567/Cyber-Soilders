import { useEffect, useRef, useState } from "react"
import { Award, Lightbulb, Shield, Users, ChevronRight, ArrowRight } from "lucide-react"
import FounderImage from '../xw15xsaurabhwithlogo.png';


const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in all our products, services, and training programs.",
    icon: <Award className="h-6 w-6" />,
    // stat: "95%",
    // statLabel: "Client satisfaction"
  },
  {
    title: "Innovation",
    description: "We continuously innovate to stay ahead of evolving cyber threats.",
    icon: <Lightbulb className="h-6 w-6" />,
    // stat: "40+",
    // statLabel: "Patents filed"
  },
  {
    title: "Integrity",
    description: "We operate with the highest standards of integrity and ethical conduct.",
    icon: <Shield className="h-6 w-6" />,
    // stat: "10+",
    // statLabel: "Industry certifications"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration to solve complex security challenges.",
    icon: <Users className="h-6 w-6" />,
    // stat: "50+",
    // statLabel: "Partners worldwide"
  }
]

const timeline = [
  {
    year: "2010",
    title: "Early Career",
    description: "Started career in cyber security as a security analyst at a leading tech company.",
    stat: "1st",
    statLabel: "Security role"
  },
  {
    year: "2012",
    title: "Security Research",
    description: "Published groundbreaking research on advanced persistent threats, gaining industry recognition.",
    stat: "3",
    statLabel: "Published papers"
  },
  {
    year: "2014",
    title: "Leadership Role",
    description: "Promoted to lead the security operations team, managing a team of 20+ security professionals.",
    stat: "20+",
    statLabel: "Team members"
  },
  {
    year: "2016",
    title: "Industry Recognition",
    description: "Received prestigious industry award for contributions to cyber security innovation.",
    stat: "#1",
    statLabel: "Industry award"
  },
  {
    year: "2018",
    title: "Founding Vision",
    description: "Identified gap in the market for comprehensive cyber security training and services.",
    // stat: "3",
    // statLabel: "Market segments"
  },
  {
    year: "2020",
    title: "Cyber.Soldiers Founded",
    description: "Established Cyber.Soldiers with a mission to strengthen cyber resilience globally.",
    // stat: "$2M",
    // statLabel: "Initial funding"
  },
  {
    year: "2022",
    title: "Strategic Partnership",
    description: "Formed knowledge partnership with IIT Madras to enhance training curriculum.",
    // stat: "5",
    // statLabel: "Academic partners"
  },
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
    // stat: "30%",
    // statLabel: "Growth target"
  }
]

export default function About() {
  // Refs for intersection observer animations
  const sectionRefs = useRef([]);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);

  // Counter animation function
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage = targetValue.toString().includes('%');
    const numericValue = parseInt(targetValue.replace(/\D/g, ''));
    
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
            
            values.forEach((value, index) => {
              setTimeout(() => {
                animateCounter(value.stat, `value-${index}`);
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);

    // Timeline item observer with different threshold
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveTimelineIndex(index);
          entry.target.classList.add('timeline-active');
          
          // Animate the counter for this timeline item
          const item = timeline[index];
          animateCounter(item.stat, `timeline-${index}`);
        }
      });
    }, { threshold: 0.5 });

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      timelineObserver.observe(item);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
      
      timelineItems.forEach(item => {
        timelineObserver.unobserve(item);
      });
    };
  }, [isCounterStarted]);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Parallax effect for founder image
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={addToRefs}
        className="relative w-full py-16 md:py-28 lg:py-36 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
      >
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-white-800 px-3 py-1 text-sm mb-6 animate-pulse">
              About Us
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 animate-slide-up">
                About Cyber.Soldiers
              </h1>
            </div>
            <div className="overflow-hidden pt-2">
              <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[800px] animate-slide-up-delayed">
                Leading the way in cyber security products, services, and training.
              </p>
            </div>
            
            {/* Animated stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center animate-fade-in">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">2000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Learners</div>
              </div>
              <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '600ms'}}>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">97%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
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
        className="w-full py-16 md:py-24 opacity-0 translate-y-4 duration-700 ease-out"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-320 dark:group-hover:bg-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">01</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-100">Our Aim</h2>
              <p className="text-gray-600 dark:text-gray-400">To empower organizations with cutting-edge cybersecurity products, expert services, and industry-leading skilling programs.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div 
              className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{transitionDelay: '100ms'}}
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">02</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">To strengthen cyber resilience, mitigate risks, and build a safer digital future.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div 
              className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{transitionDelay: '200ms'}}
            >
              <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <span className="text-2xl font-bold relative z-10">03</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">To be among the global leaders in Cyber Security, driving innovation and excellence.</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section 
        ref={addToRefs} 
        className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-950 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
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
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-blue-800 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px]">The journey of innovation and excellence in cyber security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
                <div className="aspect-square relative rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 mx-auto max-w-[250px] group hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 z-10"></div>
                  <img
                    alt="Founder"
                    loading="lazy"
                    decoding="async"
                    className="w-80 h-100 rounded-full object-cover group-hover:scale-110 transition-transform duration-700"                     src={FounderImage}
                  />
                  
                  {/* Animated elements around the image */}
                  <div className="absolute top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Saurabh Agrawal</h3>
                  <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  With over 15 years of experience in cyber security, Saurabh has led the way in developing innovative solutions to complex security challenges.
                </p>
                
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Patents</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-10 flex items-center">
                <span className="mr-2">Founder's Journey</span>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800"></div>
              </h3>
              <div className="relative">
                <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-blue-200 to-gray-200 dark:from-gray-800 dark:via-blue-800 dark:to-gray-800 transform md:translate-x-[-50%]"></div>
                <div className="space-y-16">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      data-index={index}
                      className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 group timeline-item opacity-50 transition-all duration-700`}
                    >
                      <div className="absolute left-0 md:left-[50%] w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800 transform translate-x-[-50%] z-10 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-all duration-300 timeline-dot"></div>
                      <div className={`ml-8 md:ml-0 md:w-[45%] p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all duration-500 ${activeTimelineIndex === index ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105 shadow-lg' : ''} group-hover:translate-y-[-8px]`}>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/0 to-blue-50/0 dark:from-blue-900/0 dark:to-blue-900/0 group-hover:from-blue-50/50 dark:group-hover:from-blue-900/10 transition-all duration-500 rounded-lg"></div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2.5 py-1 rounded-full">{item.year}</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700"></div>
                        </div>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-lg text-blue-100 dark:group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {counterValues[`timeline-${index}`] || item.stat}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{item.statLabel}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-100 relative z-10">{item.description}</p>
                        
                        {/* Animated arrow on hover */}
                        {/* <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <span className="mr-2 text-sm">Read more</span>
                          <ChevronRight className="h-4 w-4" />
                        </div> */}
                      </div>
                      <div className="hidden md:block md:w-[45%]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={addToRefs} 
        className="w-full py-16 md:py-24 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-green-500/10 blur-3xl animate-float"></div>
        <div className="absolute left-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/5 left-1/4 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-1/2 size-3 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-blue-200 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
              Core Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-400">Our Values</h2>
            <p className="text-xl text-gray-800 dark:text-gray-800 max-w-[600px]">The principles that guide everything we do at Cyber.Soldiers .</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in"
                style={{animationDelay: `${index * 200}ms`, animationFillMode: 'forwards'}}
              >
                <div className="mb-6 p-3 size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
                  <div className="relative z-10">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                
                {/* Add stat information with animation */}
                <div className="mt-6 flex items-center justify-between">
                  {/* <div className="flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div> */}
                  <div className="flex flex-col items-end">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {counterValues[`value-${index}`] || value.stat}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{value.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
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
      `}</style>
    </main>
  )
}