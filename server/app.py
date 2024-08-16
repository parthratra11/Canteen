from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

import login.loginController

CORS(app)
@app.route("/")
def welcome():
    return "hello world"
