import { useContext, useState } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import AnimeList from '../components/AnimeList';

function Home() {
  const { animeList } = useContext(AnimeContext);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnime = animeList.filter(anime =>
    (filter === 'All' || anime.genre === filter) &&
    anime.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Anime</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full md:w-1/2"
        />
        <div className="flex items-center">
          <label className="mr-2">Filter by genre:</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border border-gray-300 rounded p-2"
          >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            {/* Add other genres as needed */}
          </select>
        </div>
      </div>
      <AnimeList animeList={filteredAnime} />
    </div>
  );
}

export default Home;
