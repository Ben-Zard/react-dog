import React from 'react'
import axios from "axios";
import {useState,useEffect} from 'react';

const DogsCard = () => {
const [dogs,setDog] = useState([]);

useEffect (()=>{
axios.get("https://dog.ceo/api/breeds/image/random").then((res)=>{
       const data = res.data;
       setDog(data);
});
}, []);

const { id: todoId, userId, title, completed } = dogs;
    return (
    
    <div>
 {dogs.map((dog)=> dog)}
    </div>
  )
}

export default DogsCard