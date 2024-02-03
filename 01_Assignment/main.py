import os

def main():
    
    folder = os.listdir("../01_Assignment/File_Formats")
    for file in folder:
        print(file)
        with open(f"../01_Assignment/File_Formats/{file}", mode='r', encoding="utf-8") as file:
            print(file.read())
            print("\n") #Here for extra space in terminal for readability

if __name__ == "__main__":
    main()
