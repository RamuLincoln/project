
import React, { useState } from 'react';
import Imageslider from './Imageslider';

const Homepage = () => {
//useState
    const [colour, setColour] = useState("#000000")

//function to create random number
    function randomColour(len){
        return Math.floor(Math.random()*len)
    }

//function to store value in hexcolour 
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
        <Imageslider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'}/>
    </div>

  )
}

export default Homepage