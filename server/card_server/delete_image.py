import boto3

s3 = boto3.client('s3')

res = s3.delete_object(
    Bucket='sports-trader-card-images',
    Key='test.png'
)

print(res)
print('done')
