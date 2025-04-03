import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black">
      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-100 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Docs</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Learn</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Showcase</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Analytics</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-3">More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Commerce</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Contact Sales</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Releases</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Telemetry</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-3">About Vercel</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Enterprise</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Security</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Terms</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Trademark Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-10">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 180 180" className="h-5 w-5">
              <path d="M 90 0 L 180 180 L 0 180 Z" fill="currentColor"></path>
            </svg>
            <p className="text-xs text-gray-500">© 2025 Vercel, Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/vercel/next.js" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/nextjs" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


