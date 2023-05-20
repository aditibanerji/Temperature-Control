
import React from 'react';
import { useState } from 'react';
import User from './User';


function App() {

  const[temp,setTemp]=useState(10);
  const[tempColor , setTempColor]=useState('cold');

  const increase=()=>{
    setTemp(temp+1);

    if(temp>=15)
    {
      setTempColor('hot');
    }
    else
    {
      setTempColor('cold');
    }
  };
  const decrease=()=>{
    setTemp(temp-1);

    if(temp>=15)
    {
      setTempColor('hot');
    }
    else
    {
      setTempColor('cold');
    }
  };
  
 
  return(
    

    <div className='App'>
      
      <div className='container'>
      <div className={`display ${tempColor}`}>
        <div className="temperature">
       
            {temp}<span>&#8451;</span>

        </div>

      </div>

      <div className='buttons'>

        <button onClick={()=>increase()}>+</button>
        <button onClick={()=>decrease()}>-</button>

      </div>

      </div>
    
    </div>
      
    

  );

}


export default App;
