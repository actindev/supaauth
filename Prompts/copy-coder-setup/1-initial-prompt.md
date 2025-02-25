Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
SaaSify Landing Page with Authentication and Waitlist System
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top navigation with: Login, Sign Up, Reset Password
- Logo placement in top-left corner
- No secondary navigation present


2. Layout Components:
- Header container: 100% width, ~80px height
- Warning banner: ~500px width, rounded corners
- Main content area: centered, max-width 800px
- Email input field: ~500px width, 50px height
- CTA button: ~200px width, 50px height


3. Content Sections:
- Logo section
- Warning message container
- Hero section with headline
- Subheadline section
- Waitlist form section


4. Interactive Controls:
- Email input field with placeholder text
- "Join Waitlist" button
- Navigation links (Login, Sign Up, Reset Password)
- All interactive elements have hover states


5. Colors:
- Primary Red (Warning): #FF4D4F
- Text Black: #000000
- Background White: #FFFFFF
- Button Black: #1C1C1C
- Input Gray: #F5F5F5


6. Grid/Layout Structure:
- Single column layout
- Centered content alignment
- Consistent vertical spacing (24px)
- Responsive container with max-width
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── WarningBanner.tsx
│   │   └── MainLayout.tsx
│   ├── features/
│   │   ├── auth/
│   │   └── waitlist/
│   └── shared/
│       ├── Button.tsx
│       └── Input.tsx
├── assets/
│   └── logo.svg
├── styles/
│   └── global.scss
├── hooks/
│   └── useWaitlist.ts
└── utils/
└── validation.ts
```


2. Key Features:
- Email waitlist subscription
- Authentication system
- Environment variable validation
- Form validation and submission
- Error handling and display


3. State Management:
```typescript
interface AppState {
├── auth: {
│   ├── isAuthenticated: boolean
│   ├── user: User | null
│   └── error: string | null
├── }
├── waitlist: {
│   ├── email: string
│   ├── isSubmitting: boolean
│   └── error: string | null
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/login',
├── '/signup',
└── '/reset-password'
]
```


5. Component Architecture:
- AuthProvider (Context)
- WarningBanner
- WaitlistForm
- AuthenticationForms
- SharedComponents (Button, Input)


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── mobile: 320px,
├── tablet: 768px,
├── desktop: 1024px,
└── wide: 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.