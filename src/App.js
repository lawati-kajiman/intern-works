import './App.css';
import Login from './Pages/Login-page/Login';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from './Pages/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
