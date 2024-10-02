import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  width: 40%;
  margin: 0 auto;

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
`


const Heading = () => (
  <HeadingWrapper>
    <h1>
      Hi there, I am Leon and I am a Frontend Developer
    </h1>
    <p>
      Hello HR Manager, I am Leon Najdovski and this is my project. Please write your name so you can see my Project and Resume.
    </p>
  </HeadingWrapper>


)

export default Heading;