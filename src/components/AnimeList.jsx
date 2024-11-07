import { Link } from 'react-router-dom';

function AnimeList({ animeList }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {animeList.length > 0 ? (
        animeList.map(anime => (
          <div key={anime.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{anime.name}</h2>
            <p className="text-gray-600">Genre: {anime.genre}</p>
            <Link
              to={`/anime/${anime.id}`}
              className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No anime matches your search criteria.</p>
      )}
    </div>
  );
}

export default AnimeList;
