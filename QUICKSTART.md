# ElderCare Website - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
cd eldercare-website
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS 3
- PostCSS & Autoprefixer

### 2. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to: **http://localhost:3000**

You should see the ElderCare website homepage!

### 3. Build for Production

```bash
npm run build
npm start
```

Or for static export:

```bash
npm run export
```

The static site will be in the `out/` directory, ready to deploy!

## 📂 What's Included

✅ **6 Complete Pages**
- Home (landing page with hero, features, how it works)
- Features (detailed feature breakdown)
- Download (download options and installation guide)
- Docs (comprehensive documentation)
- About (project story and developer info)
- Support (FAQ and help resources)

✅ **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly buttons

✅ **Modern UI Components**
- Navigation bar with mobile menu
- Hero section with CTAs
- Feature cards
- FAQ accordions
- Footer with links

✅ **SEO Optimized**
- Meta tags configured
- Semantic HTML
- Fast loading

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#2196F3',    // Change to your brand color
  secondary: '#FF9800',
  accent: '#4CAF50',
}
```

### Update Content

- **Home page**: `app/page.js` and components in `components/`
- **Features**: `app/features/page.js`
- **Download**: `app/download/page.js`
- **Docs**: `app/docs/page.js`
- **About**: `app/about/page.js`
- **Support**: `app/support/page.js`

### Add Images

1. Place images in `public/` directory
2. Reference in components: `/image-name.png`

## 🌐 Deploy

### Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### GitHub Pages

1. Run `npm run export`
2. Push `out/` directory to `gh-pages` branch
3. Enable GitHub Pages in settings

## 📱 Test on Mobile

1. Run `npm run dev`
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On mobile browser: `http://YOUR-IP:3000`

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Styles not loading?**
```bash
npm run dev
# Wait for compilation to complete
```

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## ✨ Next Steps

1. Add real app screenshots to `public/` folder
2. Update GitHub repository URL if different
3. Add Google Analytics (optional)
4. Configure custom domain
5. Add contact form (optional)

---

**Need help?** Email: cynthiakariuki3730@gmail.com
