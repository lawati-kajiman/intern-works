import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({addinputvalue}) => {
  const navigate=useNavigate();
  const [Inputtext, setInputtext] = useState({ username: "", password: "" });
   const [click, setclick] = useState(false);

   const [isvalid, setisvalid] = useState("");

   const validateemail=(Inputtext)=>{
    const syntax=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return syntax.test(Inputtext.username);

   }

  const handleChange = (e) => {
    const value = e.target.value;
    setInputtext({
      ...Inputtext,
      [e.target.name]: value,
    });
    const valid =validateemail(Inputtext);
    setisvalid(valid)
  };

  const handleSubmit = () =>{
    addinputvalue(Inputtext);
    navigate("/Homepage")
  }
  const clear = () => {
    setInputtext({ username: "", password: "" });
  };

  return (
    <>
      <div className="Login-page">
        <p>This is your login page </p>
        <div className="Login-page-card">
          <div>
            <p> e-mail:</p>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={Inputtext.username}
              onChange={handleChange}
            />
            {isvalid ? <span className="valid">Valid email address</span> : <span className="invalid">Invalid email address</span>}
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
        {/* <button onClick={() => navigate("/Homepage")}>Log in</button> */}
        <button onClick={()=>setclick(true)}>submit</button> 
         {
          isvalid ? <button onClick={handleSubmit}>Login</button> :<p>enter the correct format</p>
         }
      </div>
       {

        click && (
          <div>
            <p>{Inputtext.username}</p>
            <p>{Inputtext.password}</p>
          </div>
        )
      } 
    </>
  );
};

export default Login;
