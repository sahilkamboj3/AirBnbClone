import boto3
from PIL import Image
import os

filename = 'test.png'
s3 = boto3.resource('s3')

res = s3.meta.client.upload_file(filename, 'sports-trader-card-images', filename)
print(res)
