import { buildSchema } from "graphql";

//Defining a type tells the shape of the data, and what type of data it expects.
//Book in this case, expect to contaaing an id, name, price, description, and soldout.
//id is an ID type, name is a String type, price is a Float type, description is a String type, and soldout is a Boolean type.
//stores is an array of Store type.
//exlamation poInt means that the field is required. in other words, it cannot be null.

const schema = buildSchema(`
    
    type Book{
        id: ID!
        title: String
        releaseYear: Int
        authorid: ID!
        author: Author
    }

    type Author{
        id: ID
        name: String
        books: [Book]
    }
   

    type Query {
        "Get a book by its id"
        getBook(id: ID!): Book

        "Get all books"
        getAllBooks: [Book]

        "Get an author by its id"
        author(id: ID!): Author

        "Get all authors"
        getAllAuthors: [Author]
    }

    type SuccessMessage {
    message: String
    }

    input BookInput{
        authorid: ID!
        title: String!
        releaseYear: Int
    }

    input UpdateBookInput{
        id: ID!
        authorid: ID!
        title: String
        releaseYear: Int
    }

    type Mutation{
        createBook(input: BookInput): Book
        updateBook(input: UpdateBookInput): Book
        deleteBook(id: ID!): SuccessMessage
    }

`);



export default schema;
