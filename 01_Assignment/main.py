import os
import csv
import json
import xml.etree.ElementTree as xml
import yaml
#import pandas as pd

def main():
    read_xml()

folder = os.listdir("../01_Assignment/File_Formats")


def read_files():
        folder = os.listdir("../01_Assignment/File_Formats")
        for file in folder:
            print(file)
            with open(f"../01_Assignment/File_Formats/{file}", mode='r', encoding="utf-8") as file:
                print(file.read())
                print("\n") #Here for extra space in terminal for readability
                
def read_csv():
    with open("../01_Assignment/File_Formats/"+folder[3], mode='r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            print(row)

def read_json():
    with open("../01_Assignment/File_Formats/"+folder[2], mode='r') as file:
        json_reader = json.load(file)
        print(json_reader)

def read_xml():
    with open("../01_Assignment/File_Formats/"+folder[4], mode='r') as file:
        xml_reader = xml.parse(file)
        root = xml_reader.getroot()
        print(root.text)

def read_yaml():
    with open("../01_Assignment/File_Formats/"+folder[1], mode='r') as file:
        yaml_reader = yaml.load(file)
        print(yaml_reader)

if __name__ == "__main__":
    main()