import { BookProps } from "../types/BookProps";

export const filterBooksList = (books: BookProps[], searchQuery: string) => books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery) ||
    book.author.toLowerCase().includes(searchQuery) ||
    book.genre.toLowerCase().includes(searchQuery) ||
    book.description.toLowerCase().includes(searchQuery)
);