import requests
from bs4 import BeautifulSoup

print("Libraries installed successfully!")

url = "https://www.shilohcabinetry.com/products/doorstyles"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find all image tags
images = soup.find_all("img")

if not images:
    print("No images found. The site might load them with JavaScript.")
else:
    for img in images:
        src = img.get("src")
        if src:
            print(f"Image URL: {src}")
            print(f"HTML: <img src=\"{src}\" alt=\"Door Style\">")