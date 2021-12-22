import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Scientist from "../scientist/Scientist";
import "./Scientists.css";

const Scientists = () => {
  const [scientists, setScientists] = useState([]); //state used for showing on screen
  const [hired,setHired]=useState([]);//state passes to cart
  /* getting data from json file */
  useEffect(() => {
    fetch("./data.JSON")
      .then(res => res.json())
      .then(data => setScientists(data));
  }, []);
  /* after clicking contact button */
  const handleHiring=(key,name,salary,influence,event)=>{
    /* user shouldn't select a scientist twice */
    event.target.setAttribute("disabled", true);

    if (hired.length <= 10) {
      setHired(prevState=> {
        return [...prevState,{key,name,influence,salary:parseInt(salary)}];
      })
    }
    else {
      return;
    }
  };
  return (
    <>
      <hr />
      <div className="row w-75 mx-3">
        {
        scientists.map(scientist => (
        <Scientist key={scientist.key} scientist={scientist} handleHiring={handleHiring}/>
      ))
      }
      </div>   
      <Cart hired={hired}/>
    </>

  
  );
};

export default Scientists;
