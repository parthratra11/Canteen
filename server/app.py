from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

import login.loginController
import registration.registrationController
import products.productsController
@app.route("/")
def welcome():
    return "hello world"

