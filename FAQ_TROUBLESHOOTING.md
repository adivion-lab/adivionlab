# ❓ FAQ & Troubleshooting Guide

## Common Questions

### Q: Do I need a backend?
**A:** No! Everything is stored in your browser's localStorage. No server required.

### Q: Where is my data stored?
**A:** In browser's localStorage. Can be accessed in DevTools (F12 → Application → Local Storage).

### Q: Is data safe?
**A:** Yes for local use. For production with sensitive data, consider using a backend.

### Q: Can multiple people access the admin panel?
**A:** Currently, anyone who knows the password can edit. For multi-user, you'd need a backend.

### Q: Will data persist if I close the browser?
**A:** Yes! localStorage survives browser restarts.

### Q: What if I clear browser cache?
**A:** All data will be lost. You may want to export/backup before clearing.

### Q: Can I use this on mobile?
**A:** Yes! The site is fully responsive and works on phones/tablets.

### Q: How do I backup my data?
**A:** Export papers/team members manually or use browser DevTools to export localStorage.

### Q: Can I host this on GitHub Pages?
**A:** Yes! Build (`npm run build`) and upload `dist/` folder.

### Q: Is TypeScript necessary?
**A:** No, but it helps catch errors. You can use JavaScript if preferred.

### Q: How do I change the site language?
**A:** Edit the text in components. All hard-coded text is in JSX files.

---

## Troubleshooting Problems

### ❌ Error: "npm: command not found"
**Symptoms:** Can't run npm commands

**Solutions:**
1. Install Node.js from https://nodejs.org
2. Verify installation: `node --version`
3. Restart terminal

---

### ❌ Error: "npm install" fails
**Symptoms:** Installation stuck or errors about packages

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install

# If still failing, check Node version
node --version  # Should be 16 or higher
```

---

### ❌ Error: "Port 3000 already in use"
**Symptoms:** `npm run dev` says port 3000 is occupied

**Solutions:**
```bash
# Use different port
npm run dev -- --port 3001

# Or find and kill process on 3000
# Linux/Mac:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### ❌ Error: Admin login not working
**Symptoms:** Password appears incorrect even though you know it

**Solutions:**
1. **Check password is correct:**
   - Default: `adivionlab2024`
   - Passwords are case-sensitive
   - No extra spaces

2. **Clear browser data:**
   - Open DevTools (F12)
   - Application → Local Storage → Clear All
   - Refresh page and try again

3. **Check AuthContext password:**
   - Edit `src/context/AuthContext.tsx` line 13
   - Verify `ADMIN_PASSWORD` matches what you expect

4. **Try incognito/private window:**
   - Sometimes browser extensions cause issues

---

### ❌ Error: Page won't load (white screen)
**Symptoms:** Blank page even though server is running

**Solutions:**
```bash
# Stop server (Ctrl+C)
# Try clearing npm cache
npm cache clean --force

# Restart
npm run dev

# Hard refresh browser
Ctrl+Shift+R  (Windows/Linux)
Cmd+Shift+R   (Mac)
```

---

### ❌ Error: Styles not showing (unstyled page)
**Symptoms:** Page loads but looks ugly/unstyled

**Solutions:**
1. Hard refresh: `Ctrl+Shift+R`
2. Check development server is running
3. Wait for Vite to recompile (watch terminal)
4. Restart dev server:
   ```bash
   # Ctrl+C to stop
   npm run dev
   ```

---

### ❌ Error: Data not saving
**Symptoms:** Add paper, refresh, it's gone

**Solutions:**
1. **Check localStorage is enabled:**
   - F12 → Application → Local Storage
   - Should show domain in list

2. **Check you're not in private/incognito mode:**
   - Private mode doesn't persist localStorage
   - Use regular browser window

3. **Check form validation:**
   - Try adding required fields
   - Look for error messages

4. **Check browser console:**
   - F12 → Console tab
   - Look for JavaScript errors

---

### ❌ Error: Can't find "npm" after installation
**Symptoms:** `npm install` worked but `npm run dev` says "command not found"

**Solutions:**
1. Close and reopen terminal
2. Verify Node/npm installed:
   ```bash
   node --version
   npm --version
   ```
3. Restart your computer
4. Reinstall Node.js

---

### ❌ Error: "Module not found" errors
**Symptoms:** Errors about missing React, Tailwind, etc.

**Solutions:**
```bash
# Make sure all dependencies installed
npm install

# If errors persist
rm -rf node_modules
npm install

# Check package.json exists
cat package.json
```

---

### ❌ Error: TypeScript compilation errors
**Symptoms:** Terminal shows TypeScript errors

**Solutions:**
1. These are often just development warnings
2. Server should still run
3. Wait for hot reload to finish
4. Check specific error message
5. Check file syntax for typos

---

### ❌ Error: "Cannot find logo" or logo not showing
**Symptoms:** Logo image not appearing anywhere

