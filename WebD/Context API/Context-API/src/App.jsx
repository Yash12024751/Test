import React, { useState } from 'react'
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';

function App() {
  const [count,setcount]=useState(0);

  return (
    <div style={{border:"2px solid blue",margin:"3px",padding:"5px"}}>
      <h1>APP: {count}</h1>
      <button onClick={()=>setcount(count+1)}>ADD</button>
      <Comp1 setcount={setcount}/>
      <Comp2 setcount={setcount}/>
    </div>
  )
}

export default App