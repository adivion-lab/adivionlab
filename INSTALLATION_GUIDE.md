# 🚀 Adivion Lab Website - Setup & Deployment Guide

## Project Overview

You now have a complete, professional React website for Adivion Lab with:
- ✅ Multi-page responsive site (Home, About, Research, Team, Contact)
- ✅ Admin panel with password-protected login
- ✅ Paper management system
- ✅ Team member management
- ✅ No backend required - all data in browser localStorage
- ✅ Professional styling with Tailwind CSS
- ✅ Built with React 18 + TypeScript + Vite

---

## 📋 Project Structure

```
/workspaces/adivionlab/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar with admin links
│   │   ├── Footer.tsx       # Footer with quick links
│   │   └── ProtectedRoute.tsx # Restricts admin routes
│   ├── pages/               # Full page components
│   │   ├── Home.tsx         # Landing page with hero
│   │   ├── About.tsx        # Lab story & mission
│   │   ├── Research.tsx     # Papers list + admin panel
│   │   ├── Team.tsx         # Team members + admin panel
│   │   ├── Contact.tsx      # Contact form
│   │   ├── AdminLogin.tsx   # Login page
│   │   └── AdminDashboard.tsx # Admin overview
│   ├── context/
│   │   └── AuthContext.tsx  # Authentication logic
│   ├── App.tsx              # Routes definition
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind imports
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite build config
├── index.html               # HTML entry point
├── adivionlab.png           # Your logo (already have it!)
└── .gitignore              # Git ignore file
```

---

## 🔧 Installation Steps

### Step 1: Install Dependencies
```bash
cd /workspaces/adivionlab
npm install
```

This installs:
- react@18.3.1
- react-router-dom@6.20.1
- lucide-react@0.344.0 (icons)
- typescript@5.3.3
- tailwindcss@3.3.6
- vite@5.0.7

### Step 2: Run Development Server
```bash
npm run dev
```

This will:
- Start the dev server at `http://localhost:3000`
- Auto-reload when you make changes
- Compile TypeScript and Tailwind CSS

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🔐 Admin Panel Access

### Login Details
- **URL**: `http://localhost:3000/admin/login`
- **Default Password**: `adivionlab2024`
- Shows demo hint on login page

### Admin Features
After logging in, you can:

#### 1. **Manage Research Papers** (`/research` page)
- Click "Add New Paper" button
- Fill in:
  - Title (required)
  - Authors
  - Year
  - Abstract
  - PDF Link (optional)
  - External Link (optional)
- Edit or delete existing papers
- Changes saved automatically

#### 2. **Manage Team Members** (`/team` page)
- Click "Add Team Member" button
- Fill in:
  - Full Name (required)
  - Position/Title
  - Email
  - Bio
  - LinkedIn URL (optional)
- Edit or delete team members
- Changes saved automatically

#### 3. **Admin Dashboard** (`/admin/dashboard`)
- Overview of total papers and team members
- Quick links to manage content
- Instructions for usage

---

## 💾 Data Storage

### How It Works
All data is stored in browser's **localStorage** - no backend needed!

**Storage Keys:**
- `papers` - Array of research papers
- `teamMembers` - Array of team members  
- `adminToken` - Session token for admin login

**Sample Data:**
The app comes with sample data pre-loaded:
- 2 sample research papers
- 3 sample team members

**Important:**
- Data persists between browser sessions
- Clearing browser cache/cookies will reset data
- Each user has their own data (browser-specific)

---

## 🎨 Customization

### 1. Change Logo
Replace `/workspaces/adivionlab/adivionlab.png` with your logo:
```bash
# The logo automatically appears in:
# - Navbar (top-left)
# - Home page (hero section)
```

### 2. Change Lab Name
Edit in multiple places:
- `index.html` - Browser tab title
- `src/components/Navbar.tsx` - Line 24
- `src/components/Footer.tsx` - Line 14

### 3. Change Admin Password
Edit `src/context/AuthContext.tsx`:
```typescript
const ADMIN_PASSWORD = 'YOUR_NEW_PASSWORD_HERE'  // Line 13
```

### 4. Update Contact Information
Edit `src/pages/Contact.tsx`:
- Phone number (Line 45)
- Email (Line 50)
- Address (Line 55)