**Solutions:**
1. Check `adivionlab.png` exists in root folder
2. Verify filename exactly matches code (case-sensitive)
3. Ensure it's a valid PNG/JPG file
4. Try a smaller PNG file (< 1MB)
5. Hard refresh browser

---

### ❌ Error: Admin dashboard shows 0 papers/members
**Symptoms:** Admin panel says you have no papers/team even though you added them

**Solutions:**
1. Check if data was actually saved
2. Go to `/research` or `/team` page directly
3. Look in browser DevTools → Application → Local Storage
4. Check if you're on same browser window
5. Try refreshing the page

---

### ❌ Error: Deployed site doesn't load
**Symptoms:** Works locally but not on deployed URL

**Solutions:**
1. **Netlify specific:**
   - Create `_redirects` file in `public/`:
     ```
     /* /index.html 200
     ```
   - Redeploy

2. **Check dist folder:**
   - Run `npm run build`
   - Verify `dist/` folder created
   - Upload correct folder

3. **Check build succeeded:**
   - Look for build errors in logs
   - Verify all files in `dist/`

4. **Clear deployment cache:**
   - For Netlify: Site settings → Clear cache & redeploy
   - For Vercel: Redeploy button

---

### ❌ Error: "Localhost refused to connect"
**Symptoms:** Can't reach `http://localhost:3000`

**Solutions:**
1. Check dev server is running
2. Try different port: `npm run dev -- --port 3001`
3. Check firewall isn't blocking
4. Try `http://127.0.0.1:3000` instead
5. Restart terminal and try again

---

## Performance Issues

### Issue: Site loading slowly
**Solutions:**
- Optimize images smaller
- Check browser extensions
- Use production build: `npm run build && npm run preview`
- Check internet connection

### Issue: Admin panel is slow
**Solutions:**
- Fewer papers/members in localStorage
- Clear old browser data
- Use production build
- Check browser isn't running too many tabs

---

## Browser-Specific Issues

### Issue: Works in Chrome but not Firefox
**Symptoms:** Different behavior in different browsers

**Solutions:**
1. Clear browser cache: CTRL+SHIFT+Delete
2. Disable browser extensions
3. Try private/incognito mode
4. Check browser console for errors (F12)

### Issue: Mobile version looks wrong
**Symptoms:** Layout broken on phone

**Solutions:**
1. Hard refresh on mobile
2. Check viewport meta tag in index.html
3. Test in DevTools mobile view (F12)
4. Try different device sizes

---

## Data Issues

### Issue: Accidentally deleted all data
**Solutions:**
1. **If using Git:**
   ```bash
   git log --oneline
   git show HASH:src/pages/Research.tsx
   ```

2. **Re-add manually** through admin panel

3. **Use browser undo:**
   - Might have Ctrl+Z support (limited)

4. **Future prevention:**
   - Backup regularly
   - Export data periodically
   - Use version control

---

## Git/Version Control Issues

### Issue: Files not being tracked
**Solutions:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Issue: Merge conflicts
**Solutions:**
```bash
# View conflicts
git status

# Resolve conflicts manually in files
# Then:
git add .
git commit -m "Resolve conflicts"
git push
```

---

## Deployment Issues

### Issue: Build fails
**Solutions:**
1. Check for TypeScript errors: `npm run lint`
2. Verify all imports exist
3. Check console for build errors
4. Try: `npm cache clean --force && npm install && npm run build`

### Issue: Site 404 errors after deploy
**Solutions:**
1. Check `_redirects` file for SPA routing
2. Verify deploying `dist/` folder not root
3. Configure web server for SPA
4. Set index.html as fallback

---

## Need More Help?

### Check These Resources
- React docs: https://react.dev
- Tailwind docs: https://tailwindcss.com
- MDN Web Docs: https://developer.mozilla.org
- Stack Overflow: Use specific error messages

### Browser DevTools (F12)
- **Console tab:** JavaScript errors
- **Application tab:** localStorage data
- **Network tab:** Failed requests
- **Elements tab:** HTML/CSS inspection

### Helpful Commands
```bash
# Check all errors
npm run lint

# See what was built
ls -la dist/

# View git history
git log --oneline

# Check Node version
node --version

# Check npm version  
npm --version
```

---

## Still Stuck?

1. **Google the error message** - usually someone has solved it
2. **Check browser console** (F12) for specific errors
3. **Read the documentation** in this project
4. **Try the solutions above** systematically
5. **Make a fresh start:**
   ```bash
   rm -rf node_modules dist
   npm install
   npm run dev
   ```

---

## Prevention Tips

✅ **Backup regularly:**
- Export data periodically
- Use git/version control
- Keep offline copies

✅ **Test thoroughly:**
- Test all pages
- Test admin functions
- Test on different devices

✅ **Document changes:**
- Use git commit messages
- Track what you changed
- Keep notes

✅ **Keep dependencies updated:**
- Periodically run `npm update`
- Check for security issues

---

**Remember:** Most issues have simple solutions. Start with the most obvious (is it running? is the port right? did you save?) before complex troubleshooting!
