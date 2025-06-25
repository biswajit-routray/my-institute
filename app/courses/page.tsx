import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Calendar,
  BookOpen,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and cloud technologies",
    longDescription:
      "Become a versatile full-stack developer by mastering both frontend and backend technologies. This comprehensive program covers everything from HTML/CSS basics to advanced React patterns, Node.js APIs, database design, and cloud deployment.",
    duration: "6 months",
    level: "Beginner to Advanced",
    price: "$2,999",
    originalPrice: "$3,499",
    rating: 4.9,
    students: 1250,
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    icon: Code,
    features: [
      "Live Projects with Real Clients",
      "1-on-1 Weekly Mentoring Sessions",
      "Job Placement Assistance",
      "Portfolio Development",
      "Industry Certification",
      "Lifetime Access to Materials",
    ],
    curriculum: [
      "HTML5, CSS3 & JavaScript Fundamentals",
      "React.js & Modern Frontend Development",
      "Node.js & Express.js Backend",
      "MongoDB & Database Design",
      "RESTful APIs & GraphQL",
      "Authentication & Security",
      "AWS Cloud Deployment",
      "Testing & DevOps Basics",
    ],
    prerequisites: ["Basic computer skills", "No prior programming experience required"],
    nextBatch: "January 15, 2024",
    popular: true,
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    description: "Learn Python, Machine Learning, and AI to become a data scientist",
    longDescription:
      "Transform raw data into actionable insights with our comprehensive data science program. Master Python programming, statistical analysis, machine learning algorithms, and AI techniques used by top tech companies.",
    duration: "8 months",
    level: "Intermediate",
    price: "$3,499",
    originalPrice: "$3,999",
    rating: 4.8,
    students: 890,
    image: "/placeholder.svg?height=300&width=400",
    category: "Data Science",
    icon: Brain,
    features: [
      "Real Industry Datasets",
      "Kaggle Competition Training",
      "AI/ML Project Portfolio",
      "Industry Mentorship",
      "Job Referral Program",
      "Research Paper Guidance",
    ],
    curriculum: [
      "Python Programming & Libraries",
      "Statistics & Probability",
      "Data Visualization with Matplotlib/Seaborn",
      "Pandas & NumPy for Data Analysis",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision Basics",
    ],
    prerequisites: ["Basic mathematics", "Some programming experience preferred"],
    nextBatch: "February 1, 2024",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Build iOS and Android apps with React Native & Flutter",
    longDescription:
      "Create stunning mobile applications for both iOS and Android platforms. Learn cross-platform development with React Native and Flutter, from UI design to app store deployment.",
    duration: "5 months",
    level: "Beginner",
    price: "$2,799",
    originalPrice: "$3,199",
    rating: 4.7,
    students: 650,
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Development",
    icon: Smartphone,
    features: [
      "App Store Deployment",
      "UI/UX Design Training",
      "Portfolio App Development",
      "Cross-platform Development",
      "Industry Best Practices",
      "Freelancing Guidance",
    ],
    curriculum: [
      "Mobile Development Fundamentals",
      "React Native Development",
      "Flutter & Dart Programming",
      "Mobile UI/UX Design",
      "Native Device Features",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "Monetization Strategies",
    ],
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React (helpful)"],
    nextBatch: "January 22, 2024",
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    description: "Master cloud infrastructure, CI/CD, and modern deployment practices",
    longDescription:
      "Become a DevOps engineer and learn to bridge the gap between development and operations. Master cloud platforms, automation tools, and deployment strategies used by leading tech companies.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    price: "$3,299",
    originalPrice: "$3,799",
    rating: 4.9,
    students: 420,
    image: "/placeholder.svg?height=300&width=400",
    category: "DevOps",
    icon: Cloud,
    features: [
      "AWS/Azure Certification Prep",
      "Real Infrastructure Projects",
      "Industry Tool Mastery",
      "24/7 Lab Access",
      "Expert Mentorship",
      "Job Placement Support",
    ],
    curriculum: [
      "Linux System Administration",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "AWS/Azure Cloud Platforms",
      "CI/CD Pipeline Development",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Best Practices",
    ],
    prerequisites: ["Basic Linux knowledge", "Some programming experience"],
    nextBatch: "February 5, 2024",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    description: "Protect digital assets with ethical hacking and security analysis",
    longDescription:
      "Become a cybersecurity expert and learn to protect organizations from digital threats. Master ethical hacking, security analysis, and incident response techniques.",
    duration: "7 months",
    level: "Intermediate",
    price: "$3,199",
    originalPrice: "$3,699",
    rating: 4.8,
    students: 380,
    image: "/placeholder.svg?height=300&width=400",
    category: "Cybersecurity",
    icon: Shield,
    features: [
      "Ethical Hacking Labs",
      "Security Certification Prep",
      "Incident Response Training",
      "Industry Case Studies",
      "Government Job Referrals",
      "Continuous Learning Support",
    ],
    curriculum: [
      "Network Security Fundamentals",
      "Ethical Hacking & Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response & Forensics",
      "Security Compliance & Governance",
      "Cryptography & PKI",
      "Cloud Security",
      "Security Awareness Training",
    ],
    prerequisites: ["Basic networking knowledge", "Understanding of operating systems"],
    nextBatch: "January 29, 2024",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly digital experiences",
    longDescription:
      "Design exceptional user experiences and interfaces for web and mobile applications. Learn design thinking, prototyping, and user research methodologies.",
    duration: "4 months",
    level: "Beginner",
    price: "$2,499",
    originalPrice: "$2,899",
    rating: 4.6,
    students: 720,
    image: "/placeholder.svg?height=300&width=400",
    category: "Design",
    icon: BookOpen,
    features: [
      "Design Portfolio Creation",
      "Industry Tool Training",
      "User Research Projects",
      "Client Project Experience",
      "Design System Creation",
      "Freelance Opportunities",
    ],
    curriculum: [
      "Design Thinking & User Research",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Figma & Adobe Creative Suite",
      "Responsive Web Design",
      "Mobile App Design",
      "Usability Testing",
      "Design Systems & Style Guides",
    ],
    prerequisites: ["Creative mindset", "No technical background required"],
    nextBatch: "February 12, 2024",
  },
]

