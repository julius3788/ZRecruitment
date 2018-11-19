const initialState = {
    inst1Data:"",   
}

const instReducer1 = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_INSTS1':
        return{
            inst1Data:action.payload.instructions1,          
        }

    default:
    return state
    }    
}

export default instReducer1