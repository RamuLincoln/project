
import React, { useState } from 'react'

const Homepage = () => {
    const [colour, setColour] = useState("#000000")

    function randomColour(len){
        return Math.floor(Math.random()*len)
    }
    function handleColour(colour) {
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColour = "#";

        for(let i=0;i<6;i++){
            hexColour += hex[randomColour(hex.length)]
        }
        setColour(hexColour)    
    }

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: colour,
    }}>
        <button onClick={() => handleColour(colour)}>Colour</button>
    </div>

  )
}

export default Homepage