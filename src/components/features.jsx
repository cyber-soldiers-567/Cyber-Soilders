import { BarChart3, Zap, Shield, Users, Globe, BarChart, ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold animate-slide-up">Why Cyber.Soldiers?</h2>
          <p className="text-xl text-gray-600 dark:text-neutral-400 animate-slide-up animation-delay-100">
            Everything you need to secure your digital infrastructure.
          </p>
        </div>

        {/* Dark Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 dark:block hidden">
          <a href="/showcase-1">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 bg-[url('/placeholder.svg')] bg-cover bg-center md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-pink-500">Cyber Security Trainings</h3>
                <p className="text-sm text-neutral-400">Empower your team with hands-on cyber security training to defend against real-world threats.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <a href="/showcase-2">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 bg-[url('/placeholder.svg')] bg-cover bg-center md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-blue-500">Cyber Range & Labs</h3>
                <p className="text-sm text-neutral-400">A cutting-edge skilling platform empowering organizations to strengthen their cyber defenses and build unparalleled cyber resilience.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <a href="/showcase-3">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 bg-[url('/placeholder.svg')] bg-cover bg-center md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-green-500">Risk Assessment Services</h3>
                <p className="text-sm text-neutral-400">Risk audits, compliance checks, and threat assessments—fortify your cyber security with expert insights.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Awareness trainings</h3>
              <p className="text-sm text-neutral-400">Build a strong cyber security foundation with essential hygiene training for your all employees.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Evolving threat landscape</h3>
              <p className="text-sm text-neutral-400">Traditional training aids are no longer enough as attackers employ advanced tactics. Staying ahead requires continuous practical training.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Managed Services</h3>
              <p className="text-sm text-neutral-400">Secure your business with our expert cyber security Managed Services. Stay ahead of cyber threats with 24/7 monitoring and robust defense solutions.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Tailor made trainings</h3>
              <p className="text-sm text-neutral-400">Tailored cyber security training designed to meet your organization's unique security needs.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Real-world attack scenarios</h3>
              <p className="text-sm text-neutral-400">Our range covers diverse attack patterns, including APIs, real-world simulations, CVE labs, IoT labs, and more.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Cyber.soldiers</h3>
              <p className="text-sm text-neutral-400">The power of full-stack of cyber security trainings & services.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Industry standard certification trainings</h3>
              <p className="text-sm text-neutral-400">Enhance expertise with industry-standard certification training.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Seamless DevSecOps Integration</h3>
              <p className="text-sm text-neutral-400">Seamlessly integrate into DevSecOps, strengthening security and enhancing employees' practical skills.</p>
            </div>
          </div>
        </div>

        {/* Light Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 dark:hidden">
          <a href="/showcase-1">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-pink-500">Cyber Security Trainings</h3>
                <p className="text-sm text-neutral-400">Empower your team with hands-on cyber security training to defend against real-world threats.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <a href="/showcase-2">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-blue-500">Cyber Range & Labs</h3>
                <p className="text-sm text-neutral-400">A cutting-edge skilling platform empowering organizations to strengthen their cyber defenses and build unparalleled cyber resilience.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <a href="/showcase-3">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2 md:row-span-2">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold text-green-500">Risk Assessment Services</h3>
                <p className="text-sm text-neutral-400">Risk audits, compliance checks, and threat assessments—fortify your cyber security with expert insights.</p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="h-5 w-5 text-neutral-500" />
              </div>
            </div>
          </a>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Awareness trainings</h3>
              <p className="text-sm text-neutral-400">Build a strong cyber security foundation with essential hygiene training for your all employees.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Evolving threat landscape</h3>
              <p className="text-sm text-neutral-400">Traditional training aids are no longer enough as attackers employ advanced tactics. Staying ahead requires continuous practical training.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Managed Services</h3>
              <p className="text-sm text-neutral-400">Secure your business with our expert cyber security Managed Services. Stay ahead of cyber threats with 24/7 monitoring and robust defense solutions.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Tailor made trainings</h3>
              <p className="text-sm text-neutral-400">Tailored cyber security training designed to meet your organization's unique security needs.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Real-world attack scenarios</h3>
              <p className="text-sm text-neutral-400">Our range covers diverse attack patterns, including APIs, real-world simulations, CVE labs, IoT labs, and more.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Cyber.soldiers</h3>
              <p className="text-sm text-neutral-400">The power of full-stack of cyber security trainings & services.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Industry standard certification trainings</h3>
              <p className="text-sm text-neutral-400">Enhance expertise with industry-standard certification training.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 dark:hidden flex bg-white border-gray-200 shadow-sm md:col-span-2">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-white">Seamless DevSecOps Integration</h3>
              <p className="text-sm text-neutral-400">Seamlessly integrate into DevSecOps, strengthening security and enhancing employees' practical skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

