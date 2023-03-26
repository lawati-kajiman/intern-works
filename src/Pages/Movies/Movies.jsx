import React, {useEffect,useState} from 'react'
import axios from 'axios';

const Movies = () => {
    const [movies, setmovies] = useState([]);

    const getmovies = async () =>{
        const response=await axios.get("https://api.themoviedb.org/3/movie/550?api_key=870b0f8430bb27fca6e67d20618df902")
        console.log(response);
        setmovies(response.data);
    }

    useEffect( () => {
        getmovies([]);
    },[])
    
  return (
    <div className='Movies-card'>
     {
        movies.map((movie)=>(
          <div
        className='movie-card'
        key={movie.title}
        >
          <p>{movie.title}</p>
          </div>
        ))
     }
    </div>
  )
}

export default Movies