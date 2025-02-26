# create-next-supaauth

<div align="center">

<img src="https://github.com/Gitmaxd/supaauth/blob/main/public/supaauth-hero.png?raw=true" alt="SupaAuth - From Zero to Auth in Under 1 Minute" width="800" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />

<br /><br />

## A modern, type-safe authentication boilerplate built with Next.js 14 and Supabase.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![npm version](https://img.shields.io/npm/v/create-next-supaauth.svg?style=flat)](https://www.npmjs.com/package/create-next-supaauth)

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

### Installation

1. Create a new project with one command:
   ```bash
   npx create-next-supaauth my-app
   ```

2. Navigate to your project:
   ```bash
   cd my-app
   ```

3. Update your environment variables in `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Start the development server:
   ```bash
   npm run dev
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
- 🐛 [Issue Tracker](https://github.com/Gitmaxd/supaauth/issues)
- 💡 [Discussions](https://github.com/Gitmaxd/supaauth/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by <a href="https://x.com/gitmaxd" target="_blank">@GitMaxd</a>
</div>