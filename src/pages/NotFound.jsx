import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        Page Not Found
      </h2>

      <p className="text-blue-700 mb-6 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </section>
  );
}
