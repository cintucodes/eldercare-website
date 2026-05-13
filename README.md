# ElderCare Website

Modern, professional website for the ElderCare Android application - a remote health monitoring solution for seniors and their caregivers.

## 🌐 Live Demo

Visit the website at: [https://eldercare-app.netlify.app](https://eldercare-website.netlify.app/)

## 🚀 Features

- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Modern UI**: Built with Next.js 14 and Tailwind CSS
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading
- **6 Pages**: Home, Features, Download, Docs, About, Support
- **Accessible**: WCAG 2.1 AA compliant design
- **Fast Performance**: Static site generation for optimal speed

## 📁 Project Structure

```
eldercare-website/
├── app/
│   ├── layout.js          # Root layout with navbar and footer
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles with Tailwind
│   ├── features/          # Features page
│   ├── download/          # Download page
│   ├── docs/              # Documentation page
│   ├── about/             # About page
│   └── support/           # Support page
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── Hero.js            # Hero section
│   ├── ProblemStatement.js
│   ├── Solution.js
│   ├── Features.js
│   ├── HowItWorks.js
│   ├── Screenshots.js
│   ├── TechStack.js
│   └── CTA.js
├── public/                # Static assets (images, icons)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Static Export (for GitHub Pages, Netlify, Vercel)

```bash
npm run export
```

This generates a static site in the `out/` directory.

### Deployment Options

#### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

#### Netlify
1. Push code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next` (Netlify will auto-detect this)

#### GitHub Pages
1. Run `npm run export`
2. Push `out/` directory to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#2196F3',    // Blue
  secondary: '#FF9800',  // Orange
  accent: '#4CAF50',     // Green
  alert: '#F44336',      // Red
  amber: '#FFC107',      // Amber
}
```

### Content

- **Home page**: Edit `app/page.js` and components in `components/`
- **Other pages**: Edit files in `app/[page-name]/page.js`
- **Navigation**: Edit `components/Navbar.js`
- **Footer**: Edit `components/Footer.js`

## 📱 Pages Overview

1. **Home** - Hero, problem statement, solution, features, how it works, screenshots, tech stack, CTA
2. **Features** - Detailed feature breakdown for elders and caregivers
3. **Download** - Download options, system requirements, installation guide
4. **Docs** - Quick start, user guides, features documentation, testing, troubleshooting
5. **About** - Project story, mission, developer profile, tech stack, open source
6. **Support** - FAQ, help resources, contact information, common issues

## 🔧 Technologies Used

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel/Netlify/GitHub Pages

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times (<3s)
- Mobile-responsive design
- Accessible navigation

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This website is part of the ElderCare project, licensed under the MIT License.

## 👤 Author

**Cynthia Waithira** - [@cintucodes](https://github.com/cintucodes)

## 📞 Support

- Email: cynthiakariuki3730@gmail.com
- GitHub: [ElderCare Repository](https://github.com/cintucodes/Eldercare)

---

Built with ❤️ for families caring for their elderly loved ones

## 📬 Support Webhook (SUPPORT_WEBHOOK_URL)

The API route `app/api/contact/route.js` sends support requests to an external webhook when `SUPPORT_WEBHOOK_URL` is configured. This is safer for production deployments (serverless/read-only filesystems) than writing to a local file.

Usage

- Set the environment variable `SUPPORT_WEBHOOK_URL` to a URL that accepts `POST` requests with a JSON body matching the shape:

   ```json
   {
      "id": 1650000000000,
      "name": "Optional name",
      "email": "user@example.com",
      "message": "The user's message",
      "createdAt": "2026-05-10T12:34:56.789Z"
   }
   ```

- If the webhook responds with a non-2xx status, the API will return a `500` error.
- If `SUPPORT_WEBHOOK_URL` is not set, the route falls back to writing to `data/support-requests.json` but only when `NODE_ENV !== 'production'`.

Examples

- Netlify Function / Server: Point `SUPPORT_WEBHOOK_URL` to your function URL to collect requests.
- Zapier / Make / Pipedream: Use their webhook endpoints to receive and forward support requests (useful for creating tickets or sending email notifications).

Environment variable example (Linux / macOS):

```bash
export SUPPORT_WEBHOOK_URL="https://hooks.example.com/support"
export NODE_ENV=production
```

Or in Vercel / Netlify: add `SUPPORT_WEBHOOK_URL` to the project environment variables.
