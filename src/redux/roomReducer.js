const initialState=[]
export const roomReducer=(state=initialState,{payload,type})=>{
    switch(type){
        case 'ALL-ROOM':
            return[...payload]
            
    }

    return state
}
const initial={}
export const selectedReducer=(state=initial,{type,payload})=>{
    switch(type){
        case 'SELECTED':
            return payload
    }
    return state
}
export const featuredRoomsReducer=(state=[],{payload,type})=>{
    switch(type){
        case 'FEATURED':
            return payload
    }
    return state
}
export const TestReducer=(state=[],{type,payload})=>{
    switch(type){
     case 'TEST':
         return payload
    }
    return state
}
export const SearchRoomReducer=(state=[],{type,payload})=>{
    switch(type){
        case 'SEARCH':
            return payload
    }
    return state

}
export const searchBoxReducer=(state=[],{type,payload})=>{
    switch(type){
        case 'SEARCH_ROOM':
            return payload
            
    }
    return state
}