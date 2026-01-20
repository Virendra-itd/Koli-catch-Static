# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   - Make sure all your changes are committed
   - Push to your repository

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will automatically detect your `vercel.json` configuration

3. **Configure (if needed)**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `yarn build` (from vercel.json)
   - **Output Directory**: `dist` (from vercel.json)
   - **Install Command**: `yarn install` (from vercel.json)

4. **Environment Variables** (if needed)
   - If you have `VITE_BACKEND_URL` or other environment variables, add them in the Vercel dashboard:
     - Go to Project Settings → Environment Variables
     - Add variables (e.g., `VITE_BACKEND_URL`)

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a URL like `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```
   Or with yarn:
   ```bash
   yarn global add vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

## Configuration Details

Your `vercel.json` includes:
- ✅ Build settings (yarn build, build output directory)
- ✅ Rewrites for React Router (all routes → index.html)
- ✅ Cache headers for static assets
- ✅ Security headers (XSS protection, CSP, etc.)

## Environment Variables

If your app uses environment variables (like `VITE_BACKEND_URL`):

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add each variable with its value
   - Select environments (Production, Preview, Development)

2. **Via CLI:**
   ```bash
   vercel env add VITE_BACKEND_URL
   ```

## Post-Deployment

- ✅ Your site will be live at `https://your-project.vercel.app`
- ✅ Custom domain can be added in Project Settings → Domains
- ✅ Automatic HTTPS is enabled
- ✅ Every push to your main branch triggers a new deployment

## Continuous Deployment

Once connected to Git:
- **Main branch** → Production deployments
- **Other branches/PRs** → Preview deployments
- Each deployment gets a unique URL

## Troubleshooting

### Common Issues and Solutions

**Build fails with "Command failed" or "Module not found"?**
1. **Check Node.js version**: 
   - Vercel now uses Node 20.x (configured in `vercel.json`)
   - Verify locally: `node --version` should be 20.x
   - If different, use `nvm use 20` (if you have nvm)

2. **Verify build works locally**:
   ```bash
   yarn install
   yarn build
   ```
   - If this fails locally, fix the issue before deploying
   - Check for missing dependencies or syntax errors

3. **Check build logs in Vercel dashboard**:
   - Go to your project → Deployments → Click on failed deployment
   - Review the build logs for specific error messages

**Build fails with "Yarn version mismatch"?**
- The project uses Yarn 1.22.22 (specified in `package.json`)
- Vercel should auto-detect this, but if issues persist:
  - In Vercel Dashboard → Project Settings → General
  - Ensure "Install Command" is set to `yarn install`
  - Or add to `vercel.json`: `"installCommand": "yarn install --frozen-lockfile"`

**Build succeeds but site shows blank page?**
1. **Check output directory**: 
   - Vercel should use `dist` (configured in `vercel.json`)
   - Verify `dist` folder exists after local build
   - Check that `dist/index.html` exists

2. **Check browser console**:
   - Open DevTools (F12) → Console tab
   - Look for JavaScript errors
   - Check Network tab for failed resource loads

3. **Verify rewrites are working**:
   - Try accessing a route like `/privacy` or `/terms`
   - Should not return 404 (✅ rewrites configured in `vercel.json`)

**Routes return 404?**
- Verify `vercel.json` rewrites are present (✅ already configured)
- Ensure you're accessing routes after the app loads (client-side routing)
- Check that React Router is properly configured

**Environment variables not working?**
- Ensure they start with `VITE_` prefix (required for Vite)
- Redeploy after adding environment variables
- Check in Vercel Dashboard → Project Settings → Environment Variables
- Verify they're set for the correct environment (Production/Preview/Development)

**Build timeout?**
- Large dependencies can cause timeouts
- Check `node_modules` size
- Consider using `.vercelignore` to exclude unnecessary files
- Upgrade to Vercel Pro for longer build times if needed

**"Cannot find module" errors?**
- Ensure all dependencies are in `package.json` (not just `devDependencies`)
- Run `yarn install` locally to regenerate `yarn.lock`
- Commit `yarn.lock` to your repository
- Check that `node_modules` is in `.gitignore` (should be)

**Deployment stuck or slow?**
- Check Vercel status: https://vercel-status.com
- Try redeploying
- Clear Vercel build cache: Project Settings → General → Clear Build Cache

### Debugging Steps

1. **Test build locally first**:
   ```bash
   yarn install
   yarn build
   yarn preview  # Test the production build locally
   ```

2. **Check Vercel build logs**:
   - Look for specific error messages
   - Check which step failed (install, build, or deploy)

3. **Verify configuration**:
   - `vercel.json` is in the root directory
   - `package.json` has correct build script
   - Node version matches (20.x)

4. **Common fixes**:
   - Delete `.vercel` folder if exists locally
   - Clear Vercel build cache
   - Redeploy from Vercel dashboard

**Need more help?**
- Check Vercel docs: https://vercel.com/docs
- Check deployment logs in Vercel dashboard
- Vercel Community: https://github.com/vercel/vercel/discussions

