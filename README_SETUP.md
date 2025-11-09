# Adivion Lab - Professional Research Lab Website

A professional, fully-responsive React website for Adivion Lab with built-in admin functionality to manage papers and team members without a backend server.

## 🌟 Features

### Public Pages
- **Home** - Hero section, key highlights, and call-to-action
- **About** - Lab story, mission, vision, and core values
- **Research** - Display and manage research papers and publications
- **Team** - Team member profiles with contact information
- **Contact** - Contact form and lab information

### Admin Features
- **Admin Login** - Secure password-protected access (Demo: `adivionlab2024`)
- **Admin Dashboard** - Overview and quick access to content management
- **Paper Management** - Add, edit, delete research papers with:
  - Title, authors, year
  - Abstract and descriptions
  - PDF and external links
- **Team Management** - Manage team members with:
  - Names, positions, emails
  - Biographies
  - LinkedIn profiles

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ No backend required - all data stored in browser's localStorage
- ✅ Professional styling with Tailwind CSS
- ✅ Authentication context for secure admin access
- ✅ Built with React + TypeScript + Vite
- ✅ Fast development and build times

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd /workspaces/adivionlab

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will start at `http://localhost:3000` and automatically open in your browser.

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🔐 Admin Access

- Navigate to `http://localhost:3000/admin/login`
- Default password: `adivionlab2024`
- Change this password in `src/context/AuthContext.tsx` (line 13)

## 📝 Managing Content

### Add Papers
1. Login to admin panel
2. Go to "Manage Papers" from admin dashboard
3. Fill in the paper details
4. Click "Add Paper" or "Update Paper" if editing

### Add Team Members
1. Login to admin panel
2. Go to "Manage Team" from admin dashboard
3. Fill in member details
4. Click "Add Member" or "Update Member" if editing

## 💾 Data Storage

All data is stored in the browser's localStorage:
- **papers** - Array of research papers
- **teamMembers** - Array of team members
- **adminToken** - Admin authentication token

Data persists between sessions but is lost if browser data is cleared.

## 🎨 Customization

### Change Branding
1. Replace `adivionlab.png` in the project root with your logo
2. Update lab name in navbar (`src/components/Navbar.tsx`)

### Change Colors
1. Edit color variables in `tailwind.config.js`
2. Update `primary` and `secondary` colors

### Change Admin Password
1. Open `src/context/AuthContext.tsx`
2. Change `ADMIN_PASSWORD` variable (line 13)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   └── ProtectedRoute.tsx # Route protection component
├── pages/
│   ├── Home.tsx           # Home page
│   ├── About.tsx          # About page
│   ├── Research.tsx       # Papers management
│   ├── Team.tsx           # Team management
│   ├── Contact.tsx        # Contact page
│   ├── AdminLogin.tsx     # Admin login
│   └── AdminDashboard.tsx # Admin dashboard
├── context/
│   └── AuthContext.tsx    # Authentication context
├── App.tsx                # Main app component
├── main.tsx               # Entry point
└── index.css              # Tailwind styles
```

## 🛠 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📋 Future Enhancements

- [ ] Add backend API integration
- [ ] Email integration for contact form
- [ ] Image upload for team members
- [ ] PDF upload for papers
- [ ] Search and filter functionality
- [ ] Dark mode support
- [ ] Multi-user authentication
- [ ] Export data functionality

## 📄 License

This project is provided as-is for Adivion Lab.

## 🤝 Support

For issues or questions about customization, reach out to the development team.

---

**Created with ❤️ for Adivion Lab**
