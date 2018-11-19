const initialState = {
    UserData:"",
}

const userReducer = (state=initialState, action) =>{
switch (action.type){
    case 'USER_CHANGE':
        return{
           
            UserData:action.payload.newUser,
        }

    default:
    return state
    }    
}

export default userReducer