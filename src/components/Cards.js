import React from "react";

export default function Card(props) {
    console.log(props)
  return (
    <div className="cards">
      <img
        src= {props.imageUrl}
        alt="location_image"
        className="card-img"
      />
      <div className="google">
        <img src="../../location-img.png" alt="logo_img"/>
          {props.location}
        <a href= {props.googleMapsUrl}>View on google maps</a>
      </div>
      <h2>{props.title}</h2>
      <h3>{props.startDate} - {props.endDate}</h3>
      <p>
        {props.description}
      </p>
    </div>
  );
}
