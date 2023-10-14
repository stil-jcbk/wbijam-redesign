import { useEffect, useState } from "react";
import "./episodesList.css";

type EpisodesListProps = {
  series: never[];
};

type Series = {
  title: string;
  url: string;
};

export default function EpisodesList(props: EpisodesListProps) {
  const [connectedSeries, setConnectedSeries] = useState<Series[]>([]);

  useEffect(() => {
    let connectedSeries: Series[] = [];
    for (let i = 0; i < props.series.length; i++) {
      let arr = props.series[i] as Series[];
      for (let k = arr.length - 1; k >= 0; k--) {
        connectedSeries.push(arr[k]);
      }
      console.log(connectedSeries);
    }
    setConnectedSeries(connectedSeries);
  }, []);

  return (
    <div className="episodes">
      <ul>
        {connectedSeries.map((episode: Series) => (
          <li
            onClick={() => {
              window.open(episode.url, "_blank");
            }}
            className="episodeItem"
          >
            <span>{episode.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
