import React, { useContext } from "react";
import UserContext from "../UserContext/UserContext";
import styled from "styled-components";

const NavBarWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  
  .navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar-menu li:first-child {
  background-color: #1e0e62;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  font-size: 16px;
  color: #eee;
  text-transform: uppercase;
  cursor: none;
  pointer-events: none;
}

.navbar-menu li {
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  font-size: 16px;
  cursor: pointer;
  color: #1e0e62;
  text-transform: uppercase;
}

.navbar-menu li:hover {
  background-color: #25dac5;
  color: #fff;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.navbar-actions {
  display: flex;
  gap: 15px;
}

button {
  padding: 10px 20px;
  background-color: #eee;
  color: #1e0e62;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button:hover {
  background-color: #25dac5;
  color: white;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}
  a {
  Arial, sans-serif;
  text-decoration: none;
  }
`


const NavBar = (props) => {
  const { elements } = useContext(UserContext);



  return (
    <NavBarWrapper>
      <ul className="navbar-menu">
        <li>CV</li>
        <li> <a href="https://www.linkedin.com/in/leon-najdovski-1a692018a/" target="_blank" rel="noreferrer">Linkdin</a></li>
      </ul>
      <div className="navbar-actions">
        <button onClick={() => elements.EditAll()}>
          ClearAll</button>
        <button onClick={() => elements.handleEdit()}>
          {elements.edit ? "Save" : "Edit"}</button>
        <button onClick={props.download} style={{ pointerEvents: (elements.edit) ? "none" : "auto" }}>Download</button>
      </div>
    </NavBarWrapper>
  )
}

export default NavBar;