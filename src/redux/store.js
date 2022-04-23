import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
    roomReducer,
    selectedReducer,
    featuredRoomsReducer,
    TestReducer,
    SearchRoomReducer,
    searchBoxReducer
} from "./roomReducer";

const middleware = [thunk];
const initialState = { rooms: JSON.parse(localStorage.getItem("rooms")) };
const reducer = combineReducers({
    rooms: roomReducer,
    selectedRoom: selectedReducer,
    featuredRooms: featuredRoomsReducer,
    Test: TestReducer,
    search: SearchRoomReducer,
    searchBox:searchBoxReducer
});

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;