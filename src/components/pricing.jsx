import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          {/* Basic Plan */}
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5 pb-8">
              <CardTitle className="text-2xl font-bold">Basic</CardTitle>
              <CardDescription>Essential features for small businesses</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $29<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="grid flex-1 gap-4">
              <ul className="grid gap-2.5">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>5 team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>20GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col border-primary">
            <CardHeader className="flex flex-col space-y-1.5 pb-8">
              <div className="mb-2 w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Most Popular
              </div>
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription>Advanced features for growing businesses</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $79<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="grid flex-1 gap-4">
              <ul className="grid gap-2.5">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>100GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5 pb-8">
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription>Custom solutions for large organizations</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $199<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="grid flex-1 gap-4">
              <ul className="grid gap-2.5">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>500GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Enterprise analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 phone & email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom development</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

