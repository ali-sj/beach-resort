import React, { createContext, useState, useEffect } from "react";
import items from "../data";
export const Roomcontext = React.createContext();

const Roomcontextprovider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
    const fetchData=()=>{
    let tempItems= items.map((item,index)=>{
        let id=item.sys.id
        let images=item.fields.images.map(image=>{return image.fields.file.url})
       let rooms={...item.fields,images,id}
       return rooms
      })

      return tempItems

    }

    useEffect(()=>{
      console.log('from context');
  let rooms=fetchData()
  let featuredRooms=rooms.filter((room)=>{return room.featured===true})
  setRooms(rooms)
  setFeaturedRooms(featuredRooms)
  setLoading(false)
  setSortedRooms(rooms)

    },[])
  
  const roomsHandler = (rooms) => {
    setRooms(rooms);
  };
  const roomsFeaturedHandler = (rooms) => {
    setFeaturedRooms(rooms);
  };

  return (
    <Roomcontext.Provider
      value={{
        rooms,
        featuredRooms,
        sortedRooms,
        loading,
        setfeatures: roomsFeaturedHandler,
        setrooms: roomsHandler,
      }}
    >
      {children}
    </Roomcontext.Provider>
  );
};

export default Roomcontextprovider;
