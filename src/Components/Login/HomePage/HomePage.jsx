import React from "react";
import CardElement from "./CardElement";
import styled from "styled-components";
import MainTitle from "./MainTitle";

const HomeWrapper = styled.div`

`

const HomePage = () => {

    return (
        <HomeWrapper>
            <MainTitle />
            <CardElement />
        </HomeWrapper>
    )
}


export default HomePage;