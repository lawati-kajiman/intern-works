import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.scss";

const Login = ({ addinputvalue }) => {
  const navigate = useNavigate();
  const [Inputtext, setInputtext] = useState({ username: "", password: "" });
  const [click, setclick] = useState(false);

  const [isvalid, setisvalid] = useState("");

  const validateemail = (Inputtext) => {
    const syntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return syntax.test(Inputtext.username);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputtext({
      ...Inputtext,
      [e.target.name]: value,
    });
    const valid = validateemail(Inputtext);
    setisvalid(valid);
  };

  const handleSubmit = () => {
    addinputvalue(Inputtext);
    navigate("/Homepage");
  };
  const clear = () => {
    setInputtext({ username: "", password: "" });
  };

  return (
    <>
      <div className="Login-page">
        <p>This is your login page </p>
        <div className="Login-page-card">
          {/* <form>
            <label> e-mail:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              value={Inputtext.username}
              onChange={handleChange}
            />
            {isvalid ? (
              <span className="valid">Valid email address</span>
            ) : (
              <span className="invalid">Invalid email address</span>
            )}
          </form>
          <form>
            <label> Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={Inputtext.password}
              onChange={handleChange}
            />
          </form> */}
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch',},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="text" id="outlined-basic" label="E-mail" variant="outlined" name="username" value={Inputtext.username} onChange={handleChange}/>
      <TextField type="password" id="outlined-basic" label="Password" variant="outlined" name="password" value={Inputtext.password} onChange={handleChange}/>
    </Box>

        </div>
      </div>
      <Stack spacing={2} direction="row" className="Stack" >
      <Button variant="contained" onClick={clear}>Clear</Button>
        {/* <button onClick={() => navigate("/Homepage")}>Log in</button> */}
        <Button variant="contained" onClick={() => setclick(true)}>submit</Button>
        {isvalid ? (
          <Button variant="contained" onClick={handleSubmit}>Login</Button>
        ) : (
          <p>enter the correct format</p>
        )}
      </Stack>
      {click && (
        <div>
          <p>{Inputtext.username}</p>
          <p>{Inputtext.password}</p>
        </div>
      )}
    </>
  );
};

export default Login;
