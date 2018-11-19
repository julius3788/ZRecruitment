import  axios from 'axios'

export const addCounting = (countings) => ({
    type: 'ADD_COUNTINGS',
    payload:{
        countings:countings    
    }
})

export const fetchCountings = () => {
    return (dispatch) => {
        axios.get('http://demo8426041.mockable.io/')
        .then(response=>{
            const countings = response.data.counting
            console.log('get the result')
            dispatch({
                type: 'ADD_COUNTINGS',
                payload:{
                    countings:countings
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