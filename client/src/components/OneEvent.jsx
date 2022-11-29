import React, { useState } from 'react';
import Delete from './Delete.jsx';
import Update from './Update.jsx';
const OneEvent = (props) => {
  const [check,setCheck] = useState(false)

  return (
  <div className='event' onClick={()=>props.showDetails(props.item)} >
    <h3>
     { props.item.title } 

    </h3>
      <br /> {props.item.time } <br /><br />
 <img src={props.item.image} className="image" />


  </div>
)
}
export default OneEvent;