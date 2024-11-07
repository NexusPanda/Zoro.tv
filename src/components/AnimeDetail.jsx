import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AnimeContext } from '../context/AnimeContext';

function AnimeDetail() {
  const { id } = useParams();
  const { animeList } = useContext(AnimeContext);
  const anime = animeList.find(a => a.id === parseInt(id));

  return anime ? (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4">{anime.name}</h1>
      <p className="text-gray-700 mb-2"><strong>Genre:</strong> {anime.genre}</p>
      <p className="text-gray-700"><strong>Description:</strong> {anime.description}</p>
    </div>
  ) : (
    <p className="text-center text-gray-500">Anime not found.</p>
  );
}

export default AnimeDetail;
