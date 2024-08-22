from flask import request
from app import app
from orders.ordersLogic import orderLogic

orderLogicObj = orderLogic()

@app.route("/placeorder",methods = ['POST'])
def placeOrderControllerFunction():
    def convertNone(value):
        return value if value else None
    data = request.json
    userId = data.get('userId')
    outletId = data.get('outletId')
    date = data.get('date')
    amount = data.get('amount')
    paymentId = data.get('paymentId')
    productId = data.get('productId') 
    return orderLogicObj.placeOrder(userId,outletId,date,amount,paymentId,productId)