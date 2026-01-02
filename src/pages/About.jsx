import useDocumentTitle from "../hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About");

  return (
    <div className="container mx-auto px-4 py-12">

      {/*Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        About Sinhala Book Library
      </h1>

    
      <div className="bg-white p-6 rounded-xl shadow-sm border max-w-4xl mx-auto mb-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
          <span className="text-blue-600 text-2xl">📘</span>
          Our Mission
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The Sinhala Book Library is dedicated to preserving and promoting Sri Lankan literary
          heritage by providing easy access to classic and contemporary Sinhala literature.
          We believe in the power of stories to connect people, preserve culture, and inspire
          future generations.
        </p>
      </div>

      
      <h2 className="text-center text-xl font-semibold mb-8">Our Values</h2>

     
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

       
        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
          <div className="text-blue-600 text-3xl mb-3">📚</div>
          <h3 className="font-semibold text-lg mb-2">Literary Excellence</h3>
          <p className="text-gray-600 text-sm">
            We curate only the finest works of Sinhala literature, ensuring quality
            and cultural significance in every book we feature.
          </p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
          <div className="text-blue-600 text-3xl mb-3">💙</div>
          <h3 className="font-semibold text-lg mb-2">Cultural Preservation</h3>
          <p className="text-gray-600 text-sm">
            Preserving Sri Lanka's rich literary tradition for future generations
            through digital accessibility and promotion.
          </p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
          <div className="text-blue-600 text-3xl mb-3">👥</div>
          <h3 className="font-semibold text-lg mb-2">Community Focus</h3>
          <p className="text-gray-600 text-sm">
            Building a community of readers who appreciate and celebrate the beauty
            of Sinhala language and literature.
          </p>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow-sm border max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Built with Modern Technology</h2>

        <p className="text-gray-700 mb-4">
          This Single Page Application (SPA) is built using modern web technologies to provide
          a seamless browsing experience:
        </p>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>React:</strong> For building interactive user interfaces with functional components and hooks
          </li>
          <li>
            <strong>React Router:</strong> For seamless navigation and dynamic routing
          </li>
          <li>
            <strong>Tailwind CSS:</strong> For responsive and beautiful design
          </li>
          <li>
            <strong>Custom Hooks:</strong> For efficient data fetching and state management
          </li>
        </ul>
      </div>

    </div>
  );
}
