import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: books, loading, error } = useFetch("/data/books.json", 300);

  // FIX: Book lookup BEFORE conditional render + ALWAYS call hooks first
  const book = books?.find((b) => String(b.id) === id);

  // Hook must ALWAYS run (cannot be after any conditional return)
  useDocumentTitle(book ? book.title : "Book Details");

  // Now safe to return
  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  if (!book) return <div className="container mx-auto p-4">Book not found.</div>;

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Back button */}
      <button
        onClick={() => navigate("/books")}
        className="flex items-center text-blue-700 hover:underline mb-6"
      >
        ← Back to Books
      </button>

      {/* Main layout card */}
      <div className="bg-white p-6 rounded-xl shadow-sm grid md:grid-cols-3 gap-10">

        {/* Left image section */}
        <div className="border rounded-xl shadow-sm overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content section */}
        <div className="md:col-span-2">

          {/* Title + Author */}
          <h1 className="text-3xl font-bold mb-1">{book.title}</h1>
          <p className="text-gray-600 mb-4">by {book.author}</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {book.genre}
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {book.year}
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {book.language}
            </span>
          </div>

          {/* Description */}
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {book.description}
          </p>

          <hr className="my-6" />

          {/* Info grid */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="font-medium">Pages</p>
              <p className="text-gray-600">{book.pages}</p>
            </div>

            <div>
              <p className="font-medium">Published</p>
              <p className="text-gray-600">{book.year}</p>
            </div>

            <div>
              <p className="font-medium">Language</p>
              <p className="text-gray-600">{book.language}</p>
            </div>

            <div>
              <p className="font-medium">ISBN</p>
              <p className="text-gray-600">{book.isbn}</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
