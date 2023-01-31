import { useState } from "react";
const StateFull=()=>
{

    const [counter,setCounter]=useState(0)
    function manageClick()
    {
            setCounter(counter+1)
    }


   return (
          <div className="App">
               <h3>Hello React {counter}</h3>
               <button onClick={manageClick}>+</button>
          </div>
         );
}

export default StateFull