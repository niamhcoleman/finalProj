import os
from flask import Flask, jsonify, request, send_from_directory
from werkzeug import secure_filename
import requests
import json
from flask_cors import CORS
import mysql.connector
from datetime import datetime

app = Flask(__name__)
app.secret_key = '_5#y2L"F4Qdkslppwkwn8z\ndkdn\xec]/'
CORS(app)

mydb = mysql.connector.connect(
  user="root",
  passwd="",
  host="localhost", 
  database="projectdb"
)

cursor = mydb.cursor()

#return user email (account tab)
@app.route('/account/getuserinfo/<user_id>', methods=['GET'])
def getuserinfo(user_id):
	query = "SELECT user_name, user_email FROM users WHERE user_id = %s;"
	cursor.execute(query % (user_id))
	result = []
	for (user_name, user_email) in cursor:
		result.append({"user_name": user_name, "user_email": user_email})
	return jsonify(result)


#change user passwor
@app.route('/account/changepassword/<new_password>/<user_id>', methods=['POST'])
def changepassword(new_password,user_id):
	try:	
		query = "UPDATE users SET user_pass = %s WHERE user_id = %s;"
		cursor.execute(query % (new_password, user_id))
		mydb.commit()
		return "{'status': 'success'}"
	except Exception as e:
		error = "{'error': " + str(e) + "}"
		return error

#adding to the entries table
#NOTE THAT DATE NEEDS TO COME IN FORM YEAR-MONTH-DAY atm
#Problem with this is getting the max symptom id to generate the symptom entry id. the rest works
@app.route('/tracking/logentry', methods = ['POST'])
def logentry():
	try:

		user_id = request.args["user_id"]
		now = datetime.now()
		formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')
		entry_TOD = request.args["entry_TOD"]
		emotion_id = request.args["emotion_id"]
		notes = request.args["notes"]

		#symptom_entry_id = max id in table + 1
		query = "SELECT MAX(sym_entry_id) AS maximum from symptom_entry LIMIT 1;"
		cursor.execute(query)
		result = cursor.fetchall()
		if result[0][0] is None:
			new_sym_entry_id = 0
		else:
			new_sym_entry_id = result[0][0] + 1

		query = "INSERT INTO entries (user_id, entry_date, entry_TOD, emotion_id, symptom_entry_id, notes) VALUES (%s, %s, %s, %s, %s, %s);"
		cursor.execute(query, (user_id, formatted_date, entry_TOD, emotion_id, new_sym_entry_id, notes))
		mydb.commit()

		#Next, symptom entries table is updated with contents of a list containing symptom id and severity.
		myList = [1, 2, 3]
		for row in myList:
			query = "INSERT INTO symptom_entry (sym_entry_id, sym_id) VALUES (%s, %s);"
			cursor.execute(query, (new_sym_entry_id, row))
			mydb.commit()
		return "{'status': 'success'}"
	except Exception as e:
		error = "{'error': " + str(e) + "}"
		return error


##########
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp	
		
app.run(port=5001, debug=True)
