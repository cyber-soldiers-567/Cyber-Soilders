import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Youtube, ExternalLink, BookOpen, FileText, Download, Monitor, Shield, Award, Zap } from "lucide-react"

// Array of cybersecurity-related image URLs
const cyberImages = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=360&fit=crop", // Hacker with code
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=360&fit=crop", // Lock and security
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=640&h=360&fit=crop", // Data visualization
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&h=360&fit=crop", // Binary code
  "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&h=360&fit=crop", // Encryption
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=640&h=360&fit=crop", // Network security
  "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=640&h=360&fit=crop", // Security server
  "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=640&h=360&fit=crop", // Cybersecurity concept
  "https://images.unsplash.com/photo-1610986602538-431d65df4385?w=640&h=360&fit=crop", // Security dashboard
  "https://images.unsplash.com/photo-1643574772335-1a38bb0d8f5d?w=640&h=360&fit=crop", // Cybersecurity training
];

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction to Cyber Security",
    description: "Learn the fundamentals of cyber security and why it matters for your organization.",
    featured: true,
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[0] // Assign the first image
  },
  {
    id: "UCdKuE7ghBQ",
    title: "Threat Modeling Basics",
    description: "Understanding how to identify and model potential security threats to your systems.",
    icon: <Monitor className="h-6 w-6" />,
    coverImage: cyberImages[1]
  },
  {
    id: "jGI8VSKYz-c",
    title: "Penetration Testing Explained",
    description: "A comprehensive overview of penetration testing methodologies and tools.",
    icon: <Zap className="h-6 w-6" />,
    coverImage: cyberImages[2]
  },
  {
    id: "9bZkp7q19f0",
    title: "Security Operations Center Tour",
    description: "Take a virtual tour of a modern Security Operations Center (SOC).",
    icon: <Monitor className="h-6 w-6" />,
    coverImage: cyberImages[3]
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Incident Response Planning",
    description: "How to develop and implement an effective incident response plan.",
    icon: <Award className="h-6 w-6" />,
    coverImage: cyberImages[4]
  },
  {
    id: "JGwWNGJdvx8",
    title: "Cloud Security Best Practices",
    description: "Essential security practices for protecting your cloud infrastructure.",
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[5]
  },
  {
    id: "RgKAFK5djSk",
    title: "Social Engineering Attacks",
    description: "Understanding and defending against social engineering tactics.",
    icon: <Zap className="h-6 w-6" />,
    coverImage: cyberImages[6]
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Secure Coding Practices",
    description: "Learn how to write secure code and avoid common vulnerabilities.",
    icon: <FileText className="h-6 w-6" />,
    coverImage: cyberImages[7]
  },
  {
    id: "YQHsXMglC9A",
    title: "Cyber Security for Remote Work",
    description: "Security considerations and best practices for remote work environments.",
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[8]
  },
  {
    id: "CevxZvSJLk8",
    title: "Future of Cyber Security",
    description: "Emerging trends and technologies shaping the future of cyber security.",
    icon: <Award className="h-6 w-6" />,
    coverImage: cyberImages[9]
  }
]

const resources = [
  {
    title: "Whitepapers",
    description: "In-depth technical analysis and research papers",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "E-Books",
    description: "Comprehensive guides on various security topics",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Templates",
    description: "Security policy and procedure templates",
    icon: <Download className="h-6 w-6" />
  },
  {
    title: "Webinars",
    description: "Live and recorded educational sessions",
    icon: <Monitor className="h-6 w-6" />
  }
]

export default function Resources() {
  const featuredVideo = videos.find(video => video.featured)
  
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
            
            animateCounter(250, 'videos');
            animateCounter(10000, 'views');
            animateCounter(95, 'satisfaction');
            animateCounter(24, 'certifications');
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                <Youtube className="mr-2 h-4 w-4" />
                Educational Content
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 animate-slide-up">
                  Cyber.Training Resources
                </h1>
              </div>
              <div className="overflow-hidden pt-2">
                <p className="text-xl text-muted-foreground max-w-[600px] animate-slide-up-delayed">
                  Explore our comprehensive collection of videos, guides, and tools to enhance your cybersecurity knowledge.
                </p>
              </div>

              {/* Animated stats */}
              <div id="stats-section" ref={addToRefs} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['videos'] || "250+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Videos</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['views'] || "10k+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['satisfaction'] || "95%"}
                  </div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '600ms'}}>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    {counterValues['certifications'] || "24+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Topics Covered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated background gradient orbs */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl animate-float"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-delayed"></div>
        </section>

        {/* Featured Video Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                  Featured Video
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">{featuredVideo?.title}</h2>
                <p className="text-xl text-muted-foreground">
                  {featuredVideo?.description}
                </p>
                <div className="pt-4">
                  <Button variant="default" className="group flex items-center gap-2 transition-colors duration-300">
                    <Youtube className="h-5 w-5" />
                    <span>Watch Now</span>
                  </Button>
                </div>
              </div>
              <div 
                className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20 transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:border-primary/40 order-1 md:order-2"
                style={{transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`}}
              >
                <iframe
                  src={`https://www.youtube.com/embed/S243Um3oNII?si=AgohR5QeUTQEWMLZ`}
                  title={featuredVideo?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
                
                {/* Animated elements around the iframe */}
                <div className="absolute top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories Section */}
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
                Resource Types
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">Browse by Category</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Explore our diverse collection of educational materials in various formats
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="mb-6 p-3 size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-primary/0 group-hover:from-blue-800 group-hover:to-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10">{resource.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                  
                  {/* Animated button on hover */}
                  <div className="mt-4 pt-2">
                    <Button variant="ghost" className="w-full group flex items-center justify-center gap-1 hover:bg-primary/10 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Browse</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Video Library
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-4">Latest Videos</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Browse through our comprehensive collection of cyber security tutorials and guides
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.filter(video => !video.featured).map((video, index) => (
                <div
                  key={video.id}
                  className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-100 text-primary group-hover:bg-gray-300 group-hover:scale-110 transition-all duration-300">{video.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{video.title}</h3>
                    </div>
                  </div>
                  <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                    <img
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={video.coverImage || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-white/90 p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Youtube className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{video.description}</p>
                  <Button variant="ghost" className="w-full mt-4 group overflow-hidden relative hover:bg-primary/10">
                    <span className="relative z-10">Watch Now</span>
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
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Ready to Enhance Your Cyber Security Skills?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Subscribe to our channel and get access to all our educational content
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                  <span className="relative z-10">Subscribe to Our Channel</span>
                  <Youtube className="ml-2 h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  <div className="absolute right-full top-0 h-full w-full bg-primary/0 group-hover:bg-primary/20 group-hover:right-0 transition-all duration-500"></div>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
                  <span className="relative z-10">Request Custom Training</span>
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
