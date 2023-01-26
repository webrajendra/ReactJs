function Movie(props) {
  return (
    <div className="movieWrap">
      <div className="moviePoster">
        <img src={props.poster} />
      </div>
      <p>
        Movie Name: <b>{props.title}</b>
      </p>
      <p>
        Year: <b>{props.year}</b>
      </p>
      <p>
        IMDB Rating: <b> {props.rating}</b>
      </p>
    </div>
  );
}

export default Movie;
