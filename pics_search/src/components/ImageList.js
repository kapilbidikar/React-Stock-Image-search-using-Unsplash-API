import React from 'react';
import './ImageList.css'
import './style.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images =  props.images.map(image => <ImageCard style={{maxWidth:'100%',height:'auto'}}  key = {image.id} image = {image}/>)
    
    return <div className= "image-list">{images} </div>;
}

export default ImageList;