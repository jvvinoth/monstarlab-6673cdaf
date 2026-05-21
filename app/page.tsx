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
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
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

      {/* Hero Section - Enhanced with Animated Gradient & Particles */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="hero-gradient-bg" />
        <div className="hero-gradient-overlay" />
        <div className="hero-gradient-glow" />
        
        {/* Floating Particles */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
        <div className="particle particle-6" />
        <div className="particle particle-7" />
        <div className="particle particle-8" />
        
        {/* Hero Content */}
        <div className="hero-content max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-muted-foreground">
                {siteContent.company.description}
              </span>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-foreground">
              {siteContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              {siteContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="btn-shine bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base font-medium rounded-full shadow-lg shadow-accent/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {siteContent.hero.primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-12 px-8 text-base font-medium rounded-full hover:bg-muted/50 backdrop-blur-sm"
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
                    className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-accent/20 to-accent/40 backdrop-blur-sm"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-light">
                Trusted by <span className="font-medium text-foreground">50+</span> startups
              </p>
            </div>
          </div>
          
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/50 backdrop-blur-sm bg-card/10">
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
      <section id="features" className="w-full py-24 md:py-32 lg:py-40">
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
                  className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 shadow-none"
                >
                  <CardHeader className="pb-4">
                    <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[15px] leading-relaxed font-light text-muted-foreground">
                      {feature.description}
                    </CardDescription>
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
                  <div className="mb-4 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/10 border border-accent/20">
                    <span className="text-2xl font-semibold text-accent font-mono">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed font-light text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < siteContent.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-accent/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="w-full py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
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
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border hover:bg-card/80 transition-all duration-300"
              >
                <div className="relative w-16 h-16 mb-3 rounded-lg overflow-hidden bg-muted/50">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
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
                className={`relative border ${
                  tier.popular 
                    ? 'border-accent shadow-lg shadow-accent/10 bg-card' 
                    : 'border-border/50 bg-card/50'
                } backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-3 py-1 text-xs font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl font-semibold mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-sm font-light">{tier.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      {tier.currency && (
                        <span className="text-3xl font-semibold text-foreground">{tier.currency}</span>
                      )}
                      <span className="text-5xl font-semibold text-foreground">{tier.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{tier.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-light text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-11 rounded-full ${
                      tier.popular 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
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
      <section className="w-full py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Card className="border-border/50 bg-gradient-to-br from-accent/5 to-accent/10 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
                {siteContent.demo.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
                {siteContent.demo.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {siteContent.demo.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base font-medium rounded-full shadow-lg shadow-accent/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {siteContent.demo.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
              {siteContent.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {siteContent.contact.subtitle}
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder={siteContent.contact.form.namePlaceholder}
                      required 
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder={siteContent.contact.form.emailPlaceholder}
                      required 
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder={siteContent.contact.form.companyPlaceholder}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder={siteContent.contact.form.messagePlaceholder}
                      rows={5}
                      required 
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                  >
                    {siteContent.contact.form.submitText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Email</p>
                      <a 
                        href={`mailto:${siteContent.company.contact.email}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {siteContent.company.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                      <a 
                        href={`tel:${siteContent.company.contact.phone}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {siteContent.company.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {siteContent.footer.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <h4 className="text-base font-semibold mb-3 text-foreground">Office Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {siteContent.company.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 font-light max-w-xs">
                {siteContent.footer.tagline}
              </p>
              <p className="text-sm text-muted-foreground font-light">
                {siteContent.footer.address}
              </p>
            </div>
            
            {siteContent.footer.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{section.title}</h4>
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
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-light">
              {siteContent.footer.copyright}
            </p>
            <div className="flex gap-6">
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
