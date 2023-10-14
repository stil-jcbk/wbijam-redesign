import "./animeCard.css";

type AnimeCardProps = {
  title: string;
  imgSrc: string;
};

export default function AnimeCard(props: AnimeCardProps) {
  return (
    <div className="anime-card">
      <span className="title">{props.title}</span>
      <div className="watch" />
      <img src={props.imgSrc} alt="anime" />
    </div>
  );
}
