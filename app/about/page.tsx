import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About EventTender</h1>
            <p className="text-xl lg:text-2xl text-gray-100">
              Connecting dreams with reality through exceptional event planning
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="h-6 w-6 text-purple-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To simplify event planning by connecting customers with verified, professional vendors who can bring
                  their vision to life. We believe every celebration deserves to be perfect, and we're here to make that
                  happen through our innovative tender-based platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="h-6 w-6 text-pink-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading event planning platform that transforms how people organize celebrations. We
                  envision a world where planning any event is stress-free, transparent, and results in unforgettable
                  experiences for everyone involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose EventTender?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another event planning service. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Verified Vendors</CardTitle>
                <CardDescription>
                  All our vendors are thoroughly verified with proper documentation and credentials
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Personalized Matching</CardTitle>
                <CardDescription>
                  Our smart algorithm matches you with vendors based on your specific requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  We monitor every project to ensure the highest standards of service delivery
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Transparent Pricing</CardTitle>
                <CardDescription>
                  No hidden costs. Get detailed estimates upfront and compare options easily
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>Our dedicated support team is available round the clock to assist you</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>End-to-End Service</CardTitle>
                <CardDescription>From planning to execution, we handle every aspect of your event</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Excellence</h3>
              </div>
              <p className="text-gray-600">We strive for perfection in every event we help plan</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 text-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Trust</h3>
              </div>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Innovation</h3>
              </div>
              <p className="text-gray-600">Continuously improving our platform and services</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Customer First</h3>
              </div>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind EventTender</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AK
                </div>
                <CardTitle>Arun Kumar</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  10+ years in event management with a passion for creating memorable experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SP
                </div>
                <CardTitle>Sarah Parker</CardTitle>
                <CardDescription>Head of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert in vendor management and quality assurance with 8+ years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MJ
                </div>
                <CardTitle>Mike Johnson</CardTitle>
                <CardDescription>Technology Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full-stack developer ensuring our platform delivers the best user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
