import mysql.connector
from flask import jsonify

class registerLogic():
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user = "root",password="12345",database = "canteen")
            self.cur = self.con.cursor(dictionary=True)
        except:
            return jsonify({'status': 'fail', 'message': 'database connection failed'}), 401
        
    def register(self,name,role,email,phone,roll,empid,password):
        query = "INSERT INTO USER (NAME,ROLE,EMAIL,PHONE,ROLL,EMPID,PASSWORD) VALUES (%s,%s,%s,%s,%s,%s,%s)"
        try:
            self.cur.execute(query, (name,role,email,phone,roll,empid, password))
            self.con.commit()
            return jsonify({'status': 'success'}), 200
        except:
            return jsonify({'status': 'fail', 'message': 'failed while commiting query'}), 401

      