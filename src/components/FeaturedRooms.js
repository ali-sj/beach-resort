import React,{useContext,useEffect} from 'react'
import Title from './Title'
import Roompa from './Roompa'
import { useSelector,useDispatch } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import { featuredRoomsAction } from '../redux/actions'
const FeaturedRooms = () => {
  const featuredRooms=useSelector(state=>state.featuredRooms)
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(featuredRoomsAction())
},[])
  return (
    <div>
    <Title title='featured room'/>

     <Row>
    {featuredRooms.map(room=>(<Col md={6} lg={4}><Roompa room={room}/></Col>))}
     </Row>
    </div>
  )
}

export default FeaturedRooms
