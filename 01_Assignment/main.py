import os
import csv
import json
import xml.etree.ElementTree as xml
import yaml

def main():
    read_xml()
    read_csv()
    read_json()
    read_xml()
    read_yaml()
    
    

filePath = "../01_Assignment/File_Formats"
folder = os.listdir(filePath)

def read_files():
    folder = os.listdir(filePath)
    for file in folder:
        print(file)
        with open(f"{filePath}/{file}", mode="r", encoding="utf-8") as file:
            print(file.read())
            print("\n")  # Here for extra space in terminal for readability

def read_csv():
    with open(f"{filePath}/{folder[3]}", mode="r") as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            print(row)

def read_json():
    with open(f"{filePath}/{folder[2]}", mode="r") as file:
        json_reader = json.load(file)
        print(json_reader)

def read_xml():
    with open(f"{filePath}/{folder[4]}", mode="r") as file:
        xml_reader = xml.parse(file)
        root = xml_reader.getroot()
        print(root.text)

def read_yaml():
    with open(f"{filePath}/{folder[1]}", mode="r") as file:
        yaml_reader = yaml.safe_load(file)
        print(yaml_reader)

if __name__ == "__main__":
    main()
