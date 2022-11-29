import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/Events.jsx";
import Add from "./components/Add.jsx";
import EventDetails from './components/EventDetails.jsx'
import Search from "./components/Search.jsx";

var App = () => {
  const [data, setData] = useState([]);
  const [event, setEvent] = useState({});
  const [view, setView] = useState("allEvents");
  useEffect(() => {
    get();
  }, []);

  let get = () => {
    axios.get("http://127.0.0.1:3000/events/all").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  let showDetails = (obj)=>{
setEvent (obj)
setView('EventDetails')
  }
  return (
    <div>
      <nav>
        <div className="title">
          <h1> Events.tn </h1>
        </div>
        <div 
        className={
          view !== "add" ? "nav-unselected" : "nav-selected"
        }
        onClick={() => setView("add")}> AJOUTER UN EVENEMENT</div>
        <div
        className={
          view !== "allEvents" ? "nav-unselected" : "nav-selected"
        }
         onClick={() => setView("allEvents")}> List of Events</div>
        <Search />
      </nav>

      {view === "allEvents" && <List data={data} showDetails={showDetails} />}
      {view === "add" && <Add />}
      {view === "EventDetails" && <EventDetails item={event}  />}

    </div>
  );
};
export default App;
