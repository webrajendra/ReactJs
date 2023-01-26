function Movie(props) {
  return (
    <div className="movieWrap">
      <div className="moviePoster">
        <img src={props.poster} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.rating}</p>
    </div>
  );
}

export default Movie;
