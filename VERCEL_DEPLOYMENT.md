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
   - **Framework Preset**: Create React App (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `yarn build` (from vercel.json)
   - **Output Directory**: `build` (from vercel.json)
   - **Install Command**: `yarn install` (from vercel.json)

4. **Environment Variables** (if needed)
   - If you have `REACT_APP_BACKEND_URL` or other environment variables, add them in the Vercel dashboard:
     - Go to Project Settings → Environment Variables
     - Add variables (e.g., `REACT_APP_BACKEND_URL`)

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

If your app uses environment variables (like `REACT_APP_BACKEND_URL`):

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add each variable with its value
   - Select environments (Production, Preview, Development)

2. **Via CLI:**
   ```bash
   vercel env add REACT_APP_BACKEND_URL
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

**Build fails?**
- Check Node.js version (Vercel uses Node 18+ by default)
- Verify `yarn build` works locally
- Check build logs in Vercel dashboard

**Routes return 404?**
- Verify `vercel.json` rewrites are present (✅ already configured)

**Environment variables not working?**
- Ensure they start with `REACT_APP_` prefix
- Redeploy after adding environment variables

**Need help?**
- Check Vercel docs: https://vercel.com/docs
- Check deployment logs in Vercel dashboard

