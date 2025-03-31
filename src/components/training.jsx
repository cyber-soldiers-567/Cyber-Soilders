import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Cyber Security Fundamentals",
    description: "Learn the basics of cyber security, including threat detection, prevention, and response strategies.",
    duration: "8 weeks",
    level: "Beginner",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Advanced Penetration Testing",
    description: "Master advanced penetration testing techniques and tools used by security professionals.",
    duration: "12 weeks",
    level: "Advanced",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Security Operations Center (SOC)",
    description: "Comprehensive training on SOC operations, incident response, and threat hunting.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Cloud Security Professional",
    description: "Specialized training in securing cloud infrastructure and applications.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Award className="h-6 w-6" />
  }
]

export default function Training() {
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
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="space-y-4 max-w-[600px]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Professional Training
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Cyber Security Training
                </h1>
                <p className="text-xl text-muted-foreground">
                  Comprehensive training programs designed to build your cyber security expertise.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button size="lg" className="h-12 px-8 text-base group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Knowledge Partner</h2>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <img
                    alt="IIT Madras Logo"
                    loading="lazy"
                    width="300"
                    height="100"
                    decoding="async"
                    className="object-contain"
                    src="/placeholder.svg?height=100&width=300"
                  />
                </div>
                <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                  IIT Madras brings world-class expertise and research to our cybersecurity training programs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Available Courses</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Choose from our comprehensive range of cyber security training programs
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">
                        {course.icon}
                      </div>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{course.description}</p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {course.level}
                      </div>
                    </div>
                    <Button className="w-full mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Journey?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Join our comprehensive training programs and become a certified cyber security professional.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="h-12 px-8 text-base group">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                    View Course Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 