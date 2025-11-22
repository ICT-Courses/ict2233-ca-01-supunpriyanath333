import useFetch from "../hooks/useFetch";
import BookCard from "../components/BookCard";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Books() {
  useDocumentTitle("Books");
  const { data: books, loading, error } = useFetch("/data/books.json", 500);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">All Books</h2>
      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {books && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      )}
    </div>
  );
}
