import axios from 'axios';
import React, { useState } from 'react';

const Update = (props) => {
    
    const [title,setTitle] = useState(props.item.title)
    const [desc,setDesc] = useState(props.item.description)
    const [time,setTime] = useState(props.item.time)
    const [image,setImage] = useState(props.item.image)
    const [number,setNumber] = useState(props.item.availablePlaces)

 let update = ()=>{
    axios.put(`http://localhost:3000/events/update/${props.item.id}`,{title,description : desc ,image,availablePlaces: number,time })
    .then((res)=>{console.log('updated')})
    .catch(err=>console.log(err))
    window.location.reload(false);
 }
    return (

  <div>
<br />
<br />
<form action="">

    <input type="text" placeholder='Event title... ' value={title} onChange={(event)=>setTitle(event.target.value)}/>
    <input type="text" placeholder='Descrioption...' value={desc} onChange={(event)=>setDesc(event.target.value)} />
    <input type="text" placeholder='Date...' value={time} onChange={(event)=>setTime(event.target.value)} />
    <input type="text" placeholder='Image link ' value={image} onChange={(event)=>setImage(event.target.value)} />
    <input type="text" placeholder='Number of places '  value={number} onChange={(event)=>setNumber(event.target.value)} />
</form>
<button onClick={()=>update()}> update  event </button>

   
  </div>
)}

export default Update;