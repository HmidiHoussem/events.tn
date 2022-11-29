import React, { useState } from 'react';
import Delete from './Delete.jsx';
import Update from './Update.jsx';
const EventDetails = (props) => {
  const [check,setCheck] = useState(false)

  return (
  <div className='blog-list-item' >
  


<h3 className='.blog-list-item-title'> { props.item.title } </h3>
<div className="blog-list-item-byline"> date : { props.item.time } ,still { props.item.availablePlaces }  available Places</div>
<div className ='blog-list-item-lede'>{ props.item.description }    </div>
   
 <img src={props.item.image} className="image" />
<br /> <br />
<Delete  item={props.item}/> || 
   <span className='update' onClick={()=>{setCheck(true)}}> 🔃 </span>
   { check && <Update  item={props.item} />}
   
  </div>
)
}
export default EventDetails;