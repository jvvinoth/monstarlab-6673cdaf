"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/lib/siteContent";
import { 
  Smartphone, 
  Code, 
  Users, 
  Shield, 
  Zap, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from "lucide-react";

const iconMap = {
  smartphone: Smartphone,
  code: Code,
  users: Users,
  shield: Shield,
  zap: Zap,
  headphones: Headphones,
};

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");
    
    const mailtoLink = `mailto:${siteContent.company.contact.email}?subject=Demo Request from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              {siteContent.company.name}
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button 
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Features
            </button>
            <button 
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pricing
            </button>
            <button 
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-8 px-4 text-sm font-medium rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {siteContent.hero.primaryCTA}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with Video Background */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Video Background */}
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src={siteContent.hero.videoUrl} type="video/mp4" />
          </video>
          {/* Fallback image for browsers that don't support video */}
          <div className="hero-video-fallback">
            <Image
              src={siteContent.hero.videoFallback}
              alt="Tech background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="hero-video-overlay" />
        <div className="hero-video-gradient" />
        
        {/* Hero Content */}
        <div className="hero-content max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm">
              <span className="text-xs font-medium text-white/90">
                {siteContent.company.description}
              </span>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl">
              {siteContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg">
              {siteContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="btn-shine bg-accent hover:bg-accent/90 text-white h-12 px-8 text-base font-medium rounded-full shadow-2xl shadow-accent/30 border border-accent/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {siteContent.hero.primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-12 px-8 text-base font-medium rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {siteContent.hero.secondaryCTA}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-9 w-9 rounded-full border-2 border-white/20 bg-gradient-to-br from-accent/30 to-accent/50 backdrop-blur-sm"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80 font-light drop-shadow">
                Trusted by <span className="font-medium text-white">50+</span> startups
              </p>
            </div>
          </div>
          
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-black/20">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&w=1600"
                alt={siteContent.hero.imageAlt}
                width={1600}
                height={900}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
              Why Startups Choose Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Everything you need to build, launch, and scale your mobile app
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteContent.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card 
                  key={index} 
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
              {siteContent.howItWorks.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {siteContent.howItWorks.subtitle}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-start">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border-2 border-accent/20">
                    <span className="text-2xl font-bold text-accent font-mono">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                {index < siteContent.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent -ml-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
              {siteContent.integrations.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {siteContent.integrations.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {siteContent.integrations.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
              >
                <div className="relative h-12 w-12 mb-3 rounded-lg overflow-hidden bg-muted/50">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
              {siteContent.pricing.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {siteContent.pricing.subtitle}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {siteContent.pricing.tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative flex flex-col border-border/50 bg-card/50 backdrop-blur-sm ${
                  tier.popular 
                    ? 'border-accent/50 shadow-xl shadow-accent/10 scale-105 lg:scale-110' 
                    : 'hover:border-accent/30 hover:shadow-lg transition-all duration-300'
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-light">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      {tier.currency && (
                        <span className="text-lg font-medium text-muted-foreground">
                          {tier.currency}
                        </span>
                      )}
                      <span className="text-5xl font-bold tracking-tight text-foreground">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 font-light">
                      {tier.period}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-12 text-base font-medium rounded-full ${
                      tier.popular
                        ? 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-6 text-foreground">
            {siteContent.demo.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            {siteContent.demo.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {siteContent.demo.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg font-medium rounded-full shadow-xl shadow-accent/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {siteContent.demo.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
                {siteContent.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-light">
                {siteContent.contact.subtitle}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${siteContent.company.contact.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors font-light"
                    >
                      {siteContent.company.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a 
                      href={`tel:${siteContent.company.contact.phone}`}
                      className="text-muted-foreground hover:text-accent transition-colors font-light"
                    >
                      {siteContent.company.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground font-light">
                      {siteContent.footer.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                <CardDescription className="font-light">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={siteContent.contact.form.namePlaceholder}
                      required
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={siteContent.contact.form.emailPlaceholder}
                      required
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={siteContent.contact.form.companyPlaceholder}
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={siteContent.contact.form.messagePlaceholder}
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-accent resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-medium rounded-full"
                  >
                    {siteContent.contact.form.submitText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {siteContent.company.name}
              </h3>
              <p className="text-muted-foreground mb-6 font-light max-w-md">
                {siteContent.footer.tagline}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                <MapPin className="h-4 w-4" />
                <span>{siteContent.footer.address}</span>
              </div>
            </div>
            {siteContent.footer.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="mb-8 bg-border/50" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-light">
              {siteContent.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
