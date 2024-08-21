import mysql.connector
from flask import jsonify

class orderLogic:
     
     def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user = "root",password="12345",database = "canteen")
            self.cur = self.con.cursor(dictionary=True)
        except:
            return jsonify({'status': 'fail', 'message': 'database connection failed'}), 401
        
     def placeOrder(self,userId,outletId,date,amount,paymentId,productId):
         query = "INSERT INTO orders (userId,outletId,orderTime,amount,paymentId) VALUES (%s,%s,%s,%s,%s)"
         try:
            self.cur.execute(query, (userId,outletId,date,amount,paymentId))
            self.con.commit()
            query2 = "SELECT orderID FROM orders WHERE userId = %s and outletId= %s and orderTime= %s and amount = %s and paymentId = %s"
            try:
                self.cur.execute(query2, (userId,outletId,date,amount,paymentId))
                orderId = self.cur.fetchone().get("orderID")
                query3 = "insert into ordered_items (orderId,productId) values (%s,%s)"
                try:
                    for i in productId:
                        self.cur.execute(query3, (orderId,i))
                        self.con.commit()
                    return jsonify({'status':'success'}),200
                except:
                    return jsonify({'status':'fail','message':'failed while commiting ordered items'}),400
            except:
                return jsonify({'status':'fail','message':'failed while retreiving outletId'}),400
         except:
            return jsonify({'status':'fail','message':'failed while commiting order'}),400

