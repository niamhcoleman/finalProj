#NEEDS VALIDATION OF INPUTS

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
  database="fyp"
)

cursor = mydb.cursor()

#return user email (account tab)
@app.route('/account/getuserinfo/<user_id>', methods=['GET'])
def getuserinfo(user_id):
	query = "SELECT user_name, user_email FROM users WHERE user_id = %s;"
	cursor.execute(query % user_id)
	result = []
	for (user_name, user_email) in cursor:
		result.append({"user_name": user_name, "user_email": user_email})
	return jsonify(result)


#change user password
@app.route('/account/changepassword/<new_password>/<user_id>', methods=['POST'])
def changepassword(new_password,user_id):
	try:	
		query = "UPDATE users SET user_password = %s WHERE user_id = %s;"
		cursor.execute(query % (new_password, user_id))
		mydb.commit()
		return "{'status': 'success'}"
	except Exception as e:
		error = "{'error': " + str(e) + "}"
		return error


#returning info from a particular day
@app.route('/history/getdayinfo/<user_id>/<target_date>/', methods = ['GET'])
def getdayinfo(user_id, target_date):
	try:
		#temporary for testing hardcoded
		#now = datetime.now()
		#target_date = now.strftime('%Y-%m-%d')


		query = "SELECT symptom_entry_id FROM entries WHERE user_id = '%s' AND entry_date = '%s' AND entry_tod = '%s';"

		# get symptom entry id for morning entries
		cursor.execute(query % (user_id, target_date, 'morning'))
		result = cursor.fetchall()
		if result is not None:
			morning_symptom_entry_id = result[0][0]

		# get symptom entry id for afternoon entries
		cursor.execute(query % (user_id, target_date, 'afternoon'))
		result = cursor.fetchall()
		if result is not None:
			afternoon_symptom_entry_id = result[0][0]

		# get symptom entry id for evening entries
		cursor.execute(query % (user_id, target_date, 'evening'))
		result = cursor.fetchall()
		if result is not None:
			evening_symptom_entry_id = result[0][0]

		# get symptom entry id for night entries
		cursor.execute(query % (user_id, target_date, 'night'))
		result = cursor.fetchall()
		if result is not None:
			night_symptom_entry_id = result[0][0]


		result_dict = {}

		#morning entries into dict
		if morning_symptom_entry_id is not None:
			query = "SELECT symptom_entry_sev, sym_id FROM symptomentry WHERE sym_entry_id = '%s';"
			cursor.execute(query % (morning_symptom_entry_id))
			result = cursor.fetchall()
			result_dict['morning'] = result


		#afternoon entries into dict
		if afternoon_symptom_entry_id is not None:
			query = "SELECT symptom_entry_sev, sym_id FROM symptomentry WHERE sym_entry_id = '%s';"
			cursor.execute(query % (afternoon_symptom_entry_id))
			result = cursor.fetchall()
			result_dict['afternoon'] = result

		#evening entries into dict
		if evening_symptom_entry_id is not None:
			query = "SELECT symptom_entry_sev, sym_id FROM symptomentry WHERE sym_entry_id = '%s';"
			cursor.execute(query % (evening_symptom_entry_id))
			result = cursor.fetchall()
			result_dict['evening'] = result


		#night entries into dict
		if night_symptom_entry_id is not None:
			query = "SELECT symptom_entry_sev, sym_id FROM symptomentry WHERE sym_entry_id = '%s';"
			cursor.execute(query % (night_symptom_entry_id))
			result = cursor.fetchall()
			result_dict['night'] = result

		return jsonify(result_dict)

	except Exception as e:
		error = "{'error': " + str(e) + "}"
		return error


#logging symptoms
@app.route('/tracking/logentry', methods = ['POST'])
def logentry():
	try:
		user_id = request.args["user_id"]
		now = datetime.now()
		formatted_date = now.strftime('%Y-%m-%d')
		entry_tod = request.args["entry_tod"]
		entry_emo_id = request.args["entry_emo_id"]
		notes = request.args["notes"]

		# symptom_entry_id = max id in table + 1
		query = "SELECT MAX(sym_entry_id) AS maximum from symptomentry LIMIT 1;"
		cursor.execute(query)
		result = cursor.fetchall()
		if result[0][0] is None:
			new_sym_entry_id = 0
		else:
			new_sym_entry_id = result[0][0] + 1

		query = "INSERT INTO entries (user_id, entry_date, entry_tod, entry_emo_id, symptom_entry_id, notes) VALUES (%s, %s, %s, %s, %s, %s);"
		cursor.execute(query, (user_id, formatted_date, entry_tod, entry_emo_id, new_sym_entry_id, notes))
		mydb.commit()


		#this needs to up updated so that the list can come from the user.
		symptoms = [['acne', 2], ['insomnia' , 2]]
		updatedlist = []

		for symptom in symptoms:
			sym_name = symptom[0]
			query = "SELECT sym_id FROM symptoms WHERE sym_name = '%s';"
			cursor.execute(query % sym_name)
			result = cursor.fetchone()
			updatedlist.append([result[0], symptom[1]])
			#at this point, updated list is a list of lists
			#with the format: [[symptom id, symptom severity],[symptom id, symptom severity], .....]

		for record in updatedlist:
			query = "INSERT INTO symptomentry (sym_entry_id, symptom_entry_sev, sym_id) VALUES ( %s, %s, %s);"
			cursor.execute(query, (new_sym_entry_id, record[1], record[0]))
			mydb.commit()
		return "{'status': 'success'}"

	except Exception as e:
		error = "{'error': " + str(e) + "}"
		return error


app.run(port=5001, debug=True)
