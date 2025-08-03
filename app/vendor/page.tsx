"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Store,
  Upload,
  FileText,
  Star,
  MapPin,
  Phone,
  Mail,
  Camera,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

export default function VendorPortal() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [isRegistered, setIsRegistered] = useState(false)

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

  // Mock vendor data
  const vendorProfile = {
    businessName: "Royal Events & Catering",
    contactPerson: "Amit Sharma",
    phone: "+91 98765 43210",
    email: "amit@royalevents.com",
    gst: "27ABCDE1234F1Z5",
    address: "123 Business Park, Mumbai, Maharashtra",
    services: ["Catering", "Decoration", "Photography"],
    rating: 4.8,
    completedEvents: 150,
    status: "verified",
  }

  const assignedTenders = [
    {
      id: "ET2024001",
      eventType: "Marriage Planning",
      customerName: "Rajesh Kumar",
      eventDate: "2024-04-15",
      location: "Mumbai, Maharashtra",
      services: ["Catering", "Decoration"],
      status: "assigned",
      budget: "₹2,00,000",
    },
    {
      id: "ET2024005",
      eventType: "Corporate Event",
      customerName: "Tech Solutions Ltd",
      eventDate: "2024-04-20",
      location: "Mumbai, Maharashtra",
      services: ["Catering"],
      status: "in-progress",
      budget: "₹1,50,000",
    },
  ]

  const renderRegistrationForm = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Vendor Registration</h2>
        <p className="text-gray-600">Join our network of verified vendors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5" />
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Business Name</label>
              <Input placeholder="Enter your business name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Contact Person</label>
              <Input placeholder="Enter contact person name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input placeholder="Enter phone number" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="Enter email address" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">GST Number</label>
              <Input placeholder="Enter GST number" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Business Address</label>
              <Textarea placeholder="Enter complete business address" rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Services & Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Services Offered</label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <label htmlFor={service} className="text-sm font-medium leading-none cursor-pointer">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Years of Experience</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Upload ID Proof</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">Aadhar Card, PAN Card, or Passport</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Upload Business License</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">Business registration or GST certificate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button onClick={() => setIsRegistered(true)} size="lg" className="bg-green-600 hover:bg-green-700">
          Submit Registration
        </Button>
        <p className="text-sm text-gray-600 mt-4">Your registration will be reviewed within 24-48 hours</p>
      </div>
    </div>
  )

  const renderVendorDashboard = () => (
    <div className="space-y-6">
      {/* Profile Summary */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                {vendorProfile.businessName}
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </CardTitle>
              <CardDescription>
                Contact: {vendorProfile.contactPerson} | GST: {vendorProfile.gst}
              </CardDescription>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{vendorProfile.rating}</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(vendorProfile.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{vendorProfile.completedEvents}</div>
              <p className="text-sm text-gray-600">Events Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{assignedTenders.length}</div>
              <p className="text-sm text-gray-600">Active Tenders</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{vendorProfile.services.length}</div>
              <p className="text-sm text-gray-600">Services Offered</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tenders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tenders">Assigned Tenders</TabsTrigger>
          <TabsTrigger value="services">My Services</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>

        <TabsContent value="tenders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Tenders</CardTitle>
              <CardDescription>Tenders assigned to you by the admin team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignedTenders.map((tender) => (
                  <Card key={tender.id} className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{tender.id}</CardTitle>
                          <CardDescription>
                            {tender.eventType} for {tender.customerName}
                          </CardDescription>
                        </div>
                        <Badge
                          className={
                            tender.status === "assigned"
                              ? "bg-yellow-100 text-yellow-800"
                              : tender.status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                          }
                        >
                          {tender.status === "assigned" && <Clock className="h-3 w-3 mr-1" />}
                          {tender.status === "in-progress" && <AlertCircle className="h-3 w-3 mr-1" />}
                          <span className="capitalize">{tender.status.replace("-", " ")}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {tender.eventDate}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {tender.location}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {tender.budget}
                          </p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1">
                            {tender.services.map((service) => (
                              <Badge key={service} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">View Details</Button>
                        <Button variant="outline" size="sm">
                          Contact Customer
                        </Button>
                        {tender.status === "assigned" && (
                          <Button variant="outline" size="sm">
                            Accept Tender
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>My Services & Pricing</CardTitle>
              <CardDescription>Manage your service offerings and pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendorProfile.services.map((service) => (
                  <Card key={service} className="border">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{service}</CardTitle>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Base Price</p>
                          <p className="text-gray-600">₹15,000 - ₹50,000</p>
                        </div>
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-gray-600">Available</p>
                        </div>
                        <div>
                          <p className="font-medium">Service Area</p>
                          <p className="text-gray-600">Mumbai & Surrounding</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button className="w-full">Add New Service</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Portfolio & Gallery
              </CardTitle>
              <CardDescription>Showcase your work to attract more customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Upload Photos</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
                {/* Placeholder for existing photos */}
                <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-gray-500">Sample Photo 1</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-gray-500">Sample Photo 2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Earnings & Payments
              </CardTitle>
              <CardDescription>Track your earnings and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">₹1,25,000</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Pending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">₹45,000</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Total Earned</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">₹8,50,000</div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-600">Detailed payment history will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {isRegistered ? "Vendor Dashboard" : "Vendor Registration"}
              </h1>
              <p className="text-gray-600">
                {isRegistered
                  ? "Manage your services and assigned tenders"
                  : "Join our network of verified event vendors"}
              </p>
            </div>
            {isRegistered && (
              <div className="flex gap-4">
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Support
                </Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Messages
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isRegistered ? renderVendorDashboard() : renderRegistrationForm()}
        </div>
      </section>
    </div>
  )
}
