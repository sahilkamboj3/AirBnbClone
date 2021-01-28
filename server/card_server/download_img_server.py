import os
from PIL import Image
from flask import Flask, request, jsonify
import string
import random
from gen_util.p_graphql_endpoint import send_create_card_mutation

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

    new_filename += '.jpg'
    abs_path = os.path.dirname(__file__)
    abs_path += '/media/' + new_filename

    image = Image.new('RGB', (200, 200))
    image.save(abs_path)

    with open(abs_path, 'wb') as f:
        f.write(data)

    # second option for testing
    # data = send_create_card_mutation(new_filename)
    # return jsonify(data)

    return jsonify({
        'filename': new_filename,
        'status': 200
    })


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
