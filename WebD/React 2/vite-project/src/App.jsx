import React, { useState,useEffect } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function App() {
  // const [count, setCount]=useState(0); 
  // const[count2,setCount2]=useState(0);
  const{var1, setvar1}=useState(true);

 
  
// useEffect(function(){
// alert("comp1 is called")
// },[Comp1])


// useEffect(function(){
// alert("comp2 is called")
// },[Comp2])


// alert("app is render")
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button> 
      <h1>{count2}</h1>

      <button onClick={() => setCount2(count2 + 1)}>ADD</button>  */}
      <h1>Comp1</h1>
      {var1 ?<Comp1/>:<Comp2/>}
      <button onClick={()=> setvar1(!var1)}>Toggle</button>
      
    </>
  
  );
}

export default App;
