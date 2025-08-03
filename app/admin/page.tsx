"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  FileText,
  Users,
  Calendar,
  MapPin,
  Phone,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
} from "lucide-react"

export default function AdminDashboard() {
  const [selectedTender, setSelectedTender] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for tenders
  const tenders = [
    {
      id: "ET2024001",
      customerName: "Rajesh Kumar",
      eventType: "Marriage Planning",
      eventDate: "2024-04-15",
      location: "Mumbai, Maharashtra",
      budget: "₹2,00,000 - ₹5,00,000",
      guests: "201-500",
      status: "open",
      submittedDate: "2024-03-01",
      phone: "+91 98765 43210",
      email: "rajesh@email.com",
      services: ["Venue Booking", "Decoration", "Catering", "Photography"],
      notes: "Traditional wedding ceremony with modern reception",
    },
    {
      id: "ET2024002",
      customerName: "Priya Sharma",
      eventType: "Birthday Party",
      eventDate: "2024-03-25",
      location: "Delhi, Delhi",
      budget: "₹50,000 - ₹1,00,000",
      guests: "51-100",
      status: "assigned",
      submittedDate: "2024-02-28",
      phone: "+91 87654 32109",
      email: "priya@email.com",
      services: ["Decoration", "Catering", "Entertainment"],
      assignedVendors: ["Party Planners Delhi", "Catering Express"],
      notes: "Kids birthday party with cartoon theme",
    },
    {
      id: "ET2024003",
      customerName: "Tech Solutions Ltd",
      eventType: "Corporate Event",
      eventDate: "2024-04-10",
      location: "Bangalore, Karnataka",
      budget: "₹5,00,000+",
      guests: "500+",
      status: "closed",
      submittedDate: "2024-02-20",
      phone: "+91 76543 21098",
      email: "events@techsolutions.com",
      services: ["Venue Booking", "Catering", "Sound System", "Photography"],
      assignedVendors: ["Corporate Events Pro", "Premium Catering"],
      notes: "Annual company conference and awards ceremony",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-yellow-100 text-yellow-800"
      case "assigned":
        return "bg-blue-100 text-blue-800"
      case "closed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <Clock className="h-4 w-4" />
      case "assigned":
        return <Users className="h-4 w-4" />
      case "closed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const filteredTenders = tenders.filter((tender) => {
    const matchesSearch =
      tender.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.eventType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || tender.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    totalTenders: tenders.length,
    openTenders: tenders.filter((t) => t.status === "open").length,
    assignedTenders: tenders.filter((t) => t.status === "assigned").length,
    closedTenders: tenders.filter((t) => t.status === "closed").length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage tenders and vendor assignments</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Manage Vendors
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tenders</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalTenders}</div>
                <p className="text-xs text-muted-foreground">All time submissions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Tenders</CardTitle>
                <Clock className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{stats.openTenders}</div>
                <p className="text-xs text-muted-foreground">Awaiting assignment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assigned</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.assignedTenders}</div>
                <p className="text-xs text-muted-foreground">In progress</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.closedTenders}</div>
                <p className="text-xs text-muted-foreground">Successfully closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tenders" className="space-y-6">
            <TabsList>
              <TabsTrigger value="tenders">Tender Management</TabsTrigger>
              <TabsTrigger value="vendors">Vendor Assignment</TabsTrigger>
              <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="tenders" className="space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle>Filter Tenders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search by customer name, tender ID, or event type..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="assigned">Assigned</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Tenders List */}
              <div className="grid gap-6">
                {filteredTenders.map((tender) => (
                  <Card key={tender.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {tender.id}
                            <Badge className={getStatusColor(tender.status)}>
                              {getStatusIcon(tender.status)}
                              <span className="ml-1 capitalize">{tender.status}</span>
                            </Badge>
                          </CardTitle>
                          <CardDescription>Submitted on {tender.submittedDate}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedTender(tender)}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Tender Details - {selectedTender?.id}</DialogTitle>
                                <DialogDescription>Complete information about the tender submission</DialogDescription>
                              </DialogHeader>
                              {selectedTender && (
                                <div className="space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-medium mb-2">Customer Information</h4>
                                      <div className="space-y-2 text-sm">
                                        <p>
                                          <strong>Name:</strong> {selectedTender.customerName}
                                        </p>
                                        <p>
                                          <strong>Phone:</strong> {selectedTender.phone}
                                        </p>
                                        <p>
                                          <strong>Email:</strong> {selectedTender.email}
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-2">Event Details</h4>
                                      <div className="space-y-2 text-sm">
                                        <p>
                                          <strong>Type:</strong> {selectedTender.eventType}
                                        </p>
                                        <p>
                                          <strong>Date:</strong> {selectedTender.eventDate}
                                        </p>
                                        <p>
                                          <strong>Location:</strong> {selectedTender.location}
                                        </p>
                                        <p>
                                          <strong>Guests:</strong> {selectedTender.guests}
                                        </p>
                                        <p>
                                          <strong>Budget:</strong> {selectedTender.budget}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-medium mb-2">Services Requested</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {selectedTender.services.map((service: string) => (
                                        <Badge key={service} variant="outline">
                                          {service}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  {selectedTender.assignedVendors && (
                                    <div>
                                      <h4 className="font-medium mb-2">Assigned Vendors</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedTender.assignedVendors.map((vendor: string) => (
                                          <Badge key={vendor} className="bg-blue-100 text-blue-800">
                                            {vendor}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div>
                                    <h4 className="font-medium mb-2">Notes</h4>
                                    <p className="text-sm text-gray-600">{selectedTender.notes}</p>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-medium">Admin Actions</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium mb-2 block">Assign Vendors</label>
                                        <Select>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select vendor" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="vendor1">Premium Events Co.</SelectItem>
                                            <SelectItem value="vendor2">Royal Caterers</SelectItem>
                                            <SelectItem value="vendor3">Perfect Decorators</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium mb-2 block">Update Status</label>
                                        <Select>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Change status" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="open">Open</SelectItem>
                                            <SelectItem value="assigned">Assigned</SelectItem>
                                            <SelectItem value="closed">Closed</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-2 block">Add Notes</label>
                                      <Textarea placeholder="Add internal notes or updates..." rows={3} />
                                    </div>
                                    <div className="flex gap-2">
                                      <Button>Save Changes</Button>
                                      <Button variant="outline">Send Estimate</Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Assign
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900">{tender.customerName}</p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {tender.phone}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{tender.eventType}</p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {tender.eventDate}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{tender.budget}</p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {tender.location}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{tender.guests} guests</p>
                          <p className="text-gray-600">{tender.services.length} services</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vendors">
              <Card>
                <CardHeader>
                  <CardTitle>Vendor Assignment</CardTitle>
                  <CardDescription>Assign vendors to tenders and manage vendor relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Vendor assignment interface will be implemented here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports & Analytics</CardTitle>
                  <CardDescription>View performance metrics and generate reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Analytics dashboard will be implemented here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
