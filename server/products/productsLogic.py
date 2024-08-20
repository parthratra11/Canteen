import mysql.connector
from flask import jsonify

class productLogic:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user = "root",password="12345",database = "canteen")
            self.cur = self.con.cursor(dictionary=True)
        except:
            return jsonify({'status': 'fail', 'message': 'database connection failed'}), 401
        
    def productRegister(self,productName,productDescription,productPrice,outletId):
        query = "INSERT INTO PRODUCTS (productName,productDescription,productPrice,outletId) VALUES (%s,%s,%s,%s)"
        try:
            self.cur.execute(query, (productName,productDescription,productPrice,outletId))
            self.con.commit()
            query2 = "SELECT productID FROM products WHERE productName = %s and productDescription= %s and productPrice= %s and outletId= %s"
            try:
                self.cur.execute(query2, (productName,productDescription,productPrice,outletId))
                productId = self.cur.fetchone()
                return jsonify({'status': 'success','productid': productId}), 200
            except:
                return jsonify({'status': 'fail', 'message': 'failed while retreiving productID'}), 401
        except:
            return jsonify({'status': 'fail', 'message': 'failed while commiting query'}), 401
        

    def productUpdate(self,productName,productDescription,productPrice,outletId,productId):
        query = "update products set productname = %s ,productDescription = %s , productPrice = %s where productId = %s"
        try:
            self.cur.execute(query,(productName,productDescription,productPrice,productId))
            self.con.commit()
            return jsonify({'status':'success'}),200
        except:
            return jsonify({'status':'fail','message':'failed while commititing query'}),401
        
    
    def productDelete(self,productid):
        query = f"delete from products where productid = {productid}"
        try:
            self.cur.execute(query)
            self.con.commit()
            return jsonify({'status':'success'}),200
        except:
            return jsonify({'status':'fail','message':'failed while commititing query'}),401