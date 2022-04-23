import React,{useEffect} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Roompa= ({room,roomClass}) => {
    const {images,price,name,slug}=room


  return (
    <div className='card-container'>
         <Link  className='slug' to={`/singlepages/${slug}`}>
 <div className='con'>
   <Image className='image-room' src={images[0]}/> 
  <div className='price'>${price}</div>
  <p>{name}</p>
 </div>
  

     </Link> 
    </div>
  

  )
}

export default Roompa
