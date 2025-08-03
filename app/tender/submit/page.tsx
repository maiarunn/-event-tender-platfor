"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TenderSubmitPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedEventType, setSelectedEventType] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const eventTypes = [
    { id: "marriage", name: "Marriage Planning", icon: "💒", description: "Wedding ceremonies and receptions" },
    { id: "birthday", name: "Birthday Party", icon: "🎂", description: "Birthday celebrations for all ages" },
    { id: "corporate", name: "Corporate Event", icon: "🏢", description: "Business events and conferences" },
    { id: "baby-shower", name: "Baby Shower", icon: "👶", description: "Baby shower and naming ceremonies" },
    { id: "traditional", name: "Traditional Event", icon: "🕉️", description: "Cultural and religious functions" },
    { id: "other", name: "Other", icon: "🎉", description: "Custom event requirements" },
  ]

  const services = [
    "Venue Booking",
    "Decoration",
    "Catering",
    "Photography",
    "Videography",
    "Music & DJ",
    "Transportation",
    "Flowers",
    "Lighting",
    "Security",
    "Invitation Cards",
    "Makeup Artist",
    "Mehendi Artist",
    "Priest/Pandit",
    "Entertainment",
    "Sound System",
    "Stage Setup",
    "Gifts & Favors",
  ]

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  // Mock login function
  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentStep(2)
  }

  const renderLoginStep = () => (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Login to Continue</CardTitle>
        <CardDescription>Please login or register to submit your tender</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Password</label>
          <Input type="password" placeholder="Enter your password" />
        </div>
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-purple-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )

  const renderEventTypeStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Your Event Type</h2>
        <p className="text-gray-600">Choose the type of event you're planning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedEventType === type.id ? "ring-2 ring-purple-600 bg-purple-50" : ""
            }`}
            onClick={() => setSelectedEventType(type.id)}
          >
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{type.icon}</div>
              <CardTitle className="text-lg">{type.name}</CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={() => setCurrentStep(3)} disabled={!selectedEventType} size="lg">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderEventDetailsStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Event Details</h2>
        <p className="text-gray-600">Tell us about your event requirements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Event Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Event Name</label>
              <Input placeholder="Enter event name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Event Date</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Event Time</label>
                <Input type="time" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Expected Guests</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select guest count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50 guests</SelectItem>
                  <SelectItem value="51-100">51-100 guests</SelectItem>
                  <SelectItem value="101-200">101-200 guests</SelectItem>
                  <SelectItem value="201-500">201-500 guests</SelectItem>
                  <SelectItem value="500+">500+ guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Budget Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                  <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                  <SelectItem value="5l+">₹5,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Country</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">State</label>
              <Select>
                
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">District</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="nashik">Nashik</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">City</label>
              <Input placeholder="Enter city name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Venue Address (Optional)</label>
              <Textarea placeholder="Enter complete venue address if already decided" rows={3} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Event Preferences</CardTitle>
          <CardDescription>Tell us more about your preferences and special requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Event Theme/Style</label>
            <Input placeholder="e.g., Traditional, Modern, Vintage, Outdoor, etc." />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Special Requirements</label>
            <Textarea
              placeholder="Any specific requirements, dietary restrictions, accessibility needs, cultural preferences, etc."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={() => setCurrentStep(2)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={() => setCurrentStep(4)} size="lg">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderServicesStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Services</h2>
        <p className="text-gray-600">Choose the services you need for your event</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Services</CardTitle>
          <CardDescription>Select all services you need. You can modify this later.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <label
                  htmlFor={service}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {service}
                </label>
              </div>
            ))}
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-3">Selected Services:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((service) => (
                  <Badge key={service} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={() => setCurrentStep(3)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={() => setCurrentStep(5)} disabled={selectedServices.length === 0} size="lg">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderSubmitStep = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Review & Submit</h2>
        <p className="text-gray-600">Review your tender details before submission</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Tender Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900">Event Type</h4>
              <p className="text-gray-600">{eventTypes.find((t) => t.id === selectedEventType)?.name}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Services Needed</h4>
              <p className="text-gray-600">{selectedServices.length} services selected</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Selected Services</h4>
            <div className="flex flex-wrap gap-2">
              {selectedServices.map((service) => (
                <Badge key={service} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Phone Number</label>
              <Input placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Alternative Contact</label>
              <Input placeholder="WhatsApp or alternative number" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Preferred Contact Method</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="How would you like us to contact you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-2 mb-6">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <Link href="/terms" className="text-purple-600 hover:underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-purple-600 hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentStep(4)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Submit Tender
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const steps = [
    { number: 1, title: "Login", completed: isLoggedIn },
    { number: 2, title: "Event Type", completed: currentStep > 2 },
    { number: 3, title: "Details", completed: currentStep > 3 },
    { number: 4, title: "Services", completed: currentStep > 4 },
    { number: 5, title: "Submit", completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Event Tender</h1>
            <p className="text-gray-600">Get matched with verified vendors for your perfect event</p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      currentStep === step.number
                        ? "bg-purple-600 text-white"
                        : step.completed
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      currentStep === step.number ? "text-purple-600 font-medium" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && <div className="w-8 h-px bg-gray-300 mx-4"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {currentStep === 1 && renderLoginStep()}
          {currentStep === 2 && renderEventTypeStep()}
          {currentStep === 3 && renderEventDetailsStep()}
          {currentStep === 4 && renderServicesStep()}
          {currentStep === 5 && renderSubmitStep()}
        </div>
      </section>
    </div>
  )
}
