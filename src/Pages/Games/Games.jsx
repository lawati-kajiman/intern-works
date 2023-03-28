import React,{useState,useEffect}from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const Games = () => {

  const [onlinegames, setonlinegames] = useState([]);

  const columns=[
    {
      field:"id",headerName:"Id",width:100
    },
    {
      field:"thumbnail",headerName:"Thumbnail",width:400
    },
    {
      field:"title",headerName:"Title",width:300
    },
    {
      field:"url",headerName:"Game-Url",width:500
    },
    {
      field:"genre",headerName:"Genre",width:430
    }
  ]

    useEffect (() => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
        params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
        headers: {
          'X-RapidAPI-Key': '0257560183msh20816592a59decap195f57jsnb7abce91f5d7',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      axios.request(options).then(response =>{
        const parsedata=response.data.map(item=>({
          id:item.id,
          thumbnail:item.thumbnail,
          title:item.title,
          url:item.game_url,
          genre:item.genre,

        }));
        setonlinegames(parsedata);
        
    })
    .catch(function (error) {
        console.error(error);
    });
    }, []);
    
  return (
    <>
    {console.log('onlinegames',onlinegames)}
    {onlinegames && 
    <Box height = '50em'>
      
      <DataGrid
         rows={onlinegames}
         columns={columns}
         pageSize={5}
         rowsPerPageOptions={[25]}
         checkboxSelection
         disableSelectionOnClick
        />
    </Box>
    }
    </>
  )
}

export default Games;