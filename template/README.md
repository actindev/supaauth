# Next.js Supabase Auth Template

<div align="center">

<img src="https://github.com/Gitmaxd/supaauth/blob/main/public/supaauth-hero.png?raw=true" alt="SupaAuth - From Zero to Auth in Under 1 Minute" width="800" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />

<br /><br />

## A modern, type-safe authentication boilerplate built with Next.js 14 and Supabase.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

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