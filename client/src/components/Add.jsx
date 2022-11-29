import axios from "axios";
import React, { useState } from "react";

const Add = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(
    "https://www.belfercenter.org/themes/belfer/images/event-default-img-med.png"
  );
  const [number, setNumber] = useState(10);

  let add = () => {
    axios
      .post("http://localhost:3000/events/add", {
        title,
        description: desc,
        image,
        availablePlaces: number,
        time,
      })
      .then((res) => console.log("event added ", res))
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
  };
  return (

    <div>

    <div className="blog-list-item">
      <h2 className="New-Post-Title">please add your events here </h2>
      <br />
      <form className="New-Post-Form">
        <input
          type="text"
          className="search"
          placeholder="Event title... "
          onChange={(event) => setTitle(event.target.value)}
          />
        <input
          type="text"
          className="search"
          placeholder="Descrioption..."
          onChange={(event) => setDesc(event.target.value)}
          />
        <input
          type="text"
          className="search"
          placeholder="Date..."
          onChange={(event) => setTime(event.target.value)}
          />
        <input
          type="text"
          className="search"
          placeholder="Image link "
          onChange={(event) => setImage(event.target.value)}
          />
        <input
          type="text"
          className="search"
          placeholder="Number of places "
          onChange={(event) => setNumber(event.target.value)}
          />
      </form>
      <button           className="btn btn-secondary searchButton"
 onClick={() => add()}> add event </button>
    </div>
 </div>
  );
};

export default Add;
