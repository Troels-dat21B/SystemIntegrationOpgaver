import { get } from "mongoose";
import { Books } from "./dbConnectors.js";

//Mutations in GraphQL are used to create, update, or delete data.
const resolvers = {
  getBook: async ({ id }) => {
    //getProduct() is a resolver that fetches a book by its id
    try {
      const book = await Books.findById(id); //findById() comes from the mongoose library
      console.log(book);
      return book;
    } catch (error) {
      throw new Error(error);
    }
    },
    getAllBooks: async () => {
        //getAllBooks() is a resolver that fetches all products
        try {
            return Books.find();
        } catch (error) {
            throw new Error(error);
        }
     },
  createBook: async ({ input }) => {
    //Creates a new book
    const newBook = new Books({
      authorID: input.authorid,
      title: input.title,
      releaseYear: input.releaseYear
    });

    newBook.id = newBook._id;

    try {
      await newBook.save(); //save() comes from the mongoose library
      return newBook;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateBook: async ({ input }) => {
    //Updates a book
      try {
        //Finds the book on the id from the input, and if it's a new book, it will create a new one.
        const updatedBook = await Books.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true }
        );
        return updatedBook;
      } catch (error) {
      throw new Error(error);
    }
    },
    deleteBook: async ({ id }) => { 
        //Deletes a book by id
        try {
            await Books.deleteOne({ _id: id }); //deleteOne() comes from the mongoose library
            return new SuccessMessage("Book deleted successfully");
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default resolvers;