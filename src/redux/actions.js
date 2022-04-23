import items from "../data";
const fetchData = () => {
  let tempItems = items.map((item, index) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => {
      return image.fields.file.url;
    });
    let rooms = { ...item.fields, images, id };
    return rooms;
  });

  return tempItems;
};

let rooms = fetchData();
export const roomActions = () => (dispatch, getstate) => {
  dispatch({
    type: "ALL-ROOM",
    payload: rooms,
  });
  localStorage.setItem("rooms", JSON.stringify(getstate().rooms));
};

export const selectedRoomAction = (slug) => {
  let selected = rooms.find((room) => {
    return room.slug === slug;
  });

  return {
    type: "SELECTED",
    payload: selected ? selected : {},
  };
};
export const featuredRoomsAction = () => {
  let featuredRooms = rooms.filter((room) => {
    return room.featured === true;
  });
  return {
    type: "FEATURED",
    payload: featuredRooms,
  };
};
export const TestAction = () => {
  return {
    type: "TEST",
    payload: [1, 2, 3],
  };
};
export const SearchAction = (data) => {
  let searchedRoom = rooms.filter((room) => {
    return (
      room.name === data.type &&
      room.breakfast === data.breakfast &&
      room.price < data.price &&
      room.pets === data.pets
    );
  });

  if (data.type === "all") {
    return {
      type: "SEARCH",
      payload: rooms.filter((room) => {
        return (
          room.price < data.price &&
          room.breakfast === data.breakfast &&
          room.pets === data.pets
        );
      }),
    };
  }

  return {
    payload: searchedRoom,
    type: "SEARCH",
  };
};
export const searchBoxAction = (searchItem) => (dispatch) => {
  const searchsFilter = rooms.filter((room) => room.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase().trim()));

  dispatch({
    type: "SEARCH_ROOM",
    payload: searchItem === "" ? [] : searchsFilter
  });
};
