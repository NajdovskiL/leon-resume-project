import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const SignUpWrapper = styled.div`

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

.input-password {
  position: relative;
  display: 70%;
}

.psw-icon {
    position: absolute;
    right: 95px;
    top: 77%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #666;
}

.psw-icon:hover {
  color: #25DAC5;
}
`


const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };



  const onChange = (e) => {
    e.preventDefault()
    if (name !== "" && password !== "" && email !== "") {
      localStorage.setItem("newName", JSON.stringify(name));
      localStorage.setItem("newPsw", JSON.stringify(password));
      localStorage.setItem("newEmail", JSON.stringify(email));
      alert("Thank you for creating account. Normally this should be sent to your email, but this is demo version.")
      setName("")
      setPassword("")
      setEmail("")
    }
  }


  return (
    <SignUpWrapper >
      <form onSubmit={onChange}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="input-password">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            className="psw-icon"
            icon={isPasswordVisible ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
          />
        </div>
        <button>Create an Account</button>
      </form>
    </SignUpWrapper>
  )
}


export default SignUp;