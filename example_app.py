import streamlit as st
from streamlit_supaauth import supaauth_component

st.set_page_config(
    page_title="SupaAuth Streamlit Component Demo",
    page_icon="🔐",
    layout="wide"
)

st.title("🔐 SupaAuth Streamlit Component")
st.markdown("A Streamlit component for Supabase authentication")

# Sidebar configuration
st.sidebar.header("Configuration")

# Get Supabase credentials
supabase_url = st.sidebar.text_input(
    "Supabase URL",
    value=st.secrets.get("SUPABASE_URL", "") if hasattr(st, 'secrets') and "SUPABASE_URL" in st.secrets else "",
    placeholder="https://your-project.supabase.co",
    help="Your Supabase project URL"
)

supabase_anon_key = st.sidebar.text_input(
    "Supabase Anon Key",
    value=st.secrets.get("SUPABASE_ANON_KEY", "") if hasattr(st, 'secrets') and "SUPABASE_ANON_KEY" in st.secrets else "",
    type="password",
    help="Your Supabase anonymous key"
)

# Component configuration
mode = st.sidebar.selectbox(
    "Authentication Mode",
    ["signin", "signup", "reset-password"],
    help="Choose the authentication mode"
)

theme = st.sidebar.selectbox(
    "Theme",
    ["dark", "light"],
    help="Choose the component theme"
)

redirect_to = st.sidebar.text_input(
    "Redirect URL",
    value="/dashboard",
    help="URL to redirect after successful authentication"
)

# Main content
col1, col2 = st.columns([1, 1])

with col1:
    st.subheader("SupaAuth Component")
    
    if supabase_url and supabase_anon_key:
        # Render the component
        result = supaauth_component(
            supabase_url=supabase_url,
            supabase_anon_key=supabase_anon_key,
            mode=mode,
            theme=theme,
            redirect_to=redirect_to,
            key="supaauth_demo"
        )
        
        # Display result
        if result:
            st.success("Authentication event received!")
            with st.expander("View Authentication Result", expanded=True):
                st.json(result)
                
            # Handle different authentication events
            if result.get("event") == "SIGNED_IN":
                st.balloons()
                st.success(f"Welcome back, {result['user']['email']}!")
                
            elif result.get("event") == "SIGNED_UP":
                st.success("Account created successfully! Please check your email for verification.")
                
            elif result.get("event") == "PASSWORD_RECOVERY":
                st.info("Password reset email sent! Check your inbox.")
                
            elif result.get("event") == "SIGNED_OUT":
                st.info("You have been signed out successfully.")
    else:
        st.warning("Please provide Supabase URL and Anon Key in the sidebar to use the component.")
        
        with st.expander("How to get Supabase credentials", expanded=True):
            st.markdown("""
            1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
            2. Select your project or create a new one
            3. Go to **Settings** → **API**
            4. Copy your **Project URL** and **anon/public key**
            5. Paste them in the sidebar configuration
            """)

with col2:
    st.subheader("Features")
    st.markdown("""
    ✅ **Sign In** - Authenticate existing users  
    ✅ **Sign Up** - Register new users  
    ✅ **Password Reset** - Send reset emails  
    ✅ **Session Management** - Handle auth state  
    ✅ **Dark/Light Theme** - Customizable appearance  
    ✅ **Real-time Updates** - Instant auth feedback  
    """)
    
    st.subheader("Installation")
    st.code("""
    pip install streamlit-supaauth
    """, language="bash")
    
    st.subheader("Usage")
    st.code("""
    import streamlit as st
    from streamlit_supaauth import supaauth_component

    result = supaauth_component(
        supabase_url="your-supabase-url",
        supabase_anon_key="your-anon-key",
        mode="signin",  # or "signup", "reset-password"
        theme="dark",   # or "light"
        key="auth"
    )

    if result:
        st.write("Auth result:", result)
    """, language="python")

# Footer
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>Built with ❤️ using Streamlit and Supabase</p>
    <p><a href="https://github.com/Gitmaxd/supaauth" target="_blank">View on GitHub</a></p>
</div>
""", unsafe_allow_html=True)