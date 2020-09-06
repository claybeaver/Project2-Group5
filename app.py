# import necessary libraries
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from secret import password, username
import pandas as pd
from sqlalchemy import create_engine
import psycopg2
import json
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
#### test irina
con = psycopg2.connect(database="hurricanes_db", user="postgres", password=password, host="127.0.0.1", port="5432")
cursor = con.cursor()
# Connect to the local database
connection_string = f'{username}:{password}@localhost:5432/hurricanes_db'
engine = create_engine(f'postgresql://{connection_string}')

##### end test irina

from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', "postgresql://localhost:5000/hurricanes_db")

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

Classes = create_classes(db)

# create route that renders index.html template
@app.route("/")
def home():
    cursor.execute("select name, hurricane_id, year, latitude_decimal, longitude_decimal, max_wind, air_pressure from master")
    # result = cursor.fetchall()
    # result = cursor.query.with_entities(SomeModel.col1, SomeModel.col2)
    columns = ('name', 'hurricane_id','year', 'latitude_decimal', 'longitude_decimal', 'max_wind', 'air_pressure')
    results = []
    for row in cursor.fetchall():
        results.append(dict(zip(columns, row)))
    # results = db.session.query(Classes.name, Classes.hurricane_id, latitude_decimal, longitude_decimal).all()
    # hover_text = [result[0] for result in results]
    # master = 
    # name = [result[1] for result in results]
    # hurricane_id = [result[2] for result in results]
    # lat = [result[3] for result in results]
    # lon = [result[4] for result in results]

    # hurricanes_data = [{
    # "type": "scattergeo",
    # "locationmode": "USA-states",
    # "lat": lat,
    # "lon": lon,
    # "text": name,
    # "hoverinfo": "text",
    # "marker": {
    #     "size": 50,
    #     "line": {
    #         "color": "rgb(8,8,8)",
    #         "width": 1
    #     },
    # }
    # }]
    # return jsonify(hurricanes_data)
    return render_template("index.html", data=results)
    # return render_template("index.html")

# create route that renders index.html template
@app.route("/data")
def data():
    cursor.execute("select * from master")
    results = cursor.fetchall()
    return render_template("data.html", data=results)
    

# # Query the database and send the jsonified results
# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         name = request.form["petName"]
#         lat = request.form["petLat"]
#         lon = request.form["petLon"]

#         pet = Pet(name=name, lat=lat, lon=lon)
#         db.session.add(pet)
#         db.session.commit()
#         return redirect("/", code=302)

#     return render_template("form.html")


# @app.route("/api/pals")
# def pals():
#     results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

#     hover_text = [result[0] for result in results]
#     lat = [result[1] for result in results]
#     lon = [result[2] for result in results]

#     pet_data = [{
#         "type": "scattergeo",
#         "locationmode": "USA-states",
#         "lat": lat,
#         "lon": lon,
#         "text": hover_text,
#         "hoverinfo": "text",
#         "marker": {
#             "size": 50,
#             "line": {
#                 "color": "rgb(8,8,8)",
#                 "width": 1
#             },
#         }
#     }]

#     return jsonify(pet_data)


if __name__ == "__main__":
    app.run()
