class ImageClass():
    def __init__(self, bucket_name):
        import boto3
        import string

        self.s3 = boto3.resource('s3')
        self.bucket_name = bucket_name
        self.letters = string.ascii_letters
    
    def upload_img(self, filename):
        self.s3.meta.client.upload_file(filename, self.bucket_name, filename)
    
    def get_img(self, url):
        import requests as re
        import random

        res = re.get(url)
        data = res.content
        slash_idx = url.rfind('/')
        rand_string = ""

        for i in range(3):
            num = random.randint(low=1, high=9)
            rand_string += str(num) + random.choice(self.letters)

        with open(url[slash_idx:] + rand_string) as f:
            f.write(data)
