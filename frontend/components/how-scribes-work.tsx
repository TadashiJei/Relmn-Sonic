import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PenTool, Coins, Globe, Users } from "lucide-react"

export default function HowScribesWork() {
  const steps = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      title: "Create Scribbles",
      description:
        "Write short-form insights, research findings, or expert knowledge on any topic. Each Scribble is published directly on the Sonic blockchain.",
      badge: "Step 1",
    },
    {
      icon: <Coins className="w-8 h-8 text-green-400" />,
      title: "Earn Through FeeM",
      description:
        "Get rewarded through Fee Monetization (FeeM) when users interact with your content. Quality insights generate sustainable income.",
      badge: "Step 2",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Build Your Network",
      description:
        "Connect with other experts worldwide. Your reputation grows as your Scribbles gain traction and provide value to the community.",
      badge: "Step 3",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Shape Knowledge",
      description:
        "Contribute to a decentralized knowledge ecosystem where expertise is valued, verified, and rewarded fairly across the network.",
      badge: "Step 4",
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            How Scribes Work on Relmn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join a decentralized network where knowledge creators are rewarded for their expertise. Become a Scribe and
            start earning from your insights today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    <Badge variant="secondary" className="text-xs">
                      {step.badge}
                    </Badge>
                    <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background/70 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Become a Scribe?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of experts already earning from their knowledge on the Relmn network. Start publishing your
              insights and get rewarded for your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/signup"
                className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-6 py-3"
              >
                Start as a Scribe
              </a>
              <a
                href="/learn"
                className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
