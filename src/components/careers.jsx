import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Target, Users, Zap, Briefcase, GraduationCap, Globe, Heart } from "lucide-react"

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
  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="mr-2 h-4 w-4" />
                Join Our Elite Team
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Become a Cyber.Soldier
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Join our mission to protect the digital world. We're looking for talented individuals who want to make a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  At Cyber.Soldiers, we're not just building a company - we're building a movement. Our mission is to create a safer digital world by developing the next generation of cybersecurity professionals.
                </p>
                <p className="text-xl text-muted-foreground">
                  We believe in the power of teamwork, innovation, and continuous learning. As a Cyber.Soldier, you'll be part of an elite team that's making a real difference in the fight against cyber threats.
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                <img
                  alt="Cyber Security Team"
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  src="/placeholder.svg?height=600&width=600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Join Our Elite Team</h3>
                  <p className="text-white/80">Be part of something bigger</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Join Us?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                We offer more than just a job - we offer a career path with purpose.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
                >
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Join our elite team of cybersecurity professionals
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{position.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{position.title}</h3>
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
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Apply Now</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Join Our Mission?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Take the first step towards a rewarding career in cybersecurity.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-base">
                  View All Positions
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Contact Recruiting
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 