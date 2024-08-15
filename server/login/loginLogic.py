import mysql.connector
from flask import jsonify
class login():
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user = "root",password="12345",database = "canteen")
            self.cur = self.con.cursor(dictionary=True)
        except:
            return jsonify({'status': 'fail', 'message': 'failed database connection'}), 401
        
    def user(self,email,password):
        query = "SELECT * FROM user WHERE email = %s AND password = %s"
        self.cur.execute(query, (email, password))
        user_info = self.cur.fetchone()

        # self.cur.close()
        # self.con.close()

        if user_info:
        # Exclude the password from the response
            user_info.pop('PASSWORD')
            return jsonify({'status': 'success', 'user_info': user_info}), 200
        else:
            return jsonify({'status': 'fail', 'message': 'Invalid email or password'}), 401
        