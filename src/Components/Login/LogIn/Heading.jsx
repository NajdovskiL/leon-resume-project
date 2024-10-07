import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  h1 {
 font-family: 'Inter';
 font-style: normal;
 font-size: 62px;
 line-height: 52px;
 letter-spacing: -0.4px; 
 color:  #1E0E62;
 }

p {
margin-top: 20px;
font-family: 'Inter';
font-style: normal;
font-size: 16px;
line-height: 26px;
color: rgba(21, 20, 57, 0.4);
}

button {
  width: 30%;
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
`


const Heading = () => (
  <HeadingWrapper>
    <h1>
      Hi there, I am Leon and I am a Frontend Developer
    </h1>
    <p>
      Dear Viewer, welcome to my Resume. I am Leon Najdovski and in front of you is my first project! This Sign Up form is part of the project itself, so please create account so you can proceed and see my Resume.
    </p>
    <Link to="/home">
      <button>View Resume</button>
    </Link>
    <Link to="/login">
      <button>Create Account</button>
    </Link>
  </HeadingWrapper>


)

export default Heading;