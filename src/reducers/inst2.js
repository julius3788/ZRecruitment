const initialState = {
    inst2Data:"",
}

const instReducer2 = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_INSTS2':
        return{
           
            inst2Data:action.payload.instructions2,
        }

    default:
    return state
    }    
}

export default instReducer2