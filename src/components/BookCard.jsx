import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow transition-transform duration-300 ease-in-out 
                    hover:shadow-lg hover:scale-105 w-[175px] h-[370px] overflow-hidden flex flex-col">

      {/* IMAGE */}
      <div className="h-[250px] w-full overflow-hidden">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT + BUTTON */}
      <div className="flex flex-col flex-1 p-2">

        {/* FIXED TEXT AREA */}
        <div className="h-[80px] overflow-hidden">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">
            {book.title}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-1">
            {book.author}
          </p>

          <div className="flex gap-2 mt-1">
          <span className="text-[10px] bg-gray-100 px-1 py-[2px] rounded border border-gray-200">
              {book.year}
         </span>
         <span className="text-[10px] bg-gray-100 px-1 py-[2px] rounded border border-gray-200">
            {book.genre}
           </span>
 </div>
        </div>

        {/* BUTTON FIXED AT BOTTOM */}
        <div className="mt-auto">
          <Link
            to={`/books/${book.id}`}
            className="block bg-blue-900 text-white text-xs text-center py-1 rounded-md"
          >
            View
          </Link>
        </div>

      </div>
    </div>
  );
}
