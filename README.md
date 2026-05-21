# Monstarlab - Mobile App Development for Startups

A modern, high-performance marketing website built with Next.js 13, shadcn/ui, and TailwindCSS, showcasing Monstarlab's mobile app development services.

## 🚀 About Monstarlab

Monstarlab is a leading tech consultancy specializing in mobile app development for ambitious startups. Based in Singapore, we transform ideas into scalable mobile applications using cutting-edge technology and agile methodologies.

## ✨ Website Features

### Sections
- **Hero** - Bold value proposition with product imagery
- **Features** - 6 key benefits with icon cards
- **How It Works** - 4-step process diagram
- **Tech Stack** - Integration logos for technologies we use
- **Pricing** - 3-tier pricing table with feature comparison
- **Demo/Contact CTA** - Request demo with benefits listed
- **Contact Form** - Functional mailto form

### Design
- 🌙 **Dark Mode** - Enabled by default with gradient accents
- 🎨 **Gradient Accents** - Purple to blue gradient theme
- 🔤 **Monospace Font** - JetBrains Mono for tech aesthetic
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Fast loading with Next.js

## 🛠️ Tech Stack

- **Next.js 13.5** - App Router with React Server Components
- **TypeScript 5.2** - Full type safety
- **TailwindCSS 3.3** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **Lucide React** - Modern icon library
- **Next.js Image** - Optimized image loading

## 📦 Installation

```bash
npm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles with dark mode
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Landing page with all sections
├── components/
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── siteContent.ts       # All website content (typed)
│   └── utils.ts             # Utility functions
├── tailwind.config.ts       # TailwindCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 📝 Content Management

All content is centralized in `lib/siteContent.ts`:

```typescript
export const siteContent = {
  company: { ... },
  hero: { ... },
  features: [ ... ],
  howItWorks: { ... },
  integrations: { ... },
  pricing: { ... },
  demo: { ... },
  contact: { ... },
  footer: { ... }
}
```

To update content:
1. Edit `lib/siteContent.ts`
2. Changes automatically reflect across the site
3. Type-safe - TypeScript ensures consistency

## 🎨 Customization

### Colors
The site uses a purple-to-blue gradient theme. To customize:
- Edit gradient colors in `app/page.tsx`
- Modify CSS variables in `app/globals.css`

### Fonts
- **Primary**: Inter (body text)
- **Accent**: JetBrains Mono (numbers, code-like elements)

To change fonts, edit `app/layout.tsx`.

### Images
Replace Unsplash URLs in `lib/siteContent.ts` with your own:
- Hero image
- Technology logos
- Team photos (if added)

## 📧 Contact Form

The contact form uses a `mailto:` link to open the user's email client with pre-filled information. To integrate with a backend:

1. Replace the `handleSubmit` function in `app/page.tsx`
2. Add your API endpoint
3. Handle form submission server-side

Example:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  });
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Platforms
The site works on any platform supporting Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📱 SEO & Metadata

Metadata is configured in `app/layout.tsx`:
- Title: "Monstarlab - Mobile App Development for Startups | Singapore"
- Description: Optimized for search engines
- Open Graph tags for social sharing
- Keywords for tech consulting

## 🎯 Features Used

### UI Components
- Button, Card, Badge
- Input, Textarea, Label
- Separator
- Responsive Grid & Flex layouts

### Icons (Lucide React)
- Smartphone, Code, Users
- Shield, Zap, Headphones
- CheckCircle2, ArrowRight
- Mail, Phone, MapPin

### Next.js Features
- Image optimization
- Metadata API
- App Router
- Client/Server Components

## 📞 Contact Information

- **Email**: sales@monstar.sg
- **Phone**: +65 6123 4567
- **Address**: 123 Robinson Road, Singapore 068898

## 🔧 Maintenance

### Updating Content
- Company info: `lib/siteContent.ts` → `company` section
- Services: `lib/siteContent.ts` → `features` array
- Pricing: `lib/siteContent.ts` → `pricing.tiers` array

### Adding Sections
1. Add content to `lib/siteContent.ts`
2. Create new section in `app/page.tsx`
3. Use existing UI components for consistency

### Updating Images
Replace Unsplash URLs with your own:
```typescript
image: "https://your-cdn.com/image.jpg"
```

## 📄 License

© 2024 Monstarlab. All rights reserved.

---

**Built with MonstarX Template** 🚀
