import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "streamlit_supaauth",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("streamlit_supaauth", path=build_dir)

def supaauth_component(
    supabase_url=None,
    supabase_anon_key=None,
    mode="signin",
    redirect_to="/dashboard",
    theme="dark",
    key=None
):
    """Create a new instance of "streamlit_supaauth".

    Parameters
    ----------
    supabase_url : str
        The URL of your Supabase project
    supabase_anon_key : str
        The anonymous key for your Supabase project
    mode : str
        The authentication mode: "signin", "signup", or "reset-password"
    redirect_to : str
        The URL to redirect to after successful authentication
    theme : str
        The theme to use: "dark" or "light"
    key : str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns
    -------
    dict
        The authentication result containing user data, session info, or error messages
    """
    component_value = _component_func(
        supabase_url=supabase_url,
        supabase_anon_key=supabase_anon_key,
        mode=mode,
        redirect_to=redirect_to,
        theme=theme,
        key=key,
        default=None
    )
    return component_value

# Add some test code to play with the component while it's in development.
if not _RELEASE:
    import streamlit as st

    st.subheader("SupaAuth Component")
    
    # Get Supabase credentials from Streamlit secrets or user input
    supabase_url = st.secrets.get("SUPABASE_URL", "") if hasattr(st, 'secrets') else ""
    supabase_anon_key = st.secrets.get("SUPABASE_ANON_KEY", "") if hasattr(st, 'secrets') else ""
    
    if not supabase_url:
        supabase_url = st.text_input("Supabase URL", placeholder="https://your-project.supabase.co")
    
    if not supabase_anon_key:
        supabase_anon_key = st.text_input("Supabase Anon Key", type="password")
    
    mode = st.selectbox("Authentication Mode", ["signin", "signup", "reset-password"])
    theme = st.selectbox("Theme", ["dark", "light"])
    
    if supabase_url and supabase_anon_key:
        result = supaauth_component(
            supabase_url=supabase_url,
            supabase_anon_key=supabase_anon_key,
            mode=mode,
            theme=theme,
            key="supaauth_demo"
        )
        
        if result:
            st.write("Authentication Result:")
            st.json(result)
    else:
        st.warning("Please provide Supabase URL and Anon Key to test the component")