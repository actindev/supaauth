Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /login
- /sign-up
- /reset-password

Page Implementations:
/login:
Core Purpose: Authenticate existing users and provide access to their accounts
Key Components
- Email

/hide toggle
- "Remember me" checkbox
- Login button with loading state
- Social login options (Google, Facebook)
- Links to Sign Up and Reset Password
- Form validation and error messaging
Layout Structure:
- Centered card layout
- Full-width on mobile, max-width 400px on desktop
- Logo

/sign-up:
Core Purpose: Register new users and create their accounts
Key Components
- Full name input fields
- Email input field
- Password input with requirements indicator
- Password confirmation field
- Terms & Conditions checkbox
- Sign Up button with loading state
- Social sign-up options
- Link to Login page
Layout Structure
- Centered card layout
- Full-width on mobile, max-width 450px on desktop
- Progress indicator for multi-step form
- Validation feedback inline with fields
- Responsive spacing between sections

/reset-password:
Core Purpose: Allow users to securely reset their forgotten passwords
Key Components
- Email input field (Step 1)
- Reset code verification field (Step 2)
- New password input (Step 3)
- Password confirmation field (Step 3)
- Submit buttons for each step
- Success

/error messages
- Link back to Login
Layout Structure:
- Centered card layout
- Full-width on mobile, max-width 400px on desktop
- Step indicator showing progress
- Clear visual separation between steps
- Confirmation messages prominently displayed

Layouts:
AuthLayout:
Applicable routes
- /login
- /sign-up
- /reset-password
Core components
- Navigation header with logo
- Footer with legal links
- Background design/pattern
- Container for auth forms
Responsive behavior
- Sticky header on mobile
- Side margins adjust based on screen size
- Minimum height to fill viewport
- Background scales/adjusts for different screen sizes
- Padding adjusts for mobile keyboard
</page-structure-prompt>