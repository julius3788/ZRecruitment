import  axios from 'axios'

export const addInsts = (instructions2) => ({
    type: 'ADD_INSTS2',
    payload:{
      
        instructions2:instructions2  }
})

export const fetchInsts2 = () => {
    return (dispatch) => {
        axios.get('http://demo8426041.mockable.io/')    
        .then(response=>{       
            console.log('get the result')
            dispatch({
                type: 'ADD_INSTS2',
                payload:{                                   
                    instructions2 : response.data.instruction2
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: 'REQ_USER_ERR',
                err: error.message
            })
         })    

    }
}