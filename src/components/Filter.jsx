export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onChange(cat.name)}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            activeCategory === cat.name
              ? "bg-blue-700 text-white border-blue-700"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {cat.name} ({cat.count})
        </button>
      ))}
    </div>
  );
}
