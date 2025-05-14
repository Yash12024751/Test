import React,{useState,useEffect} from 'react'

function Comp2() {
   useEffect(function(){
      // alert("Useeffect is called")
      // useeffect kye jo fn hote h vo return bhi fn krte h...
      alert("mounted")
      return (function(){
        alert("unmounted")
      })
    
    },[])
    return (
        <>
            <h1>Comp2</h1>
            <button onClick={()=> setvar1(!var1)}>Toggle</button>
        </>
    )
}

export default Comp2