import React, { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './imageslider.css'

export default function Imageslider({url,page = 1,limit = 1}) {

    const [image,setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    async function Images(getUrl){
        try {
            setLoding(true);

            const response = await fetch(getUrl);
            const data = await response.json();
            if(data){
                console.log(data)
                setImage(data.slice(0, limit));
                setLoding(false)
            }  
        }catch(e) {
            setError(e.message);
            setLoding(false);
        }        
    }
    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide -1);
    }
    function handleNext(){
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
    }
    useEffect(() => {
        if(url !== "") Images(url);
    },[url]);

    console.log(image);
    
    if(loading){
        return <div>Loading</div>
    }
    if(error !== null) {
        return <div>error</div>
    }
  return (
    <div className='container'>
        <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
        {
            image && image.length ? 
            image.map((item, index) => (
                <img key={item.id}
                alt={item.download_url}
                src={item.download_url}
                className={currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"}
                />
            ))
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>

        <span className="circle-indicators">
        {
            image && image.length ? 
            image.map((_, index) => (
                <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
            : null
        }
        </span>
    </div>
  )
}

 