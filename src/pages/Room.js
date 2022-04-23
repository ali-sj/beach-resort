import React, { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchAction } from "../redux/actions";
import Roompa from "../components/Roompa";
import { Row,Col } from "react-bootstrap";

const Room = () => {
  const rooms = useSelector((state) => state.rooms);

  const [price, setPrice] = useState(600);
  const [type, setType] = useState("all");
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  useEffect(() => {
    dispatch(SearchAction({ price, type, breakfast, pets }));
  }, [price, type, breakfast, pets]);
  console.log(search);

  return (
    <>
      <Hero hero="defaulthero">
        <Banner title="our rooms">
          <Link to="/" className="btnn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <div className=""></div>
      <div className="controls-container">
        <div className="column">
          <label>{`Room price${price}`}</label>
          <input type="range" min={0} max={600} value={price} onChange={(event)=>{setPrice(event.target.value)}}/>
        </div>
        <div className="column">
          <label>RoomType</label>
          <select value={type} onChange={(event)=>{setType(event.target.value)}}>
            <option>all</option>
            {rooms.map(room=>{return <option>{room.name}</option>})}
          </select>
       
        </div>
        <div className="column">
          <label>breakfast</label>
          <input onChange={()=>{setBreakfast(!breakfast)}} checked={breakfast} type='checkbox'/>
          <label>pets</label>
          <input onChange={()=>{setPets(!pets)}} checked={pets} type='checkbox'/>
        </div>
      </div>
      <Row className="Row-container">
  {search.length===0?<h3 className='error'>no room match your search parameters</h3>:
 
search.map(room=>{return <Col xs={12} md={6} lg={4}>
<Link to={`/singlepages/${room.slug}`}>
  <div className="room-co">
  <button className="btnn-primary te">Feature Room</button>
      <div className="pricee">${room.price}</div>
      <img className="img-filter" src={room.images[0]}/>
 
   
  </div>
  </Link> 
</Col>
  return  
})
}
      </Row>
    </>
  );
};

export default Room;
