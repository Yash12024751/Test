import React,{useState,useEffect} from 'react'

function Comp1() {
 useEffect(function(){
    // alert("Useeffect is called")
    // useeffect kye jo fn hote h vo return bhi fn krte h...
    alert("mounted")
    return (function(){
      alert("unmounted")
    })
  },[])
}

export default Comp1