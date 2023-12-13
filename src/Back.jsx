import React from "react";
import Handson from "./App";

const Back=({value,toggle})=>{
    return(

        <>
         <h1>EMPOLYEE FEEDBACK DATA</h1>
 `     <div className='SecondContainer'>
 
        {value.map((item, index) => (
          <div key={index} className='data'>
            <h1 className='data2'> Name : {item.name} |</h1>
            <h1 className='data2'>Department: {item.department} |</h1>
            <h1 className='data2'>Rating: {item.rating}</h1>
          </div>
        ))}
      
      </div>
      <button className="backbtn" onClick={toggle}>Back</button>
        </>
    )
}

export default Back