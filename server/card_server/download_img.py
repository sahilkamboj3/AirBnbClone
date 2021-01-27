from PIL import Image
from flask import Flask, request, jsonify
import string
import random

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/download/<filename>', methods=['POST', 'GET'])
def download(filename):
    data = request.get_data()
    ascii_ = string.ascii_letters
    new_filename = filename + '_'

    for i in range(3):
        num = random.randint(0, 9)
        letter = random.choice(ascii_)
        new_filename += str(num) + letter

    image = Image.new('RGB', (200, 200))
    image.save('/media/' + new_filename + '.jpg')

    with open('/media/' + new_filename + '.jpg', 'wb') as f:
        f.write(data)

    response = {
        'image_name': new_filename + '.jpg',
        'status': 200
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
