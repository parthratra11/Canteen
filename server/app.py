from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

import login.loginController
import registration.registrationController

CORS(app)
@app.route("/")
def welcome():
    return "hello world"

