import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction, searchBoxAction } from "../redux/actions";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [searchItem, setSearchItem] = useState("");
  const search=useSelector(state=>state.searchBox)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(searchBoxAction(searchItem))
  },[searchItem])
  console.log(search);
  return (
    <div className="search-container">
      <input
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
        value={searchItem}
        type="text"
        placeholder="search..."
        
      />
      <div className="searchbox">
        {search.map(room=>(<Link className="link" to={`/singlepages/${room.slug}`}>{ <p className="p_room">{room.name}</p>}</Link>))}
      </div>
    </div>
  );
};

export default SearchBox;
