import React,{useEffect,useContext,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import { useSelector,useDispatch } from 'react-redux';
import { selectedRoomAction } from '../redux/actions';
import Hero from '../components/Hero/Hero';
import { Image } from 'react-bootstrap';
import StyledHero from '../components/StyleHero';


const SingleRoom = () => {
  const{slug}=useParams()
  const selected=useSelector(state=>state.selectedRoom)
 const dispatch=useDispatch(selectedRoomAction)

useEffect(()=>{
  dispatch(selectedRoomAction(slug))
  console.log('g');
})


console.log(selected);
if(Object.keys(selected).length===0){
   return <>
   <p style={{textAlign:'center',fontSize:'2rem',fontWeight:'700',backgroundColor:'#af9a7d'}}>page not founded...</p>
   </>}

 const [mainImg,...defaultImg]=selected.images
 const{name,size,price,capacity,description,pets,breakfast,extras}=selected
 console.log(selected);

   return (
  
    <>
    <StyledHero img={mainImg}>
<Banner title={`${name} room`}>
  <Link to='/rooms' className='btnn-primary'>back to room</Link>
</Banner>
    </StyledHero>
    <div className='images-container'>
      {defaultImg.map(image=>{return<Image key={image} className='img' src={image}></Image> })}
    </div>
    <div className='single-room-info'>
      <img className='main-img' src={mainImg}/>
      <div className='info'>
      <p><span className='span'>name: </span>{name}</p>

        <p><span className='span'>size: </span>{size}</p>
        <p><span className='span'>price:</span>{price}</p>
        <p className='des'><span className='span '>description:</span>{description}</p>
        <p style={{marginTop:'-150px'}}><span className='span'>breackfast:</span>{`${breakfast}`}</p>
        <p><span className='span'>extras:</span>{extras}</p>
        <p><span className='span'>capacity:</span>{capacity}</p>




      </div>
    </div>
 
     </>
  )
}
 



export default SingleRoom
