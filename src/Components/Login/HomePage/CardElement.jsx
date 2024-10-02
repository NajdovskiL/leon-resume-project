import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`

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
`


const CardElement = props => {
  return (
    <CardWrapper>
      <div className="card">
        <img src={props.img} alt="Card Image" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.desc}</p>
          <Link to="/home/resume">
            <button className="card-button">Learn More</button>
          </Link>
        </div>
      </div>
    </CardWrapper>

  )
}

export default CardElement;