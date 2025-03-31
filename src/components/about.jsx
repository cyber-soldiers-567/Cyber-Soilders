import { motion } from "framer-motion"
import { Award, Lightbulb, Shield, Users } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in all our products, services, and training programs.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Innovation",
    description: "We continuously innovate to stay ahead of evolving cyber threats.",
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    title: "Integrity",
    description: "We operate with the highest standards of integrity and ethical conduct.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration to solve complex security challenges.",
    icon: <Users className="h-6 w-6" />
  }
]

const timeline = [
  {
    year: "2010",
    title: "Early Career",
    description: "Started career in cyber security as a security analyst at a leading tech company."
  },
  {
    year: "2012",
    title: "Security Research",
    description: "Published groundbreaking research on advanced persistent threats, gaining industry recognition."
  },
  {
    year: "2014",
    title: "Leadership Role",
    description: "Promoted to lead the security operations team, managing a team of 20+ security professionals."
  },
  {
    year: "2016",
    title: "Industry Recognition",
    description: "Received prestigious industry award for contributions to cyber security innovation."
  },
  {
    year: "2018",
    title: "Founding Vision",
    description: "Identified gap in the market for comprehensive cyber security training and services."
  },
  {
    year: "2020",
    title: "Cyber.Soldiers Founded",
    description: "Established Cyber.Soldiers with a mission to strengthen cyber resilience globally."
  },
  {
    year: "2022",
    title: "Strategic Partnership",
    description: "Formed knowledge partnership with IIT Madras to enhance training curriculum."
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to 10+ countries, serving over 2000 learners worldwide."
  },
  {
    year: "2024",
    title: "Innovation Award",
    description: "Recognized for innovative cyber range technology and training methodologies."
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Setting new standards in cyber security with cutting-edge products and services."
  }
]

export default function About() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                About Cyber.Soldiers
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-[800px]">
                Leading the way in cyber security products, services, and training.
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <h2 className="text-2xl font-bold mb-4">Our Aim</h2>
                <p className="text-muted-foreground">To empower organizations with cutting-edge cybersecurity products, expert services, and industry-leading skilling programs.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">To strengthen cyber resilience, mitigate risks, and build a safer digital future.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">To be among the global leaders in Cyber Security, driving innovation and excellence.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Founder</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">The journey of innovation and excellence in cyber security.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  <div className="aspect-square relative rounded-full overflow-hidden border-4 border-primary mx-auto max-w-[250px]">
                    <img
                      alt="Founder"
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      src="/placeholder.svg?height=250&width=250"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Saurabh Agrawal</h3>
                    <p className="text-muted-foreground">Founder & CEO</p>
                  </div>
                  <p className="text-center text-muted-foreground">
                    With over 15 years of experience in cyber security, John has led the way in developing innovative solutions to complex security challenges.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2"
              >
                <h3 className="text-2xl font-bold mb-6">Founder's Journey</h3>
                <div className="relative">
                  <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-50%]"></div>
                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4`}
                      >
                        <div className="absolute left-0 md:left-[50%] w-5 h-5 rounded-full bg-primary transform translate-x-[-50%] z-10"></div>
                        <div className={`ml-8 md:ml-0 md:w-[45%] p-4 rounded-lg border bg-card hover:shadow-md transition-all cursor-pointer ${item.year === '2025' ? 'ring-2 ring-primary' : ''}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">{item.year}</span>
                            <h4 className="font-bold">{item.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="hidden md:block md:w-[45%]"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">The principles that guide everything we do at Cyber.Soldiers.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
                >
                  <div className="text-primary mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 