const initialState = {
    mentData:[
        {
            name:"Jawwad Khan",
            img1:"Pictures/logo192.png",
            age:"21",
            mob:"8600396677",
            add:"Nanded",
        },
        {
            name:"JK",
            img1:"Pictures/logo192.png",
            age:"20",
            mob:"9284847742",
            add:"Ardhapur",
        },
        
    ]
}

export const mentReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_MENTOR":
            return {...state, mentData: [action.mentData, ...state.mentData]};
            default:
                return state;
    }
}