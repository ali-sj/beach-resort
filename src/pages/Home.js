import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

import FeaturedRooms from "../components/FeaturedRooms";

import { useSelector, useDispatch } from "react-redux";
import { roomActions } from "../redux/actions";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomActions());
  }, []);

  return (
    <>
      <Hero hero="defaulthero">
                  

        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btnn-primary">
            our room
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
