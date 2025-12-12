import { getBookById } from "@/app/lib/fack-data";
import BookDetails from "@/app/ui/books/BookDetails";

interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  isRented: boolean;
  stock: number;
  rentPrice: number;
  sellPrice: number;
  sold: number;
  ISBN: string;
  renterIds?: string[];
}

export default async function BookDetailsPage({ params }: { params: { id: string } }) {

  const { id } = await params;
  const book: Book | undefined = getBookById(id);
  return(
    <BookDetails book={book!} />

  )

}
