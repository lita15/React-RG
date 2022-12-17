function Task1({ val, all, basic, loadingA, loadingB, loadingC, creator }) {
  if (val === "All") {
    return loadingA ? (
      <h2>Loading...</h2>
    ) : (
      <div>
        {/* {all.species} */}
        <img src={all.image} alt="" />
        <h2>{all.title}</h2>
        <h4>{all.original_title}</h4>
        <p>{all.release_date}</p>
        <p>Rating: {all.rt_score}</p>
        <p>Director: {all.director}</p>
        <p>Producer: {all.producer}</p>
        <p>{all.description}</p>
      </div>
    );
  }
  if (val === "Basic") {
    return loadingB ? (
      <h2>Loading...</h2>
    ) : (
      <>
        <h2>{basic.title}</h2>
        <p>{basic.description}</p>
      </>
    );
  }
  if (val === "Basic with Creator") {
    return loadingC ? (
      <h2>Loading...</h2>
    ) : (
      <>
        <h2>{creator.title}</h2>
        <p>Director: {creator.director}</p>
        <p>Producer: {creator.producer}</p>
        <p>{creator.description}</p>
      </>
    );
  }
}

export default Task1;
