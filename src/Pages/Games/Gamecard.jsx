import React from "react";
import { useQuery } from "react-query";
import instance from "../../config/axios.config";

const Gamecard = () => {
  const { isLoading, error,data} = useQuery(["games"], () =>
    instance.get("/filter"),
  );


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    {console.log(data)}
      {data && data.data.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.short_description}</p>
          <p>{game.genre}</p>
          <img src={game.thumbnail} alt={game.title}/>
        </div>
      ))}
    </>
  );
};

export default Gamecard;
