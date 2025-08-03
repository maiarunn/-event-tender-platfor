import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Phone, Mail, Clock, FileText, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl lg:text-2xl text-green-100 mb-4">Your tender has been submitted successfully</p>
            <Badge className="bg-white text-green-600 text-lg px-4 py-2">Tender ID: #ET2024001</Badge>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
              <p className="text-xl text-gray-600">Here's what you can expect in the coming days</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Tender Review</CardTitle>
                  <CardDescription>Within 2 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team will review your tender and match you with suitable vendors based on your requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Vendor Matching</CardTitle>
                  <CardDescription>Within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We'll connect you with 3-5 verified vendors who specialize in your event type and location.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Receive Estimates</CardTitle>
                  <CardDescription>Within 48 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You'll receive detailed estimates from vendors with pricing, services, and timelines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
              <p className="text-xl text-gray-600">Our support team is here to help you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>WhatsApp Chat</CardTitle>
                  <CardDescription>Instant support available</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link
                      href="https://wa.me/1234567890?text=Hi, I just submitted tender #ET2024001 and need assistance"
                      target="_blank"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat Now
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Response within 5 minutes</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak with our experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="tel:+1234567890">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Mon-Sat 9AM-8PM</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Detailed assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="mailto:support@eventtender.com?subject=Tender Support - #ET2024001">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Response within 4 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Your Tender Details
                </CardTitle>
                <CardDescription>Keep this information for your records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Tender ID</h4>
                    <p className="text-gray-600">#ET2024001</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Submission Date</h4>
                    <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Event Type</h4>
                    <p className="text-gray-600">Marriage Planning</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Status</h4>
                    <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Services Requested</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Venue Booking</Badge>
                    <Badge variant="outline">Decoration</Badge>
                    <Badge variant="outline">Catering</Badge>
                    <Badge variant="outline">Photography</Badge>
                    <Badge variant="outline">Music & DJ</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <Clock className="inline h-4 w-4 mr-1" />
                    You will receive updates via email and SMS on the registered contact details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">While You Wait</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Browse Our Gallery</CardTitle>
                  <CardDescription>Get inspired by our previous events</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/gallery">View Gallery</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Read Success Stories</CardTitle>
                  <CardDescription>See how we made events memorable</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/testimonials">Read Stories</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Event Planning Tips</CardTitle>
                  <CardDescription>Learn from our expert advice</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/blog">Read Tips</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
