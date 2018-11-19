export const changeResult = (newResult) => {
    return {
        type: 'RESULT_CHANGE',
        payload:{
            newResult: newResult
        }
    }
}

export const addInsts = (result) => ({
    type: 'ADD_RESULT',
    payload:{      
        result:result  }
})