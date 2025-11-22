import useDocumentTitle from "../hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About");

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">About Sinhala Library</h2>
      <p className="text-gray-700 leading-relaxed">
        Sinhala Library is a digital space dedicated to preserving and celebrating Sri Lankan literature.
        Our mission is to promote reading habits and make Sinhala classics accessible to all generations.
      </p>
    </div>
  );
}
