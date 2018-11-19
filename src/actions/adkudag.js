import  axios from 'axios'

export const addAdkudags = (adkudags) => ({
    type: 'ADD_ADKUDAG',
    payload:{
        adkudags:adkudags    }
})

export const fetchAdkudags = () => {
    return (dispatch) => {
        axios.get('http://demo8426041.mockable.io/')   
        .then(response=>{       
            console.log('get the result')
            dispatch({
                type: 'ADD_ADKUDAGS',
                payload:{                
                 adkudags : response.data.adkudag
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