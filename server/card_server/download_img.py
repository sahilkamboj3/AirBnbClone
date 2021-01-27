from PIL import Image
from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/download', methods=['POST', 'GET'])
def download():
    data = request.get_data()

    # with open()

    return 'download'


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
