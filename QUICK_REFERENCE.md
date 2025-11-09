# 🎯 Quick Reference - Adivion Lab Website

## ⚡ Quick Start (Copy & Paste)

```bash
cd /workspaces/adivionlab
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 🔐 Admin Login Credentials

| Field | Value |
|-------|-------|
| URL | http://localhost:3000/admin/login |
| Password | adivionlab2024 |

---

## 📍 All Page URLs

| Page | URL | Features |
|------|-----|----------|
| Home | / | Hero, features, CTA |
| About | /about | Story, mission, values |
| Research | /research | Papers list, **admin add/edit/delete** |
| Team | /team | Team members, **admin add/edit/delete** |
| Contact | /contact | Contact form, info |
| Admin Login | /admin/login | Password login |
| Admin Dashboard | /admin/dashboard | Overview, quick links |

---

## 💻 Commands

```bash
# Install dependencies (run once)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npm run lint
```

---

## 🎨 Customization Checklist

- [ ] Change admin password in `src/context/AuthContext.tsx` (line 13)
- [ ] Replace logo (`adivionlab.png`)
- [ ] Update lab name in `src/components/Navbar.tsx` (line 24)
- [ ] Update contact info in `src/pages/Contact.tsx`
- [ ] Update colors in `tailwind.config.js`
- [ ] Add your papers via admin panel
- [ ] Add your team members via admin panel

---

## 📁 Key Files to Edit

| File | What to Change |
|------|---|
| `src/context/AuthContext.tsx` | Admin password (line 13) |
| `src/components/Navbar.tsx` | Lab name, navigation |
| `src/components/Footer.tsx` | Footer links, social |
| `src/pages/Contact.tsx` | Phone, email, address |
| `tailwind.config.js` | Colors, theme |
| `package.json` | Project metadata |

---

## 🔑 LocalStorage Keys

Data stored in browser (survives page reloads):

```javascript
localStorage.papers          // Array of papers
localStorage.teamMembers     // Array of team members
localStorage.adminToken      // Admin login token
```

To reset data:
```javascript
localStorage.clear()  // Clears all data
```

---

## 🧩 Component Map

```
App.tsx (main router)
├── Navbar.tsx (all pages)
├── Home.tsx
├── About.tsx
├── Research.tsx (+ admin panel)
├── Team.tsx (+ admin panel)
├── Contact.tsx
├── AdminLogin.tsx
├── AdminDashboard.tsx
└── Footer.tsx (all pages)
```

---

## 🛠 Common Edits

### Change Lab Name
```typescript
// src/components/Navbar.tsx (line 24)
<span className="text-xl font-bold text-primary">Your Lab Name</span>

// src/components/Footer.tsx (line 14)
<h3 className="text-lg font-semibold mb-4">Your Lab Name</h3>

// index.html (title)
<title>Your Lab Name - Research & Innovation</title>
```

### Change Colors
```javascript
// tailwind.config.js
colors: {
  primary: '#YOUR_COLOR_CODE',
  secondary: '#YOUR_DARK_COLOR'
}
```

### Change Admin Password
```typescript
// src/context/AuthContext.tsx (line 13)
const ADMIN_PASSWORD = 'your_new_password_here'
```

---

## 🚀 Deploy (3 Easy Options)

### Option 1: Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
```bash
npm run build
# Upload 'dist' folder to GitHub
```

---

## 📊 Features You Have

✅ Multi-page responsive site  
✅ Admin login (password protected)  
✅ Add/edit/delete research papers  
✅ Add/edit/delete team members  
✅ Contact form  
✅ Mobile-optimized  
✅ Fast performance  
✅ No backend needed  
✅ Data saved locally  

---

## 🐛 Quick Fixes

**Problem: Page won't load**
- Run `npm install` again
- Run `npm run dev`
- Clear browser cache

**Problem: Admin login not working**
- Check password (case-sensitive)
- Default: `adivionlab2024`
- Clear localStorage

**Problem: Styles look wrong**
- Hard refresh browser (Ctrl+Shift+R)
- Run `npm run dev` again

**Problem: npm install fails**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

All components automatically adapt!

---

## 🎓 Learn More

- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org

---

## 📞 File Structure Quick Reference

```
src/
├── App.tsx                    ← Routes & layout
├── main.tsx                   ← Entry point
├── index.css                  ← Global styles
├── components/
│   ├── Navbar.tsx            ← Top navigation
│   ├── Footer.tsx            ← Bottom section
│   └── ProtectedRoute.tsx    ← Admin protection
├── pages/
│   ├── Home.tsx              ← Landing page
│   ├── About.tsx             ← About lab
│   ├── Research.tsx          ← Papers (EDITABLE)
│   ├── Team.tsx              ← Team (EDITABLE)
│   ├── Contact.tsx           ← Contact
│   ├── AdminLogin.tsx        ← Admin login
│   └── AdminDashboard.tsx    ← Admin overview
└── context/
    └── AuthContext.tsx       ← Auth logic
```

---

**Everything is set up and ready to go! Start with:**
```bash
npm install && npm run dev
```

Then login to admin panel with password: **adivionlab2024**
