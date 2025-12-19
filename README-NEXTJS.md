# Bludify - Next.js

This is the Next.js version of Bludify, a secure tech marketplace for pre-owned electronics.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🛡️ **Verified Marketplace** - Every device undergoes rigorous verification
- 🔒 **Escrow Protection** - Secure transactions with buyer and seller protection
- 🎨 **Dark Mode** - Beautiful dark/light theme toggle
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Next.js 15** - Built with the latest Next.js App Router
- 🎭 **Framer Motion** - Smooth animations throughout
- 🎨 **Tailwind CSS** - Modern styling with custom design system
- 🎮 **3D Visualization** - Interactive 3D phone model using Three.js

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx           # Home page
│   ├── marketplace/       # Marketplace page
│   ├── sell-device/       # Sell device page
│   ├── verification/      # Verification standards page
│   └── login/             # Login page
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section with 3D phone
│   ├── MarketTicker.tsx  # Live market ticker
│   ├── ProtocolSection.tsx # Verification protocol
│   ├── BentoGrid.tsx     # Feature showcase grid
│   └── PricingTable.tsx  # Pricing tiers
├── types.ts              # TypeScript type definitions
└── public/               # Static assets

```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## Migration from Vite

This project was successfully migrated from a Vite + React Router setup to Next.js App Router while maintaining:
- ✅ All functionality
- ✅ Visual design and UI
- ✅ Color scheme and theme
- ✅ Component structure
- ✅ 3D visualizations
- ✅ Animations and interactions

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
