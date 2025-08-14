import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="streamlit-supaauth",
    version="0.1.0",
    author="GitMaxd",
    author_email="",
    description="A Streamlit component for Supabase authentication",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Gitmaxd/supaauth",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
    install_requires=[
        "streamlit >= 0.63",
    ],
)