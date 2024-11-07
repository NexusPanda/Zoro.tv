import { createContext, useState } from 'react';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([
    { id: 1, name: "Naruto", genre: "Action", description: "A ninja's journey to become Hokage." },
    { id: 2, name: "My Hero Academia", genre: "Action", description: "Students train to become heroes." },
    { id: 3, name: "Your Lie in April", genre: "Romance", description: "A story of love and music." },
    { id: 4, name: "Attack on Titan", genre: "Fantasy", description: "Humanity fights against Titans." },
    { id: 5, name: "Fullmetal Alchemist", genre: "Fantasy", description: "A high school chemistry teacher struggles to live up to her full potential." },
    { id: 6, name: "One Piece", genre: "Action", description: "A young man who wants to become the King of Pirates." },
    { id: 7, name: "Dragon Ball", genre: "Fantasy", description: "A  Saiyan who wants to become the strongest int the Universe." },
    { id: 8, name: "Shingeki no Kyojin", genre: "Action", description: "A young man is summoned to fight against the evil Shingeki." },
    { id: 9, name: "Death Note", genre: "Mystery", description: "A young man have a Death Note and he have done a lot of bad things." },
    { id: 10, name: "Bleach", genre: "Mystery", description: "Story about a man who is the strongest beign in the world." },
    { id: 11, name: "Steins;Gate", genre: "Sci-fi", description: "A young man is summoned to fight against the evil Shingeki." },
    { id: 12, name: "Demon Slayer", genre: "Action", description: "A young boy fight for his sister to turn her into a human." },
  ]);

  return (
    <AnimeContext.Provider value={{ animeList, setAnimeList }}>
      {children}
    </AnimeContext.Provider>
  );
};
