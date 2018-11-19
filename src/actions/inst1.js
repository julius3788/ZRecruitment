import  axios from 'axios'

export const addInsts = (instructions1) => ({
    type: 'ADD_INSTS1',
    payload:{
        instructions1:instructions1
         }
})

export const fetchInsts1 = () => {
    return (dispatch) => {
        axios.get('http://demo8426041.mockable.io/')    
        .then(response=>{       
            console.log('get the result')
            dispatch({
                type: 'ADD_INSTS1',
                payload:{                
                    instructions1 : response.data.instruction1                 
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