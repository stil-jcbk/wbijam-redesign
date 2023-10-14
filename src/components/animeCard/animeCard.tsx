import AnimeScreen from "../animeScreen/animeScreen";
import "./animeCard.css";
import ReactDOM from "react-dom";

type AnimeCardProps = {
  title: string;
  imgSrc: string;
};

export default function AnimeCard(props: AnimeCardProps) {
  return (
    <div
      onClick={() => {
        let nodeContainer = document.createElement("div");
        document.body.appendChild(nodeContainer);
        ReactDOM.render(
          <AnimeScreen title={props.title} poster={props.imgSrc} />,
          nodeContainer
        );
        let htmlElement = document.getElementsByTagName(
          "html"
        )[0] as HTMLElement;
        htmlElement.style.overflow = "hidden";
      }}
      className="anime-card"
    >
      <span className="title">{props.title}</span>
      <div className="watch" />
      <img src={props.imgSrc} alt="anime" />
    </div>
  );
}
