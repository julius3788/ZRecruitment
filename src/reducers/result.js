const initialState = {
    ResultData: 0,
}

const resultReducer = (state=initialState, action) =>{
switch (action.type){
    case 'RESULT_CHANGE':
        return{
            resultData:action.payload.newResult,
            
        }
            
    case 'ADD_RESULT':
    return{
        resultData:action.payload.Result,
    }   

    default:
    return state
    }    
}

export default resultReducer