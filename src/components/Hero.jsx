export default function Hero() {
  return (
    <section className="relative">
      <div
        className="h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/library-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white">
        <div className="max-w-2xl">
          <div className="text-5xl mb-2">📖</div>
          <h1 className="text-2xl md:text-3xl font-semibold">Welcome to Sinhala Book Library</h1>
          <p className="text-sm md:text-base my-3">
            Explore classic and contemporary Sinhala literature - stories and novels that shaped our culture.
          </p>
          <a
            href="/books"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Browse Books
          </a>
        </div>
      </div>
    </section>
  );
}
