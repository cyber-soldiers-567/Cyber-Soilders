import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Input } from "./ui/input"

export default function CTA() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to transform your business?</h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of businesses that are already growing with our platform.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex w-full max-w-sm flex-col gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-foreground" />
              <Button className="w-full bg-background text-foreground hover:bg-background/90">Get Started</Button>
            </form>
            <p className="text-xs">
              By signing up, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

