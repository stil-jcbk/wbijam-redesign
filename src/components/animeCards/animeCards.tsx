import "./animeCards.css";
import AnimeCard from "../animeCard/animeCard";
import { useEffect, useState } from "react";

type Anime = {
  title: string;
  url: string;
  poster: string;
};

export default function AnimeCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/animes.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error", error));
  });

  return (
    <div className="cards">
      {data.map((anime: Anime) => (
        <AnimeCard
          key={anime.title}
          title={anime.title}
          imgSrc={anime.poster}
        />
      ))}
    </div>
  );
}
