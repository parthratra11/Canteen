from flask import request
from app import app
from login.loginLogic import loginLogic

obj = loginLogic()

@app.route("/login",methods = ['POST'])
def loginControllerFuction():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    return obj.user(email,password)