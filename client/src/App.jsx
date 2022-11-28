import React ,{useEffect , useState} from 'react';
import axios from 'axios';
import List from './components/Events.jsx';


var App = ()=>  {
  
const [data,setData] = useState ([])
 
useEffect (()=>{
    get()
},[])

let get = () => {
    axios.get("http://127.0.0.1:3000/events/all").then (res =>{
        setData(res.data)
        console.log(res.data);
    })
}
    return (<div>

      <h1>Item List</h1>
      <List data={data}/>
    </div>)
  
}
export default App; 