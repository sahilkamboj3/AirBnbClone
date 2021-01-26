import requests
from PIL import Image

REGION = 'us-east-2'
filename = 'test.png'

r = requests.get(f'https://sports-trader-card-images.s3.{REGION}.amazonaws.com/{filename}')
data = r.content

with open('test1.png', 'wb') as f:
    f.write(data)

im = Image.open('test1.png')
im.show()
