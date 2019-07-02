from flask import Flask, jsonify, render_template
import pandas as pd 

app = Flask(__name__)

hello_dict = {"Hello": "World!"}
df = pd.read_csv("../../db/Capital_Weather.csv")
graph1_data = df.set_index('City').T.to_dict('list')
my_list = []
for key,value in graph1_data.items():

	my_list.append({'City':key,'Cloudiness':value[1],'Country':value[2],
		'Date':value[3],'Humidity':value[4],'Lat':value[5],
		'Lng':value[6],'Max Speed':value[7],'Wind Speed':value[8],
		'Temp':value[9]})


@app.route("/")
def home():
	return render_template("homepage.html")

@app.route("/graph1.html")
def graph_1():
	return render_template("graph1.html")

@app.route("/graph1")
def index():
    return jsonify(my_list)

@app.route("/graph2.html")
def graph_2():
	return render_template("graph2.html")

@app.route("/graph2")
def index2():
	return jsonify(my_list)

@app.route("/graph3.html")
def graph_3():
	return render_template("graph3.html")

@app.route("/graph3")
def index3():
	return jsonify(my_list)

if __name__ == "__main__":
	app.run(debug=True)
