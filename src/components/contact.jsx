import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  // Refs for intersection observer animations
  const sectionRefs = useRef([]);
  const [isFormFocused, setIsFormFocused] = useState(false);

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
  }, []);

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
    <main className="flex-1 overflow-hidden">
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
                <Shield className="mr-2 h-4 w-4" />
                Secure Communication Channel
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 animate-slide-up">
                  Contact Cyber.Soldiers
                </h1>
              </div>
              <div className="overflow-hidden pt-2">
                <p className="text-xl text-muted-foreground max-w-[600px] animate-slide-up-delayed">
                  Get in touch with our team of cybersecurity experts. We're here to protect your digital assets.
                </p>
              </div>

              {/* Animated contact options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 w-full max-w-3xl">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-3 animate-bounce-subtle">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-medium">Email Us</div>
                  <div className="text-sm text-muted-foreground">Fast response within 24h</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-3 animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-medium">Call Us</div>
                  <div className="text-sm text-muted-foreground">24/7 support available</div>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '400ms'}}>
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-3 animate-bounce-subtle" style={{animationDelay: '1s'}}>
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-medium">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Instant assistance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated background gradient orbs */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-float"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl animate-float-delayed"></div>
        </section>

        {/* Contact Form Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-16 md:py-24 bg-white dark:bg-black opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-3xl animate-float"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-reverse"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Command Center</h2>
                  <p className="text-muted-foreground">
                    Our team of cybersecurity experts is ready to assist you 24/7.
                  </p>
                </div>
                <div className="space-y-6">
                  <div 
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Email</h3>
                      <p className="text-muted-foreground">info@cybersoldiers.in</p>
                      <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <span className="mr-2 text-sm">Send email</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div 
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Phone</h3>
                      <p className="text-muted-foreground">+91-78143-21156 </p>
                      <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <span className="mr-2 text-sm">Call now</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div 
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Location</h3>
                      <p className="text-muted-foreground">123 Cyber Street, Digital City, DC 12345</p>
                      <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <span className="mr-2 text-sm">Get directions</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div 
                  className="p-6 rounded-lg border border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-black dark:to-red-950 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden"
                  style={{transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`}}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -mt-10 -mr-10 animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-500/10 rounded-full -mb-8 -ml-8 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 group-hover:scale-110 transition-all duration-300">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-red-600 dark:text-red-400">Emergency Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">
                    For urgent security incidents, contact our 24/7 emergency response team.
                  </p>
                  <Button className="w-full group bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 overflow-hidden relative">
                    <span className="relative z-10">Emergency Contact</span>
                    <div className="absolute right-full top-0 h-full w-full bg-red-700/50 dark:bg-red-800/50 group-hover:right-0 transition-all duration-500"></div>
                  </Button>
                </div> */}
              </div>

              {/* Contact Form */}
              <div 
                className={`space-y-6 p-6 rounded-lg border border-gray-200 dark:border-gray-800 ${isFormFocused ? 'ring-2 ring-primary/50 border-primary/30 shadow-lg' : 'hover:border-primary/30 hover:shadow-md'} transition-all duration-500`}
              >
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                    Message Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Send Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                        onFocus={() => setIsFormFocused(true)}
                        onBlur={() => setIsFormFocused(false)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                        onFocus={() => setIsFormFocused(true)}
                        onBlur={() => setIsFormFocused(false)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input 
                      placeholder="How can we help?" 
                      className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="w-full min-h-[150px] p-3 rounded-md border bg-background hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                      placeholder="Your message..."
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <Button className="w-full group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="absolute right-full top-0 h-full w-full bg-primary/0 group-hover:bg-primary/20 group-hover:right-0 transition-all duration-500"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05),transparent_50%)]"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block rounded-lg bg-gray-800 dark:bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                  Visit Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Command Center Location</h2>
                <p className="text-muted-foreground mt-2">Visit our headquarters for face-to-face consultation</p>
              </div>
              <div 
                className="aspect-video rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-primary/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{transform: `perspective(2000px) rotateY(${scrollY * 0.005}deg) rotateX(${scrollY * -0.005}deg)`}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147146.21818157658!2d77.32349062463804!3d23.199546032723227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1743536893149!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Location benefits cards */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-black hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 opacity-0 animate-fade-in" style={{animationDelay: '0ms', animationFillMode: 'forwards'}}>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Secure Facility</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art security measures to protect your information</p>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 opacity-0 animate-fade-in" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Private Meeting Rooms</h3>
                  <p className="text-sm text-muted-foreground">Confidential spaces for discussing sensitive security matters</p>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-primary/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 opacity-0 animate-fade-in" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Demonstration Lab</h3>
                  <p className="text-sm text-muted-foreground">Interactive environment to showcase our security solutions</p>
                </div>
              </div> */}
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