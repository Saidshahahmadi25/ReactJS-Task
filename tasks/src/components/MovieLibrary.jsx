import { useState } from "react";

function MovieLibrary() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  const movies = [
    { id: 1, title: "Inception", genre: "sci-fi", rating: "⭐ 8.8" },
    { id: 2, title: "Interstellar", genre: "sci-fi", rating: "⭐ 8.6" },
    { id: 3, title: "The Dark Knight", genre: "action", rating: "⭐ 9.0" },
    { id: 4, title: "Titanic", genre: "romance", rating: "⭐ 7.8" },
    { id: 5, title: "Joker", genre: "drama", rating: "⭐ 8.4" },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "all" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🎬 Movie Library
        </h2>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Genres</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="action">Action</option>
            <option value="romance">Romance</option>
            <option value="drama">Drama</option>
          </select>
        </div>

        {/* Movie List */}
        <div className="space-y-3">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {movie.title}
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {movie.genre}
                  </p>
                </div>

                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full font-semibold">
                  {movie.rating}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No movies found 
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieLibrary;
