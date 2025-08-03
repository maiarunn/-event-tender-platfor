import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const faqs = [
    {
      question: "How does the tender submission process work?",
      answer:
        "Simply fill out our tender form with your event details, preferences, and requirements. Our system will match you with verified vendors who can fulfill your needs. You'll receive estimates within 24-48 hours.",
    },
    {
      question: "Are all vendors verified?",
      answer:
        "Yes, all vendors on our platform go through a strict verification process including business registration, GST verification, ID proof, and quality checks. We only work with trusted professionals.",
    },
    {
      question: "What types of events do you handle?",
      answer:
        "We handle all types of events including marriages, birthday parties, corporate events, baby showers, traditional ceremonies, and more. Our vendors specialize in various aspects like decoration, catering, photography, and venue management.",
    },
    {
      question: "How much does your service cost?",
      answer:
        "Our platform is free for customers. You only pay the vendors directly for their services. There are no hidden fees or commissions from our side.",
    },
    {
      question: "Can I cancel or modify my tender?",
      answer:
        "Yes, you can modify or cancel your tender before vendors are assigned. Once vendors are assigned and work begins, cancellation policies will depend on the individual vendor agreements.",
    },
    {
      question: "How do you ensure quality of service?",
      answer:
        "We monitor all projects, collect feedback from customers, maintain vendor ratings, and have a dedicated support team to resolve any issues. Quality assurance is our top priority.",
    },
    {
      question: "Do you provide services outside major cities?",
      answer:
        "Yes, we have vendors in multiple cities and towns. Our location-based matching system ensures you get vendors from your area or those willing to travel to your location.",
    },
    {
      question: "What if I'm not satisfied with the vendor?",
      answer:
        "We have a resolution process in place. Contact our support team immediately, and we'll work to resolve the issue or find alternative vendors if necessary.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-gray-100">
              We're here to help make your event planning journey smooth and successful
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the most convenient way to get in touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>WhatsApp Chat</CardTitle>
                <CardDescription>Quick responses and instant support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/1234567890" target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Call Request</CardTitle>
                <CardDescription>Schedule a call with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Request a Call
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
                <CardDescription>Detailed queries and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="mailto:support@eventtender.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-2">Response within 4 hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Type</label>
                  <Input placeholder="e.g., Wedding, Birthday, Corporate Event" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your event requirements, preferred dates, budget, or any questions you have..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    123 Event Plaza, Business District
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                  <Badge variant="secondary">Headquarters</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Support Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+91 9717086454</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <span>support@eventtender.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span>WhatsApp : + 91 9717086454</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
