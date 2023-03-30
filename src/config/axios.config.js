import axios from "axios";


const instance = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
  headers: {
    'X-RapidAPI-Key': '0257560183msh20816592a59decap195f57jsnb7abce91f5d7',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
  })

  export default instance;