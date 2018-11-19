const initialState = {
    countingData:[]
    
}

const countingReducer = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_COUNTINGS':
        return{
            countingData:action.payload.countings,
        }

    default:
    return state
    }    
}

export default countingReducer