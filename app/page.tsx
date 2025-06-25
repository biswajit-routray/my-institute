import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, Clock, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TechInstitute</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-gray-600 hover:text-gray-900">
                Courses
              </Link>
              <Link href="#instructors" className="text-gray-600 hover:text-gray-900">
                Instructors
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 New Batch Starting Soon</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Master Software Development with Industry Experts
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your career with our comprehensive software development programs. Learn from industry
                professionals and build real-world projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/courses">View Courses</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">95% Job Placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students learning programming"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our industry-relevant courses designed to make you job-ready
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                description: "Master React, Node.js, MongoDB, and modern web technologies",
                duration: "6 months",
                level: "Beginner to Advanced",
                price: "$2,999",
                features: ["Live Projects", "1-on-1 Mentoring", "Job Assistance"],
              },
              {
                title: "Data Science & AI",
                description: "Learn Python, Machine Learning, and AI fundamentals",
                duration: "8 months",
                level: "Intermediate",
                price: "$3,499",
                features: ["Real Datasets", "Industry Projects", "Certification"],
              },
              {
                title: "Mobile App Development",
                description: "Build iOS and Android apps with React Native & Flutter",
                duration: "5 months",
                level: "Beginner",
                price: "$2,799",
                features: ["App Store Deployment", "UI/UX Design", "Portfolio Building"],
              },
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Button>Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Learn from Industry Experts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our instructors bring years of real-world experience from top tech companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Full Stack Developer",
                company: "Ex-Google",
                experience: "8+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                company: "Ex-Microsoft",
                experience: "10+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Mobile Developer",
                company: "Ex-Apple",
                experience: "6+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                role: "DevOps Engineer",
                company: "Ex-Amazon",
                experience: "12+ years",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{instructor.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{instructor.company}</p>
                  <Badge variant="outline">{instructor.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Success stories from our graduates who are now working at top companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Software Engineer at Netflix",
                content:
                  "The full-stack course completely transformed my career. The hands-on projects and mentorship were invaluable.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Data Analyst at Spotify",
                content:
                  "Amazing instructors and comprehensive curriculum. I landed my dream job within 2 months of graduation!",
                rating: 5,
              },
              {
                name: "James Wilson",
                role: "Mobile Developer at Uber",
                content:
                  "The mobile development course was exactly what I needed. Now I'm building apps used by millions of users.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Tech Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully transitioned into tech careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you choose the right course for your career goals
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@techinstitute.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Interest</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a course</option>
                      <option>Full Stack Web Development</option>
                      <option>Data Science & AI</option>
                      <option>Mobile App Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SI</span>
                </div>
                <span className="text-xl font-bold">TechInstitute</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of software developers with industry-relevant skills and hands-on
                experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    DevOps
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechInstitute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
