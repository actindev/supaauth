# Next.js Supabase Auth Template

<div align="center">

<img src="https://raw.githubusercontent.com/Gitmaxd/supaauth/main/public/supaauth-hero.png" alt="SupaAuth - From Zero to Auth in Under 1 Minute" width="800" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />

<br /><br />

## A modern, type-safe authentication boilerplate built with Next.js 14 and Supabase.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

### Ready to try it? Deploy now in seconds!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables)

</div>

## ✨ Features

- 🔐 Complete Server-Side authentication system with email/password
- 🚀 Server-side rendering with Next.js 14
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔒 Protected dashboard routes
- 🌐 Password reset with email verification
- 💪 Type-safe code with TypeScript
- ⚡ Powered by Supabase

## 🚀 Quick Start

### Prerequisites
- Node.js 16.14.0 or higher
- npm, yarn, or pnpm

### Setup

1. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Visit `http://localhost:3000` to see your app in action! 🎉

### Deploy to Vercel

You can deploy this project directly to Vercel with the following steps:

1. Create a Supabase project at [https://supabase.com](https://supabase.com) if you haven't already.

2. Get your Supabase URL and anon key from your Supabase project dashboard.

3. Click the "Deploy to Vercel" button at the top of this README or use the button below.

4. In the Vercel deployment form, enter your Supabase credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project anon/public key

5. Click "Deploy" and wait for the deployment to complete.

<div align="center">
  <br />
  <p><strong>Ready to deploy? Click the button below:</strong></p>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
  <br /><br />
</div>

Your application will be deployed and accessible through a Vercel URL. You can then configure custom domains and other settings in your Vercel dashboard.

## Environment Variables

This project requires the following environment variables to function properly:

| Variable | Description | Where to Find |
|----------|-------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | The URL of your Supabase project | Supabase Dashboard → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The anonymous key for your Supabase project | Supabase Dashboard → Project Settings → API → Project API Keys → anon/public |

These variables are necessary for the authentication system to communicate with your Supabase backend.

## 📖 For Beginners

This template is designed to be beginner-friendly while maintaining professional standards. Here's what you'll learn:

### Key Learning Points

- 📝 Form handling and state management
- 🔑 Authentication flow implementation
- 🛡️ Route protection strategies
- 🌍 Server-side vs. client-side rendering
- 🎨 Modern UI development with Tailwind CSS

### Project Structure

```
src/
├── app/                    # Pages and layouts
│   ├── auth/              # Authentication pages (signin, signup, reset-password)
│   ├── dashboard/         # Protected dashboard
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── contexts/              # React Context providers
├── lib/                   # Utility functions
├── styles/               # Global styles
└── types/                # TypeScript definitions
```

## 💬 Support

- 📚 [Supabase Documentation](https://supabase.io/docs)
- 🐛 [Issue Tracker](https://github.com/Gitmaxd/supaauth/issues)
- 💡 [Discussions](https://github.com/Gitmaxd/supaauth/discussions)

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
Made with ❤️ by <a href="https://x.com/gitmaxd" target="_blank">@GitMaxd</a>
</div> 