export const changeUser = (newUser) => {
    return {
        type: 'USER_CHANGE',
        payload:{
            newUser: newUser
        }
    }
}