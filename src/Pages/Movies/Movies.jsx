import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
    .get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=446b81e4"
    )
    .then((response) => {
      const data=response.data
      setmovies(data);
      console.log(data)
    });
  }, []);

  return (
    <div className="Movies">
     <p>{movies.Title}</p>
     <img src={movies.Poster} alt={movies.title}/>
     <p>{movies.Actors}</p>
     <p>{movies.Type}</p>
    </div>
  );
};

export default Movies;
