import React from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
margin-top: 20px;

 h3 {

margin: 0;
font-family: 'Inter';
font-style: normal;
font-size: 42px;
line-height: 52px;
/* identical to box height, or 124% */
text-align: center;
letter-spacing: -0.4px;
color: #1E0E62;



 }

 p {
margin: 0;
font-family: 'Inter';
font-style: normal;
font-size: 16px;
line-height: 32px;
/* or 145% */
text-align: center;
mix-blend-mode: normal;
opacity: 0.7;
width: 70%;
margin: 0 auto;
}
`
const MainTitle = props => {

    return (
        <TitleWrapper>
            <h3>Welcome on my 1st project {props.name}</h3>
            <p>Thank you for creating account. On your left you will find my resume. Inside you will find more functionalities. Please free to play with them. And on your right you can see exactly this code.</p>
        </TitleWrapper>
    )
}


export default MainTitle;