### 5. Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e40af',      // Change this blue
  secondary: '#0f172a',    // Change this dark blue
}
```

---

## 📱 Page Breakdown

### **Home Page** (`/`)
- Hero section with call-to-action
- Features section (Research, Collaboration, Innovation)
- Newsletter signup CTA

### **About Page** (`/about`)
- Lab story and background
- Mission and vision statements
- Core values (4 main values displayed)

### **Research Page** (`/research`)
- Displays all research papers
- Paper cards with:
  - Title, authors, year
  - Abstract
  - Download/View buttons
- **Admin Panel**: Add/Edit/Delete papers

### **Team Page** (`/team`)
- Team member cards in 3-column grid
- Shows:
  - Name and position
  - Bio
  - Email and LinkedIn links
- **Admin Panel**: Add/Edit/Delete members
- Responsive: 1 column on mobile, 3 on desktop

### **Contact Page** (`/contact`)
- Contact information cards
- Professional contact form
- Email, phone, address displayed

### **Admin Login** (`/admin/login`)
- Clean, secure login interface
- Shows default password on page
- Redirects to dashboard on success

### **Admin Dashboard** (`/admin/dashboard`)
- Stats cards (total papers, team members, system status)
- Quick access buttons to manage content
- Instructions for usage

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Free)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir dist
```

### Option 2: Vercel (Free)
```bash
# Create account at vercel.com
# Connect GitHub repo
# Automatic deployment on push
```

### Option 3: GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/adivionlab"

# Deploy
npm run build
gh-pages -d dist
```

### Option 4: Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

---

## 🔑 Key Features Explained

### Authentication Context
- Uses React Context API for state management
- Stores login token in localStorage
- Protected routes redirect to login if not authenticated

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Local Storage Management
Each feature has functions to:
1. Load data from localStorage
2. Save data to localStorage
3. Display data to users
4. Allow CRUD operations

---

## 📝 Common Tasks

### Add a New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add link in `src/components/Navbar.tsx`

### Add New Form Field
Example in Research page:
1. Update interface at top of file
2. Add input field in JSX
3. Update formData state
4. Save to localStorage

### Change Styling
- Use Tailwind classes in JSX
- Update colors in `tailwind.config.js`
- Global styles in `src/index.css`

---

## 🐛 Troubleshooting

### Data Not Saving
- Check browser console for errors
- Verify localStorage is enabled
- Try hard refresh (Ctrl+Shift+R)

### Styles Not Showing
- Run `npm run dev` again
- Clear browser cache
- Check Tailwind class names are correct

### Admin Login Not Working
- Verify password is correct (case-sensitive)
- Check AuthContext.tsx for password
- Clear localStorage and try again

### Dependencies Issues
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📊 Performance Tips

- Images are optimized with native HTML
- Tailwind CSS is purged for production (small bundle)
- Vite provides fast HMR (Hot Module Reload)
- Code splitting automatic with React Router

---

## 📚 Resources

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org

---

## 🎓 Next Steps

1. **Run the project**
   ```bash
   npm install
   npm run dev
   ```

2. **Test admin features**
   - Login with password: `adivionlab2024`
   - Add/edit a paper
   - Add/edit a team member

3. **Customize**
   - Update lab name
   - Add your papers
   - Add your team members
   - Change colors and branding

4. **Deploy**
   - Build: `npm run build`
   - Deploy to Netlify, Vercel, or GitHub Pages

---

## ✨ Features Highlight

✅ **No Backend Required** - Everything stored in browser  
✅ **Fully Responsive** - Works on all devices  
✅ **Admin Panel** - Easy content management  
✅ **Fast** - Built with Vite, loads in milliseconds  
✅ **TypeScript** - Type-safe code  
✅ **Professional Design** - Modern, clean UI  
✅ **SEO Ready** - Good structure for search engines  
✅ **Easy to Customize** - Well-organized code  

---

## 📞 Support

Need help? Check:
1. Browser console for errors (F12)
2. Network tab to see API calls
3. localStorage in DevTools (Application tab)
4. This guide for common issues

---

**Happy coding! 🎉**  
Your Adivion Lab website is ready to go!
