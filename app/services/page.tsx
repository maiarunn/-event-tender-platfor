import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      category: "Marriage Planning",
      icon: "💒",
      description: "Complete wedding solutions from traditional ceremonies to modern celebrations",
      services: ["Haldi Ceremony", "Mehndi Function", "Shaadi Ceremony", "Reception Party", "Engagement", "Sangeet"],
      color: "purple",
    },
    {
      category: "Birthday Parties",
      icon: "🎂",
      description: "Memorable birthday celebrations for all ages and themes",
      services: [
        "Kids Birthday",
        "Adult Birthday",
        "Milestone Birthday",
        "Theme Parties",
        "Surprise Parties",
        "Pool Parties",
      ],
      color: "pink",
    },
    {
      category: "Corporate Events",
      icon: "🏢",
      description: "Professional event management for businesses and organizations",
      services: [
        "Conferences",
        "Product Launch",
        "Team Building",
        "Annual Meetings",
        "Awards Ceremony",
        "Networking Events",
      ],
      color: "blue",
    },
    {
      category: "Baby Shower",
      icon: "👶",
      description: "Celebrating new arrivals with beautiful and memorable ceremonies",
      services: [
        "Traditional Baby Shower",
        "Gender Reveal",
        "Naming Ceremony",
        "Cradle Ceremony",
        "First Birthday",
        "Maternity Photoshoot",
      ],
      color: "green",
    },
    {
      category: "Traditional Events",
      icon: "🕉️",
      description: "Cultural and religious ceremonies with authentic arrangements",
      services: [
        "Pooja Ceremonies",
        "Festival Celebrations",
        "Religious Functions",
        "Cultural Programs",
        "Traditional Weddings",
        "Spiritual Events",
      ],
      color: "orange",
    },
    {
      category: "Decoration Services",
      icon: "🎨",
      description: "Creative decoration solutions for any event or occasion",
      services: [
        "Floral Decoration",
        "Balloon Decoration",
        "Stage Decoration",
        "Venue Decoration",
        "Theme Decoration",
        "Lighting Setup",
      ],
      color: "indigo",
    },
    {
      category: "Photography & Videography",
      icon: "📸",
      description: "Professional photography and videography services",
      services: [
        "Wedding Photography",
        "Event Photography",
        "Pre-wedding Shoot",
        "Videography",
        "Drone Photography",
        "Photo Editing",
      ],
      color: "red",
    },
    {
      category: "Venue Services",
      icon: "🏛️",
      description: "Perfect venues for every type of event and gathering",
      services: [
        "Wedding Venues",
        "Party Halls",
        "Conference Rooms",
        "Outdoor Venues",
        "Banquet Halls",
        "Resort Venues",
      ],
      color: "teal",
    },
    {
      category: "Catering Services",
      icon: "🍽️",
      description: "Delicious food and beverage services for all occasions",
      services: [
        "Wedding Catering",
        "Corporate Catering",
        "Party Catering",
        "Traditional Cuisine",
        "International Cuisine",
        "Live Counters",
      ],
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: "border-l-purple-600 hover:shadow-purple-100",
      pink: "border-l-pink-600 hover:shadow-pink-100",
      blue: "border-l-blue-600 hover:shadow-blue-100",
      green: "border-l-green-600 hover:shadow-green-100",
      orange: "border-l-orange-600 hover:shadow-orange-100",
      indigo: "border-l-indigo-600 hover:shadow-indigo-100",
      red: "border-l-red-600 hover:shadow-red-100",
      teal: "border-l-teal-600 hover:shadow-teal-100",
      yellow: "border-l-yellow-600 hover:shadow-yellow-100",
    }
    return colorMap[color] || "border-l-gray-600"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8">
              Comprehensive event planning services for every occasion
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/tender/submit">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have the expertise and vendors to make it perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-l-4 ${getColorClasses(service.color)} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-3xl">{service.icon}</span>
                    {service.category}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.services.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
            <p className="text-xl text-gray-600">Our proven process ensures your event exceeds expectations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We understand your vision, requirements, and budget through detailed consultation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">
                Our experts create a comprehensive plan with timeline, vendors, and logistics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Coordination</h3>
              <p className="text-gray-600">
                We coordinate with all vendors and manage every detail leading up to your event
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-600">
                On event day, we ensure flawless execution while you enjoy your special moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Submit your tender today and get matched with the best vendors for your special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/tender/submit">
                Submit Your Tender
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
