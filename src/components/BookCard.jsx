import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{book.category}</span>
          <Link
            to={`/books/${book.id}`}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
