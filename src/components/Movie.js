import { Link } from "react-router-dom";

const Movie = ({ id, mImg, title, summary, genres }) => {
  return (
    <div>
      <img src={mImg} alt={title} />
      <h1 id={id}>
        <Link to={`/Movie/${id}`}>{title}</Link>
      </h1>
      <p2>{summary}</p2>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
