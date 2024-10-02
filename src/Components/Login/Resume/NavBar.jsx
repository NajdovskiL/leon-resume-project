import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import "./NavBar.css";


const NavBar = (props) => {
    const { elements } = useContext(UserContext);
    const [clearAll, setClearAll] = useState(false);


    return (
        <div className="NavBar">
            <ul className="navbar-menu">
                <li>CV</li>
                <li> <a href="https://www.linkedin.com/in/leon-najdovski-1a692018a/" target="_blank">Linkdin</a></li>
            </ul>
            <div className="navbar-actions">
                <button onClick={() => elements.EditAll()}>
                    ClearAll</button>
                <button onClick={() => elements.handleEdit()}>
                    {elements.edit ? "Save" : "Edit"}</button>
                <button onClick={props.download} style={{ pointerEvents: (elements.edit) ? "none" : "auto" }}>Download</button>
            </div>
        </div>
    )
}

export default NavBar;