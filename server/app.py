from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

import login.loginController
import registration.registrationController
<<<<<<< HEAD
import products.productsController
=======

CORS(app)
>>>>>>> a6207793b5958450abd5fb5dc3a143d7cad27ebf
@app.route("/")
def welcome():
    return "hello world"

