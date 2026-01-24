import React from "react";
import "./Gallery.css";
import img1 from "../assets/img 1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img 3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images=[img1,img2,img3,img4,img5,img6];

function Gallery(){

    return(
        <div className="gallery">
            {images.map((img,index)=>(
                <img key={index} src={img} alt={`Gallery-${index}`}/>
            ))}
    </div>
    );
    }
export default Gallery;