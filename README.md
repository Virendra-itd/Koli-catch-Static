# Koli Static - Vite Version

This is the Vite version of the Koli Static project, optimized for easy deployment on Vercel.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://localhost:5000
```

**Note:** In Vite, environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

### Development

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project in Vercel
3. Vercel will automatically detect it as a Vite project
4. Add your environment variables in Vercel dashboard (with `VITE_` prefix)
5. Deploy!

The `vercel.json` file is already configured for optimal Vite deployment.

## Differences from Create React App Version

- Uses Vite instead of Create React App
- Environment variables use `VITE_` prefix instead of `REACT_APP_`
- Entry point is `src/main.jsx` instead of `src/index.js`
- Build output goes to `dist` instead of `build`
- Faster development server and build times
- Better tree-shaking and optimization

## Project Structure

```
koli_static_vite/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utility functions
│   └── utils/       # Helper utilities
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json     # Dependencies and scripts
```

