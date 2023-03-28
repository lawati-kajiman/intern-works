import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material"

const Movies = () => {
  const navigate=useNavigate();
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
     <Button variant="outlined" onClick={()=>navigate("/Game")}>game</Button>
    </div>
  );
};

export default Movies;
