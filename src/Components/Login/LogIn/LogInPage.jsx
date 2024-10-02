import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
`

const LogInPage = () => {
  return (
    <Wrapper>
      <Heading />
      <Card />
    </Wrapper>



  )
}


export default LogInPage;