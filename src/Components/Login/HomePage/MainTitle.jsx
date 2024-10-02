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

 h5 {
margin: 0;
font-family: 'Inter';
font-style: normal;
font-size: 22px;
line-height: 32px;
/* or 145% */
text-align: center;

/* Colors / Text */
color: rgba(21, 20, 57, 0.4);

mix-blend-mode: normal;
opacity: 0.7;

}
`
const MainTitle = props => {

    return (
        <TitleWrapper>
            <h3>Welcome on my 1st project {props.name}</h3>
            <h5>Here you can find everything that I learned in the past 12 months</h5>
        </TitleWrapper>
    )
}


export default MainTitle;