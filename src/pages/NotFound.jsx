export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <h1 className="text-4xl font-bold mb-2 text-blue-600">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>
      <a href="/" className="text-blue-600 underline">Go Home</a>
    </div>
  );
}
