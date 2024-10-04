import React from "react";
import CardElement from "./CardElement";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainTitle from "./MainTitle";

const HomeWrapper = styled.div`

`

const HomePage = () => {
    const { user } = useParams()

    return (
        <HomeWrapper>
            <MainTitle name={user.replace("-", " ")} />
            <CardElement />
        </HomeWrapper>
    )
}


export default HomePage;