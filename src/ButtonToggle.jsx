
import React, { useState } from "react";
import './App.css'
function ButtonToggle() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active)
  }

  return (
          <div className="card"  style={{ backgroundColor: active ? "	#f08080" : "	#90ee90" }}>
           <button className="btn" onClick={handleClick} >click me to toggle</button>    
           </div>
  )
}

export default ButtonToggle