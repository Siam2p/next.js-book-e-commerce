import { getBookById } from "@/app/lib/fack-data";
import BookDetails from "@/app/ui/books/BookDetails";
import { Book } from "@/app/lib/fack-data";

export default async function BookDetailsPage({ params }: { params: { id: string } }) {

  const { id } = await params;
  const book: Book | undefined = getBookById(id);
  return(
    <BookDetails book={book!} />

  )

}
