from flask import request
from app import app
from login.loginLogic import login

obj = login()

@app.route("/login",methods = ['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    return obj.user(email,password)