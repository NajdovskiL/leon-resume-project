import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LogInWrapper = styled.div`

form {
  text-align: center;
}
  button {
  width: 70%;
  margin-top: 40px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  border-radius: 100px;
  border: 2px solid #EBEAED;
  padding: 5px;
  background-color: #25DAC5;
  color: white;
  cursor: pointer;
  margin-bottom: 40px;
}

input {
  width: 70%;
  margin-top: 40px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  border-radius: 100px;
  border: 2px solid #EBEAED;
  padding: 5px;
  padding-right: 10px;
}

.forgot-password {
 width: 70%;
 text-align: left;
 margin: 0 auto;
 padding-top: 20px;
 color: #797979;
 }

 .forgot-password span {
 color: #4c00b4;
 cursor: pointer;
 }
`


const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)


  const OnlogInSubmit = (e) => {
    e.preventDefault();


    const storedEmail = JSON.parse(localStorage.getItem("newEmail") || '""').trim();
    const storedPassword = JSON.parse(localStorage.getItem("newPsw") || '""').trim();
    const storedName = JSON.parse(localStorage.getItem("newName") || '""').trim();


    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();



    if (storedEmail === trimmedEmail && storedPassword === trimmedPassword) {
      console.log("Login successful, navigating to home...");
      navigate(`/home/${storedName.replace(/\s+/g, '-')}`);
    } else {
      console.log("Login failed, incorrect email or password");
    }
  };


  return (
    <LogInWrapper>
      <form onSubmit={OnlogInSubmit}>
        <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="forgot-password">Forgot Password?  <span>Click Here!</span></div>
        <button type="submit">Login</button>
      </form>
    </LogInWrapper>
  )
}

export default LogIn;