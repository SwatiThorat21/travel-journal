import React from "react";

export default function Card(props) {
 
  return (
    <div className="cards">
      <img
        src= {props.item.imageUrl}
        alt="location_image"
        className="card-img"
      />
      <div className="decription">

      <div className="google">
        <img src="../../location-img.png" alt="logo_img" className="location-img"/>
          {props.item.location}
        <a href= {props.item.googleMapsUrl} className="g-maps">View on google maps</a>
      </div>
      <h2>{props.item.title}</h2>
      <h3>{props.item.startDate} - {props.item.endDate}</h3>
      <p>
        {props.item.description}
      </p>
      </div>
    </div>
  );
}
