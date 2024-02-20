import csv
import json
import os
import xml.etree.ElementTree as xml
import yaml

from fastapi import FastAPI
import requests

app = FastAPI()


@app.get("/fastapiData")
def serve_data():
    return { "message": [1, 2, 3, 4, 5] }

@app.get("/requestExpress")
def get_express_data():
    response = requests.get("http://127.0.0.1:8080/expressData").json()

    return { "data": response }

@app.get("/csv")
def serve_csv():

    return { "data" : read_csv() }

@app.get("/json")
def serve_json():

    return { "data" : read_json() }

@app.get("/xml")
def serve_xml():

    return { "data" : read_xml() }

@app.get("/yaml")
def serve_yaml():

    return { "data" : read_yaml() }


### FILE METHODS ###
filePath = "../../01_Assignment/File_Formats"
folder = os.listdir(filePath)

def read_csv():
    data = []
    with open(f"{filePath}/{folder[3]}", mode="r") as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            data.append(row)
    return data

def read_json():
    with open(f"{filePath}/{folder[2]}", mode="r") as file:
        json_reader = json.load(file)
        return json_reader

def read_xml():
    with open(f"{filePath}/{folder[4]}", mode="r") as file:
        xml_reader = xml.parse(file)
        root = xml_reader.getroot()
        return root.text

def read_yaml():
    with open(f"{filePath}/{folder[1]}", mode="r") as file:
        yaml_reader = yaml.safe_load(file)
        return yaml_reader