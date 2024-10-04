
import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "./SignUp";
import LogIn from "./LogIn";



const CardWrapper = styled.div` 
 width: 40%;
 margin: 0 auto;
 background-color: white;
 border-radius: 10px;
 border: 1px solid gray;


 .title-box {
  display: flex;
  justify-content: space-evenly;
}

 .sign-box {
  padding: 20px;
  flex-basis: 50%;
  text-align: center;
  border-bottom: 1px solid #1E0E62;
  /* Text / Label */
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1E0E62;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.log-box {
   padding: 20px;
  flex-basis: 50%;
  text-align: center;
  border-bottom: 1px solid #1E0E62;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1E0E62;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.grey {
  padding: 20px;
  flex-basis: 50%;
  text-align: center;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(21, 20, 57, 0.4);
  cursor: pointer;
}
`


const Card = () => {


  const [action, setAction] = useState("Log In")

  const handleSignUpClick = () => {
    setAction("Sign Up");
  };

  const handleLogInClick = () => {
    setAction("Log In");
  };

  return (
    <CardWrapper>
      <div className="card-box" >
        <div className="title-box">
          <div className={action === "Log In" ? "log-box" : "grey"} onClick={handleLogInClick}>
            <h4>LOGIN</h4>
          </div>
          <div className={action === "Sign Up" ? "sign-box" : "grey"} onClick={handleSignUpClick}>
            <h4>SIGN UP</h4>
          </div>
        </div>
        {action === "Sign Up" && <SignUp />}
        {action === "Log In" && <LogIn />}

      </div>
    </CardWrapper>

  )
}



export default Card;