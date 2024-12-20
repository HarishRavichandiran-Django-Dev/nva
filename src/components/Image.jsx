import React from "react";
import down from '../assets/image2.jpg'

const ImageComponent = () => {
    return (
        <div className="text-center">
            <img src={down} alt="this is the text describing the image" className="img-fluid rounded" style={{width:'100%',height:'auto'}} />
        </div>
    )

}

export default ImageComponent;