import React from "react";
import OneEvent from "./OneEvent.jsx";

const Events = (props) => (
  <div>
    <h4> Events Component </h4>
    There are {props.data.length} items.
    {props.data.map((item, index) => (
      <div key={index}>
        <OneEvent item={item} />
      </div>
    ))}
  </div>
);

export default Events;
