import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import BookCard from "../components/BookCard";
import CategoryFilter from "../components/Filter";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Books() {
  useDocumentTitle("Books");

  const { data: books, loading, error } = useFetch("/data/books.json", 500);
  const [activeGenre, setActiveGenre] = useState("All Books");


  const genres = useMemo(() => {
    if (!books) return [];

    const counts = {};

    books.forEach((b) => {
      counts[b.genre] = (counts[b.genre] || 0) + 1;
    });

    return [
      { name: "All Books", count: books.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count }))
    ];
  }, [books]);

  // Filter
  const filteredBooks = useMemo(() => {
    if (!books) return [];
    if (activeGenre === "All Books") return books;
    return books.filter((b) => b.genre === activeGenre);
  }, [books, activeGenre]);

  return (
    <div className="container mx-auto px-4 py-10">

     
      <h2 className="text-2xl font-semibold mb-4">Book Collection</h2>

    
      {books && (
        <CategoryFilter
          categories={genres}
          activeCategory={activeGenre}
          onChange={setActiveGenre}
        />
      )}

      
      {books && (
        <p className="text-gray-600 mb-6">
          Showing {filteredBooks.length} books
        </p>
      )}

      {/* Loading or Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

    
      {books && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

    </div>
  );
}
