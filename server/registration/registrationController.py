from flask import request
from app import app
from registration.registrationLogic import registerLogic

registerLogicObj = registerLogic()

@app.route("/registration",methods = ['POST'])
def registerControllerFunction():
    def convertNone(value):
        return value if value else None
    data = request.form
    name = data.get('name')
    role = data.get('role')
    email = data.get('email')
    phone = data.get('phone') 
    roll = convertNone(data.get('roll',None))
    empid = convertNone(data.get('empid',None))
    password = data.get('password')
    return registerLogicObj.register(name,role,email,phone,roll,empid,password)