const categories = ["All", "Web Development", "Data Science", "Mobile Development", "DevOps", "Cybersecurity", "Design"]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TechInstitute</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/courses" className="text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/#instructors" className="text-gray-600 hover:text-gray-900">
                Instructors
              </Link>
              <Link href="/#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Choose Your Path to Success</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our comprehensive courses designed by industry experts to help you master in-demand skills and
              advance your career in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">4,000+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">95% Job Placement</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => {
              const IconComponent = course.icon
              return (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {course.popular && (
                      <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-500">🔥 Most Popular</Badge>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.students})</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.longDescription}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Course Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>Starts {course.nextBatch}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{course.students} enrolled</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">What You'll Get:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Curriculum Preview */}
                    <div>
                      <h4 className="font-semibold mb-3">Curriculum Highlights:</h4>
                      <div className="space-y-1">
                        {course.curriculum.slice(0, 4).map((topic, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                            {topic}
                          </div>
                        ))}
                        {course.curriculum.length > 4 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{course.curriculum.length - 4} more topics
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Prerequisites */}
                    <div>
                      <h4 className="font-semibold mb-2">Prerequisites:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.prerequisites.map((prereq, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button size="sm">Enroll Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Not Sure Which Course to Choose?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our career counselors to find the perfect course for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Free Consultation</Button>
            <Button size="lg" variant="outline">
              Download Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SI</span>
                </div>
                <span className="text-xl font-bold">TechInstitute</span>
              </Link>
              <p className="text-gray-400">
                Empowering the next generation of software developers with industry-relevant skills.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-white">
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link href="/#instructors" className="hover:text-white">
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Data Science & AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    DevOps Engineering
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
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Alumni Network
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
