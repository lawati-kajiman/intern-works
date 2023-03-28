import React,{useState} from 'react';
import './App.css';
import Login from './Pages/Login-page/Login';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from './Pages/Movies/Movies';
import Games from './Pages/Games/Games';



function App() {
  const [inputvalue, setinputvalue] = useState([]);

  const addinputvalue=(Inputtext)=>{
    setinputvalue([...inputvalue, Inputtext])
  }
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Game" element={<Games/>} />
          <Route path="/" element={<Login addinputvalue={addinputvalue}/>} />
          <Route path="/Homepage" element={<Homepage value={inputvalue}/>} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
