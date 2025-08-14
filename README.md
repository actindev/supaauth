# Streamlit SupaAuth Component

<div align="center">

<img src="https://raw.githubusercontent.com/Gitmaxd/supaauth/main/public/supaauth-hero.png" alt="SupaAuth - From Zero to Auth in Under 1 Minute" width="800" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />

<br />

<h3>A Streamlit component for Supabase authentication</h3>

<br />

## A modern, easy-to-use Streamlit component for Supabase authentication.

<br />

[![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white)](https://streamlit.io/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.io/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://python.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![PyPI version](https://img.shields.io/pypi/v/streamlit-supaauth.svg?style=flat)](https://pypi.org/project/streamlit-supaauth/)

<br />


</div>

## ✨ Features

- 🔐 Complete authentication system with email/password
- 🚀 Easy integration with Streamlit apps
- 🎨 Modern UI with dark/light theme support
- 📱 Fully responsive design
- 🔒 Secure authentication flow
- 🌐 Password reset functionality
- 💪 Real-time authentication state updates
- ⚡ Powered by Supabase

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- Streamlit
- A Supabase project

### Installation

1. Install the component:
   ```bash
   pip install streamlit-supaauth
   ```

2. Use in your Streamlit app:
   ```python
   import streamlit as st
   from streamlit_supaauth import supaauth_component

   # Basic usage
   result = supaauth_component(
       supabase_url="your-supabase-url",
       supabase_anon_key="your-anon-key",
       mode="signin",  # or "signup", "reset-password"
       theme="dark",   # or "light"
       key="auth"
   )

   if result:
       st.write("Authentication result:", result)
   ```

3. Set up your Supabase credentials:
   ```bash
   # In your Streamlit secrets.toml file
   SUPABASE_URL = "your-supabase-url"
   SUPABASE_ANON_KEY = "your-anon-key"
   ```

4. Run your Streamlit app:
   ```bash
   streamlit run your_app.py
   ```

## 📖 Component Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `supabase_url` | str | None | Your Supabase project URL |
| `supabase_anon_key` | str | None | Your Supabase anonymous key |
| `mode` | str | "signin" | Authentication mode: "signin", "signup", or "reset-password" |
| `redirect_to` | str | "/dashboard" | URL to redirect after successful authentication |
| `theme` | str | "dark" | Component theme: "dark" or "light" |
| `key` | str | None | Unique key for the component instance |

## 🔄 Return Values

The component returns a dictionary with authentication results:

```python
{
    "event": "SIGNED_IN",  # Event type
    "user": {...},         # User object from Supabase
    "session": {...},      # Session object from Supabase
    "timestamp": "..."     # ISO timestamp of the event
}
```

### Event Types
- `SIGNED_IN` - User successfully signed in
- `SIGNED_UP` - User successfully signed up
- `SIGNED_OUT` - User signed out
- `PASSWORD_RECOVERY` - Password reset email sent

## 🎨 Themes

The component supports two themes:
- **Dark Theme** (`theme="dark"`) - Dark background with light text
- **Light Theme** (`theme="light"`) - Light background with dark text

## 🔧 Development

To set up the development environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/Gitmaxd/supaauth.git
   cd supaauth
   ```

2. Install Python dependencies:
   ```bash
   pip install -e .
   ```

3. Install frontend dependencies:
   ```bash
   cd streamlit_supaauth/frontend
   npm install
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

5. Run the example Streamlit app:
   ```bash
   streamlit run example_app.py
   ```

## 📦 Building for Production

1. Build the frontend:
   ```bash
   cd streamlit_supaauth/frontend
   npm run build
   ```

2. Update the `_RELEASE` flag in `__init__.py`:
   ```python
   _RELEASE = True
   ```

3. Build and upload to PyPI:
   ```bash
   python setup.py sdist bdist_wheel
   twine upload dist/*
   ```

## 🔐 Environment Variables

For security, store your Supabase credentials in Streamlit secrets:

**`.streamlit/secrets.toml`**
```toml
SUPABASE_URL = "https://your-project.supabase.co"
SUPABASE_ANON_KEY = "your-anon-key"
```

Then access them in your app:
```python
supabase_url = st.secrets["SUPABASE_URL"]
supabase_anon_key = st.secrets["SUPABASE_ANON_KEY"]
```

## 📋 Example Usage

Here's a complete example of using the component in a Streamlit app:

```python
import streamlit as st
from streamlit_supaauth import supaauth_component

st.set_page_config(page_title="My App", page_icon="🔐")

st.title("🔐 My Secure App")

# Authentication component
auth_result = supaauth_component(
    supabase_url=st.secrets["SUPABASE_URL"],
    supabase_anon_key=st.secrets["SUPABASE_ANON_KEY"],
    mode="signin",
    theme="dark",
    key="main_auth"
)

# Handle authentication result
if auth_result:
    if auth_result["event"] == "SIGNED_IN":
        st.success(f"Welcome, {auth_result['user']['email']}!")
        
        # Your authenticated app content here
        st.write("🎉 You are now logged in!")
        st.write("User data:", auth_result["user"])
        
    elif auth_result["event"] == "SIGNED_UP":
        st.info("Please check your email to verify your account.")
        
    elif auth_result["event"] == "PASSWORD_RECOVERY":
        st.info("Password reset email sent!")
else:
    st.info("Please sign in to continue.")
```

## 🛠️ Customization

The component is built with React and can be customized by modifying the source code:

- **Styling**: Edit `streamlit_supaauth/frontend/src/styles.css`
- **Components**: Modify files in `streamlit_supaauth/frontend/src/components/`
- **Main Logic**: Update `streamlit_supaauth/frontend/src/SupaAuthComponent.tsx`

## 🔍 Troubleshooting

### Common Issues

1. **Component not loading**: Make sure you have the correct Supabase URL and anon key
2. **Styling issues**: Check that the CSS is properly loaded
3. **Authentication errors**: Verify your Supabase project settings and RLS policies

### Debug Mode

Set `_RELEASE = False` in `__init__.py` to enable development mode with hot reloading.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Streamlit](https://streamlit.io/) for the amazing framework
- [Supabase](https://supabase.io/) for the backend-as-a-service platform
- [React](https://reactjs.org/) for the component framework

## 📞 Support

- 📚 [Streamlit Documentation](https://docs.streamlit.io/)
- 📚 [Supabase Documentation](https://supabase.io/docs)
- 🐛 [Issue Tracker](https://github.com/Gitmaxd/supaauth/issues)
- 💡 [Discussions](https://github.com/Gitmaxd/supaauth/discussions)

---

<div align="center">
Made with ❤️ by <a href="https://x.com/gitmaxd" target="_blank">@GitMaxd</a>
</div>

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