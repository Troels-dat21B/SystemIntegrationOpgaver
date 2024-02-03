
//Imports for reading files
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

//Websites that helped me: 
//https://www.w3schools.com/java/java_files_read.asp
//https://www.geeksforgeeks.org/file-class-in-java/


public class Main {
    public static void main(String[] args) {

        File folder = new File("../01_Assignment/File_Formats");
        File[] files = folder.listFiles();
        for (File file : files) {
            //Read file
            try{
                Scanner myReader = new Scanner(file);

                System.out.println("File Name: " + file);
                while (myReader.hasNextLine()) {
                    String data = myReader.nextLine();
                    System.out.println(data);
                }
                myReader.close();
            } catch (FileNotFoundException e){
                System.out.println("An error occurred.");
                e.printStackTrace();
            }
            System.out.println("\n"); //Here for more space between each file outputs
        }
    }
}