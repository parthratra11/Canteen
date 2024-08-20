from flask import request
from app import app
from products.productsLogic import productLogic

productLogicObj = productLogic()

@app.route("/registerproduct",methods = ['POST'])
def productRegistrationControllerFunction():
    def convertNone(value):
        return value if value else None
    data = request.json
    productName = data.get('productName')
    productDescription = data.get('productDescription')
    productPrice = data.get('productPrice')
    outletId = data.get('outletId') 
    return productLogicObj.productRegister(productName,productDescription,productPrice,outletId)

@app.route("/updateproduct",methods=['PUT'])
def productUpdateControllerFunction():
    def convertNone(value):
        return value if value else None
    data = request.json
    productName = data.get('productName')
    productDescription = data.get('productDescription')
    productPrice = data.get('productPrice')
    outletId = data.get('outletId')
    productId = data.get('productId')
    return productLogicObj.productUpdate(productName,productDescription,productPrice,outletId,productId)

@app.route("/deleteproduct/<int:productid>",methods=['DELETE'])
def productDeleteControllerFunction(productid):
    print(type(productid))
    # productId = data.get('productId')
    return productLogicObj.productDelete(productid)