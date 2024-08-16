from flask import Flask
app = Flask(__name__)

import login.loginController
import registration.registrationController


@app.route("/")
def welcome():
    return "hello world"
