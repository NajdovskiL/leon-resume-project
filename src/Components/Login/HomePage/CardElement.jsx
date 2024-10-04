import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;

.card {
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 225px;
  display: block;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 8px;
  color:  #1E0E62;
}

.card-description {
  font-size: 1em;
  color: #555;
  margin-bottom: 16px;
}

.card-button {
  background-color: #25DAC5;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card-button:hover {
  background-color: #0056b3;
}

a {
text-decoration: none;
color: white;
}
`


const CardElement = () => {
  return (
    <CardWrapper>
      <div className="card">
        <img src="https://img.freepik.com/free-psd/clean-modern-resume-cv-template_237398-297.jpg" alt="ResumeCard" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Resume</h2>
          <p className="card-description">Here you can see my resume, also you can see more functionality. You can edit, change pictures, and also download it!</p>
          <Link to="/home/resume">
            <button className="card-button">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKtLxzyfxxPaYKsCm3iBWsFzQVfY5utYNOA&s" alt="GitHubCard" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">GitHub</h2>
          <p className="card-description">If you want to see the code of this project, feel free to press on the button. And remember this is my first project!</p>
          <button className="card-button"> <a href="https://github.com/NajdovskiL" target="_blank" rel="noreferrer" >See Code!</a></button>
        </div>
      </div>
    </CardWrapper>

  )
}

export default CardElement;