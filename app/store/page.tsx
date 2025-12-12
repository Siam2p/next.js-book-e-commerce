import { getAllBooks } from "../lib/fack-data"
import BookList from "../ui/books/BookList";


export default function BookListPage() {
  const books = getAllBooks();

  return (
    <BookList books ={books} />
  )
}
