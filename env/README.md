# Aether Digital - Premium Digital Agency Website

A fully responsive, modern digital agency website with dark/light mode, interactive features, and optimized for conversions.

## 📂 Documentation
Full project history, guides, and reports are located in the `env/` directory.

## 🚀 Features

### Core Pages
- **Home** - Hero section with gradient background, services overview, stats
- **About** - Team introduction, company story, core values
- **Services** - Web development, automation, CMS solutions with FAQ
- **Portfolio** - 6 project showcases with filterable categories
- **Pricing** ⭐ NEW - 3 package tiers with interactive calculator
- **Jobs / Careers** ⭐ NEW - Careers page with application form (moved from Contact)
- **Testimonials** - Client success stories
- **Contact** - Form with validation
- **Privacy Policy** - Legal text

### Interactive Features
- ✅ **Animated Text Logo** - Modern text-based logo with pulse animation
- ✅ **Pricing Calculator** - Real-time cost estimation with slider and premium styling
- ✅ **Portfolio Filtering** - Filter by Web, SEO, Automation categories
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Smooth Scroll** - Seamless navigation experience
- ✅ **Scroll Reveal Animations** - Content fades in on scroll
- ✅ **Responsive Navigation** - Mobile hamburger menu

## 📁 Project Structure

```
Landingpage/
├── index.html
├── about.html
├── services.html
├── gallery.html (Portfolio)
├── pricing.html
├── jobs.html ⭐ NEW (Careers Page)
├── testimonials.html
├── contact.html
├── privacy.html
├── env/ ⭐ NEW (Documentation & Logs)
├── css/
│   ├── style.css (Main styles)
│   ├── additions.css (Enhancements)
│   ├── forms.css (Premium Form Styles)
│   ├── enhanced-sections.css (New Section Styles)
│   └── animations.css (Global Animation Library)
├── js/
│   ├── script.js (Main Logic)
│   └── pricing-calculator.js
└── images/
    └── logo.png (Unused - Replaced by Text Logo)
```

## 🎨 Design Features

- **Modern Agency Aesthetic** - Clean, professional, tech-forward
- **Dark Theme (Default)** - Slate 900 background, blue (#3b82f6) accents
- **Light Theme** - White background with proper contrast
- **Glassmorphism Cards** - Semi-transparent with backdrop blur
- **Gradient Hero** - Eye-catching header with overlay
- **Micro-animations** - Hover effects, transforms, transitions

## 🛠️ Technical Specs

### Performance
- **Optimized Images** - WebP format, lazy loading ready
- **Minimal Dependencies** - Vanilla CSS & JS (no frameworks)
- **Fast Loading** - Estimated Lighthouse score: 90+

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## 🚦 Local Setup

1. **Clone or download** the project
2. **Open `index.html`** in your browser
3. **No build process required** - Pure HTML/CSS/JS

### Optional: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## 💰 Pricing Packages

| Package | Price | Pages | Features |
|---------|-------|-------|----------|
| **Starter** | €999 | 5 | Basic website, SEO, 1-month support |
| **Growth** | €1,999 | 10 | WordPress CMS, SEO (3mo), automation |
| **Premium** | €2,999 | Unlimited | Custom app, e-commerce, 6mo support |

## 📱 Contact Integration

- **WhatsApp**: Bottom-right floating button
- **Phone**: Click-to-call links
- **Email**: hello@aetherdigital.com
- **Form**: With client-side validation

## 🎯 SEO Optimization

Each page includes:
- Unique `<title>` tags
- Meta descriptions
- Semantic HTML structure
- Optimized heading hierarchy
- Alt text for images

## 🔄 Theme Switching

Theme preference is saved in `localStorage`:
- Default: Dark mode
- Toggle: Top-right sun/moon icon
- Persistent across sessions

## 📊 Interactive Calculator

On the Pricing page:
1. Adjust **number of pages** (slider)
2. Select **add-on features** (checkboxes)
3. See **real-time price** updates
4. Base: €100/page + feature costs

## 🎨 Customization Guide

### Change Brand Colors
Edit `css/style.css`:
```css
:root {
  --color-accent: #3b82f6; /* Your brand color */
  --color-accent-hover: #2563eb;
}
```

### Update Contact Info
Search and replace:
- Email: `hello@aetherdigital.com`
- Phone: `(555) 123-4567`
- WhatsApp: `31612345678` (Netherlands format)

### Add Portfolio Items
Edit `gallery.html`:
```html
<div class="gallery-item" data-category="web">
  <img src="images/your-project.png" alt="Project Name">
  <!-- ... -->
</div>
```

## 📝 Next Steps / Roadmap

- [ ] Add bilingual support (Dutch/English toggle)
- [ ] Implement booking calendar (Calendly integration)
- [ ] Add Google reCAPTCHA to contact form
- [ ] Create blog section for SEO content
- [ ] Integrate analytics (Google Analytics 4)
- [ ] Add live chat widget (Tawk.to / Intercom)
- [ ] Implement case study detail pages
- [ ] Create automated email responses

## 🐛 Known Issues

None currently. Report bugs via email or WhatsApp.

## 📄 License

All rights reserved © 2026 Aether Digital

## 👥 Credits

- Design & Development: Aether Digital Team
- Font: Inter (Google Fonts)
- Icons: Unicode symbols & custom SVG

---

**Ready for deployment!** Upload to your hosting provider or use services like Netlify, Vercel, or GitHub Pages for free hosting.
