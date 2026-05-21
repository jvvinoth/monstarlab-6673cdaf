export const siteContent = {
  company: {
    name: "Monstarlab",
    tagline: "Transform Your Vision Into Reality",
    description: "Leading tech consultancy specializing in mobile app development for ambitious startups",
    location: "Singapore",
    contact: {
      email: "sales@monstar.sg",
      phone: "+65 6123 4567",
    },
  },
  hero: {
    headline: "Build Mobile Apps That Scale",
    subheadline: "Expert mobile app development and tech consulting for startups ready to disrupt their market. From MVP to market leader.",
    primaryCTA: "Request a Demo",
    secondaryCTA: "View Our Work",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
    imageAlt: "Mobile app development workspace",
  },
  features: [
    {
      icon: "smartphone",
      title: "Native & Cross-Platform",
      description: "Build once, deploy everywhere. Expert iOS, Android, and React Native development.",
    },
    {
      icon: "code",
      title: "Rapid MVP Development",
      description: "Get to market faster with our agile methodology. Launch your MVP in weeks, not months.",
    },
    {
      icon: "users",
      title: "Startup-Focused Approach",
      description: "We understand startup constraints. Flexible engagement models that grow with your business.",
    },
    {
      icon: "shield",
      title: "Enterprise Security",
      description: "Bank-grade security standards built into every line of code. Compliant with SOC2 and GDPR.",
    },
    {
      icon: "zap",
      title: "Performance Optimized",
      description: "Lightning-fast apps that users love. Rigorous testing ensures 99.9% uptime.",
    },
    {
      icon: "headphones",
      title: "24/7 Support",
      description: "Dedicated team in Singapore timezone. Real humans, real solutions, real-time response.",
    },
  ],
  howItWorks: {
    title: "How We Build Your App",
    subtitle: "Our proven process takes you from idea to launch in four strategic phases",
    steps: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze your market, define your MVP scope, and create a technical roadmap aligned with your business goals.",
      },
      {
        number: "02",
        title: "Design & Prototype",
        description: "User-centric design that converts. Interactive prototypes let you test before we build.",
      },
      {
        number: "03",
        title: "Agile Development",
        description: "Sprint-based development with weekly demos. You're involved every step of the way.",
      },
      {
        number: "04",
        title: "Launch & Scale",
        description: "App store deployment, performance monitoring, and ongoing optimization to support your growth.",
      },
    ],
  },
  integrations: {
    title: "Built With Industry-Leading Technology",
    subtitle: "We leverage the best tools to deliver exceptional results",
    technologies: [
      { name: "React Native", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=60&fit=crop" },
      { name: "Flutter", logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=120&h=60&fit=crop" },
      { name: "iOS Swift", logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=120&h=60&fit=crop" },
      { name: "Android Kotlin", logo: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=120&h=60&fit=crop" },
      { name: "Firebase", logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=120&h=60&fit=crop" },
      { name: "AWS", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop" },
    ],
  },
  pricing: {
    title: "Transparent Pricing For Every Stage",
    subtitle: "Choose the engagement model that fits your startup's needs",
    tiers: [
      {
        name: "MVP Sprint",
        price: "25,000",
        currency: "SGD",
        period: "fixed project",
        description: "Perfect for validating your idea",
        features: [
          "6-8 week delivery",
          "Core feature development",
          "iOS or Android (single platform)",
          "Basic backend integration",
          "App store submission",
          "1 month post-launch support",
        ],
        cta: "Start Your MVP",
        popular: false,
      },
      {
        name: "Growth Team",
        price: "15,000",
        currency: "SGD",
        period: "per month",
        description: "Dedicated team for scaling startups",
        features: [
          "2 full-time developers",
          "Product manager included",
          "iOS + Android development",
          "Weekly sprint demos",
          "Advanced integrations",
          "Ongoing optimization",
          "Priority support",
        ],
        cta: "Scale Your App",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        currency: "",
        period: "let's talk",
        description: "Full-service solution for complex apps",
        features: [
          "Dedicated cross-functional team",
          "Custom architecture design",
          "Multi-platform deployment",
          "Advanced security & compliance",
          "DevOps & infrastructure",
          "24/7 monitoring & support",
          "Strategic consulting",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ],
  },
  demo: {
    title: "Ready to Build Something Amazing?",
    subtitle: "Join dozens of successful startups who trust Monstarlab to bring their ideas to life",
    cta: "Request a Demo",
    benefits: [
      "Free technical consultation",
      "Custom project proposal",
      "Timeline & budget estimate",
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss how we can accelerate your mobile app development",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@startup.com",
      companyPlaceholder: "Your Company",
      messagePlaceholder: "Tell us about your project...",
      submitText: "Send Message",
    },
  },
  footer: {
    tagline: "Building the future of mobile, one startup at a time.",
    address: "123 Robinson Road, Singapore 068898",
    sections: [
      {
        title: "Services",
        links: [
          { label: "Mobile App Development", href: "#services" },
          { label: "MVP Development", href: "#mvp" },
          { label: "Tech Consulting", href: "#consulting" },
          { label: "UI/UX Design", href: "#design" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Case Studies", href: "#case-studies" },
          { label: "Careers", href: "#careers" },
          { label: "Blog", href: "#blog" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#docs" },
          { label: "API Reference", href: "#api" },
          { label: "Support", href: "#support" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Monstarlab. All rights reserved.`,
  },
} as const;

export type SiteContent = typeof siteContent;
