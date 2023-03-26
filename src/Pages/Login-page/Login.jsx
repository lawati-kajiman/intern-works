import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate=useNavigate();
  const [Inputtext, setInputtext] = useState({ username: "", password: "" });


  const handleChange = (e) => {
    const value = e.target.value;
    setInputtext({
      ...Inputtext,
      [e.target.name]: value,
    });
  };
  const clear = () => {
    setInputtext({ username: "", password: "" });
  };

  return (
    <>
      <div className="Login-page">
        <p>This is your login page </p>
        <div className="Login-page-card">
          <div>
            <p> Username:</p>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={Inputtext.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <p> Password:</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={Inputtext.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="Buttons">
        <button onClick={clear}>Clear</button>
        <button onClick={() => navigate("/Homepage")}>Log in</button>

      </div>
    </>
  );
};

export default Login;
