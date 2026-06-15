import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This AI platform has transformed how our organization handles knowledge management and customer support. The security features give us peace of mind when dealing with sensitive data.",
      name: "Sarah Chen",
      title: "CTO, Global Financial Services",
      avatar: "SC",
    },
    {
      quote:
        "The ability to customize agents and integrate with our existing systems has made this platform invaluable for our government operations. The ROI has been substantial.",
      name: "Michael Johnson",
      title: "IT Director, Government Agency",
      avatar: "MJ",
    },
    {
      quote:
        "We've seen a 40% increase in productivity since implementing this solution. The knowledge base integration and custom prompt templates have been game-changers.",
      name: "David Rodriguez",
      title: "Head of Innovation, Enterprise Tech",
      avatar: "DR",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Leading Organizations
            </h2>
            <p className="mx-auto max-w-[700px] text-[#9b9a97] md:text-xl">
              See what our enterprise and government clients have to say about our AI platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">&quot;</div>
                <p className="italic text-[#9b9a97]">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t border-[#f1f1ef] pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-[#f1f1ef] text-[#37352f]">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-[#37352f]">{testimonial.name}</p>
                    <p className="text-sm text-[#9b9a97]">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
