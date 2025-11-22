import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: books, loading, error } = useFetch("/data/books.json", 300);

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-600">{error}</div>;

  const book = books.find((b) => b.id === id);
  useDocumentTitle(book?.title || "Book Details");

  if (!book) return <div className="container mx-auto p-4">Book not found.</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <img src={book.image} alt={book.title} className="rounded-lg shadow" />
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-500 mb-4">{book.author} • {book.year}</p>
          <p className="text-gray-700 mb-6">{book.description}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
