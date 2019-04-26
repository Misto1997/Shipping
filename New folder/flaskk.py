from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import json
from reciever2 import *

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
	
	 strss,tc,zip=receive.receive()
	 print(strss,"  ",tc)
	 ls = []
	 ls.append(strss)
	 ls.append(tc)
	 ls.append(zip)
	 return jsonify(ls)

	

if __name__ == '__main__':
     app.run(port=8001)
     app.debug=True
