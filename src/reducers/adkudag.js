const initialState = {
    adkudagData:[]
      
}


const adkudagReducer = (state=initialState, action) =>{
switch (action.type){
    case 'ADD_ADKUDAGS':
        return{
            adkudagData:action.payload.adkudags,
        }

    default:
    return state
    }    
}

export default adkudagReducer