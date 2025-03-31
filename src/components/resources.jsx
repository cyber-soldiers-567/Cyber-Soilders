import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Youtube, ExternalLink } from "lucide-react"

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction to Cyber Security",
    description: "Learn the fundamentals of cyber security and why it matters for your organization.",
    featured: true
  },
  {
    id: "UCdKuE7ghBQ",
    title: "Threat Modeling Basics",
    description: "Understanding how to identify and model potential security threats to your systems."
  },
  {
    id: "jGI8VSKYz-c",
    title: "Penetration Testing Explained",
    description: "A comprehensive overview of penetration testing methodologies and tools."
  },
  {
    id: "9bZkp7q19f0",
    title: "Security Operations Center Tour",
    description: "Take a virtual tour of a modern Security Operations Center (SOC)."
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Incident Response Planning",
    description: "How to develop and implement an effective incident response plan."
  },
  {
    id: "JGwWNGJdvx8",
    title: "Cloud Security Best Practices",
    description: "Essential security practices for protecting your cloud infrastructure."
  },
  {
    id: "RgKAFK5djSk",
    title: "Social Engineering Attacks",
    description: "Understanding and defending against social engineering tactics."
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Secure Coding Practices",
    description: "Learn how to write secure code and avoid common vulnerabilities."
  },
  {
    id: "YQHsXMglC9A",
    title: "Cyber Security for Remote Work",
    description: "Security considerations and best practices for remote work environments."
  },
  {
    id: "CevxZvSJLk8",
    title: "Future of Cyber Security",
    description: "Emerging trends and technologies shaping the future of cyber security."
  }
]

export default function Resources() {
  const featuredVideo = videos.find(video => video.featured)

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
                  <Youtube className="mr-2 h-4 w-4" />
                  Educational Content
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Resources
                </h1>
                <p className="text-xl text-muted-foreground">
                  Explore our collection of educational videos on cyber security topics.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button size="lg" className="h-12 px-8 text-base group">
                  <Youtube className="mr-2 h-5 w-5" />
                  Visit Our Channel
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Video</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Watch our latest and most popular cyber security content
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-8"
            >
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo?.id}`}
                    title={featuredVideo?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <h3 className="text-2xl font-bold">{featuredVideo?.title}</h3>
                <p className="text-muted-foreground">{featuredVideo?.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Video Gallery</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Browse through our comprehensive collection of cyber security tutorials and guides
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.filter(video => !video.featured).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="aspect-video relative">
                    <img
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-white/90 p-3">
                        <Youtube className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Resources Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter">More Resources</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Explore our additional resources to enhance your cyber security knowledge.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="h-10 px-4 py-2">
                    Request Custom Training
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="h-10 px-4 py-2">
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe to Our Channel
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