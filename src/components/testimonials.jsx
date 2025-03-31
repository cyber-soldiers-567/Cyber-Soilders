// import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our customers say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex gap-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <blockquote className="mt-4 border-l-2 pl-4 italic">
                "This platform has completely transformed our business operations. The analytics tools are powerful yet
                easy to use."
              </blockquote>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">CEO, TechStart</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex gap-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <blockquote className="mt-4 border-l-2 pl-4 italic">
                "The customer support is exceptional. Any time we've had an issue, the team has been quick to respond
                and resolve it."
              </blockquote>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-xs text-muted-foreground">CTO, GrowthLabs</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex gap-0.5">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <blockquote className="mt-4 border-l-2 pl-4 italic">
                "We've seen a 40% increase in productivity since implementing this solution. The ROI has been
                incredible."
              </blockquote>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Emily Rodriguez</p>
                <p className="text-xs text-muted-foreground">COO, Innovate Inc</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

