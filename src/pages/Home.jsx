import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");
  const { data: books, loading, error } = useFetch("/data/books.json", 500);
  const featured = books ? books.slice(0, 6) : [];

  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Featured Books</h2>
          <a href="/books" className="text-blue-600">View All</a>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {books && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
            {featured.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        )}
      </section>

      <section className="bg-blue-600 text-white py-10 text-center">
        <h3 className="text-lg md:text-2xl font-semibold mb-2">Start Your Library Journey Today</h3>
        <p className="text-sm md:text-base mb-4">Immerse yourself in the rich tradition of Sinhala literature.</p>
        <a href="/books" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">View All Books</a>
      </section>
    </>
  );
}
