"use client"
import AIChat from "@/components/AIChat"
import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowRight,
  Monitor,
  TrendingUp,
  Mail,
  FileImage,
  Target,
  CheckCircle,
  Star,
  Users,
  Phone,
  Zap,
  Clock,
  Award,
  Loader2,
  Heart,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export default function VectoliftLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  })

  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const trustRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Only update if scroll position changed significantly
    if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
      setScrollY(currentScrollY)
      lastScrollY.current = currentScrollY

      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = Math.min((currentScrollY / documentHeight) * 100, 100)
      setScrollProgress(progress)

      // Animate sections on scroll
      const sections = [
        { ref: heroRef.current, id: "hero" },
        { ref: featuresRef.current, id: "features" },
        { ref: servicesRef.current, id: "services" },
        { ref: trustRef.current, id: "trust" },
        { ref: contactRef.current, id: "contact" },
        { ref: statsRef.current, id: "stats" },
      ]

      sections.forEach(({ ref }) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2
          const isScrollingUp = currentScrollY < lastScrollY.current

          if (isInView) {
            ref.style.opacity = "1"
            ref.style.transform = "translateY(0) scale(1)"
          } else if (!isScrollingUp && rect.top > window.innerHeight) {
            // Fade out when scrolling down and element is above viewport
            ref.style.opacity = "0.3"
            ref.style.transform = "translateY(-20px) scale(0.98)"
          }
        }
      })
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // Throttled scroll handler
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [handleScroll])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedTerms) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://getform.io/f/bnlxwdob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          company: "",
        })
        setAcceptedTerms(false)
        // Close modal after 4 seconds to allow reading the thank you message
        setTimeout(() => {
          setIsContactOpen(false)
          setSubmitStatus("idle")
        }, 4000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Complete digital transformation in just 20 days with zero downtime.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your digital journey.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Enterprise-grade solutions tailored for your business success.",
    },
  ]

  const termsLink = "https://drive.google.com/file/d/1KeJq_KhLx6_Rxg0st5rRWmDGRvuB8Dfc/view?usp=sharing"

  const stats = [
    { number: "20", label: "Days Complete Setup" },
    { number: "9", label: "Premium Services" },
    { number: "15", label: "Days to First Leads" },
    { number: "100%", label: "Done-For-You" },
  ]

  const services = [
    {
      icon: Monitor,
      title: "DIGITAL FOUNDATION",
      subtitle: "Web Presence Package",
      description: "Your complete online headquarters with professional domain and business communications",
      features: [
        "Custom website design",
        "Premium domain registration",
        "Professional email accounts",
        "SSL security certificate",
      ],
    },
    {
      icon: Sparkles,
      title: "BRAND IDENTITY",
      subtitle: "Visual Impact Package",
      description: "Distinctive brand elements that make your business instantly recognizable and memorable",
      features: [
        "Unique logo creation",
        "Strategic color palette",
        "Compelling brand slogan",
        "Complete brand guidelines",
      ],
    },
    {
      icon: FileImage,
      title: "PRINT ARSENAL",
      subtitle: "Tangible Marketing Package",
      description: "Professional print materials that leave lasting impressions in the physical world",
      features: ["Premium business cards", "Eye-catching posters", "Marketing brochures", "Print-optimized designs"],
    },
    {
      icon: TrendingUp,
      title: "SEARCH DOMINATION",
      subtitle: "Google Visibility Package",
      description: "Complete Google ecosystem setup to ensure customers find you first, every time",
      features: ["Google Business optimization", "Local SEO mastery", "Analytics integration", "Search ranking boost"],
    },
    {
      icon: Users,
      title: "SOCIAL COMMAND",
      subtitle: "Social Media Takeover Package",
      description: "Full social media empire with 30 days of professional content and engagement management",
      features: [
        "Multi-platform setup",
        "Content strategy blueprint",
        "30-day active management",
        "Audience growth tactics",
      ],
    },
    {
      icon: Target,
      title: "REVENUE ROCKET",
      subtitle: "Marketing Acceleration Package",
      description: "High-impact 15-day marketing blitz with paid advertising and influencer partnerships",
      features: [
        "Targeted ad campaigns",
        "Influencer collaborations",
        "Performance optimization",
        "Sales conversion focus",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1F1F1F] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#A3A1FB] to-[#2563EB] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-[#1F1F1F] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <Image
                src="/images/vectolift-logo.png"
                alt="Vectolift Logo"
                width={36}
                height={36}
                className="filter brightness-0 invert transition-all duration-500 hover:scale-110 hover:rotate-12 group-hover:drop-shadow-lg"
              />
              <span className="text-2xl font-playfair font-bold text-white transition-all duration-300 hover:text-[#A3A1FB]">
                Vectolift
              </span>
            </div>
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#2563EB] text-white hover:bg-[#3B82F6] px-8 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2563EB]/25 animate-pulse-slow"
                >
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#0B0B0B] border border-[#1F1F1F] text-white animate-in fade-in-0 zoom-in-95 duration-500">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair font-bold text-white animate-in slide-in-from-top-2 duration-700">
                    Get Started Today
                  </DialogTitle>
                  <DialogDescription className="text-[#BFBFBF] font-roboto animate-in slide-in-from-top-4 duration-700 delay-100">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </DialogDescription>
                </DialogHeader>

                {submitStatus === "success" && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 mb-4 text-center animate-in zoom-in-95 duration-700">
                    <div className="flex items-center justify-center gap-2 text-green-400 mb-3 animate-bounce">
                      <Heart className="w-6 h-6 text-red-400 animate-pulse" />
                      <CheckCircle className="w-6 h-6 animate-spin-slow" />
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse delay-300" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-green-300 mb-2 animate-in slide-in-from-bottom-2 duration-500">
                      Thank You!
                    </h3>
                    <p className="text-green-200 font-roboto font-medium mb-2 animate-in slide-in-from-bottom-4 duration-500 delay-100">
                      Your message has been sent successfully!
                    </p>
                    <p className="text-green-300 text-sm font-roboto animate-in slide-in-from-bottom-6 duration-500 delay-200">
                      We appreciate your interest in Vectolift. Our team will get back to you within 24 hours to discuss
                      your digital transformation journey.
                    </p>
                    <div className="mt-4 text-xs text-green-400 font-roboto animate-pulse">
                      This window will close automatically...
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4 animate-in shake duration-500">
                    <div className="flex items-center gap-2 text-red-400">
                      <span className="font-roboto font-medium">Failed to send message</span>
                    </div>
                    <p className="text-red-300 text-sm mt-1 font-roboto">Please try again or contact us directly.</p>
                  </div>
                )}

                {submitStatus !== "success" && (
                  <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div className="space-y-2 animate-in slide-in-from-right-2 duration-500 delay-200">
                      <Label htmlFor="name" className="text-white font-roboto font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-[#1F1F1F] border-[#1F1F1F] text-white placeholder:text-[#BFBFBF] focus:border-[#A3A1FB] transition-all duration-300 hover:border-[#A3A1FB]/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 animate-in slide-in-from-right-4 duration-500 delay-300">
                      <Label htmlFor="email" className="text-white font-roboto font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="bg-[#1F1F1F] border-[#1F1F1F] text-white placeholder:text-[#BFBFBF] focus:border-[#A3A1FB] transition-all duration-300 hover:border-[#A3A1FB]/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 animate-in slide-in-from-right-6 duration-500 delay-400">
                      <Label htmlFor="whatsapp" className="text-white font-roboto font-medium">
                        WhatsApp Number
                      </Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Enter your WhatsApp number"
                        className="bg-[#1F1F1F] border-[#1F1F1F] text-white placeholder:text-[#BFBFBF] focus:border-[#A3A1FB] transition-all duration-300 hover:border-[#A3A1FB]/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 animate-in slide-in-from-right-8 duration-500 delay-500">
                      <Label htmlFor="company" className="text-white font-roboto font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="bg-[#1F1F1F] border-[#1F1F1F] text-white placeholder:text-[#BFBFBF] focus:border-[#A3A1FB] transition-all duration-300 hover:border-[#A3A1FB]/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-start space-x-3 animate-in slide-in-from-right-10 duration-500 delay-600">
                      <Checkbox
                        id="terms"
                        checked={acceptedTerms}
                        onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                        className="mt-1 border-[#A3A1FB] data-[state=checked]:bg-[#A3A1FB] data-[state=checked]:border-[#A3A1FB]"
                        disabled={isSubmitting}
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm text-[#BFBFBF] font-roboto leading-relaxed cursor-pointer"
                      >
                        I have read and accept the{" "}
                        <a
                          href={termsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A3A1FB] hover:text-white underline transition-colors duration-300"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href={termsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A3A1FB] hover:text-white underline transition-colors duration-300"
                        >
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !acceptedTerms}
                      className="w-full bg-[#2563EB] text-white hover:bg-[#3B82F6] py-3 rounded-full font-roboto font-medium transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:shadow-2xl hover:shadow-[#2563EB]/25 animate-in slide-in-from-bottom-2 duration-500 delay-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-8 md:px-16 pt-32 transition-all duration-1000 ease-out"
      >
        {/* Hero Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-1000"
            style={{
              filter: "brightness(0.7)",
              transform: `scale(${1 + scrollY * 0.0002})`,
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/last-UPBpO96PaGouF0Usxx58ws9Tg4IrnP.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#0B0B0B]/50"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0B0B0B]/20 to-[#0B0B0B]/70"></div>
        </div>

        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {/* Primary floating elements with enhanced animations */}
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-[#A3A1FB]/10 rounded-full blur-3xl animate-float-slow"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
            }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float-slow delay-1000"
            style={{
              transform: `translateY(${scrollY * -0.1}px) rotate(${-scrollY * 0.03}deg)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#A3A1FB]/5 rounded-full blur-3xl animate-float-slow delay-2000"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`,
            }}
          ></div>

          {/* Additional floating elements with complex animations */}
          <div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#A3A1FB]/15 rounded-full blur-2xl animate-drift-slow delay-500"
            style={{
              transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white/4 rounded-full blur-xl animate-float-slow delay-1500"
            style={{
              transform: `translateY(${scrollY * -0.08}px) scale(${1 + Math.sin(scrollY * 0.012) * 0.2})`,
            }}
          ></div>
          <div
            className="absolute top-3/4 left-3/4 w-24 h-24 bg-[#A3A1FB]/12 rounded-full blur-lg animate-drift-slow delay-3000"
            style={{
              transform: `translateY(${scrollY * 0.12}px) rotate(${-scrollY * 0.08}deg)`,
            }}
          ></div>

          {/* Geometric shapes with enhanced animations */}
          <div
            className="absolute top-1/3 left-1/6 w-2 h-2 bg-[#A3A1FB]/40 rounded-full animate-fade-drift delay-700"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-[#A3A1FB]/50 rounded-full animate-fade-drift delay-2500"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
            }}
          ></div>
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1500 ease-out ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-[#1F1F1F]/80 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-[#1F1F1F] animate-in slide-in-from-top-4 duration-1000 delay-300 hover:border-[#A3A1FB]/30 transition-all duration-500 hover:scale-105">
              <Star className="w-4 h-4 text-[#A3A1FB] animate-spin-slow" />
              <span className="text-sm font-roboto font-medium text-[#BFBFBF]">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.85] tracking-tight text-white drop-shadow-2xl animate-in slide-in-from-bottom-8 duration-1200 delay-500">
              From Offline to Online —
              <br />
              <span className="text-[#BFBFBF] animate-in slide-in-from-bottom-12 duration-1200 delay-700">
                With Real Momentum.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#BFBFBF] mb-20 max-w-4xl mx-auto leading-relaxed font-roboto font-light drop-shadow-lg animate-in fade-in-0 duration-1000 delay-900">
              Vectolift builds your entire digital presence and kickstarts your growth with ready-to-use tools and top
              search rankings. All done. All delivered.
            </p>

            {/* Decorative Border Element with animation */}
            <div className="flex items-center justify-center mb-16 animate-in zoom-in-50 duration-800 delay-1100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-[#1F1F1F] animate-pulse"></div>
                <div className="w-2 h-2 bg-[#A3A1FB] rounded-full animate-fade-drift"></div>
                <div className="w-24 h-px bg-[#1F1F1F] animate-pulse delay-300"></div>
                <div className="w-2 h-2 bg-[#A3A1FB] rounded-full animate-fade-drift delay-500"></div>
                <div className="w-16 h-px bg-[#1F1F1F] animate-pulse delay-700"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-in slide-in-from-bottom-4 duration-1000 delay-1300">
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-[#2563EB] text-white hover:bg-[#3B82F6] px-12 py-4 text-lg font-roboto font-medium rounded-full transition-all duration-500 hover:scale-110 group shadow-2xl hover:shadow-[#2563EB]/30 animate-bounce-subtle"
                  >
                    Get Started Now
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            {/* Stats with top border and staggered animations */}
            <div ref={statsRef} className="border-t border-[#1F1F1F]/50 pt-16 transition-all duration-1000 ease-out">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-in slide-in-from-bottom-4 duration-800"
                    style={{ animationDelay: `${1500 + index * 200}ms` }}
                  >
                    <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl hover:text-[#A3A1FB] transition-colors duration-500 hover:scale-110 transform cursor-default">
                      {stat.number}
                    </div>
                    <div className="text-[#BFBFBF] text-base font-roboto font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section
        ref={featuresRef}
        className="py-24 px-8 md:px-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white animate-in slide-in-from-top-4 duration-800">
              Why Businesses Choose
              <span className="text-[#A3A1FB] animate-pulse"> Vectolift</span>
            </h2>
            <p className="text-lg text-[#BFBFBF] max-w-2xl mx-auto font-roboto font-light leading-relaxed animate-in fade-in-0 duration-800 delay-200">
              Experience the difference with our premium approach to digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#0B0B0B] border border-[#1F1F1F] rounded-2xl hover:border-[#A3A1FB]/30 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-[#A3A1FB]/10 animate-in slide-in-from-bottom-4 duration-600"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1F1F1F] rounded-2xl flex items-center justify-center group-hover:bg-[#A3A1FB] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <feature.icon className="w-8 h-8 text-white transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white font-roboto font-black group-hover:text-[#A3A1FB] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#BFBFBF] leading-relaxed font-roboto font-light group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-32 px-8 md:px-16 bg-[#0e0e0e] opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white animate-in slide-in-from-top-6 duration-800">
              Complete Digital
              <br />
              <span className="text-[#68679e] animate-in slide-in-from-top-8 duration-800 delay-200 drop-shadow-[0_0_20px_rgba(104,103,158,0.3)]">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-roboto font-light leading-relaxed animate-in fade-in-0 duration-800 delay-400">
              Everything your offline business needs to establish a powerful online presence and achieve top rankings in
              just 20 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0e0e0e] border border-gray-800 rounded-2xl p-8 hover:border-[#68679e] hover:shadow-[0_0_30px_rgba(104,103,158,0.2)] hover:scale-[1.03] transition-all duration-300 ease-out animate-in slide-in-from-bottom-6 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-transparent border-2 border-[#68679e] rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(104,103,158,0.4)] transition-all duration-300 group-hover:-translate-y-1">
                    <service.icon className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#68679e]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white font-roboto tracking-wide uppercase group-hover:text-[#68679e] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#68679e] text-sm font-medium mb-4 font-roboto">{service.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 font-roboto font-light text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#68679e] flex-shrink-0" />
                      <span className="text-gray-400 text-sm font-roboto leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#68679e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        ref={trustRef}
        className="py-32 px-8 md:px-16 border-t border-[#1F1F1F] opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-20 tracking-tight text-white animate-in slide-in-from-top-8 duration-800">
            Why Choose
            <br />
            <span className="text-[#BFBFBF] animate-in slide-in-from-top-12 duration-800 delay-200">Vectolift?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: CheckCircle,
                title: "20-Day Guarantee",
                description: "Complete digital transformation delivered in just 20 days, guaranteed",
              },
              {
                icon: Users,
                title: "Done-For-You",
                description: "Zero technical work required - we handle everything from start to finish",
              },
              {
                icon: Target,
                title: "Lead Generation",
                description: "Start getting qualified leads within 15 days of launch",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate-in slide-in-from-bottom-8 duration-800 hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="w-24 h-24 bg-[#1F1F1F] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#A3A1FB] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <item.icon className="w-12 h-12 text-white transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="font-roboto font-black text-2xl mb-4 text-white group-hover:text-[#A3A1FB] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#BFBFBF] leading-relaxed font-roboto font-light max-w-sm group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-32 px-8 md:px-16 border-t border-[#1F1F1F] opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[0.9] text-white animate-in slide-in-from-top-12 duration-1000">
            Ready to Go
            <br />
            <span className="text-[#BFBFBF] animate-in slide-in-from-top-16 duration-1000 delay-200">Digital?</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#BFBFBF] mb-16 leading-relaxed font-roboto font-light max-w-3xl mx-auto animate-in fade-in-0 duration-800 delay-400">
            Join hundreds of offline businesses who transformed their operations with our complete digital package. From
            setup to top rankings in just 20 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-in slide-in-from-bottom-4 duration-800 delay-600">
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#2563EB] text-white hover:bg-[#3B82F6] px-12 py-4 text-xl font-roboto font-medium rounded-full transition-all duration-500 hover:scale-110 group hover:shadow-2xl hover:shadow-[#2563EB]/30 animate-bounce-subtle"
                >
                  Contact Us Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-[#BFBFBF] animate-in slide-in-from-bottom-6 duration-800 delay-800">
            <div className="flex items-center gap-3 hover:text-[#A3A1FB] transition-colors duration-300 cursor-pointer group">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-roboto font-medium">contact@vectolift.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#A3A1FB] transition-colors duration-300 cursor-pointer group">
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-roboto font-medium">+91-8359020070</span>
            </div>
          </div>

          <p className="text-[#BFBFBF] text-lg font-roboto font-light mt-12 animate-in fade-in-0 duration-800 delay-1000">
            <span className="font-medium text-[#A3A1FB] animate-pulse">Limited Time:</span> Free consultation + 30-day
            launch guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 border-t border-[#1F1F1F] animate-in fade-in-0 duration-1000">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6 group">
            <Image
              src="/images/vectolift-logo.png"
              alt="Vectolift Logo"
              width={40}
              height={40}
              className="filter brightness-0 invert transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
            />
            <div className="font-playfair text-3xl font-bold text-white group-hover:text-[#A3A1FB] transition-colors duration-300">
              Vectolift
            </div>
          </div>
          <p className="text-[#BFBFBF] mb-8 font-roboto font-light hover:text-white transition-colors duration-300">
            Transforming offline businesses into digital success stories in just 20 days
          </p>
          <div className="flex justify-center space-x-12 text-sm text-[#BFBFBF] mb-8">
            <a
              href={termsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A3A1FB] transition-colors duration-300 font-roboto font-medium hover:scale-105 transform"
            >
              Privacy Policy
            </a>
            <a
              href={termsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A3A1FB] transition-colors duration-300 font-roboto font-medium hover:scale-105 transform"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#A3A1FB] transition-colors duration-300 font-roboto font-medium hover:scale-105 transform"
            >
              Contact
            </a>
          </div>
          <p className="text-[#BFBFBF]/60 text-sm font-roboto font-light">© 2024 Vectolift. All rights reserved.</p>
        </div>
      </footer>
      <AIChat />
    </div>
  )
}
