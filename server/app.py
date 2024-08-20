from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

import login.loginController
import registration.registrationController
<<<<<<< HEAD
import products.productsController

=======

CORS(app)
>>>>>>> 3ce64e2b86d1af2366eb0a8bc2eccd49a558dfe4
@app.route("/")
def welcome():
    return "hello world"

