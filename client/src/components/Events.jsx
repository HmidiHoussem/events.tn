import React from "react";
import OneEvent from "./OneEvent.jsx";

const Events = (props) => (
  <div>

  <h1>Event List</h1>
    <h4>There are {props.data.length} events , enjoy them . </h4>
    
  <div className='events' >
    {props.data.map((item, index) => (
      <div key={index} className='box' >
        <OneEvent item={item} showDetails={props.showDetails} />
      </div>
    ))}
  </div>
    </div>
);

export default Events;
