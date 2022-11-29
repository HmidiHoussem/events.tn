import axios from 'axios';
import React from 'react';

const Delete = (props) => {
    let remove =()=>{
        alert(`you are going to delete : ${props.item.title}`)
        axios.delete(`http://localhost:3000/events/delete/${props.item.id}`)
        .then((res)=>{console.log('deleted')})
        .catch(err=>console.log(err))
        window.location.reload(false);
    }
    return (
  <span className='delete' onClick={()=>{remove()}}>
   ❌
  </span>
)}

export default Delete;