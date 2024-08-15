from flask import Flask
app = Flask(__name__)

import login.loginController


@app.route("/")
def welcome():
    return "hello world"
