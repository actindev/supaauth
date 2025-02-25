# SupaAuth

<div align="center">

![SupaAuth Logo](https://via.placeholder.com/150)

A modern, type-safe authentication boilerplate built with Next.js and Supabase.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PNPM](https://img.shields.io/badge/PNPM-orange?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)

</div>

## ✨ Features

- 🔐 Complete authentication system with email/password
- 🚀 Server-side rendering with Next.js
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔒 Protected dashboard routes
- 🌐 Password reset with email verification
- 💪 Type-safe code with TypeScript
- ⚡ Powered by Supabase

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- PNPM package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/supa-starter.git
   cd supa-starter
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your app in action! 🎉

## 📖 For Beginners

SupaAuth is designed to be beginner-friendly while maintaining professional standards. Here's what you'll learn:

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

## 🔧 For Advanced Developers

### Performance Features

- ⚡ Pre-configured Supabase authentication with SSR
- 📦 Efficient dependency management with PNPM
- 🔄 Optimized data fetching strategies
- 🎯 Type-safe API calls

### Customization

1. **UI Customization**
   - Modify Tailwind styles in `src/styles/globals.css`
   - Update components in `src/components/layout/`

2. **Route Protection**
   - Extend protected routes in `src/middleware.ts`

3. **Feature Extension**
   - Build upon the dashboard in `src/app/dashboard/page.tsx`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

- 📚 [Supabase Documentation](https://supabase.io/docs)
- 🐛 [Issue Tracker](https://github.com/yourusername/supa-starter/issues)
- 💡 [Discussions](https://github.com/yourusername/supa-starter/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by <a href="https://x.com/gitmaxd" target="_blank">@GitMaxd</a>
</div>