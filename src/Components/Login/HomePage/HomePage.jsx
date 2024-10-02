import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import styled from "styled-components";
import cards from "./Library";
import { useParams } from "react-router-dom";
import MainTitle from "./MainTitle";

const HomeWrapper = styled.div`
.card-div {
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100vh
}

`


const HomePage = () => {
    
    const [card, setCard] = useState([]);
    const {user} = useParams()

    useEffect(() => {
        setCard(cards)
    }, [card])
    
    return(
         <HomeWrapper>
               <MainTitle name={user}/>
              <div className="card-div">
                {card.map( el => (
                    <CardElement  
                title={el.title}
                key={el.id}
                desc={el.desc}
                img={el.img}/>
                ))}
              </div>
         </HomeWrapper>
           
        
       
    )
}


export default HomePage;