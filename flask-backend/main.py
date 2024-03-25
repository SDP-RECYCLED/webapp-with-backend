from website import create_app
from flask_cors import CORS

app = create_app()
CORS(app, supports_credentials=True, origins='http://localhost:3000')
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8080)
