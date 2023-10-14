import "./animeScreen.css";
import EpisodesList from "../episodesList/episodesList";
import { useEffect, useState } from "react";

type AnimeScreenProps = {
  title: string;
  poster: string;
};

export default function AnimeScreen(props: AnimeScreenProps) {
  const [animeData, setAnimeData] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("/animes.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i]["title"].toLowerCase() === props.title.toLowerCase()) {
            setAnimeData(data[i]["description"]);
            break;
          }
        }
      })
      .catch((error) => console.error("Error", error));

    fetch("/episodes.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i]["title"].toLowerCase() === props.title.toLowerCase()) {
            setSeries(data[i]["series"]);
          }
        }
      });
  }, []);

  return (
    <div
      onClick={(event) => {
        let eventTarget = event.target as Element;
        if (eventTarget.id === "screen-bg") {
          eventTarget.parentElement?.remove();
          let htmlElement = document.getElementsByTagName(
            "html"
          )[0] as HTMLElement;
          htmlElement.style.overflow = "scroll";
        }
      }}
      id="screen-bg"
      className="screen-background"
    >
      <div className="screen">
        <div className="content">
          <div className="anime">
            <div className="poster">
              <img src={props.poster} alt="" />
            </div>
            <span className="title">{props.title}</span>
          </div>
          <div className="more">
            <div className="description">
              <p>{animeData}</p>
            </div>
            {series.length > 0 ? <EpisodesList series={series} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
