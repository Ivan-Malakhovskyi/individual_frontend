import { Link } from "react-router";

export const GameListItem = ({ id, title, genre, rating, img }) => {
  return (
    <Link to={`/games/${id}`} key={id}>
      <span>{img}</span>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{"⭐".repeat(rating)}</p>
    </Link>
  );
};
