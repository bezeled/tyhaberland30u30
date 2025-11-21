# Ty Haberland - 30 Under 30 Portfolio

A modern, interactive portfolio showcasing innovations, achievements, and engagements for the 30 Under 30 nomination.

## 🚀 Quick Deploy to Netlify & GitHub

### Step 1: Initialize Git Repository

```bash
cd /Users/tyhaberland/Downloads/tyhaberland30u30
git init
git add .
git commit -m "Initial commit: 30 Under 30 portfolio"
```

### Step 2: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
2. Name it something like `tyhaberland-30u30` or `portfolio`
3. Don't initialize with README (we already have one)
4. Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify (2 Options)

#### Option A: Via Netlify UI (Recommended - Fastest)

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"
7. Done! Your site will be live in ~2 minutes

#### Option B: Via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 🛠️ Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
tyhaberland30u30/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── netlify.toml         # Netlify deployment config
└── README.md            # This file
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Netlify** - Hosting

## 📝 Customization

All content is stored in data arrays at the top of `src/App.jsx`:
- `INNOVATIONS` - Tech projects
- `ACHIEVEMENTS` - Key milestones
- `ENGAGEMENTS` - Speaking & academic
- `TESTIMONIALS` - Endorsements

## 🔗 Live Site

Once deployed, your Netlify site will be available at:
`https://YOUR_SITE_NAME.netlify.app`

You can also connect a custom domain in Netlify settings.

## 📧 Support

For issues or questions, contact: [your email]

---

**Built with ❤️ for the 30 Under 30 nomination**

